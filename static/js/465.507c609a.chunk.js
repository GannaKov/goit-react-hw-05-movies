"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[465],{8866:function(n,e,t){t.d(e,{a:function(){return o}});var r=t(8402),i=t(184),o=function(){return(0,i.jsx)(r.NB,{visible:!0,height:"90",width:"90",ariaLabel:"blocks-loading",wrapperStyle:{marginTop:"150px",marginLeft:"50%",transform:"translate(-50%)"},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}},890:function(n,e,t){t.d(e,{Dz:function(){return r},_n:function(){return i},cu:function(){return a},qb:function(){return o},zT:function(){return s}});var r="894ef72300682f1db325dae2afe3e7e2",i="https://api.themoviedb.org/3/",o={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"};function s(n){return fetch(n).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}function a(n,e){return fetch(function(n,e){return"".concat(e).concat(n)}(n,e)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}},4465:function(n,e,t){t.r(e),t.d(e,{FilmDetails:function(){return q},default:function(){return G}});var r,i,o,s,a,c,l,u,d,p,h=t(5861),f=t(9439),x=t(7757),g=t.n(x),m=t(2791),j=t(7689),b=t(9014),v=t(890),w=t(8866),Z=t(8617),k=t(168),E=t(6444),P=t(1087),D=(0,E.ZP)(P.rU)(r||(r=(0,k.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 8px;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  border: 1px solid black;\n  border-radius:5%;\n  margin-bottom:8px;\n\n  :hover {\n    color: orangered;\n  }\n"]))),y=t(184),_=function(n){var e=n.to,t=n.children;return(0,y.jsxs)(D,{to:e,children:[(0,y.jsx)(Z.jTe,{size:"24"}),t]})},S=E.ZP.div(i||(i=(0,k.Z)(["\ndisplay:flex;\nmargin-bottom:20px"]))),L=E.ZP.div(o||(o=(0,k.Z)(["\nmargin-left:20px\n"]))),T=E.ZP.span(s||(s=(0,k.Z)(["  \nfont-weight: 700;\nmargin-bottom:5px\n"]))),z=E.ZP.h2(a||(a=(0,k.Z)(["\nmargin-bottom:10px"]))),C=E.ZP.li(c||(c=(0,k.Z)(["\n:not(:last-child){margin-bottom:8px}\n"]))),I=E.ZP.p(l||(l=(0,k.Z)(["\nfont-weight: 700;\nmargin-bottom: 10px;\n"]))),N=E.ZP.li(u||(u=(0,k.Z)(["\n:not(:last-child){margin-bottom:8px}\n"]))),R=(0,E.ZP)(P.rU)(d||(d=(0,k.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: orphans;\n  text-decoration: none;\n:hover {\n    color: orangered;\n  }\n"]))),U=E.ZP.ul(p||(p=(0,k.Z)(["\nlist-style: inside;"]))),q=function(){var n,e,t=(0,m.useState)("Status.IDLE"),r=(0,f.Z)(t,2),i=r[0],o=r[1],s=(0,m.useState)(null),a=(0,f.Z)(s,2),c=a[0],l=a[1],u=(0,j.UO)().id,d=(0,j.TH)();console.log("Details",d);var p=null!==(n=null===(e=d.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";if(console.log("backLinkHref",p),(0,m.useEffect)((function(){function n(){return(n=(0,h.Z)(g().mark((function n(){var e,t;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="".concat(v._n,"movie/").concat(u,"?api_key=").concat(v.Dz),n.next=4,(0,v.zT)(e);case 4:t=n.sent,l(t),o(v.qb.RESOLVED),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),o(v.qb.REJECTED),b.ZP.error("Ups... Something is wrong. Try again!",{duration:4e3,position:"top-center"});case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}o(v.qb.PENDING),function(){n.apply(this,arguments)}()}),[u]),"pending"===i)return(0,y.jsx)(w.a,{});if("resolved"===i){var x=c.genres.map((function(n){return n.name})).join(", ");return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(_,{to:p,children:"Back to list"}),(0,y.jsxs)(S,{children:[(0,y.jsx)("img",{src:"https://www.themoviedb.org/t/p/w400"+c.poster_path,alt:c.original_title}),(0,y.jsxs)(L,{children:[(0,y.jsx)(z,{children:c.original_title}),(0,y.jsxs)("ul",{children:[(0,y.jsxs)(C,{children:[" ",(0,y.jsx)(T,{children:"Overview:"}),(0,y.jsx)("p",{children:c.overview})]}),(0,y.jsxs)(C,{children:[(0,y.jsx)(T,{children:"User Score:"})," ",(0,y.jsx)("p",{children:c.popularity})]}),(0,y.jsxs)(C,{children:[" ",(0,y.jsx)(T,{children:"Genres:"}),(0,y.jsxs)("p",{children:[" ",x]})]})]})]})]}),(0,y.jsx)(I,{children:"Additional Information"}),(0,y.jsxs)(U,{children:[(0,y.jsx)(N,{children:(0,y.jsx)(R,{to:"cast",children:"Read about our cast"})}),(0,y.jsx)(N,{children:(0,y.jsx)(R,{to:"reviews",children:"Get to know the reviews"})})]}),(0,y.jsx)(m.Suspense,{fallback:(0,y.jsx)("div",{children:"Loading..."}),children:(0,y.jsx)(j.j3,{})})]})}},G=q}}]);
//# sourceMappingURL=465.507c609a.chunk.js.map