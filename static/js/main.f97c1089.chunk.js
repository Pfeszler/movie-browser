(this["webpackJsonpmovie-browser"]=this["webpackJsonpmovie-browser"]||[]).push([[0],{14:function(n,e,t){n.exports=t.p+"static/media/arrow.184cc848.svg"},15:function(n,e,t){n.exports=t.p+"static/media/disabledArrow.007c9ce9.svg"},43:function(n,e,t){n.exports=t.p+"static/media/navLogo.542bbc90.svg"},44:function(n,e,t){n.exports=t(71)},71:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(18),o=t.n(i),c=t(5),u=t(1),l=t(2);function p(){var n=Object(l.a)(["\n    html {\n        box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n\n    body {\n        font-family: 'Poppins', sans-serif;\n        background: #E5E5E5;\n        margin: 0;\n        padding: 0;\n    }\n"]);return p=function(){return n},n}var m=Object(u.b)(p()),s=t(17),d=t(4),f=t(22),b=t.n(f),x=t(41),g=t(42),v=t.n(g),h=t(19),E=Object(h.b)({name:"movies",initialState:{selectedPage:1,pageInformations:{page:0,results:[],total_results:0,total_pages:0}},reducers:{setPageInformation:function(n,e){var t=e.payload;n.pageInformations=t},setSelectedPage:function(n,e){var t=e.payload;switch(t){case"first":n.selectedPage=1;break;case"previous":n.selectedPage--;break;case"next":n.selectedPage++;break;default:n.selectedPage=t}}}}),w=E.actions,j=w.setPageInformation,O=w.setSelectedPage,k=function(n){return n.movies},y=function(n){return k(n).selectedPage},P=function(n){return k(n).pageInformations},M=E.reducer,z=function(n,e){var t=Object(c.b)(),a=Object(c.c)(P),i=function(){var r=Object(x.a)(b.a.mark((function r(){var a;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.a.get(e,{params:{api_key:"58fae116de8a1e6752562cf781d6d14a",page:n}});case 3:a=r.sent,t(j(a.data)),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();return Object(r.useEffect)((function(){i(n)}),[n]),a.results};function B(){var n=Object(l.a)(["\n    max-width: 1324px;\n    margin: 56px auto;\n\n    @media( max-width: ","px) {\n          max-width: unset;\n          width: calc(100% - 16px);\n          margin: 24px 16px;\n        }\n"]);return B=function(){return n},n}var I=u.d.main(B(),(function(n){return n.theme.breakpoint.mobileMax})),C=function(n){var e=n.children;return a.a.createElement(I,null,e)};function S(){var n=Object(l.a)(["\n        grid-template-columns: repeat(6, 1fr);\n        grid-auto-rows: 339px;\n        @media( max-width: ","px) {\n            grid-template-columns: repeat(2, 1fr);\n            grid-auto-rows: 245px;\n            grid-gap: 16px;}\n    "]);return S=function(){return n},n}function L(){var n=Object(l.a)(["\n        grid-template-columns: repeat(4, 1fr);\n        grid-auto-rows: 650px;\n\n        @media( max-width: ","px) {\n            grid-template-columns: 1fr;\n            grid-auto-rows: 201px;\n            grid-gap: 16px 0;\n        }\n"]);return L=function(){return n},n}function N(){var n=Object(l.a)(["\n    width: 100%;\n    min-height: 1391px;\n    display: grid;\n    grid-gap: 24px;\n\n    ","\n\n    ","\n\n"]);return N=function(){return n},n}var _=u.d.section(N(),(function(n){return"movies"===n.type&&Object(u.c)(L(),(function(n){return n.theme.breakpoint.mobileMax}))}),(function(n){return"people"===n.type&&Object(u.c)(S(),(function(n){return n.theme.breakpoint.mobileMax}))})),D=function(n){var e=n.content,t=n.type;return a.a.createElement(_,{type:t},e.map((function(n){return a.a.createElement("div",null,"movies"===t?n.title:n.name)})))};function F(){var n=Object(l.a)(["\n    font-size: 36px;\n    font-weight: 600;\n\n    @media( max-width: ","px) {\n           font-size: 18px;\n        }\n"]);return F=function(){return n},n}var A=u.d.h2(F(),(function(n){return n.theme.breakpoint.mobileMax})),J=function(n){var e=n.text;return a.a.createElement(A,null,e)};function T(){var n=Object(l.a)(["\n        display: none;\n\n        @media(max-width: ","px) {\n            display: inline-block;\n        }\n        \n    "]);return T=function(){return n},n}function W(){var n=Object(l.a)(["\n        transform: rotateY(180deg);\n        margin-right: 4px;\n\n        @media(max-width: ","px) {\n            margin-right: 2px;\n        }\n\n    "]);return W=function(){return n},n}function V(){var n=Object(l.a)(["\n    display: inline-block;\n    margin-left: 4px;\n\n    @media(max-width: ","px) {\n        margin-left: 2px;\n    }\n\n    ","\n\n    ","\n\n"]);return V=function(){return n},n}function Y(){var n=Object(l.a)(["\n     @media(max-width: ","px) {\n            display: none;\n        }\n"]);return Y=function(){return n},n}function $(){var n=Object(l.a)(["\n    font-weight: 400;\n    font-size: 14px;\n    padding: 8px 16px;\n    border-radius: 5px;\n    background-color: ",";\n    margin: 0 6px;\n    border: none;\n\n    &:hover {\n        filter: brightness(105%);\n    };\n\n    &:focus {\n    filter: brightness(110%);\n    outline: none;\n    }\n\n    &:active {\n    filter: brightness(115%);\n    outline: none;\n    }\n\n    &:disabled {\n        background-color: ",";\n        color: ",";\n        filter: none;\n    }\n\n    @media( max-width: ","px) {\n            padding: 7.5px 12px;\n            font-size: 5px;\n            margin: 0 4px;\n        }\n\n"]);return $=function(){return n},n}function q(){var n=Object(l.a)(["\n    display: inline-block;\n    margin: 0 8px;\n    color: ",";\n\n    @media( max-width: ","px) {\n            margin: 0 2px\n        }\n"]);return q=function(){return n},n}function G(){var n=Object(l.a)(["\n    font-weight: 400;\n    font-size: 16px;\n    padding: 8px 18px;\n    color: ",";\n\n    @media( max-width: ","px) {\n            font-size: 10px;\n            padding: 7.5px 8px\n        }\n"]);return G=function(){return n},n}function H(){var n=Object(l.a)(["\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin: 0 -6px;\n"]);return H=function(){return n},n}function K(){var n=Object(l.a)(["\n    display: flex;\n    width: 530px;\n    height: 36px;\n    margin: 40px auto;\n    justify-content: space-between;\n\n    @media( max-width: ","px) {\n            width: 250px;\n            margin: 32px auto;\n        }\n"]);return K=function(){return n},n}var Q=u.d.nav(K(),(function(n){return n.theme.breakpoint.mobileMax})),R=u.d.div(H()),U=u.d.div(G(),(function(n){return n.theme.color.pageText}),(function(n){return n.theme.breakpoint.mobileMax})),X=u.d.strong(q(),(function(n){return n.theme.color.black}),(function(n){return n.theme.breakpoint.mobileMax})),Z=u.d.button($(),(function(n){return n.theme.color.pagerButton}),(function(n){return n.theme.color.pagerButtonDisabled}),(function(n){return n.theme.color.black}),(function(n){return n.theme.breakpoint.mobileMax})),nn=u.d.span(Y(),(function(n){return n.theme.breakpoint.mobileMax})),en=u.d.img(V(),(function(n){return n.theme.breakpoint.mobileMax}),(function(n){return n.left&&Object(u.c)(W(),(function(n){return n.theme.breakpoint.mobileMax}))}),(function(n){return n.second&&Object(u.c)(T(),(function(n){return n.theme.breakpoint.mobileMax}))})),tn=t(14),rn=t.n(tn),an=t(15),on=t.n(an),cn=function(){var n=Object(c.b)(),e=Object(c.c)(y),t=Object(c.c)(P).total_pages;return a.a.createElement(Q,null,a.a.createElement(R,null,a.a.createElement(Z,{disabled:1===e,onClick:function(){return n(O("first"))}},a.a.createElement(en,{src:1===e?on.a:rn.a,alt:"first page",left:!0}),a.a.createElement(nn,null,"Last"),a.a.createElement(en,{src:1===e?on.a:rn.a,alt:"first page",left:!0,second:!0})),a.a.createElement(Z,{disabled:1===e,onClick:function(){return n(O("previous"))}},a.a.createElement(en,{src:1===e?on.a:rn.a,alt:"Previous page",left:!0}),a.a.createElement(nn,null,"Previous"))),a.a.createElement(U,null,"Page",a.a.createElement(X,null,e),"of",a.a.createElement(X,null,t)),a.a.createElement(R,null,a.a.createElement(Z,{disabled:e===t,onClick:function(){return n(O("next"))}},a.a.createElement(nn,null,"Next"),a.a.createElement(en,{src:e===t?on.a:rn.a,alt:"Next page"})),a.a.createElement(Z,{disabled:e===t,onClick:function(){return n(O(t))}},a.a.createElement(en,{src:e===t?on.a:rn.a,alt:"last page",second:!0}),a.a.createElement(nn,null,"Last"),a.a.createElement(en,{src:e===t?on.a:rn.a,alt:"last page"}))))};var un=function(){var n=Object(c.b)(),e=Object(c.c)(y);Object(r.useEffect)((function(){n(O("first"))}),[]);var t=z(e,"https://api.themoviedb.org/3/movie/popular?");return a.a.createElement(C,null,a.a.createElement(J,{text:"Popular Movies"}),a.a.createElement(D,{content:t,type:"movies"}),a.a.createElement(cn,null))};var ln=function(){var n=Object(c.b)(),e=Object(c.c)(y);Object(r.useEffect)((function(){n(O("first"))}),[]);var t=z(e,"https://api.themoviedb.org/3/person/popular?");return a.a.createElement(C,null,a.a.createElement(J,{text:"Popular People"}),a.a.createElement(D,{content:t,type:"people"}),a.a.createElement(cn,null))};function pn(){var n=Object(l.a)(["\n    display: block;\n    padding: 0 8px;\n    font-size: 21px;\n\n    &:link {\n        text-decoration: none;\n    }\n"]);return pn=function(){return n},n}function mn(){var n=Object(l.a)(["\n    display: block;\n    padding: 0 5px;\n"]);return mn=function(){return n},n}function sn(){var n=Object(l.a)(["\n    color: white;\n    background-color: black;\n    border: none;\n    display: flex;\n    align-items: center;\n    margin: 0 50px 0 0;\n"]);return sn=function(){return n},n}var dn=u.d.button(sn()),fn=u.d.img(mn()),bn=u.d.span(pn()),xn=t(43),gn=t.n(xn);var vn=function(){return a.a.createElement(dn,null,a.a.createElement(fn,{src:gn.a,alt:"Navigation Logo"}),a.a.createElement(bn,null,"Movies Browser"))};function hn(){var n=Object(l.a)(["\n    line-height: 24px;\n    padding: 12px;\n    border-radius: 24px;\n    width: 432px;\n    justify-self: end;\n"]);return hn=function(){return n},n}var En=u.d.input(hn());var wn=function(){return a.a.createElement(En,{placeholder:"Search for movies..."})};function jn(){var n=Object(l.a)(["\n    width: 1368px;\n    display: grid;\n    grid-template-columns: repeat(3, auto) 1fr;\n    grid-gap: 10px;\n    align-items: center;\n    margin: 0 auto;\n"]);return jn=function(){return n},n}function On(){var n=Object(l.a)(["\n    list-style: none;\n    background-color: black;\n    display: flex;\n    align-items: center;\n    margin: 0;\n    height: 94px;\n    font-size: 14px;\n    line-height: 21px;\n"]);return On=function(){return n},n}function kn(){var n=Object(l.a)(["\n    padding: 10px 0px;\n"]);return kn=function(){return n},n}function yn(){var n=Object(l.a)(["\n    text-decoration: none;\n    color: white;\n    padding: 13.5px;\n\n    &:link {\n        color: white\n    }\n"]);return yn=function(){return n},n}function Pn(){var n=Object(l.a)(["\n    text-decoration: none;\n    font-weight: 600;\n    color: white;\n    padding: 13.5px 20px;\n    \n    &."," {\n        border: 1px solid white;\n        border-radius: 24px;\n    }\n    &:link {\n        color: white\n    }\n"]);return Pn=function(){return n},n}var Mn=Object(u.d)(s.b).attrs((function(){return{activeClassName:"active"}}))(Pn(),"active"),zn=Object(u.d)(s.b).attrs((function(){return{activeClassName:"active"}}))(yn()),Bn=u.d.li(kn()),In=u.d.ul(On()),Cn=u.d.div(jn()),Sn=function(){return a.a.createElement(s.a,null,a.a.createElement("nav",null,a.a.createElement(In,null,a.a.createElement(Cn,null,a.a.createElement(Bn,null,a.a.createElement(zn,{to:"/movies"},a.a.createElement(vn,null))),a.a.createElement(Bn,null,a.a.createElement(Mn,{to:"/movies"},"MOVIES")),a.a.createElement(Bn,null,a.a.createElement(Mn,{to:"/people"},"PEOPLE")),a.a.createElement(wn,null))),a.a.createElement(d.c,null,a.a.createElement(d.a,{path:"/movies"},a.a.createElement(un,null)),a.a.createElement(d.a,{path:"/people"},a.a.createElement(ln,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ln=Object(h.a)({reducer:{movies:M}});o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.a,{store:Ln},a.a.createElement(u.a,{theme:{color:{black:"#18181B",background:"#E5E5E5",pagerButton:"#D6E4FF",pagerButtonDisabled:"#E4E6F0",pageText:"#7E839A"},breakpoint:{mobileMax:767}}},a.a.createElement(m,null),a.a.createElement(Sn,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.f97c1089.chunk.js.map