(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66],{8482:function(e,r,t){"use strict";t.d(r,{E:function(){return g},d:function(){return d}});var n=t(63),a=t(8629),i=t(5505),o=t(3808),c=t(7294),s=t(8327);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}var f=c.forwardRef(((e,r)=>{var{htmlWidth:t,htmlHeight:n,alt:a}=e,i=u(e,["htmlWidth","htmlHeight","alt"]);return c.createElement("img",l({width:t,height:n,ref:r,alt:a},i))})),g=(0,n.G)(((e,r)=>{var{fallbackSrc:t,fallback:n,src:o,align:g,fit:d,loading:h,ignoreFallback:p,crossOrigin:b}=e,m=u(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),O=null!=h||p,j=function(e){var{src:r,srcSet:t,onLoad:n,onError:a,crossOrigin:i,sizes:o,ignoreFallback:l}=e,[u,f]=(0,c.useState)("pending");(0,c.useEffect)((()=>{f(r?"loading":"pending")}),[r]);var g=(0,c.useRef)(),d=(0,c.useCallback)((()=>{if(r){h();var e=new Image;e.src=r,i&&(e.crossOrigin=i),t&&(e.srcset=t),o&&(e.sizes=o),e.onload=e=>{h(),f("loaded"),null==n||n(e)},e.onerror=e=>{h(),f("failed"),null==a||a(e)},g.current=e}}),[r,i,t,o,n,a]),h=()=>{g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return(0,s.G)((()=>{if(!l)return"loading"===u&&d(),()=>{h()}}),[u,d,l]),l?"loaded":u}(l({},e,{ignoreFallback:O})),v=l({ref:r,objectFit:d,objectPosition:g},O?m:(0,i.CE)(m,["onError","onLoad"]));return"loaded"!==j?n||c.createElement(a.m$.img,l({as:f,className:"chakra-image__placeholder",src:t},v)):c.createElement(a.m$.img,l({as:f,src:o,crossOrigin:b,loading:h,className:"chakra-image"},v))})),d=(0,n.G)(((e,r)=>c.createElement(a.m$.img,l({ref:r,as:f,className:"chakra-image"},e))));o.Ts&&(g.displayName="Image")},1805:function(e,r,t){"use strict";var n=t(2809),a=t(3123),i=(t(7294),t(6269)),o=t(5893);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){var r=(0,i.Z)({}).handleClick,t=e.Nextpath;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.z,s(s({w:"full",variant:"black",onClick:function(){r({nextPagePath:t,isCorrect:!0,NotShowToast:!0})},variantColor:"green"},e),{},{children:"\u6b21\u306e\u30b9\u30c6\u30fc\u30b8\u306b\u884c\u304f"}))})}},6269:function(e,r,t){"use strict";var n=t(1163),a=t(980);r.Z=function(e){var r=(0,n.useRouter)(),t=(0,a.useToast)(),i=e.nextPage;return{handleClick:function(e){e.isCorrect?(e.NotShowToast||t({title:e.CorrecttoastTitle||"\u6b63\u89e3\u3067\u3059\u6b21\u306e\u554f\u984c\u306b\u884c\u304d\u307e\u3057\u3087\u3046",description:e.CorrecttoastBody||"You have successfully completed this page",status:"success",duration:3e3,isClosable:!0}),e.notPush&&(e.notPush||!e.nextPagePath&&!i)||r.push(e.nextPagePath||i)):t({title:"\u7b54\u3048\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059",description:"\u3082\u3046\u4e00\u5ea6\u8003\u3048\u3066\u307f\u307e\u3057\u3087\u3046",status:"error",duration:4e3,isClosable:!0})}}}},1847:function(e,r,t){"use strict";t.r(r),t.d(r,{Home:function(){return l}});var n=t(8482),a=t(8017),i=t(4115),o=t(336),c=(t(7294),t(1805)),s=t(5893),l=function(){return(0,s.jsxs)("div",{children:[(0,s.jsxs)(a.xu,{py:"4",children:[(0,s.jsxs)(i.x,{children:["STAGE:1 \u30af\u30ea\u30a2! \u7b54\u3048\u306f\u300c\u3046\u307e\u300d ",(0,s.jsx)("br",{}),"\u99ac\u306e\u990c\u306b\u3057\u3066\u3044\u305f\u716e\u8c46\u3092\u85c1\u3067\u5305\u3093\u3067\u6301\u3061\u6b69\u3044\u3066\u3044\u305f\u3089\u3001\u6e29\u307e\u3063\u3066\u767a\u9175\u3057\u3001\u7cf8\u3092\u5f15\u3044\u3066\u3044\u307e\u3057\u305f\u3002\u8a66"," ",(0,s.jsx)("br",{}),"\u3057\u306b\u98df\u3079\u3066\u307f\u305f\u3089\u7f8e\u5473\u3057\u304b\u3063\u305f\u305f\u3081\u3001 \u5de5\u5834\u306e\u5730\u56f3\u3092\u624b\u306b\u5165\u308c\u308b\u3053\u3068\u304c\u3067\u304d\u305f!"," ",(0,s.jsx)("br",{}),"\u51fa\u53e3\u306b\u5411\u304b\u304a\u3046!"]}),(0,s.jsx)(o.X,{children:"\u5de5\u5834\u306e\u5730\u56f3"}),(0,s.jsx)(n.d,{src:"/StageAssets/image2.png"})]}),(0,s.jsx)(c.Z,{Nextpath:"/page2"})]})};r.default=l},5744:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stage_clear/1",function(){return t(1847)}])}},function(e){e.O(0,[774,398,888,179],(function(){return r=5744,e(e.s=r);var r}));var r=e.O();_N_E=r}]);