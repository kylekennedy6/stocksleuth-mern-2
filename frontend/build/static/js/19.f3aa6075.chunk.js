(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[19],{205:function(e,t,n){},320:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n.n(a),c=n(15),s=n(2),o=n(0),u=n.n(o),i=n(9),l=n(69),m=n(141),h=n(25),p=n(16),f=n(24),E=n(11);n(205);t.default=function(){var e=Object(o.useContext)(E.a),t=Object(i.h)().transcriptId,n=Object(o.useState)(),a=Object(s.a)(n,2),d=a[0],b=a[1],v=Object(f.a)(),k=v.isLoading,g=v.error,j=v.sendRequest,x=v.clearError;return Object(o.useEffect)((function(){(function(){var n=Object(c.a)(r.a.mark((function n(){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j("".concat("https://stocksleuth.herokuapp.com/api","/exchanges/").concat(e.username,"/").concat(t,"/highlyRated"),"GET",null,{Authorization:"Bearer "+e.token});case 3:a=n.sent,b(a.exchangesWithUserExchangeRatings),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}})()()}),[j,e.token,e.username,t]),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"main-container"},u.a.createElement(l.a,null),u.a.createElement("div",{className:"content-container"},u.a.createElement(h.a,{error:g,onClear:x}),k&&u.a.createElement("div",{className:"center"},u.a.createElement(p.a,null)),!k&&d&&u.a.createElement(m.a,{items:d}))))}}}]);
//# sourceMappingURL=19.f3aa6075.chunk.js.map