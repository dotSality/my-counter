(this["webpackJsonpmy-counter"]=this["webpackJsonpmy-counter"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(5),r=n.n(s),u=(n(10),n(4)),i=n(2);n(11);function l(e,t){var n=localStorage.getItem("values");return n?JSON.parse(n):null}var o=n(0);var b=function(){var e=Object(a.useState)({max:0,start:0}),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),r=Object(i.a)(s,2),b=r[0],j=r[1],d=Object(a.useState)(""),O=Object(i.a)(d,2),v=O[0],m=O[1],x=Object(a.useState)(!1),h=Object(i.a)(x,2),p=h[0],f=h[1],g=Object(a.useState)(n.max),S=Object(i.a)(g,2),N=S[0],C=S[1],y=Object(a.useState)(n.start),I=Object(i.a)(y,2),k=I[0],F=I[1];Object(a.useEffect)((function(){var e=l();e?(f(!1),c(e),C(e.max),F(e.start),j(e.start)):m('enter values and press "set"')}),[]);var J=l()?p?v:b:v,T=p?"error":"",w=p||N===k?"error-input":"input";return Object(o.jsxs)("div",{className:"head-container",children:[Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("label",{children:["Set max: ",Object(o.jsx)("input",{className:w,onChange:function(e){l()?f(!1):f(!0);var t=parseInt(e.currentTarget.value);C(t),m('enter values and press "set"'),t<0||t<=k?(f(!0),m("incorrect value")):f(!1)},value:N,type:"number"})]}),Object(o.jsxs)("label",{children:["Set min: ",Object(o.jsx)("input",{className:w,onChange:function(e){l()?f(!0):f(!1);var t=parseInt(e.currentTarget.value);F(t),m('enter values and press "set"'),t<0||t>=N?(f(!0),m("incorrect value")):f(!1)},value:k,type:"number"})]}),Object(o.jsx)("div",{className:"button-container",children:Object(o.jsx)("button",{disabled:!!p||N===k,className:"button",onClick:function(){var e,t,a=Object(u.a)(Object(u.a)({},n),{},{max:N,start:k});c(a),j(a.start),e="values",t=a,localStorage.setItem(e,JSON.stringify(t))},children:"set"})})]}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("span",{className:T,children:J}),Object(o.jsxs)("div",{className:"button-container",children:[Object(o.jsx)("button",{disabled:b===n.max||p,className:"button",onClick:function(){return j(b+1)},children:"count"}),Object(o.jsx)("button",{disabled:b===n.start||p,className:"button",onClick:function(){var e=l();e&&j(e.start)},children:"reset"})]})]})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),j()}},[[13,1,2]]]);
//# sourceMappingURL=main.5d509bb1.chunk.js.map