(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||s[d]||o;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(103)),i={title:"interpolate()",id:"interpolate"},l={unversionedId:"interpolate",id:"interpolate",isDocsHomePage:!1,title:"interpolate()",description:"Allows you to map a value to another using a concise syntax.",source:"@site/docs/interpolate.md",slug:"/interpolate",permalink:"/docs/interpolate",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/interpolate.md",version:"current",sidebar:"someSidebar",previous:{title:"delayRender() and continueRender()",permalink:"/docs/delay-render"},next:{title:"registerRoot()",permalink:"/docs/register-root"}},p=[{value:"Example",id:"example",children:[]},{value:"Params",id:"params",children:[]},{value:"Options",id:"options",children:[{value:"extrapolateLeft",id:"extrapolateleft",children:[]},{value:"extrapolateRight",id:"extrapolateright",children:[]},{value:"easing",id:"easing",children:[]}]}],c={toc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Allows you to map a value to another using a concise syntax."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {useCurrentFrame, interpolate} from 'remotion'\n\nconst frame = useCurrentFrame() // 10\nconst opacity = interpolate(input, [0, 20], [0, 1]) // 0.5\n")),Object(o.b)("h2",{id:"params"},"Params"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The input value."),Object(o.b)("li",{parentName:"ol"},"The range of values that you expect the input to assume."),Object(o.b)("li",{parentName:"ol"},"The range of output values that you want the input to map to."),Object(o.b)("li",{parentName:"ol"},"Options object.")),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"extrapolateleft"},"extrapolateLeft"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Default"),": ",Object(o.b)("inlineCode",{parentName:"p"},"extend")),Object(o.b)("p",null,"What should happen if the input value is outside left the input range:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"extend"),": Interpolate nonetheless, even if outside output range."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"clamp"),": Return the closest value inside the range instead"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"identity"),": Return the input value instead.")),Object(o.b)("h3",{id:"extrapolateright"},"extrapolateRight"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Default"),": ",Object(o.b)("inlineCode",{parentName:"p"},"extend")),Object(o.b)("p",null,"Same as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#extrapolateleft"}),"extrapolateLeft"),", except for values outside right the input range."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"interpolate(1.5, [0, 1], [0, 2], {extrapolateRight: 'extend'}) // 3\ninterpolate(1.5, [0, 1], [0, 2], {extrapolateRight: 'clamp'}) // 2\ninterpolate(1.5, [0, 1], [0, 2], {extrapolateRight: 'identity'}) // 1.5\n")),Object(o.b)("h3",{id:"easing"},"easing"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Default"),": ",Object(o.b)("inlineCode",{parentName:"p"},"(x) => x")),Object(o.b)("p",null,"Function which allows you to customize the input, for example to apply a certain easing function.\nBy default, the input is left unmodified, resulting in a pure linear interpolation."))}u.isMDXComponent=!0}}]);