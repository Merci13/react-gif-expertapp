(this["webpackJsonp04-gift-expert-app"]=this["webpackJsonp04-gift-expert-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(7),a=n.n(r),i=n(2),s=n(8),o=n(10),u=n(0),j=function(e){var t=e.setCategories,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],s=r[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length>2&&(t((function(e){return[a].concat(Object(o.a)(e))})),console.log("Summit Hecho!"),s(""))},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(e){s(e.target.value)}})})})},l=n(11),d=n(6),p=n.n(d),b=n(9),f=function(){var e=Object(b.a)(p.a.mark((function e(t){var n,c,r,a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=wGlqhmQl8UGQDP7A0JnHkadJ1MYFb10X&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,a=r.data,i=a.map((function(e){return{id:e.id,title:e.title,url:e.url}})),console.log(i),console.log(a),e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.id,n=e.title,c=e.url;return console.log(t,n,c),Object(u.jsxs)("div",{className:"animate__fadeIn",children:[Object(u.jsx)("img",{src:c,alt:n}),Object(u.jsxs)("p",{children:[" ",n]})]})},O=function(e){var t=e.category,n=void 0===t?"":t,r=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){f(e).then((function(e){console.log(e),a({data:e,loading:!1})}))}),[e]),r}(n),a=r.data,s=r.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__fadeIn",children:n}),s&&Object(u.jsx)("p",{className:"animate__pulse",children:" Cargando"}),Object(u.jsx)("div",{className:"card-grid",children:a.map((function(e){return Object(u.jsx)(h,Object(l.a)({},e),e.id)}))})]})},g=function(){var e=Object(s.useState)(["One punch"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(j,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e,t){return Object(u.jsx)(O,{category:e},e+t)}))})]})};n(18);a.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.2b339556.chunk.js.map