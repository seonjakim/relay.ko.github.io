(self.webpackChunk=self.webpackChunk||[]).push([[93568],{3905:(e,n,t)=>{"use strict";t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>p,useMDXComponents:()=>c,withMDXComponents:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),u=function(e){return function(n){var t=c(n.components);return r.createElement(e,i({},n,{components:t}))}},c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,h=u["".concat(l,".").concat(m)]||u[m]||f[m]||i;return t?r.createElement(h,o(o({ref:n},d),{},{components:t})):r.createElement(h,o({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=h;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},36742:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>f});var r=t(79973),a=t(67294),i=t(73727),l=t(52263),o=t(13919),s=t(10412),d=(0,a.createContext)({collectLink:function(){}}),u=t(44996),c=t(18780),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const f=function(e){var n,t,f=e.isNavLink,h=e.to,p=e.href,g=e.activeClassName,v=e.isActive,y=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,b=void 0===w||w,x=(0,r.Z)(e,m),k=(0,l.default)().siteConfig,O=k.trailingSlash,N=k.baseUrl,E=(0,u.useBaseUrlUtils)().withBaseUrl,C=(0,a.useContext)(d),j=h||p,P=(0,o.Z)(j),T=null==j?void 0:j.replace("pathname://",""),_=void 0!==T?(t=T,b&&function(e){return e.startsWith("/")}(t)?E(t):t):void 0;_&&P&&(_=(0,c.applyTrailingSlash)(_,{trailingSlash:O,baseUrl:N}));var M=(0,a.useRef)(!1),R=f?i.OL:i.rU,U=s.default.canUseIntersectionObserver,q=(0,a.useRef)();(0,a.useEffect)((function(){return!U&&P&&null!=_&&window.docusaurus.prefetch(_),function(){U&&q.current&&q.current.disconnect()}}),[q,_,U,P]);var D=null!==(n=null==_?void 0:_.startsWith("#"))&&void 0!==n&&n,H=!_||!P||D;return _&&P&&!D&&!y&&C.collectLink(_),H?a.createElement("a",Object.assign({href:_},j&&!P&&{target:"_blank",rel:"noopener noreferrer"},x)):a.createElement(R,Object.assign({},x,{onMouseEnter:function(){M.current||null==_||(window.docusaurus.preload(_),M.current=!0)},innerRef:function(e){var n,t;U&&e&&P&&(n=e,t=function(){null!=_&&window.docusaurus.prefetch(_)},q.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(q.current.unobserve(n),q.current.disconnect(),t())}))})),q.current.observe(n))},to:_||""},f&&{isActive:v,activeClassName:g}))}},13919:(e,n,t)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,{b:()=>r,Z:()=>a})},44996:(e,n,t)=>{"use strict";t.r(n),t.d(n,{useBaseUrlUtils:()=>i,default:()=>l});var r=t(52263),a=t(13919);function i(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,l=i.forcePrependBaseUrl,o=void 0!==l&&l,s=i.absolute,d=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(o)return n+t;var u=t.startsWith(n)?t:n+t.replace(/^\//,"");return d?e+u:u}(i,t,e,n)}}}function l(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},8802:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var a,i=e.split(/[#?]/)[0],l="/"===i||i===r?i:(a=i,t?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,l)}},18780:function(e,n,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var a=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=t(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(i).default}})},29964:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},68629:(e,n,t)=>{"use strict";t.d(n,{Z:()=>f});var r=t(36742),a=t(44256),i=t(67294);function l(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),n)}var s=function(){var e=i.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:l},"Filing a task"))},u=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return i.createElement(o,null,i.createElement(d,null),i.createElement(s,null),i.createElement(u,null))},m=function(){return i.createElement(o,null,i.createElement(s,null),i.createElement(u,null))};const f=function(){return(0,a.fbContent)({internal:i.createElement(c,null),external:i.createElement(m,null)})}},97244:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>d,contentTitle:()=>u,metadata:()=>c,toc:()=>m,default:()=>p});var r,a=t(74034),i=t(79973),l=(t(67294),t(3905)),o=t(68629),s=(t(44256),["components"]),d={id:"filling-in-missing-data",title:"Filling in Missing Data (Missing Field Handlers)",slug:"/guided-tour/reusing-cached-data/filling-in-missing-data/",description:"Relay guide to filling in missing data",keywords:["missing field handler","missing data"]},u=void 0,c={unversionedId:"guided-tour/reusing-cached-data/filling-in-missing-data",id:"guided-tour/reusing-cached-data/filling-in-missing-data",isDocsHomePage:!1,title:"Filling in Missing Data (Missing Field Handlers)",description:"Relay guide to filling in missing data",source:"@site/docs/guided-tour/reusing-cached-data/filling-in-missing-data.md",sourceDirName:"guided-tour/reusing-cached-data",slug:"/guided-tour/reusing-cached-data/filling-in-missing-data/",permalink:"/relay.ko.dev/docs/next/guided-tour/reusing-cached-data/filling-in-missing-data/",editUrl:"https://seonjakim.github.io/relay.ko.dev/docs/guided-tour/reusing-cached-data/filling-in-missing-data.md",tags:[],version:"current",lastUpdatedBy:"\uae40\uc120\uc790",lastUpdatedAt:1654051011,formattedLastUpdatedAt:"6/1/2022",frontMatter:{id:"filling-in-missing-data",title:"Filling in Missing Data (Missing Field Handlers)",slug:"/guided-tour/reusing-cached-data/filling-in-missing-data/",description:"Relay guide to filling in missing data",keywords:["missing field handler","missing data"]},sidebar:"docs",previous:{title:"Rendering Partially Cached Data",permalink:"/relay.ko.dev/docs/next/guided-tour/reusing-cached-data/rendering-partially-cached-data/"},next:{title:"Introduction",permalink:"/relay.ko.dev/docs/next/guided-tour/refetching/"}},m=[],f=(r="FbMissingFieldHandlers",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),h={toc:m};function p(e){var n=e.components,t=(0,i.Z)(e,s);return(0,l.mdx)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"In the previous section we covered how to reuse data that is fully or partially cached, however there are cases in which Relay can't automatically tell that it can reuse some of the data it already has from other queries in order to fulfill a specific query. Specifically, Relay knows how to reuse data that is cached for a query that has been fetched before; that is, if you fetch the exact same query twice, Relay will know that it has the data cached for that query the second time it tries to evaluate it."),(0,l.mdx)("p",null,"However, when using different queries, there might still be cases where different queries point to the same data, which we'd want to be able to reuse. For example, imagine the following two queries:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"// Query 1\n\nquery UserQuery {\n  user(id: 4) {\n    name\n  }\n}\n")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"// Query 2\n\nquery NodeQuery {\n  node(id: 4) {\n    ... on User {\n      name\n    }\n  }\n}\n")),(0,l.mdx)("p",null,"These two queries are different, but reference the exact same data. Ideally, if one of the queries was already cached in the store, we should be able to reuse that data when rendering the other query. However, Relay doesn't have this knowledge by default, so we need to configure it to encode the knowledge that a ",(0,l.mdx)("inlineCode",{parentName:"p"},"node(id: 4)")," ",(0,l.mdx)("em",{parentName:"p"},'"is the same as"')," ",(0,l.mdx)("inlineCode",{parentName:"p"},"user(id: 4)"),"."),(0,l.mdx)("p",null,"To do so, we can provide ",(0,l.mdx)("inlineCode",{parentName:"p"},"missingFieldHandlers")," to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"RelayEnvironment")," which specifies this knowledge."),(0,l.mdx)(f,{mdxType:"FbMissingFieldHandlers"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"const {ROOT_TYPE, Environment} = require('relay-runtime');\n\nconst missingFieldHandlers = [\n  {\n    handle(field, record, argValues): ?string {\n      if (\n        record != null &&\n        record.__typename === ROOT_TYPE &&\n        field.name === 'user' &&\n        argValues.hasOwnProperty('id')\n      ) {\n        // If field is user(id: $id), look up the record by the value of $id\n        return argValues.id;\n      }\n      if (\n        record != null &&\n        record.__typename === ROOT_TYPE &&\n        field.name === 'story' &&\n        argValues.hasOwnProperty('story_id')\n      ) {\n        // If field is story(story_id: $story_id), look up the record by the\n        // value of $story_id.\n        return argValues.story_id;\n      }\n      return undefined;\n    },\n    kind: 'linked',\n  },\n];\n\nconst environment = new Environment({/*...*/, missingFieldHandlers});\n")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"missingFieldHandlers")," is an array of ",(0,l.mdx)("em",{parentName:"li"},"handlers"),". Each handler must specify a ",(0,l.mdx)("inlineCode",{parentName:"li"},"handle")," function, and the kind of missing fields it knows how to handle. The 2 main types of fields that you'd want to handle are:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("em",{parentName:"li"},"'scalar'"),": This represents a field that contains a scalar value, for example a number or a string."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("em",{parentName:"li"},"'linked'"),": This represents a field that references another object, i.e. not a scalar."))),(0,l.mdx)("li",{parentName:"ul"},"The ",(0,l.mdx)("inlineCode",{parentName:"li"},"handle")," function takes the field that is missing, the record that field belongs to, and any arguments that were passed to the field in the current execution of the query.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"When handling a ",(0,l.mdx)("em",{parentName:"li"},"'scalar'")," field, the handle function should return a scalar value, in order to use as the value for a missing field"),(0,l.mdx)("li",{parentName:"ul"},"When handling a ",(0,l.mdx)("em",{parentName:"li"},"'linked'")," field",(0,l.mdx)("em",{parentName:"li"},",")," the handle function should return an ",(0,l.mdx)("em",{parentName:"li"},"ID"),", referencing another object in the store that should be use in place of the missing field. **"))),(0,l.mdx)("li",{parentName:"ul"},"As Relay attempts to fulfill a query from the local cache, whenever it detects any missing data, it will run any of the provided missing field handlers that match the field type before definitively declaring that the data is missing.")),(0,l.mdx)(o.Z,{mdxType:"DocsRating"}))}p.isMDXComponent=!0}}]);