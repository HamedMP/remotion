import type {RequestListener} from 'node:http';
import {URLSearchParams} from 'node:url';
import {downloadAsset} from './assets/download-and-map-assets-to-file';
import type {DownloadMap} from './assets/download-map';
import type {Compositor} from './compositor/compositor';
import {
	getIdealMaximumFrameCacheItems,
	startCompositor,
} from './compositor/compositor';
import type {LogLevel} from './log-level';
import {isEqualOrBelowLogLevel} from './log-level';
import {Log} from './logger';

export const extractUrlAndSourceFromUrl = (url: string) => {
	const parsed = new URL(url, 'http://localhost');
	const query = parsed.search;
	if (!query.trim()) {
		throw new Error('Expected query from ' + url);
	}

	const params = new URLSearchParams(query);
	const src = params.get('src');

	if (!src) {
		throw new Error('Did not pass `src` parameter');
	}

	const time = params.get('time');

	if (!time) {
		throw new Error('Did not get `time` parameter');
	}

	const transparent = params.get('transparent');

	return {
		src,
		time: parseFloat(time),
		transparent: transparent === 'true',
	};
};

const REQUEST_CLOSED_TOKEN = 'Request closed';

export const startOffthreadVideoServer = ({
	downloadMap,
	concurrency,
	logLevel,
	indent,
}: {
	downloadMap: DownloadMap;
	concurrency: number;
	logLevel: LogLevel;
	indent: boolean;
}): {
	listener: RequestListener;
	close: () => Promise<void>;
	compositor: Compositor;
} => {
	const compositor = startCompositor(
		'StartLongRunningProcess',
		{
			concurrency,
			maximum_frame_cache_items: getIdealMaximumFrameCacheItems(),
			verbose: isEqualOrBelowLogLevel(logLevel, 'verbose'),
		},
		logLevel,
		indent
	);

	return {
		close: () => {
			compositor.finishCommands();
			return compositor.waitForDone();
		},
		listener: (req, response) => {
			if (!req.url) {
				throw new Error('Request came in without URL');
			}

			if (!req.url.startsWith('/proxy')) {
				response.writeHead(404);
				response.end();
				return;
			}

			const {src, time, transparent} = extractUrlAndSourceFromUrl(req.url);
			response.setHeader('access-control-allow-origin', '*');
			if (transparent) {
				response.setHeader('content-type', `image/png`);
			} else {
				response.setHeader('content-type', `image/bmp`);
			}

			// Handling this case on Lambda:
			// https://support.google.com/chrome/a/answer/7679408?hl=en
			// Chrome sends Private Network Access preflights for subresources
			if (req.method === 'OPTIONS') {
				response.statusCode = 200;
				if (req.headers['access-control-request-private-network']) {
					response.setHeader('Access-Control-Allow-Private-Network', 'true');
				}

				response.end();
				return;
			}

			let closed = false;

			req.on('close', () => {
				closed = true;
			});

			let extractStart = Date.now();
			downloadAsset({src, downloadMap})
				.then((to) => {
					return new Promise<Buffer>((resolve, reject) => {
						if (closed) {
							reject(Error(REQUEST_CLOSED_TOKEN));
							return;
						}

						extractStart = Date.now();
						resolve(
							compositor.executeCommand('ExtractFrame', {
								src: to,
								original_src: src,
								time,
								transparent,
							})
						);
					});
				})
				.then((readable) => {
					return new Promise<void>((resolve, reject) => {
						if (closed) {
							reject(Error(REQUEST_CLOSED_TOKEN));
							return;
						}

						if (!readable) {
							reject(new Error('no readable from compositor'));
							return;
						}

						const extractEnd = Date.now();
						const timeToExtract = extractEnd - extractStart;

						if (timeToExtract > 1000) {
							Log.verbose(
								`Took ${timeToExtract}ms to extract frame from ${src} at ${time}`
							);
						}

						response.writeHead(200);
						response.write(readable, (err) => {
							response.end();
							if (err) {
								reject(err);
							} else {
								resolve();
							}
						});
					});
				})
				.catch((err) => {
					response.writeHead(500);
					response.end();

					// Any errors occurred due to the render being aborted don't need to be logged.
					if (err.message !== REQUEST_CLOSED_TOKEN) {
						downloadMap.emitter.dispatchError(err);
						console.log('Error occurred', err);
					}
				});
		},
		compositor,
	};
};

type DownloadEventPayload = {
	src: string;
};

type ProgressEventPayload = {
	percent: number | null;
	downloaded: number;
	totalSize: number | null;
	src: string;
};

type ErrorEventPayload = {
	error: Error;
};

type EventMap = {
	progress: ProgressEventPayload;
	error: ErrorEventPayload;
	download: DownloadEventPayload;
};

export type EventTypes = keyof EventMap;

export type CallbackListener<T extends EventTypes> = (data: {
	detail: EventMap[T];
}) => void;

type Listeners = {
	[EventType in EventTypes]: CallbackListener<EventType>[];
};

export class OffthreadVideoServerEmitter {
	listeners: Listeners = {
		error: [],
		progress: [],
		download: [],
	};

	addEventListener<Q extends EventTypes>(
		name: Q,
		callback: CallbackListener<Q>
	) {
		(this.listeners[name] as CallbackListener<Q>[]).push(callback);

		return () => {
			this.removeEventListener(name, callback);
		};
	}

	removeEventListener<Q extends EventTypes>(
		name: Q,
		callback: CallbackListener<Q>
	) {
		this.listeners[name] = this.listeners[name].filter(
			(l) => l !== callback
		) as Listeners[Q];
	}

	private dispatchEvent<T extends EventTypes>(
		dispatchName: T,
		context: EventMap[T]
	) {
		(this.listeners[dispatchName] as CallbackListener<T>[]).forEach(
			(callback) => {
				callback({detail: context});
			}
		);
	}

	dispatchError(error: Error) {
		this.dispatchEvent('error', {
			error,
		});
	}

	dispatchDownloadProgress(
		src: string,
		percent: number | null,
		downloaded: number,
		totalSize: number | null
	) {
		this.dispatchEvent('progress', {
			downloaded,
			percent,
			totalSize,
			src,
		});
	}

	dispatchDownload(src: string) {
		this.dispatchEvent('download', {
			src,
		});
	}
}
