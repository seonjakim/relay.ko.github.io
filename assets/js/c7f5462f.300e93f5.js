(self.webpackChunk=self.webpackChunk||[]).push([[70226,8710,56435,24687,27673,78971],{3905:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>v,useMDXComponents:()=>s,withMDXComponents:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){return function(t){var n=s(t.components);return a.createElement(e,i({},t,{components:n}))}},s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),p=s(n),c=r,f=p["".concat(o,".").concat(c)]||p[c]||u[c]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36742:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var a=n(79973),r=n(67294),i=n(73727),o=n(52263),l=n(13919),m=n(10412),d=(0,r.createContext)({collectLink:function(){}}),p=n(44996),s=n(18780),c=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const u=function(e){var t,n,u=e.isNavLink,f=e.to,v=e.href,x=e.activeClassName,y=e.isActive,h=e["data-noBrokenLinkCheck"],N=e.autoAddBaseUrl,g=void 0===N||N,b=(0,a.Z)(e,c),C=(0,o.default)().siteConfig,w=C.trailingSlash,M=C.baseUrl,k=(0,p.useBaseUrlUtils)().withBaseUrl,U=(0,r.useContext)(d),T=f||v,O=(0,l.Z)(T),D=null==T?void 0:T.replace("pathname://",""),S=void 0!==D?(n=D,g&&function(e){return e.startsWith("/")}(n)?k(n):n):void 0;S&&O&&(S=(0,s.applyTrailingSlash)(S,{trailingSlash:w,baseUrl:M}));var A=(0,r.useRef)(!1),P=u?i.OL:i.rU,E=m.default.canUseIntersectionObserver,j=(0,r.useRef)();(0,r.useEffect)((function(){return!E&&O&&null!=S&&window.docusaurus.prefetch(S),function(){E&&j.current&&j.current.disconnect()}}),[j,S,E,O]);var _=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,L=!S||!O||_;return S&&O&&!_&&!h&&U.collectLink(S),L?r.createElement("a",Object.assign({href:S},T&&!O&&{target:"_blank",rel:"noopener noreferrer"},b)):r.createElement(P,Object.assign({},b,{onMouseEnter:function(){A.current||null==S||(window.docusaurus.preload(S),A.current=!0)},innerRef:function(e){var t,n;E&&e&&O&&(t=e,n=function(){null!=S&&window.docusaurus.prefetch(S)},j.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(j.current.unobserve(t),j.current.disconnect(),n())}))})),j.current.observe(t))},to:S||""},u&&{isActive:y,activeClassName:x}))}},13919:(e,t,n)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>r})},44996:(e,t,n)=>{"use strict";n.r(t),n.d(t,{useBaseUrlUtils:()=>i,default:()=>o});var a=n(52263),r=n(13919);function i(){var e=(0,a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,l=void 0!==o&&o,m=i.absolute,d=void 0!==m&&m;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return d?e+p:p}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var r,i=e.split(/[#?]/)[0],o="/"===i||i===a?i:(r=i,n?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(i,o)}},18780:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},29964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},68629:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(36742),r=n(44256),i=n(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var m=function(){var e=i.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},p=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},s=function(){return i.createElement(l,null,i.createElement(d,null),i.createElement(m,null),i.createElement(p,null))},c=function(){return i.createElement(l,null,i.createElement(m,null),i.createElement(p,null))};const u=function(){return(0,r.fbContent)({internal:i.createElement(s,null),external:i.createElement(c,null)})}},4528:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>s,metadata:()=>c,toc:()=>u,default:()=>v});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),o=n(68629),l=(n(44256),n(43161)),m=n(64070),d=["components"],p={id:"commit-mutation",title:"commitMutation",slug:"/api-reference/commit-mutation/",description:"API reference for commitMutation, which imperatively executes a mutation",keywords:["mutation"]},s=void 0,c={unversionedId:"api-reference/relay-runtime/commit-mutation",id:"version-v13.0.0/api-reference/relay-runtime/commit-mutation",isDocsHomePage:!1,title:"commitMutation",description:"API reference for commitMutation, which imperatively executes a mutation",source:"@site/versioned_docs/version-v13.0.0/api-reference/relay-runtime/commit-mutation.md",sourceDirName:"api-reference/relay-runtime",slug:"/api-reference/commit-mutation/",permalink:"/docs/api-reference/commit-mutation/",editUrl:"https://seonjakim.github.io/relay.ko.dev/versioned_docs/version-v13.0.0/api-reference/relay-runtime/commit-mutation.md",tags:[],version:"v13.0.0",lastUpdatedBy:"\uae40\uc120\uc790",lastUpdatedAt:1656835112,formattedLastUpdatedAt:"7/3/2022",frontMatter:{id:"commit-mutation",title:"commitMutation",slug:"/api-reference/commit-mutation/",description:"API reference for commitMutation, which imperatively executes a mutation",keywords:["mutation"]},sidebar:"version-v13.0.0/docs",previous:{title:"Store",permalink:"/docs/api-reference/store/"},next:{title:"requestSubscription",permalink:"/docs/api-reference/request-subscription/"}},u=[{value:"<code>commitMutation</code>",id:"commitmutation",children:[{value:"Arguments",id:"arguments",children:[],level:3},{value:"Flow Type Parameters",id:"flow-type-parameters",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3}],level:2}],f={toc:u};function v(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.mdx)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"commitmutation"},(0,i.mdx)("inlineCode",{parentName:"h2"},"commitMutation")),(0,i.mdx)("p",null,"\uac15\uc81c\ub85c ",(0,i.mdx)("inlineCode",{parentName:"p"},"mutation"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"../use-mutation/"},(0,i.mdx)("inlineCode",{parentName:"a"},"useMutation"))," API\uc640 ",(0,i.mdx)("a",{parentName:"p",href:"../../guided-tour/updating-data/"},"\ub370\uc774\ud130 \uc5c5\ub370\uc774\ud2b8\ub97c \uc704\ud55c \uac00\uc774\ub4dc"),"\ub3c4 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {FeedbackLikeMutation} from 'FeedbackLikeMutation.graphql';\nconst React = require('React');\n\nconst {graphql, useMutation} = require('react-relay');\n\nfunction likeFeedback(environment: IEnvironment): Disposable {\n  return commitMutation<FeedbackLikeMutation>(environment, {\n    mutation: graphql`\n      mutation FeedbackLikeMutation($input: FeedbackLikeData!) {\n        feedback_like(data: $input) {\n          feedback {\n            id\n            viewer_does_like\n            like_count\n          }\n        }\n      }\n    `,\n    variables: {\n      input: {\n        id: '123',\n      },\n    },\n  });\n}\n")),(0,i.mdx)("h3",{id:"arguments"},"Arguments"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"environment"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"IEnvironment"),". Relay \ud658\uacbd."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"config"),": ",(0,i.mdx)("a",{parentName:"li",href:"#type-mutationconfigtmutationconfig-mutationparameters"},(0,i.mdx)("inlineCode",{parentName:"a"},"MutationConfig<TMutation>")),".")),(0,i.mdx)(l.default,{mdxType:"MutationConfig"}),(0,i.mdx)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"TMutation"),": mutation query\uc758 Flow type\uc5d0 \ud574\ub2f9\ud558\ub294 type \ub9e4\uac1c\ubcc0\uc218\uc785\ub2c8\ub2e4. \uc774 type\uc740 \uc790\ub3d9\uc0dd\uc131\ub41c \ud30c\uc77c\uc5d0\uc11c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4: ",(0,i.mdx)("inlineCode",{parentName:"li"},"<mutationName>.graphql.js"),".",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"\uc774 \uc790\ub3d9 \uc0dd\uc131 type\uc740 ",(0,i.mdx)("inlineCode",{parentName:"li"},"MutationParameters"),"\ub97c \uad6c\ud604\ud569\ub2c8\ub2e4.")))),(0,i.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"\uc774 type \ub9e4\uac1c\ubcc0\uc218\ub97c ",(0,i.mdx)("strong",{parentName:"p"},"\uba85\uc2dc\uc801\uc73c\ub85c")," \uc804\ub2ec\ud558\uc9c0 \uc54a\uc73c\uba74 ",(0,i.mdx)("inlineCode",{parentName:"p"},"onCompleted"),"\uc5d0 \uc804\ub2ec\ub41c \ubcc0\uc218, optimistic \uc751\ub2f5 \ubc0f \uc751\ub2f5\uc758 ",(0,i.mdx)("strong",{parentName:"p"},"type \uc810\uac80\uc774 \ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"),"!"))),(0,i.mdx)("h3",{id:"return-value"},"Return Value"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"A ",(0,i.mdx)("a",{parentName:"li",href:"#interface-disposable"},(0,i.mdx)("inlineCode",{parentName:"a"},"Disposable"))," which:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"\uc694\uccad\uc774 \uc644\ub8cc\ub418\uae30 \uc804\uc5d0 \ud638\ucd9c\ub418\uba74, optimistic updates\ub97c \ucde8\uc18c\ud558\uace0 ",(0,i.mdx)("inlineCode",{parentName:"li"},"onComplete"),"\uacfc ",(0,i.mdx)("inlineCode",{parentName:"li"},"onError")," callback\uc774 \uc2e4\ud589\ub418\uc9c0 \uc54a\ub3c4\ub85d \ud569\ub2c8\ub2e4. \ub124\ud2b8\uc6cc\ud06c \uc694\uccad\uc744 \ucde8\uc18c\ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. ",(0,i.mdx)("inlineCode",{parentName:"li"},"onUnsubscribe")," callback\uc774 \ud638\ucd9c\ub418\ub3c4\ub85d \ud569\ub2c8\ub2e4."),(0,i.mdx)("li",{parentName:"ul"},"\ucd08\uae30 \uc694\uccad\uc774 \uc644\ub8cc\ub41c \ud6c4 \ud638\ucd9c\ub418\uba74 \uc544\ubb34 \uc791\uc5c5\ub3c4 \uc218\ud589\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")))),(0,i.mdx)(m.default,{mdxType:"Disposable"}),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}v.isMDXComponent=!0},55723:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>m,metadata:()=>d,toc:()=>p,default:()=>c});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),o=["components"],l={},m=void 0,d={unversionedId:"api-reference/types/CacheConfig",id:"version-v13.0.0/api-reference/types/CacheConfig",isDocsHomePage:!1,title:"CacheConfig",description:"Type CacheConfig",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/CacheConfig.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/CacheConfig",permalink:"/docs/api-reference/types/CacheConfig",editUrl:"https://seonjakim.github.io/relay.ko.dev/versioned_docs/version-v13.0.0/api-reference/types/CacheConfig.md",tags:[],version:"v13.0.0",lastUpdatedBy:"\uae40\uc120\uc790",lastUpdatedAt:1654500983,formattedLastUpdatedAt:"6/6/2022",frontMatter:{}},p=[{value:"Type <code>CacheConfig</code>",id:"type-cacheconfig",children:[],level:4}],s={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h4",{id:"type-cacheconfig"},"Type ",(0,i.mdx)("inlineCode",{parentName:"h4"},"CacheConfig")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"\ub2e4\uc74c \ud544\ub4dc\uac00 \uc788\ub294 \uac1d\uccb4:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"force"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," A boolean. \ucc38\uc778 \uacbd\uc6b0 \uad6c\uc131\ub41c \uc751\ub2f5 \uce90\uc2dc\uc758 \uc0c1\ud0dc\uc5d0 \uad00\uacc4\uc5c6\uc774 \ucffc\ub9ac\uac00 \ubb34\uc870\uac74 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"poll"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," A number. \uc9c0\uc815\ub41c \uac04\uaca9(\ubc00\ub9ac\ucd08)\uc73c\ub85c \ud3f4\ub9c1(polling)\ud558\uc5ec \ucffc\ub9ac\uac00 \uc2e4\uc2dc\uac04 \uc5c5\ub370\uc774\ud2b8\ub418\ub3c4\ub85d \ud569\ub2c8\ub2e4 (\uc774 \uac12\uc740 ",(0,i.mdx)("inlineCode",{parentName:"li"},"setTimeout"),"\uc5d0 \uc804\ub2ec\ub418\uac8c \ub429\ub2c8\ub2e4)."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"liveConfigId"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," A string. GraphQLLiveQuery\ub97c \ud638\ucd9c\ud558\uc5ec \ucffc\ub9ac\uac00 \uc2e4\uc2dc\uac04 \uc5c5\ub370\uc774\ud2b8\ub418\ub3c4\ub85d \ud569\ub2c8\ub2e4. \ub77c\uc774\ube0c \ucffc\ub9ac\ub97c \uc218\ud589\ud560 \ub54c \uac8c\uc774\ud2b8\uc6e8\uc774\uc758 \uad6c\uc131\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"metadata"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," An object. \uc0ac\uc6a9\uc790 \uc81c\uacf5 \uba54\ud0c0\ub370\uc774\ud130."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"transactionId"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," A string. \uc8fc\uc5b4\uc9c4 \uc791\uc5c5 \uc2e4\ud589 \uc778\uc2a4\ud134\uc2a4\uc5d0 \ub300\ud55c \uace0\uc720 ID\ub85c \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \uc0ac\uc6a9\uc790 \uc81c\uacf5 \uac12\uc785\ub2c8\ub2e4.")))))}c.isMDXComponent=!0},64070:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>m,metadata:()=>d,toc:()=>p,default:()=>c});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),o=["components"],l={},m=void 0,d={unversionedId:"api-reference/types/Disposable",id:"version-v13.0.0/api-reference/types/Disposable",isDocsHomePage:!1,title:"Disposable",description:"Interface Disposable",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/Disposable.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/Disposable",permalink:"/docs/api-reference/types/Disposable",editUrl:"https://seonjakim.github.io/relay.ko.dev/versioned_docs/version-v13.0.0/api-reference/types/Disposable.md",tags:[],version:"v13.0.0",lastUpdatedBy:"\uae40\uc120\uc790",lastUpdatedAt:1654051011,formattedLastUpdatedAt:"6/1/2022",frontMatter:{}},p=[{value:"Interface <code>Disposable</code>",id:"interface-disposable",children:[],level:4}],s={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h4",{id:"interface-disposable"},"Interface ",(0,i.mdx)("inlineCode",{parentName:"h4"},"Disposable")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"An object with the following key:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"dispose"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"() => void"),". Disposes of the resource.")))))}c.isMDXComponent=!0},43161:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>s,metadata:()=>c,toc:()=>u,default:()=>v});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),o=n(55723),l=n(88842),m=n(64912),d=["components"],p={},s=void 0,c={unversionedId:"api-reference/types/MutationConfig",id:"version-v13.0.0/api-reference/types/MutationConfig",isDocsHomePage:!1,title:"MutationConfig",description:"Type MutationConfig",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/MutationConfig.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/MutationConfig",permalink:"/docs/api-reference/types/MutationConfig",editUrl:"https://seonjakim.github.io/relay.ko.dev/versioned_docs/version-v13.0.0/api-reference/types/MutationConfig.md",tags:[],version:"v13.0.0",lastUpdatedBy:"\uae40\uc120\uc790",lastUpdatedAt:1654500983,formattedLastUpdatedAt:"6/6/2022",frontMatter:{}},u=[{value:"Type <code>MutationConfig&lt;TMutationConfig: MutationParameters&gt;</code>",id:"type-mutationconfigtmutationconfig-mutationparameters",children:[],level:4},{value:"Type <code>MutationParameters</code>",id:"type-mutationparameters",children:[],level:4}],f={toc:u};function v(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.mdx)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h4",{id:"type-mutationconfigtmutationconfig-mutationparameters"},"Type ",(0,i.mdx)("inlineCode",{parentName:"h4"},"MutationConfig<TMutationConfig: MutationParameters>")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"\ub2e4\uc74c\uacfc \uac19\uc740 \uc601\uc5ed\uc744 \uac00\uc9c4 \uac1d\uccb4:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"cacheConfig"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("a",{parentName:"li",href:"#type-cacheconfig"},(0,i.mdx)("inlineCode",{parentName:"a"},"CacheConfig"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"mutation"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"GraphQLTaggedNode"),". GraphQL \ub9ac\ud130\ub7f4\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc9c0\uc815\ub41c mutation"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"onError"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("inlineCode",{parentName:"li"},"(Error) => void"),". mutation \uacb0\uacfc\uac00 \uc5d0\ub7ec\uc77c \ub54c, \uc2e4\ud589\ub418\ub294 \uc120\ud0dd\uc801 \ucf5c\ubc31\uc785\ub2c8\ub2e4."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"onCompleted"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("inlineCode",{parentName:"li"},"($ElementType<TMutationConfig, 'response'>) => void"),". mutation\uc774 \uc644\ub8cc\ub420 \ub54c \uc2e4\ud589\ub418\ub294 \uc120\ud0dd\uc801 \ucf5c\ubc31\uc785\ub2c8\ub2e4."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"onUnsubscribe"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("inlineCode",{parentName:"li"},"() => void"),". mutation \uad6c\ub3c5\uc774 \ucde8\uc18c\ub420 \ub54c \uc2e4\ud589\ub418\ub294 \uc120\ud0dd\uc801 \ucf5c\ubc31\uc785\ub2c8\ub2e4. ",(0,i.mdx)("inlineCode",{parentName:"li"},"Disposable"),"\uc774 \ubc18\ud658\ub420 \ub54c, \uc0ad\uc81c\ub429\ub2c8\ub2e4."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"optimisticResponse"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," \uc720\ud615\uc774 mutation\uc758 \uc6d0\uc2dc \uc751\ub2f5 \uc720\ud615\uacfc \uc77c\uce58\ud558\ub294 \uac1d\uccb4\uc785\ub2c8\ub2e4. \uc774 \ud544\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 ",(0,i.mdx)("inlineCode",{parentName:"li"},"@raw_response_type"),"\ub85c mutation\uc744 \uc7a5\uc2dd\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"optimisticUpdater"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("a",{parentName:"li",href:"#type-selectorstoreupdater"},(0,i.mdx)("inlineCode",{parentName:"a"},"SelectorStoreUpdater")),". optimisticResponse\uac00 \uc2a4\ud1a0\uc5b4\ub85c \uc815\uaddc\ud654\ub41c \ud6c4, commitMutation\uc774 \ud638\ucd9c \ub420 \ub54c \uc2e4\ud589\ub418\ub294 \ucf5c\ubc31\uc785\ub2c8\ub2e4."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"updater"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("a",{parentName:"li",href:"#type-selectorstoreupdater"},(0,i.mdx)("inlineCode",{parentName:"a"},"SelectorStoreUpdater")),". \ud398\uc774\ub85c\ub4dc\uac00 \uc2a4\ud1a0\uc5b4\uc5d0 \uae30\ub85d\ub41c \ud6c4 \ud398\uc774\ub85c\ub4dc\uac00 \uc218\uc2e0\ub420 \ub54c \uc2e4\ud589\ub418\ub294 \ucf5c\ubc31\uc785\ub2c8\ub2e4."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"uploadables"),": ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("em",{parentName:"em"},"[Optional]"))," ",(0,i.mdx)("a",{parentName:"li",href:"#type-uploadablemap"},(0,i.mdx)("inlineCode",{parentName:"a"},"UploadableMap")),". \uc120\ud0dd\uc801 \uc5c5\ub85c\ub4dc \uac00\ub2a5\ud55c \uc9c0\ub3c4\uc785\ub2c8\ub2e4."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"variables"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"$ElementType<TMutationConfig, 'variables'>"),". mutation\uc5d0 \uc804\ub2ec\ud560 \ubcc0\uc218\uc785\ub2c8\ub2e4.")))),(0,i.mdx)(o.default,{mdxType:"CacheConfig"}),(0,i.mdx)(l.default,{mdxType:"SelectorStoreUpdater"}),(0,i.mdx)(m.default,{mdxType:"UploadableMap"}),(0,i.mdx)("h4",{id:"type-mutationparameters"},"Type ",(0,i.mdx)("inlineCode",{parentName:"h4"},"MutationParameters")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"An object with the following fields:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"response"),": An object"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"variables"),": An object"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"rawResponse"),": An optional object")))))}v.isMDXComponent=!0},88842:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>m,contentTitle:()=>d,metadata:()=>p,toc:()=>s,default:()=>u});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),o=n(44996),l=["components"],m={},d=void 0,p={unversionedId:"api-reference/types/SelectorStoreUpdater",id:"version-v13.0.0/api-reference/types/SelectorStoreUpdater",isDocsHomePage:!1,title:"SelectorStoreUpdater",description:"Type SelectorStoreUpdater",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/SelectorStoreUpdater.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/SelectorStoreUpdater",permalink:"/docs/api-reference/types/SelectorStoreUpdater",editUrl:"https://seonjakim.github.io/relay.ko.dev/versioned_docs/version-v13.0.0/api-reference/types/SelectorStoreUpdater.md",tags:[],version:"v13.0.0",lastUpdatedBy:"\uae40\uc120\uc790",lastUpdatedAt:1654500983,formattedLastUpdatedAt:"6/6/2022",frontMatter:{}},s=[{value:"Type <code>SelectorStoreUpdater</code>",id:"type-selectorstoreupdater",children:[],level:4}],c={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.mdx)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h4",{id:"type-selectorstoreupdater"},"Type ",(0,i.mdx)("inlineCode",{parentName:"h4"},"SelectorStoreUpdater")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"A function with signature ",(0,i.mdx)("inlineCode",{parentName:"li"},"(store: RecordSourceSelectorProxy, data) => void")),(0,i.mdx)("li",{parentName:"ul"},"\uc774 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\uba74 Relay store\uc5d0 ",(0,i.mdx)("em",{parentName:"li"},"\uc9c1\uc811")," \ub370\uc774\ud130\ub97c \uc4f0\uace0 \uc77d\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uad6c\ub3c5 \ud398\uc774\ub85c\ub4dc\uc5d0 \ub300\ud55c \uc751\ub2f5(response)\uc73c\ub85c store\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ubc29\ubc95\uc744 \uc644\uc804\ud788 \uc81c\uc5b4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4: ",(0,i.mdx)("em",{parentName:"li"},"\uc644\uc804\ud788 \uc0c8\ub85c\uc6b4 record\ub97c \uc0dd\uc131"),"\ud558\uac70\ub098 ",(0,i.mdx)("em",{parentName:"li"},"\uae30\uc874 record\ub97c \uc5c5\ub370\uc774\ud2b8 \ub610\ub294 \uc0ad\uc81c"),"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Relay store\ub97c \uc77d\uace0 \uc4f0\uae30 \uc704\ud55c \uc804\uccb4 API\ub294 ",(0,i.mdx)("a",{href:(0,o.default)("docs/api-reference/store/#recordsourceselectorproxy")},"\uc5ec\uae30"),"\uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))}u.isMDXComponent=!0},64912:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>m,metadata:()=>d,toc:()=>p,default:()=>c});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),o=["components"],l={},m=void 0,d={unversionedId:"api-reference/types/UploadableMap",id:"version-v13.0.0/api-reference/types/UploadableMap",isDocsHomePage:!1,title:"UploadableMap",description:"Type UploadableMap",source:"@site/versioned_docs/version-v13.0.0/api-reference/types/UploadableMap.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/UploadableMap",permalink:"/docs/api-reference/types/UploadableMap",editUrl:"https://seonjakim.github.io/relay.ko.dev/versioned_docs/version-v13.0.0/api-reference/types/UploadableMap.md",tags:[],version:"v13.0.0",lastUpdatedBy:"\uae40\uc120\uc790",lastUpdatedAt:1654051011,formattedLastUpdatedAt:"6/1/2022",frontMatter:{}},p=[{value:"Type <code>UploadableMap</code>",id:"type-uploadablemap",children:[],level:4}],s={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h4",{id:"type-uploadablemap"},"Type ",(0,i.mdx)("inlineCode",{parentName:"h4"},"UploadableMap")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"An object whose values are ",(0,i.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/File"},(0,i.mdx)("inlineCode",{parentName:"a"},"File"))," or ",(0,i.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob"},(0,i.mdx)("inlineCode",{parentName:"a"},"Blob")),".")))}c.isMDXComponent=!0}}]);