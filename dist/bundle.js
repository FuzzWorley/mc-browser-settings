!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.gon=t()}(this,function(){"use strict";var e=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),t=function(){var t={};return Object.entries(document.getElementsByTagName("head")[0].dataset).forEach(function(n){var r=e(n,2),o=r[0],i=r[1];try{t[o]=JSON.parse(i)}catch(e){t[o]=i}}),t}();!function(){var e=function(e){document.documentElement.className+=" "+e},n=function(t,n,r){var o=void 0;o=t===!0?n:r,e(o)};n(!1,"ie9","no-ie9"),n(t.browserMobile,"mobile-device","no-mobile-device"),n(t.browserTablet,"tablet","no-tablet"),n(t.browserIe,"ie","no-ie"),n(t.browserIe11,"ie11","no-ie11")}();return t});
