import { Platform } from 'react-native';

// polyfill Object.getOwnPropertySymbols on Android
if (Platform.OS === 'android') {
  /*! (C) WebReflection Mit Style License */
  (function(e,t){"use strict";if(t in e)return;var n,r=typeof global==typeof r?window:global,i=0,s=""+Math.random(),o="__symbol:",u=o.length,a="__symbol@@"+s,f="defineProperty",l="defineProperties",c="getOwnPropertyNames",h="getOwnPropertyDescriptor",p="propertyIsEnumerable",d=e[c],v=e[h],m=e.create,g=e.keys,y=e.freeze||e,b=e[f],w=e[l],E=v(e,c),S=e.prototype,x=S.hasOwnProperty,T=S[p],N=S.toString,C=Array.prototype.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},k=function(e,t,n){x.call(e,a)||b(e,a,{enumerable:!1,configurable:!1,writable:!1,value:{}}),e[a]["@@"+t]=n},L=function(e,t){var n=m(e);return d(t).forEach(function(e){D.call(t,e)&&I(n,e,t[e])}),n},A=function(e){var t=m(e);return t.enumerable=!1,t},O=function(){},M=function(e){return e!=a&&!x.call(B,e)},_=function(e){return e!=a&&x.call(B,e)},D=function U(e){var t=""+e;return _(t)?x.call(this,t)&&this[a]["@@"+t]:T.call(this,e)},P=function(t){var r={enumerable:!1,configurable:!0,get:O,set:function(e){n(this,t,{enumerable:!1,configurable:!0,writable:!0,value:e}),k(this,t,!0)}};return b(S,t,r),y(B[t]=b(e(t),"constructor",j))},H=function(t){if(this&&this!==r)throw new TypeError("Symbol is not a constructor");return P(o.concat(t||"",s,++i))},B=m(null),j={value:H},F=function(e){return B[e]},I=function(t,r,i){var s=""+r;return _(s)?(n(t,s,i.enumerable?A(i):i),k(t,s,!!i.enumerable)):b(t,r,i),t},q=function(t){return d(t).filter(_).map(F)};E.value=I,b(e,f,E),E.value=q,b(e,t,E),E.value=function(t){return d(t).filter(M)},b(e,c,E),E.value=function(t,n){var r=q(n);return r.length?g(n).concat(r).forEach(function(e){D.call(n,e)&&I(t,e,n[e])}):w(t,n),t},b(e,l,E),E.value=D,b(S,p,E),E.value=H,b(r,"Symbol",E),E.value=function(e){var t=o.concat(o,e,s);return t in S?B[t]:P(t)},b(H,"for",E),E.value=function(e){if(M(e))throw new TypeError(e+" is not a symbol");if(!x.call(B,e))return void 0;var t=e.slice(u);return t.slice(0,u)!==o?void 0:(t=t.slice(u),t===s?void 0:(t=t.slice(0,t.length-s.length),t.length>0?t:void 0))},b(H,"keyFor",E),E.value=function(t,n){var r=v(t,n);return r&&_(n)&&(r.enumerable=D.call(t,n)),r},b(e,h,E),E.value=function(e,t){return arguments.length===1?m(e):L(e,t)},b(e,"create",E),E.value=function(){var e=N.call(this);return e==="[object String]"&&_(this)?"[object Symbol]":e},b(S,"toString",E);try{if(!0!==m(b({},o,{get:function(){return b(this,o,{value:!0})[o]}}))[o])throw"IE11";n=b}catch(R){n=function(e,t,n){var r=v(S,t);delete S[t],b(e,t,n),b(S,t,r)}}})(Object,"getOwnPropertySymbols"),function(e,t){var n=e.defineProperty,r=e.prototype,i=r.toString,s="toStringTag",o;["iterator","match","replace","search","split","hasInstance","isConcatSpreadable","unscopables","species","toPrimitive",s].forEach(function(t){if(!(t in Symbol)){n(Symbol,t,{value:Symbol(t)});switch(t){case s:o=e.getOwnPropertyDescriptor(r,"toString"),o.value=function(){var e=i.call(this),t=this[Symbol.toStringTag];return typeof t=="undefined"?e:"[object "+t+"]"},n(r,"toString",o)}}})}(Object,Symbol),function(e,t,n){function r(){return this}t[e]||(t[e]=function(){var t=0,n=this,i={next:function(){var r=n.length<=t;return r?{done:r}:{done:r,value:n[t++]}}};return i[e]=r,i}),n[e]||(n[e]=function(){var t=String.fromCodePoint,n=this,i=0,s=n.length,o={next:function(){var r=s<=i,o=r?"":t(n.codePointAt(i));return i+=o.length,r?{done:r}:{done:r,value:o}}};return o[e]=r,o})}(Symbol.iterator,Array.prototype,String.prototype);
}
