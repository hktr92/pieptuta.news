(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{390:function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},391:function(t,e,r){"use strict";(function(t){var n=r(186),o=r(392),c="object"==typeof exports&&exports&&!exports.nodeType&&exports,l=c&&"object"==typeof t&&t&&!t.nodeType&&t,f=l&&l.exports===c?n.a.Buffer:void 0,d=(f?f.isBuffer:void 0)||o.a;e.a=d}).call(this,r(390)(t))},392:function(t,e,r){"use strict";e.a=function(){return!1}},393:function(t,e,r){"use strict";(function(t){var n=r(187),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,c=o&&"object"==typeof t&&t&&!t.nodeType&&t,l=c&&c.exports===o&&n.a.process,f=function(){try{var t=c&&c.require&&c.require("util").types;return t||l&&l.binding&&l.binding("util")}catch(t){}}();e.a=f}).call(this,r(390)(t))},396:function(t,e,r){"use strict";r.r(e);var n=r(19),o=(r(15),r(61),r(9)),c=Math.floor,l=Math.random;var f=function(t,e){return t+c(l()*(e-t+1))};var d=function(t){var e=t.length;return e?t[f(0,e-1)]:void 0};var y=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o};var v=function(object,t){return y(t,(function(t){return object[t]}))};var j=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n},h=r(185),m=r(184);var w=function(t){return Object(m.a)(t)&&"[object Arguments]"==Object(h.a)(t)},O=Object.prototype,A=O.hasOwnProperty,C=O.propertyIsEnumerable,x=w(function(){return arguments}())?w:function(t){return Object(m.a)(t)&&A.call(t,"callee")&&!C.call(t,"callee")},P=x,S=Array.isArray,T=r(391),k=/^(?:0|[1-9]\d*)$/;var B=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&k.test(t))&&t>-1&&t%1==0&&t<e};var D=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},M={};M["[object Float32Array]"]=M["[object Float64Array]"]=M["[object Int8Array]"]=M["[object Int16Array]"]=M["[object Int32Array]"]=M["[object Uint8Array]"]=M["[object Uint8ClampedArray]"]=M["[object Uint16Array]"]=M["[object Uint32Array]"]=!0,M["[object Arguments]"]=M["[object Array]"]=M["[object ArrayBuffer]"]=M["[object Boolean]"]=M["[object DataView]"]=M["[object Date]"]=M["[object Error]"]=M["[object Function]"]=M["[object Map]"]=M["[object Number]"]=M["[object Object]"]=M["[object RegExp]"]=M["[object Set]"]=M["[object String]"]=M["[object WeakMap]"]=!1;var R=function(t){return Object(m.a)(t)&&D(t.length)&&!!M[Object(h.a)(t)]};var F=function(t){return function(e){return t(e)}},U=r(393),J=U.a&&U.a.isTypedArray,N=J?F(J):R,_=Object.prototype.hasOwnProperty;var E=function(t,e){var r=S(t),n=!r&&P(t),o=!r&&!n&&Object(T.a)(t),c=!r&&!n&&!o&&N(t),l=r||n||o||c,f=l?j(t.length,String):[],d=f.length;for(var y in t)!e&&!_.call(t,y)||l&&("length"==y||o&&("offset"==y||"parent"==y)||c&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||B(y,d))||f.push(y);return f},I=Object.prototype;var V=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||I)};var $=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),z=Object.prototype.hasOwnProperty;var G=function(object){if(!V(object))return $(object);var t=[];for(var e in Object(object))z.call(object,e)&&"constructor"!=e&&t.push(e);return t};var K=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var L=function(t){if(!K(t))return!1;var e=Object(h.a)(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};var H=function(t){return null!=t&&D(t.length)&&!L(t)};var W=function(object){return H(object)?E(object):G(object)};var X=function(object){return null==object?[]:v(object,W(object))};var Q=function(t){return d(X(t))};var Y=function(t){return(S(t)?d:Q)(t)},Z=o.default.extend({name:"TwitchClip",data:function(){return{widget:{},clip:null}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.$get("/widget/twitch-clip");case 2:t.widget=e.sent,t.pickRandomClip();case 4:case"end":return e.stop()}}),e)})))()},computed:{buildClipUrl:function(){return"https://clips.twitch.tv/embed?clip=".concat(this.clip,"&parent=").concat(window.location.hostname)},clips:function(){return["ThoughtfulCaringVultureBabyRage-mMpohQcq5b2EPuTM","AdorableCarefulGazelleAsianGlow-7-DTuui-hteN5pPz","BeautifulBlindingHawkLitty-eeSOHoEs7-CQFh7c","PrettyCrowdedCrowDeIlluminati-NO5NT3uebuznAEcO","UnsightlySilkyCoffeeBudBlast-zZFMVvmRKNeO0Qv8","LaconicSplendidDiscBCouch-u0MdhA-_qPrsnjud","ManlyRoundCardVoteYea-cws3dOJG8am4uonp","CleanConcernedJellyfishRuleFive-5H9vCtTIhdowqK7W","TrustworthyOptimisticPigJKanStyle-C6bSulBUbChPPF3c","DelightfulTangibleSpiderWoofer-mrMIs12SvVCD4SAH","BrightDeafWrenchDuDudu-npNXXnv5-gJGxY8p","ConsiderateAbnegateLampPJSugar-lpKUtDBZ8Pc4-csr","AbstemiousStormyPotPicoMause-X76Vh05RxLPA-JTS","CuriousToughStarUncleNox-eXfjJey83n5qKfOT"]}},methods:{pickRandomClip:function(){this.clip=Y(this.widget.data)}}}),tt=r(85),component=Object(tt.a)(Z,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-4 mb-3 bg-pieptuta-white rounded"},[t.$fetchState.pending?r("p",[r("b-spinner",{attrs:{variant:"primary",type:"grow",label:"Se încarcă citatele motivaționale..."}})],1):t.$fetchState.error?r("p",[t._v("\n    Ow man! Am rămas fără citate motivaționale! :(\n  ")]):r("div",{staticClass:"d-flex flex-row justify-content-between"},[r("h4",[t._v("\n      "+t._s(t.widget.title)+"\n    ")]),t._v(" "),r("b-btn",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip"}],attrs:{size:"sm",variant:"none",title:"Încarcă alt clip random"},on:{click:t.pickRandomClip}},[r("fa",{attrs:{icon:"sync"}})],1)],1),t._v(" "),r("div",{staticClass:"embed-responsive embed-responsive-16by9"},[r("iframe",{staticClass:"embed-responsive-item",attrs:{src:t.buildClipUrl,frameborder:"0",allowfullscreen:"true",scrolling:"no"}})])])}),[],!1,null,null,null);e.default=component.exports}}]);