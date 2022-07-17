(self.webpackChunk=self.webpackChunk||[]).push([[47111],{3905:(e,n,t)=>{"use strict";t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>y,useMDXComponents:()=>c,withMDXComponents:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),u=function(e){return function(n){var t=c(n.components);return r.createElement(e,i({},n,{components:t}))}},c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),p=a,f=u["".concat(o,".").concat(p)]||u[p]||m[p]||i;return t?r.createElement(f,l(l({ref:n},d),{},{components:t})):r.createElement(f,l({ref:n},d))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},36742:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>m});var r=t(79973),a=t(67294),i=t(73727),o=t(52263),l=t(13919),s=t(10412),d=(0,a.createContext)({collectLink:function(){}}),u=t(44996),c=t(18780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const m=function(e){var n,t,m=e.isNavLink,f=e.to,y=e.href,h=e.activeClassName,v=e.isActive,P=e["data-noBrokenLinkCheck"],x=e.autoAddBaseUrl,w=void 0===x||x,b=(0,r.Z)(e,p),E=(0,o.default)().siteConfig,g=E.trailingSlash,C=E.baseUrl,N=(0,u.useBaseUrlUtils)().withBaseUrl,k=(0,a.useContext)(d),O=f||y,R=(0,l.Z)(O),T=null==O?void 0:O.replace("pathname://",""),j=void 0!==T?(t=T,w&&function(e){return e.startsWith("/")}(t)?N(t):t):void 0;j&&R&&(j=(0,c.applyTrailingSlash)(j,{trailingSlash:g,baseUrl:C}));var L=(0,a.useRef)(!1),A=m?i.OL:i.rU,U=s.default.canUseIntersectionObserver,B=(0,a.useRef)();(0,a.useEffect)((function(){return!U&&R&&null!=j&&window.docusaurus.prefetch(j),function(){U&&B.current&&B.current.disconnect()}}),[B,j,U,R]);var I=null!==(n=null==j?void 0:j.startsWith("#"))&&void 0!==n&&n,q=!j||!R||I;return j&&R&&!I&&!P&&k.collectLink(j),q?a.createElement("a",Object.assign({href:j},O&&!R&&{target:"_blank",rel:"noopener noreferrer"},b)):a.createElement(A,Object.assign({},b,{onMouseEnter:function(){L.current||null==j||(window.docusaurus.preload(j),L.current=!0)},innerRef:function(e){var n,t;U&&e&&R&&(n=e,t=function(){null!=j&&window.docusaurus.prefetch(j)},B.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.current.unobserve(n),B.current.disconnect(),t())}))})),B.current.observe(n))},to:j||""},m&&{isActive:v,activeClassName:h}))}},13919:(e,n,t)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,{b:()=>r,Z:()=>a})},44996:(e,n,t)=>{"use strict";t.r(n),t.d(n,{useBaseUrlUtils:()=>i,default:()=>o});var r=t(52263),a=t(13919);function i(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,d=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(l)return n+t;var u=t.startsWith(n)?t:n+t.replace(/^\//,"");return d?e+u:u}(i,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},8802:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===r?i:(a=i,t?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},18780:function(e,n,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var a=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=t(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(i).default}})},29964:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},68629:(e,n,t)=>{"use strict";t.d(n,{Z:()=>m});var r=t(36742),a=t(44256),i=t(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var n=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),n)}var s=function(){var e=i.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},u=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return i.createElement(l,null,i.createElement(d,null),i.createElement(s,null),i.createElement(u,null))},p=function(){return i.createElement(l,null,i.createElement(s,null),i.createElement(u,null))};const m=function(){return(0,a.fbContent)({internal:i.createElement(c,null),external:i.createElement(p,null)})}},11980:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>d,contentTitle:()=>u,metadata:()=>c,toc:()=>p,default:()=>f});var r=t(74034),a=t(79973),i=(t(67294),t(3905)),o=t(68629),l=t(44256),s=["components"],d={id:"use-entrypoint-loader",title:"useEntryPointLoader",slug:"/api-reference/use-entrypoint-loader/",description:"API reference for useEntryPointLoader, a React hook used to load entrypoints in response to user events",keywords:["render-as-you-fetch","entrypoint","preload"]},u=void 0,c={unversionedId:"api-reference/entrypoint-apis/use-entrypoint-loader",id:"api-reference/entrypoint-apis/use-entrypoint-loader",isDocsHomePage:!1,title:"useEntryPointLoader",description:"API reference for useEntryPointLoader, a React hook used to load entrypoints in response to user events",source:"@site/docs/api-reference/entrypoint-apis/use-entrypoint-loader.md",sourceDirName:"api-reference/entrypoint-apis",slug:"/api-reference/use-entrypoint-loader/",permalink:"/relay.ko.dev/docs/next/api-reference/use-entrypoint-loader/",editUrl:"https://seonjakim.github.io/relay.ko.dev/docs/api-reference/entrypoint-apis/use-entrypoint-loader.md",tags:[],version:"current",lastUpdatedBy:"\uae40\uc120\uc790",lastUpdatedAt:1654051011,formattedLastUpdatedAt:"6/1/2022",frontMatter:{id:"use-entrypoint-loader",title:"useEntryPointLoader",slug:"/api-reference/use-entrypoint-loader/",description:"API reference for useEntryPointLoader, a React hook used to load entrypoints in response to user events",keywords:["render-as-you-fetch","entrypoint","preload"]},sidebar:"docs",previous:{title:"useSubscription",permalink:"/relay.ko.dev/docs/next/api-reference/use-subscription/"},next:{title:"loadEntryPoint",permalink:"/relay.ko.dev/docs/next/api-reference/load-entrypoint/"}},p=[{value:"<code>useEntryPointLoader</code>",id:"useentrypointloader",children:[{value:"Arguments",id:"arguments",children:[],level:3},{value:"Flow Type Parameters",id:"flow-type-parameters",children:[],level:3},{value:"Return value",id:"return-value",children:[],level:3},{value:"Behavior",id:"behavior",children:[],level:3}],level:2}],m={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.mdx)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"useentrypointloader"},(0,i.mdx)("inlineCode",{parentName:"h2"},"useEntryPointLoader")),(0,i.mdx)("p",null,"Hook used to make it easy to safely work with EntryPoints, while avoiding data leaking into the Relay store. It will keep an EntryPoint reference in state, and dispose of it when it is no longer accessible via state."),(0,i.mdx)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("p",null,"For more information, see the ",(0,i.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/intern/wiki/Relay/Guides/entry-points/#loading-entrypoints"},"Loading EntryPoints")," guide.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"const {useEntryPointLoader, EntryPointContainer} = require('react-relay');\n\nconst ComponentEntryPoint = require('Component.entrypoint');\n\nfunction EntryPointRevealer(): React.MixedElement {\n  const environmentProvider = useMyEnvironmentProvider();\n  const [\n    entryPointReference,\n    loadEntryPoint,\n    disposeEntryPoint,\n  ] = useEntryPointLoader(environmentProvider, ComponentEntryPoint);\n\n  return (\n    <>\n      {\n        entryPointReference == null && (\n          <Button onClick={() => loadEntryPoint({})}>\n            Click to reveal the contents of the EntryPoint\n          </Button>\n        )\n      }\n      {\n        entryPointReference != null && (\n          <>\n            <Button onClick={disposeEntryPoint}>\n              Click to hide and dispose the EntryPoint.\n            </Button>\n            <Suspense fallback=\"Loading...\">\n              <EntryPointContainer\n                entryPointReference={entryPointReference}\n                props={{}}\n              />\n            </Suspense>\n          </>\n        )\n      }\n    </>\n  );\n}\n")),(0,i.mdx)("h3",{id:"arguments"},"Arguments"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"environmentProvider"),": an object with a ",(0,i.mdx)("inlineCode",{parentName:"li"},"getEnvironment")," method that returns a relay environment."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"EntryPoint"),": the EntryPoint, usually acquired by importing a ",(0,i.mdx)("inlineCode",{parentName:"li"},".entrypoint.js")," file.")),(0,i.mdx)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"TEntryPointParams"),": the type of the first argument to the ",(0,i.mdx)("inlineCode",{parentName:"li"},"getPreloadProps")," method of the EntryPoint."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"TPreloadedQueries"),": the type of the ",(0,i.mdx)("inlineCode",{parentName:"li"},"queries")," prop passed to the EntryPoint component."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"TPreloadedEntryPoints"),": the type of the ",(0,i.mdx)("inlineCode",{parentName:"li"},"entryPoints")," prop passed to the EntryPoint component."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"TRuntimeProps"),": the type of the ",(0,i.mdx)("inlineCode",{parentName:"li"},"props")," prop passed to ",(0,i.mdx)("inlineCode",{parentName:"li"},"EntryPointContainer"),". This object is passed down to the EntryPoint component, also as ",(0,i.mdx)("inlineCode",{parentName:"li"},"props"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"TExtraProps"),": if an EntryPoint's ",(0,i.mdx)("inlineCode",{parentName:"li"},"getPreloadProps")," method returns an object with an ",(0,i.mdx)("inlineCode",{parentName:"li"},"extraProps")," property, those extra props will be passed to the EntryPoint component as ",(0,i.mdx)("inlineCode",{parentName:"li"},"extraProps")," and have type ",(0,i.mdx)("inlineCode",{parentName:"li"},"TExtraProps"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"TEntryPointComponent"),": the type of the EntryPoint component."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"TEntryPoint"),": the type of the EntryPoint.")),(0,i.mdx)("h3",{id:"return-value"},"Return value"),(0,i.mdx)("p",null,"A tuple containing the following values:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"entryPointReference"),": the EntryPoint reference, or ",(0,i.mdx)("inlineCode",{parentName:"li"},"null"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"loadEntryPoint"),": a callback that, when executed, will load an EntryPoint, which will be accessible as ",(0,i.mdx)("inlineCode",{parentName:"li"},"entryPointReference"),". If a previous EntryPoint was loaded, it will dispose of it. It may throw an error if called during React's render phase.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Parameters",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"params: TEntryPointParams"),": the params passed to the EntryPoint's ",(0,i.mdx)("inlineCode",{parentName:"li"},"getPreloadProps")," method."))))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"disposeEntryPoint"),": a callback that, when executed, will set ",(0,i.mdx)("inlineCode",{parentName:"li"},"entryPointReference")," to ",(0,i.mdx)("inlineCode",{parentName:"li"},"null")," and call ",(0,i.mdx)("inlineCode",{parentName:"li"},".dispose()")," on it. It has type ",(0,i.mdx)("inlineCode",{parentName:"li"},"() => void"),". It should not be called during React's render phase.")),(0,i.mdx)("h3",{id:"behavior"},"Behavior"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"When the ",(0,i.mdx)("inlineCode",{parentName:"li"},"loadEntryPoint")," callback is called, each of an EntryPoint's associated queries (if it has any) will load their query data and query AST. Once both the query AST and the data are available, the data will be written to the store. This differs from the behavior of ",(0,i.mdx)("inlineCode",{parentName:"li"},"prepareEntryPoint_DEPRECATED"),", which would only write the data from an associated query to the store when that query was rendered with ",(0,i.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery"),"."),(0,i.mdx)("li",{parentName:"ul"},"The EntryPoint reference's associated query references will be retained by the Relay store, preventing it the data from being garbage collected. Once you call ",(0,i.mdx)("inlineCode",{parentName:"li"},".dispose()")," on the EntryPoint reference, the data from the associated queries is liable to be garbage collected."),(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},"loadEntryPoint")," callback may throw an error if it is called during React's render phase.")),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}f.isMDXComponent=!0}}]);