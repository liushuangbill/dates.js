!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tools=t():e.tools=t()}(this,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=+e;return t-t==0&&(t===e||"string"==typeof e&&(0!==t||""!==e.trim()))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=r(0),u=(o=n)&&o.__esModule?o:{default:o};t.default=function(e,t){t=t||new Date;var r=(0,u.default)(e)?+e:new Date(e).getTime(),o=(0,u.default)(t)?+t:new Date(t).getTime();if(!(0,u.default)(r))throw new Error("argv[0] can not convert to Date");if(!(0,u.default)(o))throw new Error("argv[1] can not convert to Date");if(o<r)throw new Error("grav[1] must > grgv[0]");var n=o-r,f=Math.floor(n/1e3),a=Math.floor(n/6e4),i=Math.floor(n/36e5),l=Math.floor(n/864e5),c=Math.floor(n/2592e6),d=Math.floor(n/31536e6);return 0===f?"刚刚":f<60?f+"秒以前":a<60?a+"分钟以前":i<24?i+"小时以前":l<30?l+"天以前":c<12?c+"个月以前":d+"年以前"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isNumber=t.fromNow=void 0;var o=u(r(1)),n=u(r(0));function u(e){return e&&e.__esModule?e:{default:e}}t.fromNow=o.default,t.isNumber=n.default}])});