"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[845],{7845:function(e,n,t){t.r(n),t.d(n,{FilmReviews:function(){return h}});var r=t(5861),o=t(9439),i=t(7757),c=t.n(i),a=t(2791),u=t(7689),s=t(9014),f=t(890),l=t(8866),p=t(184),h=function(){var e=(0,u.UO)().id,n=(0,a.useState)("Status.IDLE"),t=(0,o.Z)(n,2),i=t[0],h=t[1],d=(0,a.useState)(null),v=(0,o.Z)(d,2),w=v[0],b=v[1];return(0,a.useEffect)((function(){function n(){return(n=(0,r.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(f._n,"movie/").concat(e,"/reviews?api_key=").concat(f.Dz),n.next=4,(0,f.zT)(t);case 4:r=n.sent,b(r.results),console.log("reviews",r.results),h(f.qb.RESOLVED),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),h(f.qb.REJECTED),s.ZP.error("Ups... Something is wrong. Try again!",{duration:4e3,position:"top-center"});case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}h(f.qb.PENDING),function(){n.apply(this,arguments)}()}),[e]),"pending"===i?(0,p.jsx)(l.a,{}):"resolved"===i?(0,p.jsx)("div",{children:w.length?(0,p.jsxs)("ul",{children:[" ",w.map((function(e){return(0,p.jsxs)("li",{children:[(0,p.jsx)("p",{children:e.author}),(0,p.jsx)("p",{children:e.created_at}),(0,p.jsx)("p",{children:e.content})]},e.id)}))]}):(0,p.jsx)("p",{children:"There are no reviews yet"})}):void 0};n.default=h},8866:function(e,n,t){t.d(n,{a:function(){return i}});var r=t(8402),o=t(184),i=function(){return(0,o.jsx)(r.NB,{visible:!0,height:"90",width:"90",ariaLabel:"blocks-loading",wrapperStyle:{marginTop:"150px",marginLeft:"50%",transform:"translate(-50%)"},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}},890:function(e,n,t){t.d(n,{Dz:function(){return r},_n:function(){return o},cu:function(){return a},qb:function(){return i},zT:function(){return c}});var r="894ef72300682f1db325dae2afe3e7e2",o="https://api.themoviedb.org/3/",i={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"};function c(e){return fetch(e).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function a(e,n){return fetch(function(e,n){return"".concat(n).concat(e)}(e,n)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}}}]);
//# sourceMappingURL=845.6008ed9a.chunk.js.map