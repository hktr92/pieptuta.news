(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{398:function(t,e,n){"use strict";n.r(e);var r=n(19),o=(n(40),n(61),n(9)),c=n(394),l=n(389),d=o.default.extend({name:"DailyQuote",data:function(){return{widget:{},quote:null,timer:null}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.$get("/widget/daily-quote");case 2:t.widget=e.sent,t.pickRandomQuote();case 4:case"end":return e.stop()}}),e)})))()},watch:{widget:function(){this.widget&&this.widget.data&&(this.timer=setInterval(this.pickRandomQuote.bind(this),1e4))}},beforeDestroy:function(){Object(l.a)(this.timer)&&clearInterval(this.timer)},methods:{pickRandomQuote:function(){this.quote=Object(c.sample)(this.widget.data)}}}),m=n(85),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-4 mb-3 bg-pieptuta-white rounded"},[t.$fetchState.pending?n("p",[n("b-spinner",{attrs:{variant:"primary",type:"grow",label:"Se încarcă citatele motivaționale..."}})],1):t.$fetchState.error?n("p",[t._v("\n    Ow man! Am rămas fără citate motivaționale! :(\n  ")]):n("b-media",[n("h3",{staticClass:"mt-0"},[t._v("\n      "+t._s(t.widget.title)+" "),t.widget.subtitle?n("small",{staticStyle:{"font-size":".75rem"}},[t._v("("+t._s(t.widget.subtitle)+")")]):t._e()]),t._v(" "),t.quote?n("blockquote",{staticClass:"blockquote"},[n("p",{staticClass:"mb-0 font-italic"},[t._v("\n        „"+t._s(t.quote.text)+"”\n      ")]),t._v(" "),n("footer",{staticClass:"blockquote-footer"},[t._v("\n        "+t._s(t.quote.author)+"\n      ")])]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports}}]);