(window.webpackJsonp=window.webpackJsonp||[]).push([[1,4,5],{342:function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},343:function(t,e,n){"use strict";(function(t){var r=n(170),o=n(344),c="object"==typeof exports&&exports&&!exports.nodeType&&exports,l=c&&"object"==typeof t&&t&&!t.nodeType&&t,f=l&&l.exports===c?r.a.Buffer:void 0,d=(f?f.isBuffer:void 0)||o.a;e.a=d}).call(this,n(342)(t))},344:function(t,e,n){"use strict";e.a=function(){return!1}},345:function(t,e,n){"use strict";(function(t){var r=n(171),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,c=o&&"object"==typeof t&&t&&!t.nodeType&&t,l=c&&c.exports===o&&r.a.process,f=function(){try{var t=c&&c.require&&c.require("util").types;return t||l&&l.binding&&l.binding("util")}catch(t){}}();e.a=f}).call(this,n(342)(t))},348:function(t,e,n){"use strict";n.r(e);n(12);var r=n(8),o=Math.floor,c=Math.random;var l=function(t,e){return t+o(c()*(e-t+1))};var f=function(t){var e=t.length;return e?t[l(0,e-1)]:void 0};var d=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o};var h=function(object,t){return d(t,(function(t){return object[t]}))};var v=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r},m=n(169),y=n(168);var j=function(t){return Object(y.a)(t)&&"[object Arguments]"==Object(m.a)(t)},C=Object.prototype,_=C.hasOwnProperty,x=C.propertyIsEnumerable,B=j(function(){return arguments}())?j:function(t){return Object(y.a)(t)&&_.call(t,"callee")&&!x.call(t,"callee")},O=B,w=Array.isArray,U=n(343),I=/^(?:0|[1-9]\d*)$/;var A=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&I.test(t))&&t>-1&&t%1==0&&t<e};var k=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},P={};P["[object Float32Array]"]=P["[object Float64Array]"]=P["[object Int8Array]"]=P["[object Int16Array]"]=P["[object Int32Array]"]=P["[object Uint8Array]"]=P["[object Uint8ClampedArray]"]=P["[object Uint16Array]"]=P["[object Uint32Array]"]=!0,P["[object Arguments]"]=P["[object Array]"]=P["[object ArrayBuffer]"]=P["[object Boolean]"]=P["[object DataView]"]=P["[object Date]"]=P["[object Error]"]=P["[object Function]"]=P["[object Map]"]=P["[object Number]"]=P["[object Object]"]=P["[object RegExp]"]=P["[object Set]"]=P["[object String]"]=P["[object WeakMap]"]=!1;var T=function(t){return Object(y.a)(t)&&k(t.length)&&!!P[Object(m.a)(t)]};var D=function(t){return function(e){return t(e)}},S=n(345),E=S.a&&S.a.isTypedArray,M=E?D(E):T,R=Object.prototype.hasOwnProperty;var F=function(t,e){var n=w(t),r=!n&&O(t),o=!n&&!r&&Object(U.a)(t),c=!n&&!r&&!o&&M(t),l=n||r||o||c,f=l?v(t.length,String):[],d=f.length;for(var h in t)!e&&!R.call(t,h)||l&&("length"==h||o&&("offset"==h||"parent"==h)||c&&("buffer"==h||"byteLength"==h||"byteOffset"==h)||A(h,d))||f.push(h);return f},J=Object.prototype;var L=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||J)};var Q=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),N=Object.prototype.hasOwnProperty;var z=function(object){if(!L(object))return Q(object);var t=[];for(var e in Object(object))N.call(object,e)&&"constructor"!=e&&t.push(e);return t};var G=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var V=function(t){if(!G(t))return!1;var e=Object(m.a)(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};var W=function(t){return null!=t&&k(t.length)&&!V(t)};var H=function(object){return W(object)?F(object):z(object)};var K=function(object){return null==object?[]:h(object,H(object))};var $=function(t){return f(K(t))};var X=function(t){return(w(t)?f:$)(t)},Y=r.default.extend({name:"TwitchClip",data:function(){return{clip:null}},computed:{buildClipUrl:function(){return"https://clips.twitch.tv/embed?clip=".concat(this.clip,"&parent=").concat(window.location.hostname)},clips:function(){return["ThoughtfulCaringVultureBabyRage-mMpohQcq5b2EPuTM","AdorableCarefulGazelleAsianGlow-7-DTuui-hteN5pPz","BeautifulBlindingHawkLitty-eeSOHoEs7-CQFh7c","PrettyCrowdedCrowDeIlluminati-NO5NT3uebuznAEcO","UnsightlySilkyCoffeeBudBlast-zZFMVvmRKNeO0Qv8","LaconicSplendidDiscBCouch-u0MdhA-_qPrsnjud","ManlyRoundCardVoteYea-cws3dOJG8am4uonp","CleanConcernedJellyfishRuleFive-5H9vCtTIhdowqK7W","TrustworthyOptimisticPigJKanStyle-C6bSulBUbChPPF3c","DelightfulTangibleSpiderWoofer-mrMIs12SvVCD4SAH","BrightDeafWrenchDuDudu-npNXXnv5-gJGxY8p","ConsiderateAbnegateLampPJSugar-lpKUtDBZ8Pc4-csr","AbstemiousStormyPotPicoMause-X76Vh05RxLPA-JTS","CuriousToughStarUncleNox-eXfjJey83n5qKfOT"]}},mounted:function(){this.pickRandomClip()},methods:{pickRandomClip:function(){this.clip=X(this.clips)}}}),Z=n(73),component=Object(Z.a)(Y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.clip?n("div",{staticClass:"p-4 mb-3 bg-pieptuta-white rounded"},[n("div",{staticClass:"d-flex flex-row justify-content-between"},[n("h4",[t._v("\n      Random Twitch clip\n    ")]),t._v(" "),n("b-btn",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip"}],attrs:{size:"sm",variant:"none",title:"Încarcă alt clip random"},on:{click:t.pickRandomClip}},[n("fa",{attrs:{icon:"sync"}})],1)],1),t._v(" "),n("div",{staticClass:"embed-responsive embed-responsive-16by9"},[n("iframe",{staticClass:"embed-responsive-item",attrs:{src:t.buildClipUrl,frameborder:"0",allowfullscreen:"true",scrolling:"no"}})])]):t._e()}),[],!1,null,null,null);e.default=component.exports},349:function(t,e,n){"use strict";n.r(e);var r=n(8).default.extend({name:"Sidebar",computed:{links:function(){return[{icon:"twitch",value:"iris_danciu"},{icon:"instagram",value:"theknifelady"},{icon:"instagram",value:"irisdanciuoutfits"}]}},methods:{buildLink:function(link){switch(link.icon){case"twitch":return"https://twitch.tv/".concat(link.value);case"instagram":return"https://instagram.com/".concat(link.value)}}}}),o=n(73),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"position-sticky",staticStyle:{top:"2rem"}},[n("DailyQuote"),t._v(" "),t._m(0),t._v(" "),n("TwitchClip"),t._v(" "),n("div",{staticClass:"p-4"},[n("h4",{staticClass:"fst-italic"},[t._v("\n      Link-uri sociale\n    ")]),t._v(" "),n("ol",{staticClass:"list-unstyled"},t._l(t.links,(function(link){return n("li",{key:link.value},[n("fa",{attrs:{icon:["fab",link.icon]}}),t._v(" "),n("a",{attrs:{href:t.buildLink(link)}},[t._v("\n          "+t._s(link.value)+"\n        ")])],1)})),0)])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-4 mb-3 bg-pieptuta-white rounded"},[n("h4",{staticClass:"fst-italic"},[t._v("\n      Despre\n    ")]),t._v(" "),n("p",{staticClass:"mb-0"},[t._v("\n      Cea mai bună și credibilă sursă de informare pe care o poți avea.\n    ")])])}],!1,null,"5e4774be",null);e.default=component.exports;installComponents(component,{DailyQuote:n(350).default,TwitchClip:n(348).default})},350:function(t,e,n){"use strict";n.r(e);n(37);var r=n(8),o=n(346),c=n(341),l=r.default.extend({name:"DailyQuote",data:function(){return{quote:null,timer:null}},computed:{quotes:function(){return[{text:"BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI BUI",author:"Gheorghe Crăciun"},{text:"MEOW MEOW MEOW!!",author:"Pieptuța"},{text:"DA DA DA OTELU E VIATA MEA",author:"autor necunoscut"},{text:"Te urăsc, pe urmă te iubesc, iar te urăsc, pe urmă iar te iubesc...",author:"Gheorghe Crăciun"},{text:"Băgăm un bui cinstit",author:"iris_danciu"},{text:"Pulă seara, stimați pensionari!",author:"iris_danciu"},{text:"Hei păpușhe, mă lași să înot la tine ăn pisdă??",author:"iris_danciu"},{text:"F for biscuite",author:"hacktor_92"},{text:"mmm... muna",author:"văru vanu (out of context)"},{text:"Response Message",author:"StreamElements"},{text:"Porodici",author:"un ghinionist"},{text:"iris esti superba",author:"tot chatu'"}]}},mounted:function(){this.pickRandomQuote(),this.timer=setInterval(this.pickRandomQuote.bind(this),1e4)},beforeDestroy:function(){Object(c.a)(this.timer)&&clearInterval(this.timer)},methods:{pickRandomQuote:function(){this.quote=Object(o.sample)(this.quotes)}}}),f=n(73),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.quote?n("div",{staticClass:"p-4 mb-3 bg-pieptuta-white rounded"},[n("b-media",[n("h3",{staticClass:"mt-0"},[t._v("\n      Citatul zilei "),n("small",{staticStyle:{"font-size":".75rem"}},[t._v("(la fiecare 10 secunde)")])]),t._v(" "),n("blockquote",{staticClass:"blockquote"},[n("p",{staticClass:"mb-0 font-italic"},[t._v("\n        „"+t._s(t.quote.text)+"”\n      ")]),t._v(" "),n("footer",{staticClass:"blockquote-footer"},[t._v("\n        "+t._s(t.quote.author)+"\n      ")])])])],1):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);