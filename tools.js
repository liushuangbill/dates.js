!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.tools=e():t.tools=e()}(this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var n=function(t){var e=+t;return e-e==0&&(e===t||"string"==typeof t&&(0!==e||""!==t.trim()))};var o=function(t,e){e=e||new Date;var r=n(t)?+t:new Date(t).getTime(),o=n(e)?+e:new Date(e).getTime();if(!n(r))throw new TypeError("argv[0] can not convert to Date");if(!n(o))throw new TypeError("argv[1] can not convert to Date");if(o<r)throw new Error("grav[1] must > grgv[0]");var a=o-r,i=Math.floor(a/1e3),u=Math.floor(a/6e4),c=Math.floor(a/36e5),f=Math.floor(a/864e5),l=Math.floor(a/2592e6),p=Math.floor(a/31536e6);return 0===i?"刚刚":i<60?"".concat(i,"秒以前"):u<60?"".concat(u,"分钟以前"):c<24?"".concat(c,"小时以前"):f<30?"".concat(f,"天以前"):l<12?"".concat(l,"个月以前"):"".concat(p,"年以前")};var a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD hh:mm";t=isNaN(Number(t))?t:Number(t);var r=new Date(t).getTime();if(!n(r))throw new TypeError("argv[0] can not convert to Date");if("string"!=typeof e)throw new TypeError("argv[1] it must be string");var o=new Date(r),a={"y+":String(o.getFullYear()),"M+":String(o.getMonth()+1).padStart(2,0),"d+":String(o.getDate()).padStart(2,0),"h+":String(o.getHours()).padStart(2,0),"m+":String(o.getMinutes()).padStart(2,0),"s+":String(o.getSeconds()).padStart(2,0)};return Object.keys(a).forEach(function(t){e="m+"===t||"M+"===t?e.replace(new RegExp(t,"g"),a[t]):e.replace(new RegExp(t,"gi"),a[t])}),e};r.d(e,"fromNow",function(){return i}),r.d(e,"isNumber",function(){return u}),r.d(e,"format",function(){return c});var i=o,u=n,c=a}])});