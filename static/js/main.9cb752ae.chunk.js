(this["webpackJsonpfishtank-frontend"]=this["webpackJsonpfishtank-frontend"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),r=n.n(s),i=(n(36),n(37),n(6)),o=n.n(i),l=n(4),u=n(9),j=n(2),b=n(11),h=n(3),d=n(0),p=c.a.createContext([{},function(){}]),O={},f=function(e){var t=Object(a.useState)(O),n=Object(j.a)(t,2),c=n[0],s=n[1];return Object(d.jsx)(p.Provider,{value:[c,s],children:e.children})},m=n(27),x=n(28),v=n(31),g=n(30),k=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:"I'm the homepage!"})}}]),n}(a.Component),y=n(15),S=function(e){return Object(y.a)(e),Object(d.jsx)("div",{children:"I'm the About page!"})},w=function(e){return Object(y.a)(e),Object(d.jsx)("div",{children:"About Current Open Source Research Project Manta ray catshark shaking filefish. Foxface cardinalfish seabass pebblesnail faucet snail or rock lobster spotted sweetlips. Hippo tang pebblesnail fins raced. Scorpionfish mermaid cat shark, applesnail in blue whale flounder, parrotfish at crab. Banana wrasse in yellow pseudochromis non mermaid parrotfish mystery snail. Nurse shark at goatfish grey whale. The crackin crazy Neo. Goby nurse shark moon. Neon goby banded grunt kelp snowcrab, fingernail clam stingray colorful gold damsel. Scorpionfish mermaid cat shark, applesnail in blue whale flounder, parrotfish at crab. Swimming are milk shark zebra moray est. Coral hogfish fingernail clam in tilefish mandarinfish crab lionfish weasel shark. Quagga mussel cat shark is batfish frogfish. Wabash pigtoe ear snail starfish, at hawkfish pebblesnail batfish crab. Wobbegong shark blue whale gold damsel faucet snail, in snake eel sea cora."})},N=function(){var e=Object(a.useContext)(p),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(a.useCallback)((function(){fetch("https://fishtank-server.herokuapp.com/users/me",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n.token)}}).then(function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=7;break}return e.next=3,t.json();case 3:n=e.sent,c((function(e){return console.log("user data is:",n),Object(l.a)(Object(l.a)({},e),{},{details:n})})),e.next=8;break;case 7:c((function(e){return Object(l.a)(Object(l.a)({},e),{},{details:null})}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[c,n.token]);return Object(a.useEffect)((function(){n.details||s()}),[n.details,s]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Contribute to Our Research Project"}),n.details?Object(d.jsxs)("p",{children:["Welcome\xa0",n.details.firstName,n.details.lastName]}):""]})},C=n(14),q=n.n(C),P=function(e){var t=Object(h.f)(),n=Object(a.useState)(!1),c=Object(j.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)(""),b=Object(j.a)(i,2),O=(b[0],b[1]),f=Object(a.useContext)(p),m=Object(j.a)(f,2),x=(m[0],m[1]),v=Object(a.useState)("test@gmail.com"),g=Object(j.a)(v,2),k=g[0],y=g[1],S=Object(a.useState)("chicken"),w=Object(j.a)(S,2),N=w[0],C=w[1];return Object(d.jsx)("div",{className:"login-component",children:Object(d.jsxs)("form",{onSubmit:function(n){n.preventDefault(),r(!0),q()(".form-button").html("Logging in..."),O("");var a="Something went wrong! Please try again.";fetch("https://fishtank-server.herokuapp.com/users/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:k,password:N})}).then(function(){var n=Object(u.a)(o.a.mark((function n(c){var s;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r(!1),c.ok){n.next=5;break}400===c.status?O("Please fill all the fields correctly!"):401===c.status?O("Invalid email and password combination."):O(a),n.next=12;break;case 5:return n.next=7,c.json();case 7:s=n.sent,console.log("data",s),x((function(e){return Object(l.a)(Object(l.a)({},e),{},{token:s.token})})),e.handleClose(),t.push("/research-project/contribute");case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(e){r(!1),O(a)}))},className:"login-form",children:[Object(d.jsx)("input",{className:"input-item email",placeholder:"email",type:"email",name:"email",value:k,onInput:function(e){return y(e.target.value)},required:!0}),Object(d.jsx)("input",{className:"input-item password",placeholder:"password",type:"password",name:"password",value:N,onInput:function(e){return C(e.target.value)},required:!0}),Object(d.jsx)("button",{className:"form-button",type:"submit",disabled:s,children:"Log In"})]})})},I=function(e){var t=Object(a.useState)(!1),n=Object(j.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(""),i=Object(j.a)(r,2),b=(i[0],i[1]),O=Object(a.useContext)(p),f=Object(j.a)(O,2),m=(f[0],f[1]),x=Object(a.useState)(""),v=Object(j.a)(x,2),g=v[0],k=v[1],y=Object(a.useState)(""),S=Object(j.a)(y,2),w=S[0],N=S[1],C=Object(a.useState)(""),P=Object(j.a)(C,2),I=P[0],A=P[1],T=Object(a.useState)(""),L=Object(j.a)(T,2),F=L[0],B=L[1],R=Object(a.useState)(""),D=Object(j.a)(R,2),W=D[0],E=D[1],M=Object(h.f)();return Object(d.jsx)("div",{className:"login-component",children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),s(!0),q()(".form-button").html("Signing you up..."),b("");var n="Something went wrong! Please try again later.";fetch("https://fishtank-server.herokuapp.com/users/signup",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:g,lastName:w,institutionName:I,username:F,password:W})}).then(function(){var t=Object(u.a)(o.a.mark((function t(a){var c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s(!1),a.ok){t.next=21;break}if(400!==a.status){t.next=6;break}b("Please fill all the fields correctly!"),t.next=19;break;case 6:if(401!==a.status){t.next=10;break}b("Invalid email and password combination."),t.next=19;break;case 10:if(500!==a.status){t.next=18;break}return console.log(a),t.next=14,a.json();case 14:(c=t.sent).message&&b(c.message||n),t.next=19;break;case 18:b(n);case 19:t.next=28;break;case 21:return t.next=23,a.json();case 23:r=t.sent,m((function(e){return Object(l.a)(Object(l.a)({},e),{},{token:r.token})})),console.log("token data:",r.token),e.handleClose(),M.push("/new-member-form");case 28:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){s(!1),b(n)}))},className:"login-form",children:[Object(d.jsx)("input",{className:"input-item first-name",placeholder:"First Name",name:"first-name",value:g,onInput:function(e){return k(e.target.value)},required:!0}),Object(d.jsx)("input",{className:"input-item last-name",placeholder:"LastName",name:"last-name",value:w,onInput:function(e){return N(e.target.value)},required:!0}),Object(d.jsx)("input",{className:"input-item institution-name",placeholder:"Institution Name",name:"institution-name",value:I,onInput:function(e){return A(e.target.value)},required:!0}),Object(d.jsx)("input",{className:"input-item email",placeholder:"email",type:"email",name:"email",value:F,onInput:function(e){return B(e.target.value)},required:!0}),Object(d.jsx)("input",{className:"input-item password",placeholder:"password",type:"password",name:"password",value:W,onInput:function(e){return E(e.target.value)},required:!0}),Object(d.jsx)("button",{className:"form-button",type:"submit",disabled:c,children:"Sign up"})]})})},A=function(e){var t=Object(a.useState)(!1),n=Object(j.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(""),i=Object(j.a)(r,2),l=(i[0],i[1]),b=Object(a.useContext)(p),O=Object(j.a)(b,2),f=O[0],m=(O[1],Object(a.useState)("")),x=Object(j.a)(m,2),v=x[0],g=x[1],k=Object(a.useState)(""),y=Object(j.a)(k,2),S=y[0],w=y[1],N=Object(a.useState)(""),C=Object(j.a)(N,2),P=C[0],I=C[1],A=Object(a.useState)(""),T=Object(j.a)(A,2),L=T[0],F=T[1],B=Object(a.useState)(""),R=Object(j.a)(B,2),D=R[0],W=R[1],E=Object(a.useState)(""),M=Object(j.a)(E,2),z=M[0],J=M[1],H=Object(h.f)();return Object(d.jsx)("div",{className:"login-component",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(!0),q()(".form-button").html("Saving..."),l("");var t="Something went wrong! Please try again.";fetch("https://fishtank-server.herokuapp.com/users/update",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(f.token)},body:JSON.stringify({question1:v,question2:S,question3:P,question4:L,question5:D,question6:z})}).then(function(){var e=Object(u.a)(o.a.mark((function e(n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("posted..."),console.log(f),s(!1),n.ok){e.next=7;break}400===n.status?l("Please make a selection for each question "):l(t),e.next=13;break;case 7:return e.next=9,n.json();case 9:a=e.sent,console.log("response should be true for new member form submit:",a),console.log("redirecting"),H.push("/research-project/contribute");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){s(!1),l(t)}))},className:"login-form",children:[Object(d.jsxs)("label",{children:["What brought you to our website?",Object(d.jsxs)("select",{id:"question1",name:"question1",onChange:function(e){return g(e.target.value)},required:!0,children:[Object(d.jsx)("option",{value:"",children:"Please Select One"}),Object(d.jsx)("option",{value:"1",children:"A colleague / friend mentioned it"}),Object(d.jsx)("option",{value:"2",children:"Found on search engine"}),Object(d.jsx)("option",{value:"3",children:"Social media"})]})]}),Object(d.jsxs)("label",{children:["What is your role?",Object(d.jsxs)("select",{id:"question2",name:"question2",onChange:function(e){return w(e.target.value)},required:!0,children:[Object(d.jsx)("option",{value:"",children:"Please Select One"}),Object(d.jsx)("option",{value:"1",children:"PhD candidate / student"}),Object(d.jsx)("option",{value:"1",children:"Marine Biologist"}),Object(d.jsx)("option",{value:"3",children:"Field Researcher"}),Object(d.jsx)("option",{value:"4",children:"Hobbyist"}),Object(d.jsx)("option",{value:"5",children:"In industry"})]})]}),Object(d.jsxs)("label",{children:["Are you directly involved with field work and have access to fish to contribute to this project?",Object(d.jsxs)("select",{id:"question3",name:"question3",onChange:function(e){return I(e.target.value)},required:!0,children:[Object(d.jsx)("option",{value:"",children:"Please Select One"}),Object(d.jsx)("option",{value:"1",children:"Yes"}),Object(d.jsx)("option",{value:"2",children:"No"})]})]}),Object(d.jsxs)("label",{children:["Are you interested primarily in large or small fish?",Object(d.jsxs)("select",{id:"question4",name:"question4",onChange:function(e){return F(e.target.value)},required:!0,children:[Object(d.jsx)("option",{value:"",children:"Please Select One"}),Object(d.jsx)("option",{value:"1",children:"Large"}),Object(d.jsx)("option",{value:"2",children:"Small"})]})]}),Object(d.jsxs)("label",{children:["Where are you located?",Object(d.jsxs)("select",{id:"question5",name:"question5",onChange:function(e){return W(e.target.value)},required:!0,children:[Object(d.jsx)("option",{value:"",children:"Please Select One"}),Object(d.jsx)("option",{value:"1",children:"Europe"}),Object(d.jsx)("option",{value:"2",children:"North America"}),Object(d.jsx)("option",{value:"3",children:"South America"}),Object(d.jsx)("option",{value:"4",children:"Africa"}),Object(d.jsx)("option",{value:"5",children:"Russia"}),Object(d.jsx)("option",{value:"6",children:"Asia"}),Object(d.jsx)("option",{value:"7",children:"Australia / New Zealand / Pacific Island Nations"}),Object(d.jsx)("option",{value:"8",children:"Antarctica"})]})]}),Object(d.jsxs)("label",{children:["What is your role?",Object(d.jsxs)("select",{id:"question6",name:"question6",onChange:function(e){return J(e.target.value)},required:!0,children:[Object(d.jsx)("option",{value:"",children:"Please Select One"}),Object(d.jsx)("option",{value:"1",children:"PhD candidate / student"}),Object(d.jsx)("option",{value:"2",children:"Marine Biologist"}),Object(d.jsx)("option",{value:"3",children:"Field Researcher"}),Object(d.jsx)("option",{value:"4",children:"Hobbyist"}),Object(d.jsx)("option",{value:"5",children:"In industry"})]})]}),Object(d.jsx)("button",{className:"form-button",type:"submit",disabled:c,children:"Submit"})]})})},T=function(e){var t=Object(a.useContext)(p),n=Object(j.a)(t,2),c=n[0],s=n[1],r=Object(h.f)();return Object(d.jsx)("button",{onClick:function(){fetch("https://fishtank-server.herokuapp.com/users/logout",{credentials:"include",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}}).then(function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s((function(e){return Object(l.a)(Object(l.a)({},e),{},{details:void 0,token:null})})),window.localStorage.setItem("logout",Date.now()),r.push("/");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},className:"logout-button",children:"Log Out"})},L=n(16),F=n.n(L);F.a.setAppElement("#root");var B=function(e){var t=Object(a.useContext)(p),n=Object(j.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(!1),i=Object(j.a)(r,2),O=i[0],f=i[1],m=Object(a.useState)(!1),x=Object(j.a)(m,2),v=x[0],g=x[1],y=function(){!0===v&&g(!1),f(!0)},C=function(){f(!1)},q=function(){!0===O&&f(!1),g(!0)},L=function(){g(!1)},B=Object(a.useCallback)((function(){console.log("verifying..."),fetch("https://fishtank-server.herokuapp.com/users/refreshToken",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("response is: ",t),!t.ok){e.next=8;break}return e.next=4,t.json();case 4:n=e.sent,s((function(e){return Object(l.a)(Object(l.a)({},e),{},{token:n.token})})),e.next=9;break;case 8:s((function(e){return Object(l.a)(Object(l.a)({},e),{},{token:null})}));case 9:setTimeout(B,3e5);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[s]);return Object(a.useEffect)((function(){console.log("verifying user"),B()}),[B]),Object(d.jsx)(b.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/about",children:"About Us"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/research-project",children:"Open Source Research"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/research-project/contribute",children:"Contribute"})})]}),Object(d.jsxs)("div",{children:[c.token?"":Object(d.jsx)("button",{onClick:y,className:"login-button",children:"Log In"}),Object(d.jsxs)(F.a,{isOpen:O,className:"Modal login",overlayClassName:"Overlay",onRequestClose:C,contentLabel:"login popup",children:[Object(d.jsx)("button",{onClick:C,className:"modal-close",children:"X"}),Object(d.jsx)(P,{handleClose:C}),Object(d.jsxs)("div",{children:["Not a member?  ",Object(d.jsx)("a",{onClick:q,children:"Sign Up"})]})]}),c.token?Object(d.jsx)(T,{}):"",c.token?"":Object(d.jsx)("button",{onClick:q,className:"login-button",children:"Sign Up"}),Object(d.jsxs)(F.a,{isOpen:v,className:"Modal login",overlayClassName:"Overlay",onRequestClose:L,contentLabel:"login popup",children:[Object(d.jsx)("button",{onClick:L,className:"modal-close",children:"X"}),Object(d.jsx)(I,{handleClose:L}),Object(d.jsxs)("div",{children:["Already a member? ",Object(d.jsx)("a",{onClick:y,children:"Log In"})]})]})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{exact:!0,path:"/",children:Object(d.jsx)(k,{})}),Object(d.jsx)(h.a,{exact:!0,path:"/new-member-form",children:Object(d.jsx)(A,{})}),Object(d.jsx)(h.a,{exact:!0,path:"/about",children:Object(d.jsx)(S,{})}),Object(d.jsx)(h.a,{exact:!0,path:"/research-project",children:Object(d.jsx)(w,{})}),Object(d.jsx)(h.a,{exact:!0,path:"/research-project/contribute",children:Object(d.jsx)(N,{})})]})]})})};var R=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(f,{children:Object(d.jsx)(B,{})})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};n(57).config(),r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root")),D()}},[[60,1,2]]]);
//# sourceMappingURL=main.9cb752ae.chunk.js.map