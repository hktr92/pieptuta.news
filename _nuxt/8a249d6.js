(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{342:function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},343:function(t,e,r){"use strict";(function(t){var n=r(170),o=r(344),c="object"==typeof exports&&exports&&!exports.nodeType&&exports,l=c&&"object"==typeof t&&t&&!t.nodeType&&t,f=l&&l.exports===c?n.a.Buffer:void 0,d=(f?f.isBuffer:void 0)||o.a;e.a=d}).call(this,r(342)(t))},344:function(t,e,r){"use strict";e.a=function(){return!1}},345:function(t,e,r){"use strict";(function(t){var n=r(171),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,c=o&&"object"==typeof t&&t&&!t.nodeType&&t,l=c&&c.exports===o&&n.a.process,f=function(){try{var t=c&&c.require&&c.require("util").types;return t||l&&l.binding&&l.binding("util")}catch(t){}}();e.a=f}).call(this,r(342)(t))},348:function(t,e,r){"use strict";r.r(e);r(12);var n=r(8),o=Math.floor,c=Math.random;var l=function(t,e){return t+o(c()*(e-t+1))};var f=function(t){var e=t.length;return e?t[l(0,e-1)]:void 0};var d=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o};var y=function(object,t){return d(t,(function(t){return object[t]}))};var v=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n},j=r(169),h=r(168);var m=function(t){return Object(h.a)(t)&&"[object Arguments]"==Object(j.a)(t)},O=Object.prototype,w=O.hasOwnProperty,A=O.propertyIsEnumerable,C=m(function(){return arguments}())?m:function(t){return Object(h.a)(t)&&w.call(t,"callee")&&!A.call(t,"callee")},x=C,P=Array.isArray,T=r(343),S=/^(?:0|[1-9]\d*)$/;var B=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&S.test(t))&&t>-1&&t%1==0&&t<e};var k=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},D={};D["[object Float32Array]"]=D["[object Float64Array]"]=D["[object Int8Array]"]=D["[object Int16Array]"]=D["[object Int32Array]"]=D["[object Uint8Array]"]=D["[object Uint8ClampedArray]"]=D["[object Uint16Array]"]=D["[object Uint32Array]"]=!0,D["[object Arguments]"]=D["[object Array]"]=D["[object ArrayBuffer]"]=D["[object Boolean]"]=D["[object DataView]"]=D["[object Date]"]=D["[object Error]"]=D["[object Function]"]=D["[object Map]"]=D["[object Number]"]=D["[object Object]"]=D["[object RegExp]"]=D["[object Set]"]=D["[object String]"]=D["[object WeakMap]"]=!1;var M=function(t){return Object(h.a)(t)&&k(t.length)&&!!D[Object(j.a)(t)]};var F=function(t){return function(e){return t(e)}},R=r(345),U=R.a&&R.a.isTypedArray,J=U?F(U):M,N=Object.prototype.hasOwnProperty;var E=function(t,e){var r=P(t),n=!r&&x(t),o=!r&&!n&&Object(T.a)(t),c=!r&&!n&&!o&&J(t),l=r||n||o||c,f=l?v(t.length,String):[],d=f.length;for(var y in t)!e&&!N.call(t,y)||l&&("length"==y||o&&("offset"==y||"parent"==y)||c&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||B(y,d))||f.push(y);return f},I=Object.prototype;var _=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||I)};var V=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),z=Object.prototype.hasOwnProperty;var G=function(object){if(!_(object))return V(object);var t=[];for(var e in Object(object))z.call(object,e)&&"constructor"!=e&&t.push(e);return t};var K=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var L=function(t){if(!K(t))return!1;var e=Object(j.a)(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};var H=function(t){return null!=t&&k(t.length)&&!L(t)};var W=function(object){return H(object)?E(object):G(object)};var X=function(object){return null==object?[]:y(object,W(object))};var Q=function(t){return f(X(t))};var Y=function(t){return(P(t)?f:Q)(t)},Z=n.default.extend({name:"TwitchClip",data:function(){return{clip:null}},computed:{buildClipUrl:function(){return"https://clips.twitch.tv/embed?clip=".concat(this.clip,"&parent=").concat(window.location.hostname)},clips:function(){return["ThoughtfulCaringVultureBabyRage-mMpohQcq5b2EPuTM","AdorableCarefulGazelleAsianGlow-7-DTuui-hteN5pPz","BeautifulBlindingHawkLitty-eeSOHoEs7-CQFh7c","PrettyCrowdedCrowDeIlluminati-NO5NT3uebuznAEcO","UnsightlySilkyCoffeeBudBlast-zZFMVvmRKNeO0Qv8","LaconicSplendidDiscBCouch-u0MdhA-_qPrsnjud","ManlyRoundCardVoteYea-cws3dOJG8am4uonp","CleanConcernedJellyfishRuleFive-5H9vCtTIhdowqK7W","TrustworthyOptimisticPigJKanStyle-C6bSulBUbChPPF3c","DelightfulTangibleSpiderWoofer-mrMIs12SvVCD4SAH","BrightDeafWrenchDuDudu-npNXXnv5-gJGxY8p","ConsiderateAbnegateLampPJSugar-lpKUtDBZ8Pc4-csr","AbstemiousStormyPotPicoMause-X76Vh05RxLPA-JTS","CuriousToughStarUncleNox-eXfjJey83n5qKfOT"]}},mounted:function(){this.pickRandomClip()},methods:{pickRandomClip:function(){this.clip=Y(this.clips)}}}),$=r(73),component=Object($.a)(Z,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.clip?r("div",{staticClass:"p-4 mb-3 bg-pieptuta-white rounded"},[r("div",{staticClass:"d-flex flex-row justify-content-between"},[r("h4",[t._v("\n      Random Twitch clip\n    ")]),t._v(" "),r("b-btn",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip"}],attrs:{size:"sm",variant:"none",title:"Încarcă alt clip random"},on:{click:t.pickRandomClip}},[r("fa",{attrs:{icon:"sync"}})],1)],1),t._v(" "),r("div",{staticClass:"embed-responsive embed-responsive-16by9"},[r("iframe",{staticClass:"embed-responsive-item",attrs:{src:t.buildClipUrl,frameborder:"0",allowfullscreen:"true",scrolling:"no"}})])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);