(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66],{8482:function(t,e,r){"use strict";r.d(e,{E:function(){return d},d:function(){return h}});var n=r(63),o=r(8629),a=r(5505),c=r(3808),i=r(7294),l=r(8327);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}var f=i.forwardRef(((t,e)=>{var{htmlWidth:r,htmlHeight:n,alt:o}=t,a=u(t,["htmlWidth","htmlHeight","alt"]);return i.createElement("img",s({width:r,height:n,ref:e,alt:o},a))})),d=(0,n.G)(((t,e)=>{var{fallbackSrc:r,fallback:n,src:c,align:d,fit:h,loading:g,ignoreFallback:p,crossOrigin:m}=t,b=u(t,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),v=null!=g||p,O=function(t){var{src:e,srcSet:r,onLoad:n,onError:o,crossOrigin:a,sizes:c,ignoreFallback:s}=t,[u,f]=(0,i.useState)("pending");(0,i.useEffect)((()=>{f(e?"loading":"pending")}),[e]);var d=(0,i.useRef)(),h=(0,i.useCallback)((()=>{if(e){g();var t=new Image;t.src=e,a&&(t.crossOrigin=a),r&&(t.srcset=r),c&&(t.sizes=c),t.onload=t=>{g(),f("loaded"),null==n||n(t)},t.onerror=t=>{g(),f("failed"),null==o||o(t)},d.current=t}}),[e,a,r,c,n,o]),g=()=>{d.current&&(d.current.onload=null,d.current.onerror=null,d.current=null)};return(0,l.G)((()=>{if(!s)return"loading"===u&&h(),()=>{g()}}),[u,h,s]),s?"loaded":u}(s({},t,{ignoreFallback:v})),y=s({ref:e,objectFit:h,objectPosition:d},v?b:(0,a.CE)(b,["onError","onLoad"]));return"loaded"!==O?n||i.createElement(o.m$.img,s({as:f,className:"chakra-image__placeholder",src:r},y)):i.createElement(o.m$.img,s({as:f,src:c,crossOrigin:m,loading:g,className:"chakra-image"},y))})),h=(0,n.G)(((t,e)=>i.createElement(o.m$.img,s({ref:e,as:f,className:"chakra-image"},t))));c.Ts&&(d.displayName="Image")},1805:function(t,e,r){"use strict";var n=r(2809),o=r(3123),a=(r(7294),r(6269)),c=r(9583),i=r(5893);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.Z=function(t){var e=(0,a.Z)({}).handleClick,r=t.Nextpath;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.z,s(s({fontSize:"lg",py:"6",w:"full",variant:"black",rightIcon:(0,i.jsx)(c.Z1Y,{}),onClick:function(){e({nextPagePath:r,isCorrect:!0,NotShowToast:!0})},variantColor:"green"},t),{},{children:"\u6b21\u306e\u30b9\u30c6\u30fc\u30b8\u306b\u79fb\u52d5"}))})}},6269:function(t,e,r){"use strict";var n=r(1163),o=r(980);e.Z=function(t){var e=(0,n.useRouter)(),r=(0,o.useToast)(),a=t.nextPage;return{handleClick:function(t){t.isCorrect?(t.NotShowToast||r({title:t.CorrecttoastTitle||"\u6b63\u89e3\u3067\u3059!!!!!!!",description:t.CorrecttoastBody||null,status:"success",duration:3e3,isClosable:!0}),t.notPush&&(t.notPush||!t.nextPagePath&&!a)||e.push(t.nextPagePath||a)):r({title:"\u7b54\u3048\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059",description:"\u3082\u3046\u4e00\u5ea6\u8003\u3048\u3066\u307f\u307e\u3057\u3087\u3046",status:"error",duration:4e3,isClosable:!0})}}}},1847:function(t,e,r){"use strict";r.r(e),r.d(e,{Home:function(){return s}});var n=r(8482),o=r(8017),a=r(4115),c=r(336),i=(r(7294),r(1805)),l=r(5893),s=function(){return(0,l.jsxs)("div",{children:[(0,l.jsxs)(o.xu,{py:"4",children:[(0,l.jsxs)(a.x,{children:["STAGE:1 \u30af\u30ea\u30a2! \u7b54\u3048\u306f\u300c\u3046\u307e\u300d ",(0,l.jsx)("br",{}),"\u99ac\u306e\u990c\u306b\u3057\u3066\u3044\u305f\u716e\u8c46\u3092\u308f\u3089\u3067\u5305\u3093\u3067\u6301\u3061\u6b69\u3044\u3066\u3044\u305f\u3089\u3001\u6e29\u307e\u3063\u3066\u767a\u9175\u3057\u3001\u7cf8\u3092\u5f15\u3044\u3066\u3044\u307e\u3057\u305f\u3002\u8a66\u3057\u306b\u98df\u3079\u3066\u307f\u305f\u3089\u7f8e\u5473\u3057\u304b\u3063\u305f\u305f\u3081\u3001\u7d0d\u8c46\u304c\u3067\u304d\u305f\u3068\u8a00\u308f\u308c\u3066\u3044\u307e\u3059\u3002 \u5de5\u5834\u306e\u5730\u56f3\u3092\u624b\u306b\u5165\u308c\u308b\u3053\u3068\u304c\u3067\u304d\u305f\uff01 \u5de5\u5834\u3092\u51fa\u308b\u306b\u306f\u3001\u5168\u3066\u306e\u30eb\u30fc\u30c8\u3092\u901a\u3089\u306a\u304f\u3066\u306f\u3044\u3051\u306a\u3044\uff01 \u6025\u3044\u3067\u51fa\u53e3\u306b\u5411\u304b\u304a\u3046\uff01"]}),(0,l.jsx)(c.X,{children:"\u5de5\u5834\u306e\u5730\u56f3"}),(0,l.jsx)(n.d,{src:"/beta-yokohma-a-mochi"})]}),(0,l.jsx)(i.Z,{Nextpath:"/page2"})]})};e.default=s},5744:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stage_clear/1",function(){return r(1847)}])},4405:function(t,e,r){"use strict";r.d(e,{w_:function(){return s}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),c=function(){return(c=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},i=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r};function l(t){return t&&t.map((function(t,e){return n.createElement(t.tag,c({key:e},t.attr),l(t.child))}))}function s(t){return function(e){return n.createElement(u,c({attr:c({},t.attr)},e),l(t.child))}}function u(t){var e=function(e){var r,o=t.attr,a=t.size,l=t.title,s=i(t,["attr","size","title"]),u=a||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,s,{className:r,style:c(c({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),t.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(t){return e(t)})):e(o)}}},function(t){t.O(0,[774,445,398,888,179],(function(){return e=5744,t(t.s=e);var e}));var e=t.O();_N_E=e}]);