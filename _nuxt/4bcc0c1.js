(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{351:function(t,e,r){"use strict";r.r(e);var n=r(24),c=(r(59),r(8)),o=r(334),l=c.default.extend({name:"Article",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles/".concat(n.slug)).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{article:{}}},methods:{dateFormat:function(t){return o.DateTime.fromISO(t).toFormat("dd MMMM yyyy")}}}),f=r(74),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"blog-post"},[r("h2",{staticClass:"blog-post-title"},[t._v("\n    "+t._s(t.article.title)+"\n  ")]),t._v(" "),r("p",{staticClass:"blog-post-meta"},[t._v("\n    "+t._s(t.dateFormat(t.article.createdAt))+"\n  ")]),t._v(" "),r("nuxt-content",{attrs:{document:t.article}}),t._v(" "),r("hr"),t._v(" "),r("a",{attrs:{href:"/"}},[r("fa",{attrs:{icon:"arrow-left"}}),t._v(" Înapoi pe prima pagină.\n  ")],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);