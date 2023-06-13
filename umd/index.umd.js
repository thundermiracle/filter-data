!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).FilterData={})}(this,(function(t){"use strict";var n;!function(t){t.EQ="equal",t.GT="greater",t.GTE="greaterorequal",t.LT="less",t.LTE="lessorequal",t.LK="like",t.NE="notequal",t.NLK="notlike"}(n||(n={}));var r=n,e=function(){return e=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var u in n=arguments[r])Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u]);return t},e.apply(this,arguments)};function u(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function o(t){return function n(r){return 0===arguments.length||u(r)?n:t.apply(this,arguments)}}function i(t){return function n(r,e){switch(arguments.length){case 0:return n;case 1:return u(r)?n:o((function(n){return t(r,n)}));default:return u(r)&&u(e)?n:u(r)?o((function(n){return t(n,e)})):u(e)?o((function(n){return t(r,n)})):t(r,e)}}}function c(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,r){return n.apply(this,arguments)};case 3:return function(t,r,e){return n.apply(this,arguments)};case 4:return function(t,r,e,u){return n.apply(this,arguments)};case 5:return function(t,r,e,u,o){return n.apply(this,arguments)};case 6:return function(t,r,e,u,o,i){return n.apply(this,arguments)};case 7:return function(t,r,e,u,o,i,c){return n.apply(this,arguments)};case 8:return function(t,r,e,u,o,i,c,a){return n.apply(this,arguments)};case 9:return function(t,r,e,u,o,i,c,a,f){return n.apply(this,arguments)};case 10:return function(t,r,e,u,o,i,c,a,f,s){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function a(t,n,r){return function(){for(var e=[],o=0,i=t,f=0;f<n.length||o<arguments.length;){var s;f<n.length&&(!u(n[f])||o>=arguments.length)?s=n[f]:(s=arguments[o],o+=1),e[f]=s,u(s)||(i-=1),f+=1}return i<=0?r.apply(this,e):c(i,a(t,e,r))}}var f=i((function(t,n){return 1===t?o(n):c(t,a(t,[],n))}));function s(t){return function n(r,e,c){switch(arguments.length){case 0:return n;case 1:return u(r)?n:i((function(n,e){return t(r,n,e)}));case 2:return u(r)&&u(e)?n:u(r)?i((function(n,r){return t(n,e,r)})):u(e)?i((function(n,e){return t(r,n,e)})):o((function(n){return t(r,e,n)}));default:return u(r)&&u(e)&&u(c)?n:u(r)&&u(e)?i((function(n,r){return t(n,r,c)})):u(r)&&u(c)?i((function(n,r){return t(n,e,r)})):u(e)&&u(c)?i((function(n,e){return t(r,n,e)})):u(r)?o((function(n){return t(n,e,c)})):u(e)?o((function(n){return t(r,n,c)})):u(c)?o((function(n){return t(r,e,n)})):t(r,e,c)}}}var l=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)};function p(t,n,r){return function(){if(0===arguments.length)return r();var e=arguments[arguments.length-1];if(!l(e)){for(var u=0;u<t.length;){if("function"==typeof e[t[u]])return e[t[u]].apply(e,Array.prototype.slice.call(arguments,0,-1));u+=1}if(function(t){return null!=t&&"function"==typeof t["@@transducer/step"]}(e))return n.apply(null,Array.prototype.slice.call(arguments,0,-1))(e)}return r.apply(this,arguments)}}var y=function(){return this.xf["@@transducer/init"]()},h=function(t){return this.xf["@@transducer/result"](t)};function g(t){for(var n,r=[];!(n=t.next()).done;)r.push(n.value);return r}function d(t,n,r){for(var e=0,u=r.length;e<u;){if(t(n,r[e]))return!0;e+=1}return!1}function v(t,n){return Object.prototype.hasOwnProperty.call(n,t)}var b="function"==typeof Object.is?Object.is:function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n},j=Object.prototype.toString,m=function(){return"[object Arguments]"===j.call(arguments)?function(t){return"[object Arguments]"===j.call(t)}:function(t){return v("callee",t)}}(),S=!{toString:null}.propertyIsEnumerable("toString"),A=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],O=function(){return arguments.propertyIsEnumerable("length")}(),w=function(t,n){for(var r=0;r<t.length;){if(t[r]===n)return!0;r+=1}return!1},x="function"!=typeof Object.keys||O?o((function(t){if(Object(t)!==t)return[];var n,r,e=[],u=O&&m(t);for(n in t)!v(n,t)||u&&"length"===n||(e[e.length]=n);if(S)for(r=A.length-1;r>=0;)v(n=A[r],t)&&!w(e,n)&&(e[e.length]=n),r-=1;return e})):o((function(t){return Object(t)!==t?[]:Object.keys(t)})),U=o((function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)}));function k(t,n,r,e){var u=g(t);function o(t,n){return T(t,n,r.slice(),e.slice())}return!d((function(t,n){return!d(o,n,t)}),g(n),u)}function T(t,n,r,e){if(b(t,n))return!0;var u,o,i=U(t);if(i!==U(n))return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof n["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](n)&&"function"==typeof n["fantasy-land/equals"]&&n["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof n.equals)return"function"==typeof t.equals&&t.equals(n)&&"function"==typeof n.equals&&n.equals(t);switch(i){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===(u=t.constructor,null==(o=String(u).match(/^function (\w*)/))?"":o[1]))return t===n;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof n||!b(t.valueOf(),n.valueOf()))return!1;break;case"Date":if(!b(t.valueOf(),n.valueOf()))return!1;break;case"Error":return t.name===n.name&&t.message===n.message;case"RegExp":if(t.source!==n.source||t.global!==n.global||t.ignoreCase!==n.ignoreCase||t.multiline!==n.multiline||t.sticky!==n.sticky||t.unicode!==n.unicode)return!1}for(var c=r.length-1;c>=0;){if(r[c]===t)return e[c]===n;c-=1}switch(i){case"Map":return t.size===n.size&&k(t.entries(),n.entries(),r.concat([t]),e.concat([n]));case"Set":return t.size===n.size&&k(t.values(),n.values(),r.concat([t]),e.concat([n]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var a=x(t);if(a.length!==x(n).length)return!1;var f=r.concat([t]),s=e.concat([n]);for(c=a.length-1;c>=0;){var l=a[c];if(!v(l,n)||!T(n[l],t[l],f,s))return!1;c-=1}return!0}var C=i((function(t,n){return T(t,n,[],[])}));function N(t,n){return function(t,n,r){var e,u;if("function"==typeof t.indexOf)switch(typeof n){case"number":if(0===n){for(e=1/n;r<t.length;){if(0===(u=t[r])&&1/u===e)return r;r+=1}return-1}if(n!=n){for(;r<t.length;){if("number"==typeof(u=t[r])&&u!=u)return r;r+=1}return-1}return t.indexOf(n,r);case"string":case"boolean":case"function":case"undefined":return t.indexOf(n,r);case"object":if(null===n)return t.indexOf(n,r)}for(;r<t.length;){if(C(t[r],n))return r;r+=1}return-1}(n,t,0)>=0}function E(t,n){for(var r=0,e=n.length,u=Array(e);r<e;)u[r]=t(n[r]),r+=1;return u}function q(t){return'"'+t.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\f/g,"\\f").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/\0/g,"\\0").replace(/"/g,'\\"')+'"'}var I=function(t){return(t<10?"0":"")+t},L="function"==typeof Date.prototype.toISOString?function(t){return t.toISOString()}:function(t){return t.getUTCFullYear()+"-"+I(t.getUTCMonth()+1)+"-"+I(t.getUTCDate())+"T"+I(t.getUTCHours())+":"+I(t.getUTCMinutes())+":"+I(t.getUTCSeconds())+"."+(t.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"};function D(t,n,r){for(var e=0,u=r.length;e<u;)n=t(n,r[e]),e+=1;return n}var F=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=y,t.prototype["@@transducer/result"]=h,t.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.xf["@@transducer/step"](t,n):t},t}();function M(t){return function(n){return new F(t,n)}}var P=i(p(["fantasy-land/filter","filter"],M,(function(t,n){return r=n,"[object Object]"===Object.prototype.toString.call(r)?D((function(r,e){return t(n[e])&&(r[e]=n[e]),r}),{},x(n)):function(t,n){for(var r=0,e=n.length,u=[];r<e;)t(n[r])&&(u[u.length]=n[r]),r+=1;return u}(t,n);var r}))),B=i((function(t,n){return P((r=t,function(){return!r.apply(this,arguments)}),n);var r}));function z(t,n){var r=function(r){var e=n.concat([t]);return N(r,e)?"<Circular>":z(r,e)},e=function(t,n){return E((function(n){return q(n)+": "+r(t[n])}),n.slice().sort())};switch(Object.prototype.toString.call(t)){case"[object Arguments]":return"(function() { return arguments; }("+E(r,t).join(", ")+"))";case"[object Array]":return"["+E(r,t).concat(e(t,B((function(t){return/^\d+$/.test(t)}),x(t)))).join(", ")+"]";case"[object Boolean]":return"object"==typeof t?"new Boolean("+r(t.valueOf())+")":t.toString();case"[object Date]":return"new Date("+(isNaN(t.valueOf())?r(NaN):q(L(t)))+")";case"[object Map]":return"new Map("+r(Array.from(t))+")";case"[object Null]":return"null";case"[object Number]":return"object"==typeof t?"new Number("+r(t.valueOf())+")":1/t==-1/0?"-0":t.toString(10);case"[object Set]":return"new Set("+r(Array.from(t).sort())+")";case"[object String]":return"object"==typeof t?"new String("+r(t.valueOf())+")":q(t);case"[object Undefined]":return"undefined";default:if("function"==typeof t.toString){var u=t.toString();if("[object Object]"!==u)return u}return"{"+e(t,x(t)).join(", ")+"}"}}var G=o((function(t){return z(t,[])})),K=i((function(t,n){if(t===n)return n;function r(t,n){if(t>n!=n>t)return n>t?n:t}var e=r(t,n);if(void 0!==e)return e;var u=r(typeof t,typeof n);if(void 0!==u)return u===typeof t?t:n;var o=G(t),i=r(o,G(n));return void 0!==i&&i===o?t:n})),R=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=y,t.prototype["@@transducer/result"]=h,t.prototype["@@transducer/step"]=function(t,n){return this.xf["@@transducer/step"](t,this.f(n))},t}(),Q=i(p(["fantasy-land/map","map"],(function(t){return function(n){return new R(t,n)}}),(function(t,n){switch(Object.prototype.toString.call(n)){case"[object Function]":return f(n.length,(function(){return t.call(this,n.apply(this,arguments))}));case"[object Object]":return D((function(r,e){return r[e]=t(n[e]),r}),{},x(n));default:return E(t,n)}}))),H=Number.isInteger||function(t){return t<<0===t};function W(t){return"[object String]"===Object.prototype.toString.call(t)}var X=i((function(t,n){var r=t<0?n.length+t:t;return W(n)?n.charAt(r):n[r]})),Y=i((function(t,n){if(null!=n)return H(t)?X(t,n):n[t]})),Z=i((function(t,n){return Q(Y(t),n)})),$=o((function(t){return!!l(t)||!!t&&("object"==typeof t&&(!W(t)&&(0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})),_="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function J(t,n,r){return function(e,u,o){if($(o))return t(e,u,o);if(null==o)return u;if("function"==typeof o["fantasy-land/reduce"])return n(e,u,o,"fantasy-land/reduce");if(null!=o[_])return r(e,u,o[_]());if("function"==typeof o.next)return r(e,u,o);if("function"==typeof o.reduce)return n(e,u,o,"reduce");throw new TypeError("reduce: list must be array or iterable")}}function V(t,n,r){for(var e=0,u=r.length;e<u;){if((n=t["@@transducer/step"](n,r[e]))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e+=1}return t["@@transducer/result"](n)}var tt=i((function(t,n){return c(t.length,(function(){return t.apply(n,arguments)}))}));function nt(t,n,r){for(var e=r.next();!e.done;){if((n=t["@@transducer/step"](n,e.value))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e=r.next()}return t["@@transducer/result"](n)}function rt(t,n,r,e){return t["@@transducer/result"](r[e](tt(t["@@transducer/step"],t),n))}var et=J(V,rt,nt),ut=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},t}();function ot(t){return new ut(t)}var it=s((function(t,n,r){return et("function"==typeof t?ot(t):t,n,r)})),ct=o((function(t){return f(it(K,0,Z("length",t)),(function(){for(var n=0,r=t.length;n<r;){if(!t[n].apply(this,arguments))return!1;n+=1}return!0}))})),at=ct,ft=o((function(t){return f(it(K,0,Z("length",t)),(function(){for(var n=0,r=t.length;n<r;){if(t[n].apply(this,arguments))return!0;n+=1}return!1}))})),st=ft;function lt(t,n,r){for(var e=r.next();!e.done;)n=t(n,e.value),e=r.next();return n}function pt(t,n,r,e){return r[e](t,n)}var yt=J(D,pt,lt),ht=i((function(t,n){return"function"==typeof n["fantasy-land/ap"]?n["fantasy-land/ap"](t):"function"==typeof t.ap?t.ap(n):"function"==typeof t?function(r){return t(r)(n(r))}:yt((function(t,r){return function(t,n){var r;n=n||[];var e=(t=t||[]).length,u=n.length,o=[];for(r=0;r<e;)o[o.length]=t[r],r+=1;for(r=0;r<u;)o[o.length]=n[r],r+=1;return o}(t,Q(r,n))}),[],t)})),gt=i((function(t,n){var r=f(t,n);return f(t,(function(){return D(ht,Q(r,arguments[0]),Array.prototype.slice.call(arguments,1))}))})),dt=o((function(t){return gt(t.length,t)}))(o((function(t){return!t})));function vt(t,n){return function(){var r=arguments.length;if(0===r)return n();var e=arguments[r-1];return l(e)||"function"!=typeof e[t]?n.apply(this,arguments):e[t].apply(e,Array.prototype.slice.call(arguments,0,r-1))}}var bt=s(vt("slice",(function(t,n,r){return Array.prototype.slice.call(r,t,n)}))),jt=o((function(t){return f(t.length,t)})),mt=function(){function t(t,n){this.xf=n,this.n=t}return t.prototype["@@transducer/init"]=y,t.prototype["@@transducer/result"]=h,t.prototype["@@transducer/step"]=function(t,n){return this.n>0?(this.n-=1,t):this.xf["@@transducer/step"](t,n)},t}();function St(t){return function(n){return new mt(t,n)}}var At=i(p(["drop"],St,(function(t,n){return bt(Math.max(0,t),1/0,n)}))),Ot=function(){function t(t,n){this.xf=n,this.n=t,this.i=0}return t.prototype["@@transducer/init"]=y,t.prototype["@@transducer/result"]=h,t.prototype["@@transducer/step"]=function(t,n){this.i+=1;var r,e=0===this.n?t:this.xf["@@transducer/step"](t,n);return this.n>=0&&this.i>=this.n?(r=e)&&r["@@transducer/reduced"]?r:{"@@transducer/value":r,"@@transducer/reduced":!0}:e},t}();function wt(t){return function(n){return new Ot(t,n)}}var xt=i(p(["take"],wt,(function(t,n){return bt(0,t<0?1/0:t,n)}))),Ut=i((function(t,n){return t.map((function(t){for(var r,e=n,u=0;u<t.length;){if(null==e)return;r=t[u],e=H(r)?X(r,e):e[r],u+=1}return e}))})),kt=i((function(t,n){return Ut([t],n)[0]})),Tt=f(4,(function(t,n,r,e){return et(t("function"==typeof n?ot(n):n),r,e)}));function Ct(t,n){return t.push(n),t}function Nt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.reduceRight((function(t,n){return Array.isArray(t)||(t=[t]),n.apply(void 0,t)}),n)}}function Et(t,n){return kt("string"==typeof n?n.split("."):n,t)}var qt,It=function(t,n,r){var e=t.key,u=t.value,o=Et(r,e);return null!=o&&("number"==typeof o?o===Number(u):Array.isArray(o)?n?o.includes(u):o.map((function(t){return t.toString().toUpperCase()})).includes(u.toString().toUpperCase()):n?o===u.toString():o.toUpperCase()===u.toString().toUpperCase())},Lt=function(t,n,r){var e=t.key,u=t.value,o=Et(r,e);return null!=o&&(!Array.isArray(o)&&("number"==typeof o?o>Number(u):n?o>u:o.toUpperCase()>u.toString().toUpperCase()))},Dt=jt((function(t,n,r,e){var u=Et(e,n.key);return!Array.isArray(u)&&t(n,r,e)})),Ft=Dt(at([dt(Lt),dt(It)])),Mt=Dt(dt(Ft)),Pt=Dt(dt(Lt)),Bt=function(t,n,r){var e=t.key,u=t.value,o=Et(r,e);return null!=o&&(!Array.isArray(o)&&(n?o.toString().includes(u.toString()):o.toString().toUpperCase().includes(u.toString().toUpperCase())))},zt=dt(It),Gt=Dt(dt(Bt)),Kt=((qt={})[r.EQ]=It,qt[r.GT]=Lt,qt[r.GTE]=Mt,qt[r.LT]=Ft,qt[r.LTE]=Pt,qt[r.LK]=Bt,qt[r.NE]=zt,qt[r.NLK]=Gt,qt),Rt=jt((function(t,n,r,e){return null==Et(e,n.key)?t:r(e)})),Qt={caseSensitive:!1,includeNull:!1};function Ht(t,n,r){var e=r(t,n.caseSensitive);return Rt(n.includeNull,t,e)}t.SearchType=r,t.filterData=function(t,n,r){void 0===r&&(r={});var u=n.filter((function(t){var n=t.value;return""!==n&&null!=n}));if(0===u.length)return function(t,n,r){if(r||2===arguments.length)for(var e,u=0,o=n.length;u<o;u++)!e&&u in n||(e||(e=Array.prototype.slice.call(n,0,u)),e[u]=n[u]);return t.concat(e||Array.prototype.slice.call(n))}([],t,!0);var o=e(e({},Qt),r),i=u.map((function(t){var n,r=t.key,e=t.type,u=jt(Kt[e]);return n="string"==typeof r?Ht(t,o,u):st(r.map((function(n){return Ht({key:n,value:t.value,type:t.type},o,u)}))),P(n)}));null!=o.offset&&null!=o.limit&&(i.push(At(o.offset)),i.push(xt(o.limit)));var c=Nt.apply(void 0,i);return Tt(c,Ct,[],t)}}));
//# sourceMappingURL=index.umd.js.map
