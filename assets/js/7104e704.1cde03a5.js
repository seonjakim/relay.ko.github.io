(self.webpackChunk=self.webpackChunk||[]).push([[95118],{3905:(e,t,r)=>{"use strict";r.r(t),r.d(t,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>s});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){return function(t){var r=u(t.components);return n.createElement(e,a({},t,{components:r}))}},u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,m=s["".concat(i,".").concat(d)]||s[d]||f[d]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>o})},44996:(e,t,r)=>{"use strict";r.r(t),r.d(t,{useBaseUrlUtils:()=>a,default:()=>i});var n=r(52263),o=r(13919);function a(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,c=void 0!==i&&i,l=a.absolute,p=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(c)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return p?e+s:s}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},1067:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>u,default:()=>f});var n=r(74034),o=r(79973),a=(r(67294),r(3905)),i=r(44996),c=["components"],l={},p=void 0,s={unversionedId:"api-reference/types/SelectorStoreUpdater",id:"api-reference/types/SelectorStoreUpdater",isDocsHomePage:!1,title:"SelectorStoreUpdater",description:"Type SelectorStoreUpdater",source:"@site/docs/api-reference/types/SelectorStoreUpdater.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/SelectorStoreUpdater",permalink:"/relay.ko.dev/docs/next/api-reference/types/SelectorStoreUpdater",editUrl:"https://seonjakim.github.io/relay.ko.dev/docs/api-reference/types/SelectorStoreUpdater.md",tags:[],version:"current",lastUpdatedBy:"\uae40\uc120\uc790",lastUpdatedAt:1654051011,formattedLastUpdatedAt:"6/1/2022",frontMatter:{}},u=[{value:"Type <code>SelectorStoreUpdater</code>",id:"type-selectorstoreupdater",children:[],level:4}],d={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.mdx)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h4",{id:"type-selectorstoreupdater"},"Type ",(0,a.mdx)("inlineCode",{parentName:"h4"},"SelectorStoreUpdater")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"A function with signature ",(0,a.mdx)("inlineCode",{parentName:"li"},"(store: RecordSourceSelectorProxy, data) => void")),(0,a.mdx)("li",{parentName:"ul"},"This interface allows you to ",(0,a.mdx)("em",{parentName:"li"},"imperatively")," write and read data directly to and from the Relay store. This means that you have full control over how to update the store in response to the subscription payload: you can ",(0,a.mdx)("em",{parentName:"li"},"create entirely new records"),", or ",(0,a.mdx)("em",{parentName:"li"},"update or delete existing ones"),". The full API for reading and writing to the Relay store is available ",(0,a.mdx)("a",{href:(0,i.default)("docs/api-reference/store/#recordsourceselectorproxy")},"here"),".")))}f.isMDXComponent=!0}}]);