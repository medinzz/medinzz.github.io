(this["webpackJsonpmedinzz.github.io"]=this["webpackJsonpmedinzz.github.io"]||[]).push([[0],{53:function(e,t,r){},54:function(e,t,r){},55:function(e,t,r){"use strict";r.r(t);var n,s,a,c=r(1),i=r.n(c),o=r(33),l=r.n(o),j=r(2),u=r(6),d=r(7),b=r(58),m=r(35),h="token",x="refreshToken",p=function(){var e=Object(b.a)([h]),t=Object(u.a)(e,3),r=t[0],n=t[1],s=t[2];return[r.token,function(e){var t=Object(m.a)(e),r=new Date(1e3*t.exp);n(h,e,{expires:r})},function(){return s(h)}]},O=function(){var e=Object(b.a)([x]),t=Object(u.a)(e,3),r=t[0],n=t[1],s=t[2];return[r.refreshToken,function(e){return n(x,e)},function(){return s(x)}]},g=r(13),f=r.n(g),v=r(15),w=r(57),y=r(59),N=r(16),k="http://127.0.0.1:8000/graphql",C=function(){var e=Object(v.a)(f.a.mark((function e(t,r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.request)(k,t,r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),S=r(20),T=Object(N.gql)(n||(n=Object(S.a)(["\nmutation login(\n  $email: String!\n  $password: String!){\n    tokenAuth(\n      email: $email\n      password: $password){\n        success,\n\t\t    errors,\n\t\t    token,\n\t\t    refreshToken,\n        user{\n          id\n          verified\n          firstName\n          lastName\n          isActive\n        }\n      }\n}"]))),F=Object(N.gql)(s||(s=Object(S.a)(["\nmutation register(\n  $username: String!\n  $email: String!\n  $password: String!){\n  register(\n    email: $email\n    username: $username\n    password1: $password\n    password2: $password){\n      success\n      token\n      refreshToken\t\n      errors\n    }\n}"]))),$=(Object(N.gql)(a||(a=Object(S.a)(["\nmutation refreshToken($refreshToken: String!){\n  refreshToken(refreshToken: $refreshToken){\n    token\n    refreshToken\n    success\n    errors\n    payload\n  }\n}"]))),r(0)),E=function(e){return Object($.jsx)($.Fragment,{children:Object($.jsxs)(w.a.Group,{className:"mb-3",controlId:e.controlId,children:[Object($.jsx)(w.a.Label,{children:e.label}),Object($.jsx)(w.a.Control,{type:e.type,placeholder:e.placeholder,onChange:e.onChange}),Object($.jsx)(w.a.Text,{className:"text-muted",children:e.inputGuide})]})})},I=r(14),A=function(e){var t=Object(c.useState)(""),r=Object(u.a)(t,2),n=r[0],s=r[1],a=Object(c.useState)(""),i=Object(u.a)(a,2),o=i[0],l=i[1],j=Object(c.useState)(""),b=Object(u.a)(j,2),m=b[0],h=b[1],x=p(),g=Object(u.a)(x,2),N=g[0],k=g[1],S=O(),T=Object(u.a)(S,2)[1],A=function(){var e=Object(v.a)(f.a.mark((function e(){var t,r,s,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={username:n,email:o,password:m},N){e.next=8;break}return e.next=4,C(F,t);case 4:(r=e.sent).register.success?(k(r.register.token),T(r.register.refreshToken)):(r.register.errors.nonFieldErrors,s=r.register.errors.username,a=r.register.errors.email,alert(s[0].message),alert(a[0].message)),e.next=10;break;case 8:return alert("you are already registered!"),e.abrupt("return",Object($.jsx)(d.a,{to:"/"}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object($.jsx)($.Fragment,{children:Object($.jsxs)("div",{className:"my-5 container-fluid",children:[Object($.jsxs)("div",{className:"p-5 text-center row",children:[Object($.jsxs)("h1",{className:"home-title mx-auto col-lg-8",children:["Welcome to",Object($.jsx)("br",{}),"Crypto Media!"]}),Object($.jsx)("p",{className:"home-subtitle mx-auto",children:"Please complete the form below and verify your email afterwards."})]}),Object($.jsxs)(w.a,{className:"px-lg-5 px-4 p-1 mx-auto col-lg-6",children:[Object($.jsx)(E,{controlId:"formBasicUsername",label:"Username",type:"text",placeholder:"Enter username",onChange:function(e){return s(e.target.value)},inputGuide:"use a unique username"}),Object($.jsx)(E,{controlId:"formBasicEmail",label:"Email address",type:"email",placeholder:"Enter email",onChange:function(e){return l(e.target.value)},inputGuide:"We'll never share your email with anyone else."}),Object($.jsx)(E,{controlId:"formBasicPassword",label:"Password",type:"password",placeholder:"Enter Password",onChange:function(e){return h(e.target.value)},inputGuide:"Use a strong password, I haven't made any strong authentication yet."}),Object($.jsxs)("div",{className:"row",children:[Object($.jsx)(I.b,{to:"/login",className:"btn btn-light col-6",children:"Sign in"}),Object($.jsx)(y.a,{variant:"primary",className:"col-6",onClick:A,children:"register"})]})]})]})})},P=r.p+"static/media/currency.806feea3.png",B="user",G=function(e){var t=Object(c.useState)(""),r=Object(u.a)(t,2),n=r[0],s=r[1],a=Object(c.useState)(""),i=Object(u.a)(a,2),o=i[0],l=i[1],j=function(){var e=Object(b.a)([B]),t=Object(u.a)(e,3),r=t[0],n=t[1],s=t[2];return[r.user,function(e){return n(B,e)},function(){return s(B)}]}(),d=Object(u.a)(j,2),m=d[0],h=d[1],x=p(),g=Object(u.a)(x,2),N=g[0],k=g[1],S=O(),F=Object(u.a)(S,2)[1],A=function(){var e=Object(v.a)(f.a.mark((function e(){var t,r,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={email:n,password:o},N){e.next=8;break}return e.next=4,C(T,t);case 4:(r=e.sent).tokenAuth.success?(k(r.tokenAuth.token),F(r.tokenAuth.refreshToken),h(r.tokenAuth.user)):(s=r.tokenAuth.errors.nonFieldErrors,alert(s[0].message)),e.next=10;break;case 8:alert("you are already logged in!"),console.log(m);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object($.jsx)($.Fragment,{children:Object($.jsx)("section",{children:Object($.jsx)("div",{className:"container-fluid",children:Object($.jsxs)("div",{className:"my-5 row",children:[Object($.jsxs)(w.a,{className:"p-lg-5 mt-5 mx-auto col-lg-6",children:[Object($.jsxs)("div",{className:"text-center row",children:[Object($.jsx)("h1",{className:"home-title mx-auto",children:"Crypto Media"}),Object($.jsx)("p",{className:"home-subtitle mx-auto",children:"Your next generation social media"})]}),Object($.jsxs)("div",{className:"p-5",children:[Object($.jsx)(E,{controlId:"formBasicEmail",label:"Email address",type:"email",placeholder:"Enter email",onChange:function(e){return s(e.target.value)},inputGuide:"We'll never share your email with anyone else."}),Object($.jsx)(E,{controlId:"formBasicPassword",label:"Password",type:"password",placeholder:"Enter Password",onChange:function(e){return l(e.target.value)},inputGuide:"You should never share your password."}),Object($.jsxs)("div",{className:"row",children:[Object($.jsx)(I.b,{to:"/register",className:"btn btn-light col-6",children:"Sign up"}),Object($.jsx)(y.a,{variant:"primary",className:"col-6",onClick:A,children:"login"})]})]})]}),Object($.jsx)("div",{className:"col-lg-6",children:Object($.jsx)("div",{className:"py-5 row w-100",children:Object($.jsx)("img",{className:"mx-auto w-50",src:P,alt:"currency.png"})})})]})})})})},q=function(e){e.match.params.token;return Object($.jsx)($.Fragment,{children:Object($.jsx)("p",{children:"test"})})},U=r.p+"static/media/peoples.b04bab6c.png",M=r.p+"static/media/interactions.d726a261.png",z=r.p+"static/media/tutorials.0cf9c5f4.png",W=function(e){return Object($.jsx)($.Fragment,{children:Object($.jsx)("footer",{children:Object($.jsx)("div",{className:"container-fluid text-center my-5",children:Object($.jsx)("h4",{children:"\xa9 2021 Crypto Media. All rights reserved."})})})})},D=function(){return Object($.jsxs)($.Fragment,{children:[Object($.jsx)("section",{id:"main",children:Object($.jsxs)("div",{className:"container-fluid",children:[Object($.jsxs)("div",{className:"row my-5",children:[Object($.jsx)("div",{className:"col-lg-6 p-5 text-center",children:Object($.jsxs)("h1",{className:"home-title pt-5",children:["Welcome to",Object($.jsx)("br",{}),"Crypto Media!"]})}),Object($.jsx)("div",{className:"col-lg-5 d-flex justify-content-center p-5 ",children:Object($.jsx)("img",{className:"w-100 h-auto",src:U,alt:"currency.png"})})]}),Object($.jsxs)("div",{className:"row bg-primary p-5 h-50 my-5",children:[Object($.jsx)("div",{className:"my-5"}),Object($.jsx)("div",{className:"text-center col-lg-6 col-md-8 col-sm-10 mx-auto",children:Object($.jsx)("p",{className:"text-light home-subtitle",children:"A combination of social media platform integrated with the latest news about cryptocurrency would help our generation to adopt the new era of secure transactions. Do you want to be part of this platform?"})}),Object($.jsx)("div",{className:"my-5 row",children:Object($.jsx)("div",{className:"col-md-6 mx-auto text-center",children:Object($.jsx)(I.b,{to:"/register",className:"btn btn-outline-light btn-lg",children:"Sign Up now!"})})}),Object($.jsx)("div",{className:"my-5"})]}),Object($.jsxs)("div",{className:"my-5",children:[Object($.jsxs)("div",{className:"row p-5",children:[Object($.jsx)("div",{className:"col-lg-6 p-5",children:Object($.jsx)("h1",{className:"home-title pt-5 text-center",children:"Interact with people"})}),Object($.jsx)("div",{className:"col-lg-6 d-flex justify-content-center p-5",children:Object($.jsx)("img",{className:"w-75 h-auto",src:M,alt:"interactions.png"})})]}),Object($.jsxs)("div",{className:"row p-5 bg-primary",children:[Object($.jsx)("div",{className:"col-lg-6 d-flex justify-content-center p-5",children:Object($.jsx)("img",{className:"w-75 h-auto",src:z,alt:"tutorials.png"})}),Object($.jsx)("div",{className:"col-lg-6 p-5",children:Object($.jsx)("h1",{className:"home-title pt-5 text-center text-light",children:"Understand the Crypto"})})]})]})]})}),Object($.jsx)(W,{})]})},L=function(){return Object($.jsx)($.Fragment,{children:"Hi User!"})},J=function(){var e=O(),t=Object(u.a)(e,2)[0];return Object($.jsxs)(d.d,{children:[Object($.jsx)(d.b,{exact:!0,path:"/",render:function(){return t?Object($.jsx)(L,{}):Object($.jsx)(D,{})}}),Object($.jsx)(d.b,{path:"/register",render:function(){return t?Object($.jsx)(d.a,{to:"/"}):Object($.jsx)(A,{})}}),Object($.jsx)(d.b,{path:"/login",render:function(){return t?Object($.jsx)(d.a,{to:"/"}):Object($.jsx)(G,{})}}),Object($.jsx)(d.b,{path:"/verify/:token",render:function(e){return Object($.jsx)(q,Object(j.a)({},e))}})]})},Y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,60)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),n(e),s(e),a(e),c(e)}))};r(53),r(54);l.a.render(Object($.jsx)(i.a.StrictMode,{children:Object($.jsx)(I.a,{children:Object($.jsx)(J,{})})}),document.getElementById("root")),Y()}},[[55,1,2]]]);
//# sourceMappingURL=main.3523be6d.chunk.js.map