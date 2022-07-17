(self.webpackChunk=self.webpackChunk||[]).push([[89105],{3905:(e,t,a)=>{"use strict";a.r(t),a.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>s,withMDXComponents:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){return function(t){var a=s(t.components);return n.createElement(e,o({},t,{components:a}))}},s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(a),p=r,f=u["".concat(i,".").concat(p)]||u[p]||m[p]||o;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},36742:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var n=a(79973),r=a(67294),o=a(73727),i=a(52263),l=a(13919),d=a(10412),c=(0,r.createContext)({collectLink:function(){}}),u=a(44996),s=a(18780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const m=function(e){var t,a,m=e.isNavLink,f=e.to,h=e.href,y=e.activeClassName,v=e.isActive,g=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,w=void 0===b||b,x=(0,n.Z)(e,p),k=(0,i.default)().siteConfig,N=k.trailingSlash,O=k.baseUrl,C=(0,u.useBaseUrlUtils)().withBaseUrl,E=(0,r.useContext)(c),P=f||h,U=(0,l.Z)(P),D=null==P?void 0:P.replace("pathname://",""),j=void 0!==D?(a=D,w&&function(e){return e.startsWith("/")}(a)?C(a):a):void 0;j&&U&&(j=(0,s.applyTrailingSlash)(j,{trailingSlash:N,baseUrl:O}));var L=(0,r.useRef)(!1),T=m?o.OL:o.rU,R=d.default.canUseIntersectionObserver,A=(0,r.useRef)();(0,r.useEffect)((function(){return!R&&U&&null!=j&&window.docusaurus.prefetch(j),function(){R&&A.current&&A.current.disconnect()}}),[A,j,R,U]);var I=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,M=!j||!U||I;return j&&U&&!I&&!g&&E.collectLink(j),M?r.createElement("a",Object.assign({href:j},P&&!U&&{target:"_blank",rel:"noopener noreferrer"},x)):r.createElement(T,Object.assign({},x,{onMouseEnter:function(){L.current||null==j||(window.docusaurus.preload(j),L.current=!0)},innerRef:function(e){var t,a;R&&e&&U&&(t=e,a=function(){null!=j&&window.docusaurus.prefetch(j)},A.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(A.current.unobserve(t),A.current.disconnect(),a())}))})),A.current.observe(t))},to:j||""},m&&{isActive:v,activeClassName:y}))}},13919:(e,t,a)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:()=>n,Z:()=>r})},44996:(e,t,a)=>{"use strict";a.r(t),a.d(t,{useBaseUrlUtils:()=>o,default:()=>i});var n=a(52263),r=a(13919);function o(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,l=void 0!==i&&i,d=o.absolute,c=void 0!==d&&d;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(l)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+u:u}(o,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===a)return e;var r,o=e.split(/[#?]/)[0],i="/"===o||o===n?o:(r=o,a?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(o,i)}},18780:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=a(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var o=a(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(o).default}})},29964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},68629:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(36742),r=a(44256),o=a(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),t)}var d=function(){var e=o.useState(!1),t=e[0],a=e[1],n=function(e){a(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},u=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},s=function(){return o.createElement(l,null,o.createElement(c,null),o.createElement(d,null),o.createElement(u,null))},p=function(){return o.createElement(l,null,o.createElement(d,null),o.createElement(u,null))};const m=function(){return(0,r.fbContent)({internal:o.createElement(s,null),external:o.createElement(p,null)})}},13445:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>c,contentTitle:()=>u,metadata:()=>s,toc:()=>p,default:()=>h});var n,r=a(74034),o=a(79973),i=(a(67294),a(3905)),l=a(68629),d=(a(44256),["components"]),c={id:"local-data-updates",title:"Local Data Updates",slug:"/guided-tour/updating-data/local-data-updates/",description:"Other APIs for modifying store data",keywords:["client-only","commitLocalUpdate","commitPayload"]},u=void 0,s={unversionedId:"guided-tour/updating-data/local-data-updates",id:"guided-tour/updating-data/local-data-updates",isDocsHomePage:!1,title:"Local Data Updates",description:"Other APIs for modifying store data",source:"@site/docs/guided-tour/updating-data/local-data-updates.md",sourceDirName:"guided-tour/updating-data",slug:"/guided-tour/updating-data/local-data-updates/",permalink:"/relay.ko.dev/docs/next/guided-tour/updating-data/local-data-updates/",editUrl:"https://seonjakim.github.io/relay.ko.dev/docs/guided-tour/updating-data/local-data-updates.md",tags:[],version:"current",lastUpdatedBy:"\uae40\uc120\uc790",lastUpdatedAt:1654051011,formattedLastUpdatedAt:"6/1/2022",frontMatter:{id:"local-data-updates",title:"Local Data Updates",slug:"/guided-tour/updating-data/local-data-updates/",description:"Other APIs for modifying store data",keywords:["client-only","commitLocalUpdate","commitPayload"]},sidebar:"docs",previous:{title:"Imperatively modifying store data (unsafe)",permalink:"/relay.ko.dev/docs/next/guided-tour/updating-data/imperatively-modifying-store-data-unsafe/"},next:{title:"Client-only data",permalink:"/relay.ko.dev/docs/next/guided-tour/updating-data/client-only-data/"}},p=[{value:"commitLocalUpdate",id:"commitlocalupdate",children:[],level:2},{value:"commitPayload",id:"commitpayload",children:[],level:2}],m=(n="FbLocalDataUpdatesFlow",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),f={toc:p};function h(e){var t=e.components,a=(0,o.Z)(e,d);return(0,i.mdx)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"There are a couple of APIs that Relay provides in order to make purely local updates to the Relay store (i.e. updates not tied to a server operation)."),(0,i.mdx)("p",null,"Note that local data updates can be made both on ",(0,i.mdx)("a",{parentName:"p",href:"../client-only-data/"},"client-only data"),", or on regular data that was fetched from the server via an operation."),(0,i.mdx)("h2",{id:"commitlocalupdate"},"commitLocalUpdate"),(0,i.mdx)("p",null,"To make updates using an ",(0,i.mdx)("a",{parentName:"p",href:"../imperatively-modifying-store-data/"},(0,i.mdx)("inlineCode",{parentName:"a"},"updater"))," function, you can use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"commitLocalUpdate")," API:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {Environment} from 'react-relay';\n\nconst {commitLocalUpdate, graphql} = require('react-relay');\n\nfunction commitCommentCreateLocally(\n  environment: Environment,\n  feedbackID: string,\n) {\n  return commitLocalUpdate(environment, store => {\n    // Imperatively mutate the store here\n  });\n}\n\nmodule.exports = {commit: commitCommentCreateLocally};\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"commitLocalUpdate")," update simply takes an environment and an updater function.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"updater")," takes a ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"em"},"store"))," argument, which is an instance of a ",(0,i.mdx)("a",{parentName:"li",href:"../../../api-reference/store/"},(0,i.mdx)("inlineCode",{parentName:"a"},"RecordSourceSelectorProxy")),";  this interface allows you to ",(0,i.mdx)("em",{parentName:"li"},"imperatively")," write and read data directly to and from the Relay store. This means that you have full control over how to update the store: you can ",(0,i.mdx)("em",{parentName:"li"},"create entirely new records"),", or ",(0,i.mdx)("em",{parentName:"li"},"update or delete existing ones"),"."),(0,i.mdx)("li",{parentName:"ul"},"Unlike regular and optimistic updaters that are accepted by the mutation and subscription APIs, the updater passed to ",(0,i.mdx)("inlineCode",{parentName:"li"},"commitLocalUpdate")," does not accept a second parameter. This is because there is no associated network response."))),(0,i.mdx)("li",{parentName:"ul"},"Note that any local data updates will automatically cause components subscribed to the data to be notified of the change and re-render.")),(0,i.mdx)("h2",{id:"commitpayload"},"commitPayload"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"commitPayload")," takes an ",(0,i.mdx)("inlineCode",{parentName:"p"},"OperationDescriptor")," and the payload for the query, and writes it to the Relay Store. The payload will be resolved like a normal server response for a query, and will also resolve Data Driven Dependencies that are passed as ",(0,i.mdx)("inlineCode",{parentName:"p"},"JSResource"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"requireDefer"),", etc."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {FooQueryRawResponse} from 'FooQuery.graphql'\n\nconst {createOperationDescriptor} = require('relay-runtime');\n\nconst operationDescriptor = createOperationDescriptor(FooQuery, {\n  id: 'an-id',\n  otherVariable: 'value',\n});\n\nconst payload: FooQueryRawResponse = {...};\n\nenvironment.commitPayload(operation, payload);\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"An ",(0,i.mdx)("inlineCode",{parentName:"li"},"OperationDescriptor")," can be created by ",(0,i.mdx)("inlineCode",{parentName:"li"},"createOperationDescriptor"),"; it takes the query and the query variables."),(0,i.mdx)("li",{parentName:"ul"},"The payload can be typed using the Flow type generated by adding the directive ",(0,i.mdx)("inlineCode",{parentName:"li"},"@raw_response_type")," to the query."),(0,i.mdx)("li",{parentName:"ul"},"Note that any local data updates will automatically cause components subscribed to the data to be notified of the change and re-render.")),(0,i.mdx)(m,{mdxType:"FbLocalDataUpdatesFlow"}),(0,i.mdx)(l.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);