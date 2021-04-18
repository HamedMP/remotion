(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{112:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var i=a(3),n=a(7),o=(a(0),a(150)),r={slug:"2-0",title:"Remotion 2.0",author:"Jonny Burger",author_title:"Indie Hacker",author_url:"https://github.com/JonnyBurger",author_image_url:"https://avatars2.githubusercontent.com/u/1629785?s=460&u=12eb94da6070d00fc924761ce06e3a428d01b7e9&v=4"},l={permalink:"/blog/2-0",editUrl:"https://github.com/Jonnyburger/remotion/edit/main/packages/docs/blog/blog/2021-04-15-remotion-2-0.md",source:"@site/blog/2021-04-15-remotion-2-0.md",description:"This is our biggest and best release so far - today we are unloading a lot of awesome, highly requested features!",date:"2021-04-15T00:00:00.000Z",tags:[],title:"Remotion 2.0",readingTime:6.89,truncated:!1,nextItem:{title:"Announcing pricing for company licenses",permalink:"/blog/company-licenses"}},c=[{value:"Audio support",id:"audio-support",children:[]},{value:"Audio visualization",id:"audio-visualization",children:[]},{value:"Export as MP3, AAC, WAV",id:"export-as-mp3-aac-wav",children:[]},{value:"<code>@remotion/media-utils</code> package",id:"remotionmedia-utils-package",children:[]},{value:"Rich Timeline (experimental)",id:"rich-timeline-experimental",children:[]},{value:"ESBuild loader",id:"esbuild-loader",children:[]},{value:"Webpack caching",id:"webpack-caching",children:[]},{value:"Partial video rendering + Stills",id:"partial-video-rendering--stills",children:[]},{value:"<code>@remotion/gif</code> component",id:"remotiongif-component",children:[]},{value:"Resizable editor panels",id:"resizable-editor-panels",children:[]},{value:"interpolate()",id:"interpolate",children:[]},{value:"170+ tests added",id:"170-tests-added",children:[]},{value:"<code>&lt;Video/&gt;</code> and <code>&lt;Audio/&gt;</code> have <code>startFrom</code> and <code>endAt</code> props",id:"video-and-audio-have-startfrom-and-endat-props",children:[]},{value:"Fixed: Frame seeking",id:"fixed-frame-seeking",children:[]},{value:"Fixed: Timeouts while importing large videos",id:"fixed-timeouts-while-importing-large-videos",children:[]},{value:"Breaking changes and upgrade",id:"breaking-changes-and-upgrade",children:[]},{value:"The future",id:"the-future",children:[]}],s={toc:c};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is our biggest and best release so far - today we are unloading a lot of awesome, highly requested features!"),Object(o.b)("h2",{id:"audio-support"},"Audio support"),Object(o.b)("div",null,Object(o.b)("video",{width:"100%",height:"100%",controls:!0,playsinline:!0,autoplay:"true",muted:!0,loop:!0},Object(o.b)("source",{src:"/img/audio.mp4",type:"video/mp4"}))),Object(o.b)("p",null,"We are happy to ship audio support with a flexible API!"),Object(o.b)("p",null,"You can ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/using-audio"}),"import one or multiple audio tracks into your project, cut, trim and align them in your composition"),". The volume can be controlled for the entirety of a track, or you can control it frame by frame to create fade effects and much more. Apply your React mindset - Remotion doesn't care how you render the audio tag, just that it's there. The mechanic of how we tell FFMPEG to mix the audio just like you hear it in the browser preview is really complex and was challenging to build - we are very proud of the outcome!"),Object(o.b)("h2",{id:"audio-visualization"},"Audio visualization"),Object(o.b)("p",null,"With newly introduced audio visualization APIs, you can make your visuals react to the frequency of the audio."),Object(o.b)("p",null,"What you need are the new ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/get-audio-data"}),Object(o.b)("inlineCode",{parentName:"a"},"getAudioData()"))," and ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/visualize-audio"}),Object(o.b)("inlineCode",{parentName:"a"},"visualizeAudio()"))," APIs that have been published ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/blog/#remotionmedia-utils-package"}),"in it's own package"),"."),Object(o.b)("p",null,"Read more about ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/audio-visualization"}),"audio visualization")," in the docs or ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://twitter.com/JNYBGR/status/1378444074634592262"}),"watch a sample video")," (the source can be found ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/yuta0801/remotion/blob/1103092f4902fb11f41877a05398dab6ce7203e7/packages/example/src/AudioVisualization/index.tsx"}),"here"),")."),Object(o.b)("h2",{id:"export-as-mp3-aac-wav"},"Export as MP3, AAC, WAV"),Object(o.b)("p",null,"You can now also completely omit the video from the output and only emit an audio file. Yes, Remotion can also be used as an audio editing program! Pass ",Object(o.b)("inlineCode",{parentName:"p"},"mp3"),", ",Object(o.b)("inlineCode",{parentName:"p"},"aac")," or ",Object(o.b)("inlineCode",{parentName:"p"},"wav")," as a codec ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/cli#flags"}),"using the ",Object(o.b)("inlineCode",{parentName:"a"},"--codec")," flag")," or ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/config#setcodec"}),"in your config file"),"."),Object(o.b)("h2",{id:"remotionmedia-utils-package"},Object(o.b)("inlineCode",{parentName:"h2"},"@remotion/media-utils")," package"),Object(o.b)("div",null,Object(o.b)("video",{width:"100%",height:"100%",controls:!0,playsinline:!0,autoplay:"true",muted:!0,loop:!0},Object(o.b)("source",{src:"/img/mediautils.mp4",type:"video/mp4"}))),Object(o.b)("p",null,"This is a new helper package which includes functions useful for dealing with audio. Besides audio visualization, you can also for example measure the duration of an audio or video source, which is really useful for making a composition duration dynamic. The functions included are ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/get-audio-data"}),Object(o.b)("inlineCode",{parentName:"a"},"getAudioData()")),", ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/get-audio-duration"}),Object(o.b)("inlineCode",{parentName:"a"},"getAudioDuration()")),", ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/get-video-metadata"}),Object(o.b)("inlineCode",{parentName:"a"},"getVideoMetadata()")),", ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/get-waveform-portion"}),Object(o.b)("inlineCode",{parentName:"a"},"getWaveformPortion()")),", ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/visualize-audio"}),Object(o.b)("inlineCode",{parentName:"a"},"visualizeAudio()"))," and ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/use-audio-data"}),Object(o.b)("inlineCode",{parentName:"a"},"useAudioData()")),"."),Object(o.b)("p",null,"All of them except the last one are completely independent from the ideas of Remotion, so they might be a great fit for your other non-Remotion projects as well! This package is MIT-licensed, so you everybody can use it without obtaining a company license."),Object(o.b)("h2",{id:"rich-timeline-experimental"},"Rich Timeline (experimental)"),Object(o.b)("p",null,"With the normal timeline, you don't see the full picture of all the media that you have placed in your composition. The reason is that the visualization you see is based on what's currently rendered at the position of your playhead."),Object(o.b)("p",null,"Introducing a new timeline mode: The ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/timeline"}),Object(o.b)("strong",{parentName:"a"},"rich timeline"))," will render additional frames other than the current one to gather enough information to visualize a full timeline.\nSequences which are normally not rendered because the playback head is not within the time range of the sequence, will appear because Remotion is doing an additional render at a time where the sequence is visible."),Object(o.b)("img",{src:"/img/timeline.png"}),Object(o.b)("p",null,"By default the ",Object(o.b)("strong",{parentName:"p"},"rich timeline")," feature is disabled, but will be enabled by default if the feedback is good. You may switch between the rich timeline and simple timeline by clicking the icon with the three lines. Try it out and let us know what you think!"),Object(o.b)("img",{src:"/img/timeline-toggle.png"}),Object(o.b)("h2",{id:"esbuild-loader"},"ESBuild loader"),Object(o.b)("div",null,Object(o.b)("video",{width:"100%",height:"100%",controls:!0,playsinline:!0,autoplay:"true",muted:!0,loop:!0},Object(o.b)("source",{src:"/img/esbuild.mp4",type:"video/mp4"}))),Object(o.b)("p",null,"The traditional transpilation of Javascript and Typescript using ",Object(o.b)("inlineCode",{parentName:"p"},"babel-loader")," has been replaced by the faster ",Object(o.b)("inlineCode",{parentName:"p"},"esbuild-loader")," by default."),Object(o.b)("p",null,"This will speed up bundling by a lot - hopefully you won't notice any other differences! If you for some reason need to go back to the previous behavior, you may override the Webpack config - ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/legacy-babel"}),"we are releasing a helper that makes it easy"),"."),Object(o.b)("div",null,Object(o.b)("video",{width:"100%",height:"100%",controls:!0,playsinline:!0,autoplay:"true",muted:!0,loop:!0},Object(o.b)("source",{src:"/img/esbuild-loader.webm",type:"video/webm"}))),Object(o.b)("h2",{id:"webpack-caching"},"Webpack caching"),Object(o.b)("p",null,"Even though transpilation is done using ESBuild now, Webpack is still being used for bundling. We rely on Webpack features such as Hot Module Replacement, asset importing, it's strong loader ecosystem and now it's caching features."),Object(o.b)("p",null,"When you run ",Object(o.b)("inlineCode",{parentName:"p"},"npm run build")," for the first time, you will get a message that a cache is building. From the second time on, bundling will be much faster, even if you change your code. You shouldn't have to ever do it, but you can ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/config#setcachingenabled"}),"opt out of caching"),"."),Object(o.b)("h2",{id:"partial-video-rendering--stills"},"Partial video rendering + Stills"),Object(o.b)("p",null,"Want to render partial video or a still for thumbnail? You can do that with Remotion 2.0. We introduced a new CLI flag ",Object(o.b)("inlineCode",{parentName:"p"},"--frames")," to render a subset or a still of a video."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"--frames=0-9")," (To select the first 10 frames) or ",Object(o.b)("inlineCode",{parentName:"p"},"--frames=50")," (To render a still of the 51st frame)."),Object(o.b)("p",null,"Learn more about the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/config#setframerange"}),Object(o.b)("inlineCode",{parentName:"a"},"--frames"))," CLI option."),Object(o.b)("h2",{id:"remotiongif-component"},Object(o.b)("inlineCode",{parentName:"h2"},"@remotion/gif")," component"),Object(o.b)("div",null,Object(o.b)("video",{width:"100%",height:"100%",controls:!0,playsinline:!0,autoplay:"true",muted:!0,loop:!0},Object(o.b)("source",{src:"/img/gif.mp4",type:"video/mp4"}))),Object(o.b)("p",null,"A new GIF component released in the ",Object(o.b)("inlineCode",{parentName:"p"},"@remotion/gif")," package is now available. The ",Object(o.b)("inlineCode",{parentName:"p"},"<Gif />")," component allows to load a local or remote GIF and synchronizes it with Remotions ",Object(o.b)("inlineCode",{parentName:"p"},"useCurrentFrame()"),". For that it parses the GIF using WebAssembly - basically it's really cool tech! Thanks a lot to ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/jeetiss"}),"@jeetiss")," for contributing this new component."),Object(o.b)("p",null,Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/gif"}),"Learn more about the GIF component here"),"."),Object(o.b)("h2",{id:"resizable-editor-panels"},"Resizable editor panels"),Object(o.b)("div",null,Object(o.b)("video",{width:"100%",height:"100%",controls:!0,playsinline:!0,autoplay:"true",muted:!0,loop:!0},Object(o.b)("source",{src:"/img/resizeable.mp4",type:"video/mp4"}))),Object(o.b)("p",null,"In the editor, you can now resize the timeline as well as the left sidebar. Thanks a lot to ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/arthurdenner"}),"Arthur Denner")," for this awesome contribution!"),Object(o.b)("h2",{id:"interpolate"},"interpolate()"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"interpolate()")," now supports arrays with lengths bigger than 2. Really useful for a lot of scenarios - for example you can create a combined fade in/fade out transition with one line."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-tsx"}),"const opacity = interpolate(frame, [0, 10, durationInFrames - 10, durationInFrames], [0, 1, 1, 0])\n")),Object(o.b)("h2",{id:"170-tests-added"},"170+ tests added"),Object(o.b)("div",null,Object(o.b)("video",{width:"100%",height:"100%",controls:!0,playsinline:!0,autoplay:"true",muted:!0,loop:!0},Object(o.b)("source",{src:"/img/tests.mp4",type:"video/mp4"}))),Object(o.b)("p",null,"While not strictly a new feature, this is definitely worth mentioning."),Object(o.b)("p",null,Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/calvin-f"}),"Calvin Falter"),", ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/j0nezz"}),"Jonas Brunner")," and ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/dydent"}),"Tobias Boner")," took Remotion as their project for their university seminar and contributed over 100 tests, strengthening the code and ironing out edge cases."),Object(o.b)("p",null,Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/cnnrhill"}),"@cnnr")," contributed a really cool end-to-end test that tests the video seeking of Remotion and makes sure it is frame-accurate by matching the colors in each frame."),Object(o.b)("p",null,"The remaining added tests are testing the tricky parts of audio rendering. Thanks to test-driven development, we've been able to catch regressions and ship really solid audio support."),Object(o.b)("p",null,"The bottom line: In Remotion 1.5.4 we had total 43 tests, in Remotion 2.0 we added a total of 174 tests to come out at a total of 217."),Object(o.b)("h2",{id:"video-and-audio-have-startfrom-and-endat-props"},Object(o.b)("inlineCode",{parentName:"h2"},"<Video/>")," and ",Object(o.b)("inlineCode",{parentName:"h2"},"<Audio/>")," have ",Object(o.b)("inlineCode",{parentName:"h2"},"startFrom")," and ",Object(o.b)("inlineCode",{parentName:"h2"},"endAt")," props"),Object(o.b)("p",null,"These new props make it easier to cut the start or the end of the video. This is implemented using sequences, which was also possible before, but this is a convienient shorthand."),Object(o.b)("h2",{id:"fixed-frame-seeking"},"Fixed: Frame seeking"),Object(o.b)("p",null,"In Remotion 1.x, a ",Object(o.b)("inlineCode",{parentName:"p"},"<Video/>")," would not always perfectly synchronize with Remotions time during render. This is now fixed and validated by tests that scan the color of the output frames - ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/issues/200"}),"however not in the most efficient way"),". Help on improving it further is still welcome."),Object(o.b)("h2",{id:"fixed-timeouts-while-importing-large-videos"},"Fixed: Timeouts while importing large videos"),Object(o.b)("p",null,"Importing files into your webpack bundle that were of significant size (the problems started at around 40MB) led to slow renders and timeouts. This is now fixed by swapping out dependencies and making sure the whole stack supports the HTTP range header well. Now if you seek a video, only the necessary parts will be loaded from the filesystem rather than the whole file being read."),Object(o.b)("h2",{id:"breaking-changes-and-upgrade"},"Breaking changes and upgrade"),Object(o.b)("p",null,"We've taken this opportunity of a major release to introduce some breaking changes that we think are beneficial for an awesome future of Remotion. Please take a moment to read through the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/2-0-migration"}),"2.0 Migration guide")," and see if you are affected."),Object(o.b)("h2",{id:"the-future"},"The future"),Object(o.b)("p",null,"Most of the core functionality for making videos in React is now implemented.\nThis gives us time to focus on improving all the areas around it - we are talking better documentation, developer experience, examples, abstractions on top or Remotion, improving speed and reliability of Remotion."),Object(o.b)("p",null,"Furthermore, we want to provide a way to embed Remotion compositions in traditional web apps and to make server-side rendering easier - stay tuned!"))}d.isMDXComponent=!0},150:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var i=a(0),n=a.n(i);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),d=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=d(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(a),p=i,h=b["".concat(r,".").concat(p)]||b[p]||u[p]||o;return a?n.a.createElement(h,l(l({ref:t},s),{},{components:a})):n.a.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);