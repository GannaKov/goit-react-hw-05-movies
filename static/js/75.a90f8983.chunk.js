"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[75],{119:function(n,t,e){e.d(t,{M:function(){return d}});var r,o,i,a=e(1087),c=e(168),u=e(6444),s=u.ZP.div(r||(r=(0,c.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 280px);\n  gap: 16px;\n"]))),p=u.ZP.div(o||(o=(0,c.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\nimg { min-height: 455px;\n    height: 455px;}\n  > a {\n    text-decoration: none;\n  }\n"]))),f=u.ZP.h3(i||(i=(0,c.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),l=e(184),d=function(n){var t=n.location,e=n.films;return(0,l.jsx)(s,{children:e.map((function(n){return(0,l.jsx)(p,{children:(0,l.jsxs)(a.rU,{to:"/movies/".concat(n.id),state:{from:t},children:[(0,l.jsx)("img",{src:"https://www.themoviedb.org/t/p/w500"+n.poster_path,alt:n.original_title}),(0,l.jsx)(f,{children:n.original_title})]})},n.id)}))})}},8866:function(n,t,e){e.d(t,{a:function(){return i}});var r=e(8402),o=e(184),i=function(){return(0,o.jsx)(r.NB,{visible:!0,height:"90",width:"90",ariaLabel:"blocks-loading",wrapperStyle:{marginTop:"150px",marginLeft:"50%",transform:"translate(-50%)"},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}},890:function(n,t,e){e.d(t,{Dz:function(){return r},_n:function(){return o},cu:function(){return c},qb:function(){return i},zT:function(){return a}});var r="894ef72300682f1db325dae2afe3e7e2",o="https://api.themoviedb.org/3/",i={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"};function a(n){return fetch(n).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}function c(n,t){return fetch(function(n,t){return"".concat(t).concat(n)}(n,t)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}},6075:function(n,t,e){e.r(t),e.d(t,{Home:function(){return h}});var r=e(5861),o=e(9439),i=e(7757),a=e.n(i),c=e(2791),u=e(7689),s=e(9014),p=e(8866),f=e(119),l=e(890),d=e(184),h=function(){var n=(0,u.TH)();console.log("Home",n);var t=(0,c.useState)(null),e=(0,o.Z)(t,2),i=e[0],h=e[1],m=(0,c.useState)("Status.IDLE"),g=(0,o.Z)(m,2),b=g[0],v=g[1];return(0,c.useEffect)((function(){v(l.qb.PENDING);var n="".concat(l._n,"trending/movie/day?api_key=").concat(l.Dz,"&page=");function t(){return(t=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.cu)(1,n);case 3:e=t.sent,h(e.results),v(l.qb.RESOLVED),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),v(l.qb.REJECTED),s.ZP.error("Ups... Something is wrong. Try again!",{duration:4e3,position:"top-center"});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),"pending"===b?(0,d.jsx)(p.a,{}):"resolved"===b?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(f.M,{location:n,films:i})}):void 0};t.default=h}}]);
//# sourceMappingURL=75.a90f8983.chunk.js.map