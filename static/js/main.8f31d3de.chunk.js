(this["webpackJsonpmy-counter"]=this["webpackJsonpmy-counter"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(3),s=n.n(r);n(13),n(14);function c(t,e){var n=localStorage.getItem("values");return n?JSON.parse(n):null}var u,o=n(2),i=function(t){return t.state},l=n(7);!function(t){t.SET_VALUES_AT="SET-VALUES-AT",t.SET_ERROR_AT="SET-ERROR-AT",t.SET_COUNT_AT="SET-COUNT-AT",t.SET_COUNT_MESSAGE_AT="SET-COUNT-MESSAGE-AT",t.SET_MAX="SET-MAX",t.SET_START="SET-START"}(u||(u={}));var T={values:{max:0,start:0},max:0,start:0,count:0,countMessage:"",error:!0},S=function(t){return{type:u.SET_ERROR_AT,payload:{error:t}}},b=function(t){return{type:u.SET_COUNT_AT,payload:{count:t}}},d=function(t){return{type:u.SET_COUNT_MESSAGE_AT,payload:{countMessage:t}}},E=function(t){return{type:u.SET_VALUES_AT,payload:{values:t}}},j=function(t){return{type:u.SET_MAX,payload:{max:t}}},O=function(t){return{type:u.SET_START,payload:{start:t}}},v=n(1);var p=function(){var t=Object(o.b)(),e=Object(o.c)(i),n=e.values,r=e.max,s=e.start,u=e.count,l=e.countMessage,T=e.error;Object(a.useEffect)((function(){var e=c();e?(t(S(!1)),t(E(e)),t(j(e.max)),t(O(e.start)),t(b(e.start))):t(d('enter values and press "set"'))}),[]);var p=c()?T?l:u:l,_=T?"error":"",A=T||r===s?"error-input":"input";return Object(v.jsxs)("div",{className:"head-container",children:[Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("label",{children:["Set max: ",Object(v.jsx)("input",{className:A,onChange:function(e){var n=parseInt(e.currentTarget.value);t(j(n)),t(d('enter values and press "set"')),n<0||n<=s?(t(S(!0)),t(d("incorrect values"))):t(S(!1))},value:r,type:"number"})]}),Object(v.jsxs)("label",{children:["Set min: ",Object(v.jsx)("input",{className:A,onChange:function(e){var n=parseInt(e.currentTarget.value);O(n),t(d('enter values and press "set"')),n<0||n>=r?(t(S(!0)),t(d("incorrect values"))):t(S(!1))},value:s,type:"number"})]}),Object(v.jsx)("div",{className:"button-container",children:Object(v.jsx)("button",{disabled:!!T||r===s,className:"button",onClick:function(){var e,n,a={max:r,start:s};t(b(a.start)),t(E(a)),e="values",n=a,localStorage.setItem(e,JSON.stringify(n))},children:"set"})})]}),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("span",{className:_,children:p}),Object(v.jsxs)("span",{children:["Current setup: ",Object(v.jsx)("br",{}),"max - ",n.max,", start - ",n.start]}),Object(v.jsxs)("div",{className:"button-container",children:[Object(v.jsx)("button",{disabled:u===n.max||T,className:"button",onClick:function(){t(b(u+1))},children:"count"}),Object(v.jsx)("button",{disabled:u===n.start||T,className:"button",onClick:function(){var e=c();e&&t(b(e.start))},children:"reset"})]})]})]})},_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),s(t),c(t)}))},A=n(6),m=Object(A.a)({state:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u.SET_VALUES_AT:case u.SET_ERROR_AT:case u.SET_COUNT_AT:case u.SET_COUNT_MESSAGE_AT:case u.SET_MAX:case u.SET_START:return Object(l.a)(Object(l.a)({},t),e.payload);default:return t}}}),f=Object(A.b)(m);s.a.render(Object(v.jsx)(o.a,{store:f,children:Object(v.jsx)(p,{})}),document.getElementById("root")),_()}},[[22,1,2]]]);
//# sourceMappingURL=main.8f31d3de.chunk.js.map