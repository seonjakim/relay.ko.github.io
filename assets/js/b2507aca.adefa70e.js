(self.webpackChunk=self.webpackChunk||[]).push([[99992],{3905:(e,r,n)=>{"use strict";n.r(r),n.d(r,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>y,useMDXComponents:()=>c,withMDXComponents:()=>s});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(){return u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},u.apply(this,arguments)}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},u=Object.keys(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=t.createContext({}),s=function(e){return function(r){var n=c(r.components);return t.createElement(e,u({},r,{components:n}))}},c=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(d.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),p=a,f=s["".concat(i,".").concat(p)]||s[p]||m[p]||u;return n?t.createElement(f,o(o({ref:r},d),{},{components:n})):t.createElement(f,o({ref:r},d))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var u=n.length,i=new Array(u);i[0]=f;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<u;d++)i[d]=n[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36742:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>m});var t=n(79973),a=n(67294),u=n(73727),i=n(52263),o=n(13919),l=n(10412),d=(0,a.createContext)({collectLink:function(){}}),s=n(44996),c=n(18780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const m=function(e){var r,n,m=e.isNavLink,f=e.to,y=e.href,v=e.activeClassName,h=e.isActive,g=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,w=void 0===b||b,x=(0,t.Z)(e,p),q=(0,i.default)().siteConfig,k=q.trailingSlash,N=q.baseUrl,C=(0,s.useBaseUrlUtils)().withBaseUrl,P=(0,a.useContext)(d),Q=f||y,O=(0,o.Z)(Q),R=null==Q?void 0:Q.replace("pathname://",""),E=void 0!==R?(n=R,w&&function(e){return e.startsWith("/")}(n)?C(n):n):void 0;E&&O&&(E=(0,c.applyTrailingSlash)(E,{trailingSlash:k,baseUrl:N}));var j=(0,a.useRef)(!1),A=m?u.OL:u.rU,L=l.default.canUseIntersectionObserver,T=(0,a.useRef)();(0,a.useEffect)((function(){return!L&&O&&null!=E&&window.docusaurus.prefetch(E),function(){L&&T.current&&T.current.disconnect()}}),[T,E,L,O]);var U=null!==(r=null==E?void 0:E.startsWith("#"))&&void 0!==r&&r,D=!E||!O||U;return E&&O&&!U&&!g&&P.collectLink(E),D?a.createElement("a",Object.assign({href:E},Q&&!O&&{target:"_blank",rel:"noopener noreferrer"},x)):a.createElement(A,Object.assign({},x,{onMouseEnter:function(){j.current||null==E||(window.docusaurus.preload(E),j.current=!0)},innerRef:function(e){var r,n;L&&e&&O&&(r=e,n=function(){null!=E&&window.docusaurus.prefetch(E)},T.current=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.current.unobserve(r),T.current.disconnect(),n())}))})),T.current.observe(r))},to:E||""},m&&{isActive:h,activeClassName:v}))}},13919:(e,r,n)=>{"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!t(e)}n.d(r,{b:()=>t,Z:()=>a})},44996:(e,r,n)=>{"use strict";n.r(r),n.d(r,{useBaseUrlUtils:()=>u,default:()=>i});var t=n(52263),a=n(13919);function u(){var e=(0,t.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,n=void 0===r?"/":r,u=e.url;return{withBaseUrl:function(e,r){return function(e,r,n,t){var u=void 0===t?{}:t,i=u.forcePrependBaseUrl,o=void 0!==i&&i,l=u.absolute,d=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(o)return r+n;var s=n.startsWith(r)?n:r+n.replace(/^\//,"");return d?e+s:s}(u,n,e,r)}}}function i(e,r){return void 0===r&&(r={}),(0,u().withBaseUrl)(e,r)}},8802:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){var n=r.trailingSlash,t=r.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,u=e.split(/[#?]/)[0],i="/"===u||u===t?u:(a=u,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(u,i)}},18780:function(e,r,n){"use strict";var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.uniq=r.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(r,"applyTrailingSlash",{enumerable:!0,get:function(){return t(a).default}});var u=n(29964);Object.defineProperty(r,"uniq",{enumerable:!0,get:function(){return t(u).default}})},29964:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return Array.from(new Set(e))}},68629:(e,r,n)=>{"use strict";n.d(r,{Z:()=>m});var t=n(36742),a=n(44256),u=n(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var r=e.children;return u.createElement("div",{className:"docsRating",id:"docsRating"},u.createElement("hr",null),r)}var l=function(){var e=u.useState(!1),r=e[0],n=e[1],t=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return r?"Thank you for letting us know!":u.createElement(u.Fragment,null,"Is this page useful?",u.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return t(1)}},u.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),u.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return t(0)}},u.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return u.createElement("p",null,"Let us know how these docs can be improved by",u.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},s=function(){return u.createElement("p",null,"Help us make the site even better by"," ",u.createElement(t.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return u.createElement(o,null,u.createElement(d,null),u.createElement(l,null),u.createElement(s,null))},p=function(){return u.createElement(o,null,u.createElement(l,null),u.createElement(s,null))};const m=function(){return(0,a.fbContent)({internal:u.createElement(c,null),external:u.createElement(p,null)})}},10078:(e,r,n)=>{"use strict";n.r(r),n.d(r,{frontMatter:()=>l,contentTitle:()=>d,metadata:()=>s,toc:()=>c,default:()=>m});var t=n(74034),a=n(79973),u=(n(67294),n(3905)),i=n(68629),o=["components"],l={id:"use-preloaded-query",title:"usePreloadedQuery",slug:"/api-reference/use-preloaded-query/",description:"API reference for usePreloadedQuery, a React hook used to read query data from the Relay store using a query reference",keywords:["read","query","query reference"]},d=void 0,s={unversionedId:"api-reference/hooks/use-preloaded-query",id:"version-v13.0.0/api-reference/hooks/use-preloaded-query",isDocsHomePage:!1,title:"usePreloadedQuery",description:"API reference for usePreloadedQuery, a React hook used to read query data from the Relay store using a query reference",source:"@site/versioned_docs/version-v13.0.0/api-reference/hooks/use-preloaded-query.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/use-preloaded-query/",permalink:"/docs/api-reference/use-preloaded-query/",editUrl:"https://seonjakim.github.io/relay.ko.dev/versioned_docs/version-v13.0.0/api-reference/hooks/use-preloaded-query.md",tags:[],version:"v13.0.0",lastUpdatedBy:"\uae40\uc120\uc790",lastUpdatedAt:1656212513,formattedLastUpdatedAt:"6/26/2022",frontMatter:{id:"use-preloaded-query",title:"usePreloadedQuery",slug:"/api-reference/use-preloaded-query/",description:"API reference for usePreloadedQuery, a React hook used to read query data from the Relay store using a query reference",keywords:["read","query","query reference"]},sidebar:"version-v13.0.0/docs",previous:{title:"useRelayEnvironment",permalink:"/docs/api-reference/use-relay-environment/"},next:{title:"useQueryLoader",permalink:"/docs/api-reference/use-query-loader/"}},c=[{value:"<code>usePreloadedQuery</code>",id:"usepreloadedquery",children:[{value:"Arguments",id:"arguments",children:[],level:3},{value:"Flow Type Parameters",id:"flow-type-parameters",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3}],level:2}],p={toc:c};function m(e){var r=e.components,n=(0,a.Z)(e,o);return(0,u.mdx)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,u.mdx)("h2",{id:"usepreloadedquery"},(0,u.mdx)("inlineCode",{parentName:"h2"},"usePreloadedQuery")),(0,u.mdx)("p",null,(0,u.mdx)("a",{parentName:"p",href:"../load-query"},(0,u.mdx)("inlineCode",{parentName:"a"},"loadQuery")),"\uc5d0 \ub300\ud55c earlier call \ub610\ub294 ",(0,u.mdx)("a",{parentName:"p",href:"../use-query-loader"},(0,u.mdx)("inlineCode",{parentName:"a"},"useQueryLoader")),'\ub85c \uac00\uc838\uc628 \ub370\uc774\ud130\uc5d0 \uc811\uadfc\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub418\ub294 hook\uc785\ub2c8\ub2e4. "render-as-you-fetch" \ud328\ud134\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4:'),(0,u.mdx)("ul",null,(0,u.mdx)("li",{parentName:"ul"},(0,u.mdx)("inlineCode",{parentName:"li"},"useQueryLoader"),"\uc5d0\uc11c \ubc18\ud658\ub41c ",(0,u.mdx)("inlineCode",{parentName:"li"},"loadQuery")," \ucf5c\ubc31\uc744 \ud638\ucd9c\ud569\ub2c8\ub2e4. React state\uc5d0 query reference\uac00 \uc800\uc7a5\ub429\ub2c8\ub2e4.",(0,u.mdx)("ul",{parentName:"li"},(0,u.mdx)("li",{parentName:"ul"},(0,u.mdx)("inlineCode",{parentName:"li"},"loadQuery"),"\ub97c \uc9c1\uc811 \ud638\ucd9c\ud558\uc5ec query reference\ub97c \ubc18\ud658\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\uc6b0 item\uc744 state \ub610\ub294 React ref\uc5d0 \uc800\uc7a5\ud558\uace0 \ub354\uc774\uc0c1 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc744 \ub54c ",(0,u.mdx)("inlineCode",{parentName:"li"},"dispose()"),"\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."))),(0,u.mdx)("li",{parentName:"ul"},"\ub80c\ub354 \uba54\uc18c\ub4dc\uc5d0\uc11c ",(0,u.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery()"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec query reference\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc774 \ud638\ucd9c\uc740 query\uac00 \uc544\uc9c1 pending \uc911\uc774\uba74 \uc77c\uc2dc \uc911\ub2e8\ub418\uace0, \uc2e4\ud328\ud558\uba74 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uace0, \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 query \uacb0\uacfc\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,u.mdx)("li",{parentName:"ul"},"\uc774 \ud328\ud134\uc740 \ub80c\ub354\ub9c1\uc744 blocking\ud558\uc9c0 \uc54a\uc73c\uba74\uc11c \ub370\uc774\ud130\ub97c \ub354 \ube60\ub974\uac8c \uac00\uc838\uc62c \uc218 \uc788\uc73c\ubbc0\ub85c ",(0,u.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery()"),"\ubcf4\ub2e4 \uad8c\uc7a5\ub429\ub2c8\ub2e4.")),(0,u.mdx)("p",null,"\ub354 \uc790\uc138\ud55c \uc0ac\ud56d\uc744 \ud655\uc778\ud558\uace0 \uc2f6\ub2e4\uba74 ",(0,u.mdx)("a",{parentName:"p",href:"../../guided-tour/rendering/queries"},"Rendering Queries"),"\ub97c \ucc38\uace0\ud558\uc138\uc694."),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-js"},"import type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\nconst React = require('React');\n\nconst {graphql, useQueryLoader, usePreloadedQuery} = require('react-relay');\n\nconst AppQuery = graphql`\n  query AppQuery($id: ID!) {\n    user(id: $id) {\n      name\n    }\n  }\n`;\n\ntype Props = {\n  initialQueryRef: PreloadedQuery<AppQueryType>,\n};\n\nfunction NameLoader(props) {\n  const [queryReference, loadQuery] = useQueryLoader(\n    AppQuery,\n    props.initialQueryRef, /* e.g. provided by router */\n  );\n\n  return (<>\n    <Button\n      onClick={() => loadQuery({id: '4'})}\n      disabled={queryReference != null}\n    >\n      Reveal your name!\n    </Button>\n    <Suspense fallback=\"Loading...\">\n      {queryReference != null\n        ? <NameDisplay queryReference={queryReference} />\n        : null\n      }\n    </Suspense>\n  </>);\n}\n\nfunction NameDisplay({ queryReference }) {\n  const data = usePreloadedQuery<AppQueryType>(AppQuery, queryReference);\n\n  return <h1>{data.user?.name}</h1>;\n}\n")),(0,u.mdx)("h3",{id:"arguments"},"Arguments"),(0,u.mdx)("ul",null,(0,u.mdx)("li",{parentName:"ul"},(0,u.mdx)("inlineCode",{parentName:"li"},"query"),": ",(0,u.mdx)("inlineCode",{parentName:"li"},"graphql")," template literal\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc9c0\uc815\ub41c GraphQL query\uc785\ub2c8\ub2e4."),(0,u.mdx)("li",{parentName:"ul"},(0,u.mdx)("inlineCode",{parentName:"li"},"preloadedQueryReference"),": ",(0,u.mdx)("a",{parentName:"li",href:"../use-query-loader"},(0,u.mdx)("inlineCode",{parentName:"a"},"useQueryLoader"))," \ub610\ub294 ",(0,u.mdx)("a",{parentName:"li",href:"../load-query"},(0,u.mdx)("inlineCode",{parentName:"a"},"loadQuery()")),"\ub97c \ud638\ucd9c\ud558\uc5ec \uac00\uc838\uc62c \uc218 \uc788\ub294 ",(0,u.mdx)("inlineCode",{parentName:"li"},"PreloadedQuery")," query reference\uc785\ub2c8\ub2e4.")),(0,u.mdx)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,u.mdx)("ul",null,(0,u.mdx)("li",{parentName:"ul"},(0,u.mdx)("inlineCode",{parentName:"li"},"TQuery"),": \uc9c0\uc815\ub41c query\uc758 Flow type\uc5d0 \ubd80\ud569\ud574\uc57c\ud558\ub294 type \ub9e4\uac1c\ubcc0\uc218\uc785\ub2c8\ub2e4. \ud574\ub2f9 type\uc740 \uc790\ub3d9 \uc0dd\uc131\ub41c \ud30c\uc77c\uc5d0\uc11c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4: ",(0,u.mdx)("inlineCode",{parentName:"li"},"<query_name>.graphql.js"),".")),(0,u.mdx)("h3",{id:"return-value"},"Return Value"),(0,u.mdx)("ul",null,(0,u.mdx)("li",{parentName:"ul"},(0,u.mdx)("inlineCode",{parentName:"li"},"data"),": Relay store\uc5d0\uc11c \uc77d\uc5b4\ub4e4\uc778 data\ub97c \ud3ec\ud568\ud558\uace0 \uc788\ub294 \uac1d\uccb4\uc785\ub2c8\ub2e4; \ud574\ub2f9 \uac1d\uccb4\ub294 \uc9c0\uc815\ub41c query\uc758 \ubaa8\uc591\uacfc \uc77c\uce58\ud569\ub2c8\ub2e4.",(0,u.mdx)("ul",{parentName:"li"},(0,u.mdx)("li",{parentName:"ul"},"\ub370\uc774\ud130\uc758 Flow type\ub3c4 \uc774 \ubaa8\uc591\uacfc \uc77c\uce58\ud558\uba70 GraphQL Schema\uc5d0\uc11c \ud30c\uc0dd\ub41c type\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc704\uc758 ",(0,u.mdx)("inlineCode",{parentName:"li"},"data")," \uc720\ud615\uc740  ",(0,u.mdx)("inlineCode",{parentName:"li"},"{ user: ?{ name: ?string } }"),"\uc785\ub2c8\ub2e4.")))),(0,u.mdx)(i.Z,{mdxType:"DocsRating"}))}m.isMDXComponent=!0}}]);