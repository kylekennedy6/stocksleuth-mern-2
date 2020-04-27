(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{137:function(e,t){},329:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a.n(n),i=a(15),c=a(2),l=a(0),o=a.n(l),s=a(9),u=a(69),d=a(21),p=a(17),m=a(25),v=a(16),E=a(62),b=a.n(E),h=a(93),f=a(66),g=a(14),O=a(27),j=a(24),I=a(11),P=(a(68),function(){var e=Object(l.useContext)(I.a),t=Object(s.h)().transcriptId,a=Object(j.a)(),n=a.isLoading,u=a.error,E=a.sendRequest,P=a.clearError,y=Object(l.useState)(!1),w=Object(c.a)(y,2),x=w[0],S=w[1],T=Object(l.useState)("Company Will Raise Guidance on NE"),R=Object(c.a)(T,2),k=R[0],N=R[1],D=Object(l.useState)("Long"),L=Object(c.a)(D,2),C=L[0],V=L[1],U=Object(l.useState)(b.a),M=Object(c.a)(U,2),_=M[0],A=M[1],H=Object(O.a)({predictionIntervalsHighDownside:{value:0,isValid:!0},predictionIntervalsModerateDownside:{value:0,isValid:!1},predictionIntervalsLowDownside:{value:0,isValid:!0},predictionIntervalsLowUpside:{value:0,isValid:!0},predictionIntervalsModerateUpside:{value:0,isValid:!0},predictionIntervalsHighUpside:{value:0,isValid:!1},targetPortfolioWeight:{value:0,isValid:!0},notes:{value:0,isValid:!1}},!1),W=Object(c.a)(H,2),B=W[0],F=W[1],G=Object(s.g)(),Y=function(){var a=Object(i.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,a.next=4,E("https://stocksleuth.herokuapp.com/api/tradeSubmission","POST",JSON.stringify({hypothesis:k,predictionIntervalsHighDownside:B.inputs.predictionIntervalsHighDownside.value,predictionIntervalsModerateDownside:B.inputs.predictionIntervalsModerateDownside.value,predictionIntervalsLowDownside:B.inputs.predictionIntervalsLowDownside.value,predictionIntervalsLowUpside:B.inputs.predictionIntervalsLowUpside.value,predictionIntervalsModerateUpside:B.inputs.predictionIntervalsModerateUpside.value,predictionIntervalsHighUpside:B.inputs.predictionIntervalsHighUpside.value,direction:C,targetPortfolioWeight:B.inputs.targetPortfolioWeight.value,likelyPreannounce:x,entranceDate:_,notes:B.inputs.notes.value,transcript:t,creator:e.userId}),{Authorization:"Bearer "+e.token,"Content-Type":"application/json"});case 4:G.push("/"),G.push("/users/".concat(e.username,"/transcripts/").concat(t,"/trade-submission")),a.next=10;break;case 8:a.prev=8,a.t0=a.catch(1);case 10:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{error:u,onClear:P}),o.a.createElement("form",{className:"create-form",onSubmit:Y},o.a.createElement("h2",null,"Submit Trade Idea:"),n&&o.a.createElement(v.a,{asOverlay:!0}),o.a.createElement("div",{className:"form-container"},o.a.createElement("div",{className:"side-by-side-container"},o.a.createElement("h3",null,"Trade Idea: "),o.a.createElement("label",null,"Hypothesis:",o.a.createElement("select",{value:k,onChange:function(e){N(e.target.value)}},Object(f.d)())),o.a.createElement("label",null,"Direction:",o.a.createElement("select",{value:C,onChange:function(e){V(e.target.value)}},Object(f.b)())),o.a.createElement(d.a,{id:"notes",element:"textarea",type:"text",rows:"5",label:"Notes:",validators:[Object(g.b)()],onInput:F})),o.a.createElement("div",{className:"side-by-side-container"},o.a.createElement("h3",null,"Timing: "),o.a.createElement("label",null,"Likely Preannounce (Y/N):",o.a.createElement("input",{name:"likelyPreannounce",type:"checkbox",onChange:function(e){S(e.target.checked)},checked:x})),o.a.createElement("label",null,"Entrance Date:",o.a.createElement(h.a,{date:_,onChange:function(e){return A(e.target.value)}}))),o.a.createElement("div",{className:"side-by-side-container"},o.a.createElement("h3",null,"Price Move Prediction Intervals: "),o.a.createElement(d.a,{id:"predictionIntervalsHighDownside",element:"input",type:"text",label:"-10%+",validators:[Object(g.b)()],errorText:"Please enter a valid decimal.",onInput:F}),o.a.createElement(d.a,{id:"predictionIntervalsModerateDownside",element:"input",type:"text",label:"[-4%, -10%)",validators:[Object(g.b)()],errorText:"Please enter a valid decimal.",onInput:F}),o.a.createElement(d.a,{id:"predictionIntervalsLowDownside",element:"input",type:"text",label:"(-4%, 0%]",validators:[Object(g.b)()],errorText:"Please enter a valid decimal.",onInput:F}),o.a.createElement(d.a,{id:"predictionIntervalsLowUpside",element:"input",type:"text",label:"(0%, 4%)",validators:[Object(g.b)()],errorText:"Please enter a valid decimal.",onInput:F}),o.a.createElement(d.a,{id:"predictionIntervalsModerateUpside",element:"input",type:"text",label:"[4%, 10%)",validators:[Object(g.b)()],errorText:"Please enter a valid decimal.",onInput:F}),o.a.createElement(d.a,{id:"predictionIntervalsHighUpside",element:"input",type:"text",label:"10%+",validators:[Object(g.b)()],errorText:"Please enter a valid decimal.",onInput:F})),o.a.createElement("div",{className:"side-by-side-container"},o.a.createElement("h3",null,"Allocation:"),o.a.createElement(d.a,{id:"targetPortfolioWeight",element:"input",type:"text",label:"Target Portfolio Weight:",validators:[Object(g.b)()],errorText:"Please enter a valid decimal.",onInput:F}))),o.a.createElement("div",{className:"analysis-form__button"},o.a.createElement(p.a,{type:"submit",disabled:!B.isValid},"Submit"))))}),y=(a(82),function(e){var t=Object(l.useContext)(I.a),a=Object(s.h)().transcriptId,n=Object(j.a)(),u=n.isLoading,E=n.error,P=n.sendRequest,y=n.clearError,w=Object(l.useState)(e.likelyPreannounce),x=Object(c.a)(w,2),S=x[0],T=x[1],R=Object(l.useState)(e.hypothesis),k=Object(c.a)(R,2),N=k[0],D=k[1],L=Object(l.useState)(e.direction),C=Object(c.a)(L,2),V=C[0],U=C[1],M=Object(l.useState)(b()(e.entranceDate)),_=Object(c.a)(M,2),A=_[0],H=_[1],W=Object(O.a)({predictionIntervalsHighDownside:{value:0,isValid:!0},predictionIntervalsModerateDownside:{value:0,isValid:!1},predictionIntervalsLowDownside:{value:0,isValid:!0},predictionIntervalsLowUpside:{value:0,isValid:!0},predictionIntervalsModerateUpside:{value:0,isValid:!0},predictionIntervalsHighUpside:{value:0,isValid:!1},targetPortfolioWeight:{value:0,isValid:!0},notes:{value:0,isValid:!1}},!1),B=Object(c.a)(W,2),F=B[0],G=B[1],Y=Object(s.g)(),q=function(){var n=Object(i.a)(r.a.mark((function n(i){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i.preventDefault(),n.prev=1,n.next=4,P("".concat("https://stocksleuth.herokuapp.com/api","/tradeSubmission/").concat(e._id),"PATCH",JSON.stringify({hypothesis:N,predictionIntervalsHighDownside:F.inputs.predictionIntervalsHighDownside.value,predictionIntervalsModerateDownside:F.inputs.predictionIntervalsModerateDownside.value,predictionIntervalsLowDownside:F.inputs.predictionIntervalsLowDownside.value,predictionIntervalsLowUpside:F.inputs.predictionIntervalsLowUpside.value,predictionIntervalsModerateUpside:F.inputs.predictionIntervalsModerateUpside.value,predictionIntervalsHighUpside:F.inputs.predictionIntervalsHighUpside.value,direction:V,targetPortfolioWeight:F.inputs.targetPortfolioWeight.value,likelyPreannounce:S,entranceDate:A,notes:F.inputs.notes.value,transcript:a,tradeSubmissionId:e._id,creator:t.userId}),{Authorization:"Bearer "+t.token,"Content-Type":"application/json"});case 4:Y.push("/"),Y.push("/users/".concat(t.username,"/transcripts/").concat(a,"/trade-submission")),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(1);case 10:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{error:E,onClear:y}),o.a.createElement("form",{className:"create-form",onSubmit:q},o.a.createElement("h2",null,"Trade Idea:"),u&&o.a.createElement(v.a,{asOverlay:!0}),o.a.createElement("div",{className:"form-container"},o.a.createElement("div",{className:"side-by-side-container"},o.a.createElement("h3",null," Submit Trade Idea: "),o.a.createElement("label",null,"Hypothesis:",o.a.createElement("select",{value:N,onChange:function(e){D(e.target.value)}},Object(f.d)())),o.a.createElement("label",null,"Direction:",o.a.createElement("select",{value:V,onChange:function(e){U(e.target.value)}},Object(f.b)())),o.a.createElement(d.a,{id:"targetPortfolioWeight",element:"input",type:"text",label:"Target Portfolio Weight",validators:[Object(g.b)()],errorText:"Please enter a valid decimal.",onInput:G,initialValue:e.targetPortfolioWeight,initialValid:!0}),o.a.createElement(d.a,{id:"notes",element:"textarea",type:"text",label:"Notes",validators:[Object(g.b)()],errorText:"Please enter a valid decimal.",onInput:G,initialValue:e.notes,initialValid:!0})),o.a.createElement("div",{className:"side-by-side-container"},o.a.createElement("h3",null,"Timing: "),o.a.createElement("label",null,"Likely Preannounce (Y/N):",o.a.createElement("input",{name:"likelyPreannounce",type:"checkbox",onChange:function(e){T(e.target.checked)},checked:S})),o.a.createElement("label",null,"Entrance Date:",o.a.createElement(h.a,{date:A,onChange:function(e){return H(e.target.value)}}))),o.a.createElement("div",{className:"side-by-side-container"},o.a.createElement("h3",null,"Prediction Intervals: "),o.a.createElement(d.a,{id:"predictionIntervalsHighDownside",element:"input",type:"text",label:"-10%+",validators:[Object(g.b)()],errorText:"Please enter a valid decimal.",onInput:G,initialValue:e.predictionIntervals.highDownside,initialValid:!0}),o.a.createElement(d.a,{id:"predictionIntervalsModerateDownside",element:"input",type:"text",label:"[-4%, -10%)",validators:[Object(g.b)()],errorText:"Please enter a valid decimal.",onInput:G,initialValue:e.predictionIntervals.moderateDownside,initialValid:!0}),o.a.createElement(d.a,{id:"predictionIntervalsLowDownside",element:"input",type:"text",label:"(-4%, 0%]",validators:[Object(g.b)()],errorText:"Please enter a valid decimal.",onInput:G,initialValue:e.predictionIntervals.lowDownside,initialValid:!0}),o.a.createElement(d.a,{id:"predictionIntervalsLowUpside",element:"input",type:"text",label:"(0%, 4%)",validators:[Object(g.b)()],errorText:"Please enter a valid decimal.",onInput:G,initialValue:e.predictionIntervals.lowUpside,initialValid:!0}),o.a.createElement(d.a,{id:"predictionIntervalsModerateUpside",element:"input",type:"text",label:"[4%, 10%)",validators:[Object(g.b)()],errorText:"Please enter a valid decimal.",onInput:G,initialValue:e.predictionIntervals.moderateUpside,initialValid:!0}),o.a.createElement(d.a,{id:"predictionIntervalsHighUpside",element:"input",type:"text",label:"10%+",validators:[Object(g.b)()],errorText:"Please enter a valid decimal.",onInput:G,initialValue:e.predictionIntervals.highUpside,initialValid:!0})),o.a.createElement("div",{className:"side-by-side-container"},o.a.createElement("h3",null,"Allocation:"),o.a.createElement(d.a,{id:"targetPortfolioWeight",element:"input",type:"text",label:"Target Portfolio Weight:",validators:[Object(g.b)()],errorText:"Please enter a valid decimal.",onInput:G,initialValue:e.targetPortfolioWeight,initialValid:!0}))),o.a.createElement("div",{className:"analysis-form__button"},o.a.createElement(p.a,{type:"submit",disabled:!F.isValid},"Update"))))}),w=function(e){return e._id?o.a.createElement(y,e):o.a.createElement(o.a.Fragment,null,o.a.createElement(P,null))};t.default=function(){var e=Object(l.useContext)(I.a),t=Object(s.h)().transcriptId,a=Object(l.useState)(),n=Object(c.a)(a,2),d=n[0],p=n[1],E=Object(j.a)(),b=E.isLoading,h=E.error,f=E.sendRequest,g=E.clearError;return Object(l.useEffect)((function(){(function(){var a=Object(i.a)(r.a.mark((function a(){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f("".concat("https://stocksleuth.herokuapp.com/api","/tradeSubmission/").concat(e.username,"/").concat(t),"GET",null,{Authorization:"Bearer "+e.token});case 3:n=a.sent,p(n.tradeSubmission),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}})()()}),[f,e.token,e.username,t]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"main-container"},o.a.createElement(u.a,null),o.a.createElement("div",{className:"content-container"},o.a.createElement(m.a,{error:h,onClear:g}),b&&o.a.createElement("div",{className:"center"},o.a.createElement(v.a,null)),!b&&o.a.createElement(w,d))))}},61:function(e,t,a){},66:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"h",(function(){return c})),a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return o})),a.d(t,"g",(function(){return s})),a.d(t,"f",(function(){return u})),a.d(t,"d",(function(){return d})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n),i=function(e){return new Date(e).toLocaleDateString([],{year:"numeric",month:"numeric",day:"numeric"})},c=function(){for(var e=new Date(Date.now()).getFullYear(),t=e+2,a=[],n=e-2;n<t;n++)a.push(n.toString());return a},l=function(){for(var e=[],t=0;t<9;t++)e.push(r.a.createElement("option",{value:t},t));return e},o=function(){for(var e=[],t=0;t<4;t++)e.push(r.a.createElement("option",{value:t},t));return e},s=function(){return["Very Bearish","Bearish","Neutral","Bullish","Very Bullish"].map((function(e){return r.a.createElement("option",{value:e},e)}))},u=function(){return["A+","A","A-","B+","B","B-","C+","C","C-","D+","D","D-","E+","E","E-","F"].map((function(e){return r.a.createElement("option",{value:e},e)}))},d=function(){return["Consensus Decrease on NE","Consensus Increase on NE","Cut Guidance on NE","Raise Guidance on NE"].map((function(e){return r.a.createElement("option",{value:e},e)}))},p=function(){return["Short","Long","Bi-Directional"].map((function(e){return r.a.createElement("option",{value:e},e)}))}},68:function(e,t,a){},69:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(12),c=a.n(i),l=a(15),o=a(2),s=a(9),u=a(25),d=a(16),p=a(24),m=a(11),v=(a(71),a(17)),E=(a(61),function(){var e=Object(n.useContext)(m.a),t=Object(s.h)().transcriptId,a=Object(p.a)(),i=a.isLoading,E=a.error,b=a.sendRequest,h=a.clearError,f=Object(n.useState)("Unrated"),g=Object(o.a)(f,2),O=g[0],j=g[1],I=window.location.href.split(3e3)[1],P=Object(s.g)(),y=function(){var a=Object(l.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,a.next=4,b("https://stocksleuth.herokuapp.com/api/transcriptRatings","POST",JSON.stringify({rating:O,transcript:t,creator:e.userId}),{Authorization:"Bearer "+e.token,"Content-Type":"application/json"});case 4:P.push("/"),P.push(I),a.next=10;break;case 8:a.prev=8,a.t0=a.catch(1);case 10:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{error:E,onClear:h}),r.a.createElement("form",{className:"rating-form",onSubmit:y},i&&r.a.createElement(d.a,{as:!0,Overlay:!0}),r.a.createElement("div",{className:"rating-container"},r.a.createElement("div",{className:"transcript-ratings-side-by-side-container"},r.a.createElement("label",{className:"transcript-rating__label"},"Transcript Rating:",r.a.createElement("select",{value:O,onChange:function(e){j(e.target.value)}},r.a.createElement("option",{value:"Unrated"},"Unrated"),r.a.createElement("option",{value:"Empty"},"Empty"),r.a.createElement("option",{value:"Weak"},"Weak"),r.a.createElement("option",{value:"(Pre-Report): Short - Tier Two"},"(Pre-Report): Short - Tier Two"),r.a.createElement("option",{value:"(Pre-Report): Long - Tier Two"},"(Pre-Report): Long - Tier Two"),r.a.createElement("option",{value:"(Pre-Report): Short - Tier One"},"(Pre-Report): Short - Tier One"),r.a.createElement("option",{value:"(Pre-Report): Long - Tier One"},"(Pre-Report): Long - Tier One"),r.a.createElement("option",{value:"(Post-Report): Short - Success"},"(Post-Report): Short - Success"),r.a.createElement("option",{value:"(Post-Report): Long - Success"},"(Post-Report): Long - Success"),r.a.createElement("option",{value:"(Post-Report): Short - Misinterpreted"},"(Post-Report): Short - Misinterpreted Evidence"),r.a.createElement("option",{value:"(Post-Report): Long - Misinterpreted"},"(Post-Report): Long - Misinterpreted Evidence"),r.a.createElement("option",{value:"(Post-Report): Short - Adverse Reaction"},"(Post-Report): Short - Adverse Reaction"),r.a.createElement("option",{value:"(Post-Report): Long - Adverse Reaction"},"(Post-Report): Long - Adverse Reaction")))),r.a.createElement("div",{className:"transcript-ratings-side-by-side-container"},r.a.createElement("div",{className:"transcript-rating-form__button"},r.a.createElement(v.a,{type:"submit"},"Update Transcript Rating"))))))}),b=function(e){var t=Object(n.useContext)(m.a),a=Object(p.a)(),i=a.isLoading,s=a.error,E=a.sendRequest,b=a.clearError,h=Object(n.useState)(e.rating),f=Object(o.a)(h,2),g=f[0],O=f[1],j=function(){var a=Object(l.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,a.next=4,E("".concat("https://stocksleuth.herokuapp.com/api","/transcriptRatings/").concat(e._id),"PATCH",JSON.stringify({rating:g,transcriptRatingId:e._id,creator:t.userId}),{Authorization:"Bearer "+t.token,"Content-Type":"application/json"});case 4:a.next=8;break;case 6:a.prev=6,a.t0=a.catch(1);case 8:case"end":return a.stop()}}),a,null,[[1,6]])})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{error:s,onClear:b}),r.a.createElement("form",{className:"rating-form",onSubmit:j},i&&r.a.createElement(d.a,{as:!0,Overlay:!0}),r.a.createElement("div",{className:"rating-container"},r.a.createElement("div",{className:"transcript-ratings-side-by-side-container"},r.a.createElement("label",{className:"transcript-rating__label"},"Transcript Rating:",r.a.createElement("select",{value:g,onChange:function(e){O(e.target.value)}},r.a.createElement("option",{value:"Unrated"},"Unrated"),r.a.createElement("option",{value:"Empty"},"Empty"),r.a.createElement("option",{value:"Weak"},"Weak"),r.a.createElement("option",{value:"(Pre-Report): Short - Tier Two"},"(Pre-Report): Short - Tier Two"),r.a.createElement("option",{value:"(Pre-Report): Long - Tier Two"},"(Pre-Report): Long - Tier Two"),r.a.createElement("option",{value:"(Pre-Report): Short - Tier One"},"(Pre-Report): Short - Tier One"),r.a.createElement("option",{value:"(Pre-Report): Long - Tier One"},"(Pre-Report): Long - Tier One"),r.a.createElement("option",{value:"(Post-Report): Short - Success"},"(Post-Report): Short - Success"),r.a.createElement("option",{value:"(Post-Report): Long - Success"},"(Post-Report): Long - Success"),r.a.createElement("option",{value:"(Post-Report): Short - Misinterpreted"},"(Post-Report): Short - Misinterpreted"),r.a.createElement("option",{value:"(Post-Report): Long - Misinterpreted"},"(Post-Report): Long - Misinterpreted"),r.a.createElement("option",{value:"(Post-Report): Short - Adverse Reaction"},"(Post-Report): Short - Adverse Reaction"),r.a.createElement("option",{value:"(Post-Report): Long - Adverse Reaction"},"(Post-Report): Long - Adverse Reaction")))),r.a.createElement("div",{className:"transcript-ratings-side-by-side-container"},r.a.createElement("div",{className:"transcript-rating-form__button"},r.a.createElement(v.a,{type:"submit"},"Update Transcript Rating"))))))},h=function(){var e=Object(n.useContext)(m.a),t=Object(s.h)().transcriptId,a=Object(n.useState)(),i=Object(o.a)(a,2),v=i[0],h=i[1],f=Object(p.a)(),g=f.isLoading,O=f.error,j=f.sendRequest,I=f.clearError;return Object(n.useEffect)((function(){(function(){var a=Object(l.a)(c.a.mark((function a(){var n;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,j("".concat("https://stocksleuth.herokuapp.com/api","/transcriptRatings/").concat(e.username,"/").concat(t),"GET",null,{Authorization:"Bearer "+e.token});case 3:n=a.sent,h(n.transcriptRating),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}})()()}),[j,e.token,e.username,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{error:O,onClear:I}),g&&r.a.createElement("div",{className:"center"},r.a.createElement(d.a,null)),r.a.createElement("header",{className:"rating-header"},!g&&v&&!v._id&&r.a.createElement(E,null),!g&&v&&v._id&&r.a.createElement(b,v)))},f=function(){var e=Object(n.useContext)(m.a),t=Object(n.useState)(),a=Object(o.a)(t,2),i=a[0],v=a[1],E=Object(p.a)(),b=E.isLoading,f=E.error,g=E.sendRequest,O=E.clearError,j=Object(s.h)().transcriptId;return Object(n.useEffect)((function(){(function(){var t=Object(l.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g("".concat("https://stocksleuth.herokuapp.com/api","/transcripts/").concat(j),"GET",null,{Authorization:"Bearer "+e.token});case 3:a=t.sent,v(a.transcript),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[g,e.token,e.username,j]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{error:f,onClear:O}),b&&r.a.createElement("div",{className:"center"},r.a.createElement(d.a,null)),!b&&i&&r.a.createElement("header",{className:"transcript-title"},r.a.createElement("h2",null,i.ticker.tickerText," ",i.fiscalQuarter," ",i.fiscalYear,": ",function(){var e=window.location.href;return e.includes("exchanges")?"Highly-Rated QA":e.includes("opening-statements")?"Highly-Rated OS":e.includes("full-transcript")?"Full Transcript":e.includes("primary-evidence")?"Upcoming Trades":e.includes("guidance-versus-consensus")?"Guidance vs. Consensus":e.includes("past-events")?"Past Events":e.includes("tendencies")?"Tendencies":e.includes("sentiment")?"Sentiment":e.includes("trade-submission")?"Trade Submission":e.includes("reaction-evaluation")?"Reaction Evaluation":void 0}())),r.a.createElement(h,null))},g=(a(72),function(e){return r.a.createElement("header",{className:"transcript-header"},e.children)}),O=a(8),j=(a(73),function(e){var t=Object(n.useContext)(m.a),a=Object(s.h)().transcriptId;return r.a.createElement("ul",{className:"transcript-nav-links"},r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/exchanges"),exact:!0},"QA")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/opening-statements"),exact:!0},"OS")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/full-transcript"),exact:!0},"Full Transcript")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/guidance-versus-consensus"),exact:!0},"Guidance vs. Consensus")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/past-events"),exact:!0},"Past Events")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/tendencies"),exact:!0},"Tendencies")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/sentiment"),exact:!0},"Sentiment")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/trade-submission"),exact:!0},"Trade Submission")),r.a.createElement("li",null,r.a.createElement(O.c,{to:"/users/".concat(t.username,"/transcripts/").concat(a,"/reaction-evaluation"),exact:!0},"Reaction Evaluation")))}),I=a(7),P=a.n(I),y=(a(74),function(e){var t=r.a.createElement("aside",{className:"transcript-dropdown"},e.children);return P.a.createPortal(t,document.getElementById("dropdown-hook"))}),w=a(18),x=(a(75),function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),i=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement(w.a,{onClick:function(){c(!1)}}),i&&r.a.createElement(y,null,r.a.createElement("nav",{className:"transcript-navigation__drawer-nav"},r.a.createElement(j,null))),r.a.createElement(g,null,r.a.createElement("button",{className:"transcript-navigation__menu-btn",onClick:function(){c(!0)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("nav",{className:"transcript-navigation__header-nav"},r.a.createElement(j,null))))});a(76),t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"transcript-home-title-container"},r.a.createElement(f,null),r.a.createElement(x,null)))}},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},82:function(e,t,a){},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(2),r=a(0),i=a.n(r),c=a(124);a(135),a(140);function l(e){var t=e.date,a=e.onChange,l=Object(r.useState)(!1),o=Object(n.a)(l,2),s=o[0],u=o[1];return i.a.createElement(c.SingleDatePicker,{numberOfMonths:window.innerWidth<600?1:2,onDateChange:function(e){return a({target:{value:e}})},onFocusChange:function(e){var t=e.focused;return u(t)},focused:s,date:t,displayFormat:"YYYY-MM-DD",isDayBlocked:function(e){return 6===e.day()||0===e.day()},hideKeyboardShortcutsPanel:!0,withFullScreenPortal:window.innerWidth<400})}}}]);
//# sourceMappingURL=6.926fe9cf.chunk.js.map