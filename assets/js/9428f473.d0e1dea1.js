(self.webpackChunk=self.webpackChunk||[]).push([[65820],{3905:(e,t,r)=>{"use strict";r.r(t),r.d(t,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),p=function(e){return function(t){var r=u(t.components);return n.createElement(e,a({},t,{components:r}))}},u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),c=o,g=p["".concat(i,".").concat(c)]||p[c]||m[c]||a;return r?n.createElement(g,l(l({ref:t},d),{},{components:r})):n.createElement(g,l({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},81331:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>p,default:()=>c});var n=r(74034),o=r(79973),a=(r(67294),r(3905)),i=["components"],l={id:"relay-debugging",title:"Debugging",original_id:"relay-debugging"},s=void 0,d={unversionedId:"relay-debugging",id:"version-v3.0.0/relay-debugging",isDocsHomePage:!1,title:"Debugging",description:"If you're new to Relay, we provide some basic debugging strategies that should serve to help you clarify key concepts as you build your app. Alternatively, Relay provides a couple of tools to inspect the store and its records.",source:"@site/versioned_docs/version-v3.0.0/Modern-Debugging.md",sourceDirName:".",slug:"/relay-debugging",permalink:"/relay.ko.dev/docs/v3.0.0/relay-debugging",editUrl:"https://seonjakim.github.io/relay.ko.dev/versioned_docs/version-v3.0.0/Modern-Debugging.md",tags:[],version:"v3.0.0",lastUpdatedBy:"\uae40\uc120\uc790",lastUpdatedAt:1654051011,formattedLastUpdatedAt:"6/1/2022",frontMatter:{id:"relay-debugging",title:"Debugging",original_id:"relay-debugging"},sidebar:"version-v3.0.0/docs",previous:{title:"Routing",permalink:"/relay.ko.dev/docs/v3.0.0/routing"},next:{title:"GraphQL Server Specification",permalink:"/relay.ko.dev/docs/v3.0.0/graphql-server-specification"}},p=[{value:"Strategies",id:"strategies",children:[],level:2},{value:"Tools",id:"tools",children:[],level:2}],u={toc:p};function c(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"If you're new to Relay, we provide some basic debugging strategies that should serve to help you clarify key concepts as you build your app. Alternatively, Relay provides a couple of tools to inspect the store and its records."),(0,a.mdx)("h2",{id:"strategies"},"Strategies"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Given:")," You've properly setup your schema on the backend and React on the frontend. You've read through the documents but can't seem to identify what's wrong with your code. You've even done a number of searches but can't find the answer you're looking for."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"A few questions to ask yourself:")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("em",{parentName:"li"},"Is my ",(0,a.mdx)("a",{parentName:"em",href:"/relay.ko.dev/docs/v3.0.0/installation-and-setup#set-up-relay-compiler"},"compilation")," up-to-date?")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("em",{parentName:"li"},"Is my query valid?")," You can test this on your GraphiQL endpoint.")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"If so:")),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Put your entire query at the top-level (your ",(0,a.mdx)("inlineCode",{parentName:"li"},"QueryRenderer"),") and comment out all fragment containers. Pass the data through your component hierarchy down to the components that were using fragments."),(0,a.mdx)("li",{parentName:"ol"},"If your app isn't rendering properly, use ",(0,a.mdx)("inlineCode",{parentName:"li"},"console.log(props);")," for every component to see the props you are actually passing."),(0,a.mdx)("li",{parentName:"ol"},"Once your app is rendering, uncomment the deepest fragment container and add that fragment back to your top-level query. Everything should still render. If not, use ",(0,a.mdx)("inlineCode",{parentName:"li"},"console.log(props);")," again."),(0,a.mdx)("li",{parentName:"ol"},"Continue uncommenting fragments and confirming that your app renders until your top-level query is as desired."),(0,a.mdx)("li",{parentName:"ol"},"If this still fails, come back to your code later and try debugging with a fresh mind. Additionally, you can ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/facebook/relay/issues/new"},"post an issue")," and someone should get back to you hopefully within a few days.")),(0,a.mdx)("h2",{id:"tools"},"Tools"),(0,a.mdx)("p",null,"Relay DevTools is tool designed to help developers inspect their Relay state and understand how store changes overtime. Relay DevTools ships in two ways:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/relay-developer-tools/ncedobpgnmkhcmnnkcimnobpfepidadl"},"Chrome Extension")," creates a Relay tab in the developer tools interface for debugging apps in Chrome")),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"Store Explorer",src:r(1652).Z}),"\n",(0,a.mdx)("img",{alt:"Mutations View",src:r(5962).Z})))}c.isMDXComponent=!0},5962:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/mutations-view-updated-7276d604978d51cdc3235bd101de9d20.png"},1652:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/store-explorer-updated-430481ab45a7a12bdf16aab730f6c27f.png"}}]);