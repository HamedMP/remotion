import {expect, test} from 'vitest';
import {
	deserializeJSONWithDate,
	serializeJSONWithDate,
} from '../editor/components/RenderModal/SchemaEditor/date-serialization';

test('date serialization', () => {
	const date = {data: new Date(), hi: 'there'};

	const {serializedString, customDateUsed} = serializeJSONWithDate(date, 2);
	expect(customDateUsed).toEqual(true);

	const deserialized = deserializeJSONWithDate(serializedString);

	expect(deserialized.data).toBeInstanceOf(Date);
});

test('No date used', () => {
	const {customDateUsed} = serializeJSONWithDate({a: 'hi'}, 2);
	expect(customDateUsed).toEqual(false);
});