(self.webpackChunk=self.webpackChunk||[]).push([[50386,8710,97150,56435],{3905:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){return function(t){var n=p(t.components);return r.createElement(e,a({},t,{components:n}))}},p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,f=d["".concat(o,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36742:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var r=n(79973),i=n(67294),a=n(73727),o=n(52263),s=n(13919),l=n(10412),c=(0,i.createContext)({collectLink:function(){}}),d=n(44996),p=n(18780),u=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const m=function(e){var t,n,m=e.isNavLink,f=e.to,h=e.href,v=e.activeClassName,b=e.isActive,x=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,g=void 0===y||y,N=(0,r.Z)(e,u),C=(0,o.default)().siteConfig,w=C.trailingSlash,S=C.baseUrl,k=(0,d.useBaseUrlUtils)().withBaseUrl,O=(0,i.useContext)(c),U=f||h,T=(0,s.Z)(U),P=null==U?void 0:U.replace("pathname://",""),E=void 0!==P?(n=P,g&&function(e){return e.startsWith("/")}(n)?k(n):n):void 0;E&&T&&(E=(0,p.applyTrailingSlash)(E,{trailingSlash:w,baseUrl:S}));var A=(0,i.useRef)(!1),D=m?a.OL:a.rU,L=l.default.canUseIntersectionObserver,M=(0,i.useRef)();(0,i.useEffect)((function(){return!L&&T&&null!=E&&window.docusaurus.prefetch(E),function(){L&&M.current&&M.current.disconnect()}}),[M,E,L,T]);var j=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,_=!E||!T||j;return E&&T&&!j&&!x&&O.collectLink(E),_?i.createElement("a",Object.assign({href:E},U&&!T&&{target:"_blank",rel:"noopener noreferrer"},N)):i.createElement(D,Object.assign({},N,{onMouseEnter:function(){A.current||null==E||(window.docusaurus.preload(E),A.current=!0)},innerRef:function(e){var t,n;L&&e&&T&&(t=e,n=function(){null!=E&&window.docusaurus.prefetch(E)},M.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.current.unobserve(t),M.current.disconnect(),n())}))})),M.current.observe(t))},to:E||""},m&&{isActive:b,activeClassName:v}))}},13919:(e,t,n)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>i})},44996:(e,t,n)=>{"use strict";n.r(t),n.d(t,{useBaseUrlUtils:()=>a,default:()=>o});var r=n(52263),i=n(13919);function a(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,s=void 0!==o&&o,l=a.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},18780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},29964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},68629:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(36742),i=n(44256),a=n(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function s(e){var t=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),t)}var l=function(){var e=a.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},d=function(){return a.createElement("p",null,"Help us make the site even better by"," ",a.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},p=function(){return a.createElement(s,null,a.createElement(c,null),a.createElement(l,null),a.createElement(d,null))},u=function(){return a.createElement(s,null,a.createElement(l,null),a.createElement(d,null))};const m=function(){return(0,i.fbContent)({internal:a.createElement(p,null),external:a.createElement(u,null)})}},75530:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>d,contentTitle:()=>p,metadata:()=>u,toc:()=>m,default:()=>h});var r=n(74034),i=n(79973),a=(n(67294),n(3905)),o=n(68629),s=n(44256),l=n(38085),c=["components"],d={id:"use-subscription",title:"useSubscription",slug:"/api-reference/use-subscription/",description:"API reference for useSubscription, a React hook used to subscribe and unsubscribe from a subscription",keywords:["subscription"]},p=void 0,u={unversionedId:"api-reference/hooks/use-subscription",id:"version-v13.0.0/api-reference/hooks/use-subscription",isDocsHomePage:!1,title:"useSubscription",description:"API reference for useSubscription, a React hook used to subscribe and unsubscribe from a subscription",source:"@site/versioned_docs/version-v13.0.0/api-reference/hooks/use-subscription.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/use-subscription/",permalink:"/relay.ko.dev/docs/api-reference/use-subscription/",editUrl:"https://seonjakim.github.io/relay.ko.dev/versioned_docs/version-v13.0.0/api-reference/hooks/use-subscription.md",tags:[],version:"v13.0.0",lastUpdatedBy:"\uae40\uc120\uc790",lastUpdatedAt:1654051011,formattedLastUpdatedAt:"6/1/2022",frontMatter:{id:"use-subscription",title:"useSubscription",slug:"/api-reference/use-subscription/",description:"API reference for useSubscription, a React hook used to subscribe and unsubscribe from a subscription",keywords:["subscription"]},sidebar:"version-v13.0.0/docs",previous:{title:"useMutation",permalink:"/relay.ko.dev/docs/api-reference/use-mutation/"},next:{title:"useEntryPointLoader",permalink:"/relay.ko.dev/docs/api-reference/use-entrypoint-loader/"}},m=[{value:"<code>useSubscription</code>",id:"usesubscription",children:[{value:"Arguments",id:"arguments",children:[],level:3},{value:"Flow Type Parameters",id:"flow-type-parameters",children:[],level:3},{value:"Behavior",id:"behavior",children:[],level:3}],level:2}],f={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.mdx)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"usesubscription"},(0,a.mdx)("inlineCode",{parentName:"h2"},"useSubscription")),(0,a.mdx)("p",null,"Hook used to subscribe and unsubscribe to a subscription."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import {graphql, useSubscription} from 'react-relay';\nimport {useMemo} from 'react';\n\nconst subscription = graphql`\n  subscription UserDataSubscription($input: InputData!) {\n    # ...\n  }\n`;\n\nfunction UserComponent({ id }) {\n  // IMPORTANT: your config should be memoized.\n  // Otherwise, useSubscription will re-render too frequently.\n  const config = useMemo(() => ({\n    variables: {id},\n    subscription,\n  }), [id, subscription]);\n\n  useSubscription(config);\n\n  return (/* ... */);\n}\n")),(0,a.mdx)("h3",{id:"arguments"},"Arguments"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"config"),": a config of type ",(0,a.mdx)("a",{parentName:"li",href:"#type-graphqlsubscriptionconfigtsubscriptionpayload"},(0,a.mdx)("inlineCode",{parentName:"a"},"GraphQLSubscriptionConfig"))," passed to ",(0,a.mdx)("a",{parentName:"li",href:"../request-subscription/"},(0,a.mdx)("inlineCode",{parentName:"a"},"requestSubscription"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"requestSubscriptionFn"),": ",(0,a.mdx)("inlineCode",{parentName:"li"},"?<TSubscriptionPayload>(IEnvironment, GraphQLSubscriptionConfig<TSubscriptionPayload>) => Disposable"),". An optional function with the same signature as ",(0,a.mdx)("a",{parentName:"li",href:"../request-subscription/"},(0,a.mdx)("inlineCode",{parentName:"a"},"requestSubscription")),", which will be called in its stead. Defaults to ",(0,a.mdx)("inlineCode",{parentName:"li"},"requestSubscription"),".")),(0,a.mdx)(l.default,{mdxType:"GraphQLSubscriptionConfig"}),(0,a.mdx)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"TSubscriptionPayload"),": The type of the payloads vended by the subscription. You should pass the flow type imported from the auto-generated ",(0,a.mdx)("inlineCode",{parentName:"li"},".graphql")," file corresponding to the subscription, e.g. use ",(0,a.mdx)("inlineCode",{parentName:"li"},"UserDataSubscription")," as the type parameter, from ",(0,a.mdx)("inlineCode",{parentName:"li"},"import type {UserDataSubscription} from './__generated__/UserDataSubscription.graphql'"),";")),(0,a.mdx)("h3",{id:"behavior"},"Behavior"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"This is only a thin wrapper around the ",(0,a.mdx)("inlineCode",{parentName:"li"},"requestSubscription")," API. It will:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Subscribe when the component is mounted with the given config"),(0,a.mdx)("li",{parentName:"ul"},"Unsubscribe when the component is unmounted"),(0,a.mdx)("li",{parentName:"ul"},"Unsubscribe and resubscribe with new values if the environment, config or ",(0,a.mdx)("inlineCode",{parentName:"li"},"requestSubscriptionFn")," changes."))),(0,a.mdx)("li",{parentName:"ul"},"If you have the need to do something more complicated, such as imperatively requesting a subscription, please use the ",(0,a.mdx)("a",{parentName:"li",href:"../request-subscription/"},(0,a.mdx)("inlineCode",{parentName:"a"},"requestSubscription"))," API directly."),(0,a.mdx)("li",{parentName:"ul"},"See the ",(0,a.mdx)("a",{parentName:"li",href:"../../guided-tour/updating-data/graphql-subscriptions/"},"GraphQL Subscriptions Guide")," for a more detailed explanation of how to work with subscriptions.")),(0,a.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},(0,a.mdx)("inlineCode",{parentName:"p"},"useSubscription")," doesn't automatically add ",(0,a.mdx)("inlineCode",{parentName:"p"},"client_subscription_id"),". You may need to provide an arbitrary ",(0,a.mdx)("inlineCode",{parentName:"p"},"client_subscription_id")," to ",(0,a.mdx)("inlineCode",{parentName:"p"},"config.variables.input"))))),(0,a.mdx)(o.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0},55723:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>u});var r=n(74034),i=n(79973),a=(n(67294),n(3905)),o=["components"],s={},l=void 0,c={unversionedId:"api-reference/types/CacheConfig",id:"version-v13.0.0/api-reference/types/CacheConfig",isDocsHomePage:!1,title:"CacheConfig",description:"Type CacheConfig",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/CacheConfig.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/CacheConfig",permalink:"/relay.ko.dev/docs/api-reference/types/CacheConfig",editUrl:"https://seonjakim.github.io/relay.ko.dev/versioned_docs/version-v13.0.0/api-reference/types/CacheConfig.md",tags:[],version:"v13.0.0",lastUpdatedBy:"\uae40\uc120\uc790",lastUpdatedAt:1654500983,formattedLastUpdatedAt:"6/6/2022",frontMatter:{}},d=[{value:"Type <code>CacheConfig</code>",id:"type-cacheconfig",children:[],level:4}],p={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h4",{id:"type-cacheconfig"},"Type ",(0,a.mdx)("inlineCode",{parentName:"h4"},"CacheConfig")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"\ub2e4\uc74c \ud544\ub4dc\uac00 \uc788\ub294 \uac1d\uccb4:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"force"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," A boolean. \ucc38\uc778 \uacbd\uc6b0 \uad6c\uc131\ub41c \uc751\ub2f5 \uce90\uc2dc\uc758 \uc0c1\ud0dc\uc5d0 \uad00\uacc4\uc5c6\uc774 \ucffc\ub9ac\uac00 \ubb34\uc870\uac74 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"poll"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," A number. \uc9c0\uc815\ub41c \uac04\uaca9(\ubc00\ub9ac\ucd08)\uc73c\ub85c \ud3f4\ub9c1(polling)\ud558\uc5ec \ucffc\ub9ac\uac00 \uc2e4\uc2dc\uac04 \uc5c5\ub370\uc774\ud2b8\ub418\ub3c4\ub85d \ud569\ub2c8\ub2e4 (\uc774 \uac12\uc740 ",(0,a.mdx)("inlineCode",{parentName:"li"},"setTimeout"),"\uc5d0 \uc804\ub2ec\ub418\uac8c \ub429\ub2c8\ub2e4)."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"liveConfigId"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," A string. GraphQLLiveQuery\ub97c \ud638\ucd9c\ud558\uc5ec \ucffc\ub9ac\uac00 \uc2e4\uc2dc\uac04 \uc5c5\ub370\uc774\ud2b8\ub418\ub3c4\ub85d \ud569\ub2c8\ub2e4. \ub77c\uc774\ube0c \ucffc\ub9ac\ub97c \uc218\ud589\ud560 \ub54c \uac8c\uc774\ud2b8\uc6e8\uc774\uc758 \uad6c\uc131\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"metadata"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," An object. \uc0ac\uc6a9\uc790 \uc81c\uacf5 \uba54\ud0c0\ub370\uc774\ud130."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"transactionId"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," A string. \uc8fc\uc5b4\uc9c4 \uc791\uc5c5 \uc2e4\ud589 \uc778\uc2a4\ud134\uc2a4\uc5d0 \ub300\ud55c \uace0\uc720 ID\ub85c \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \uc0ac\uc6a9\uc790 \uc81c\uacf5 \uac12\uc785\ub2c8\ub2e4.")))))}u.isMDXComponent=!0},38085:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>d,metadata:()=>p,toc:()=>u,default:()=>f});var r=n(74034),i=n(79973),a=(n(67294),n(3905)),o=n(88842),s=n(55723),l=["components"],c={},d=void 0,p={unversionedId:"api-reference/types/GraphQLSubscriptionConfig",id:"version-v13.0.0/api-reference/types/GraphQLSubscriptionConfig",isDocsHomePage:!1,title:"GraphQLSubscriptionConfig",description:"Type GraphQLSubscriptionConfig",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/GraphQLSubscriptionConfig.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/GraphQLSubscriptionConfig",permalink:"/relay.ko.dev/docs/api-reference/types/GraphQLSubscriptionConfig",editUrl:"https://seonjakim.github.io/relay.ko.dev/versioned_docs/version-v13.0.0/api-reference/types/GraphQLSubscriptionConfig.md",tags:[],version:"v13.0.0",lastUpdatedBy:"\uae40\uc120\uc790",lastUpdatedAt:1654051011,formattedLastUpdatedAt:"6/1/2022",frontMatter:{}},u=[{value:"Type <code>GraphQLSubscriptionConfig&lt;TSubscriptionPayload&gt;</code>",id:"type-graphqlsubscriptionconfigtsubscriptionpayload",children:[],level:4}],m={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.mdx)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h4",{id:"type-graphqlsubscriptionconfigtsubscriptionpayload"},"Type ",(0,a.mdx)("inlineCode",{parentName:"h4"},"GraphQLSubscriptionConfig<TSubscriptionPayload>")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"An object with the following fields:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"cacheConfig"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,a.mdx)("a",{parentName:"li",href:"#type-cacheconfig"},(0,a.mdx)("inlineCode",{parentName:"a"},"CacheConfig"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"subscription"),": ",(0,a.mdx)("inlineCode",{parentName:"li"},"GraphQLTaggedNode"),". A GraphQL subscription specified using a ",(0,a.mdx)("inlineCode",{parentName:"li"},"graphql")," template literal"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"variables"),": The variables to pass to the subscription"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"onCompleted"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,a.mdx)("inlineCode",{parentName:"li"},"() => void"),". An optional callback that is executed when the subscription is established"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"onError"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,a.mdx)("inlineCode",{parentName:"li"},"(Error) => {}"),". An optional callback that is executed when an error occurs"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"onNext"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,a.mdx)("inlineCode",{parentName:"li"},"(TSubscriptionPayload) => {}"),". An optional callback that is executed when new data is received"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"updater"),": ",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,a.mdx)("a",{parentName:"li",href:"#type-selectorstoreupdater"},(0,a.mdx)("inlineCode",{parentName:"a"},"SelectorStoreUpdater")),".")))),(0,a.mdx)(s.default,{mdxType:"CacheConfig"}),(0,a.mdx)(o.default,{mdxType:"SelectorStoreUpdater"}))}f.isMDXComponent=!0},88842:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>d,toc:()=>p,default:()=>m});var r=n(74034),i=n(79973),a=(n(67294),n(3905)),o=n(44996),s=["components"],l={},c=void 0,d={unversionedId:"api-reference/types/SelectorStoreUpdater",id:"version-v13.0.0/api-reference/types/SelectorStoreUpdater",isDocsHomePage:!1,title:"SelectorStoreUpdater",description:"Type SelectorStoreUpdater",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/SelectorStoreUpdater.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/SelectorStoreUpdater",permalink:"/relay.ko.dev/docs/api-reference/types/SelectorStoreUpdater",editUrl:"https://seonjakim.github.io/relay.ko.dev/versioned_docs/version-v13.0.0/api-reference/types/SelectorStoreUpdater.md",tags:[],version:"v13.0.0",lastUpdatedBy:"\uae40\uc120\uc790",lastUpdatedAt:1654500983,formattedLastUpdatedAt:"6/6/2022",frontMatter:{}},p=[{value:"Type <code>SelectorStoreUpdater</code>",id:"type-selectorstoreupdater",children:[],level:4}],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h4",{id:"type-selectorstoreupdater"},"Type ",(0,a.mdx)("inlineCode",{parentName:"h4"},"SelectorStoreUpdater")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"A function with signature ",(0,a.mdx)("inlineCode",{parentName:"li"},"(store: RecordSourceSelectorProxy, data) => void")),(0,a.mdx)("li",{parentName:"ul"},"\uc774 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\uba74 Relay store\uc5d0 ",(0,a.mdx)("em",{parentName:"li"},"\uc9c1\uc811")," \ub370\uc774\ud130\ub97c \uc4f0\uace0 \uc77d\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uad6c\ub3c5 \ud398\uc774\ub85c\ub4dc\uc5d0 \ub300\ud55c \uc751\ub2f5(response)\uc73c\ub85c store\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ubc29\ubc95\uc744 \uc644\uc804\ud788 \uc81c\uc5b4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4: ",(0,a.mdx)("em",{parentName:"li"},"\uc644\uc804\ud788 \uc0c8\ub85c\uc6b4 record\ub97c \uc0dd\uc131"),"\ud558\uac70\ub098 ",(0,a.mdx)("em",{parentName:"li"},"\uae30\uc874 record\ub97c \uc5c5\ub370\uc774\ud2b8 \ub610\ub294 \uc0ad\uc81c"),"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Relay store\ub97c \uc77d\uace0 \uc4f0\uae30 \uc704\ud55c \uc804\uccb4 API\ub294 ",(0,a.mdx)("a",{href:(0,o.default)("docs/api-reference/store/#recordsourceselectorproxy")},"\uc5ec\uae30"),"\uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))}m.isMDXComponent=!0}}]);