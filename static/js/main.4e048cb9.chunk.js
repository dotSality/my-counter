(this["webpackJsonpmy-counter"]=this["webpackJsonpmy-counter"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(3),r=n.n(s),c=(n(14),n(6));n(15);function u(e,t){var n=localStorage.getItem("values");return n?JSON.parse(n):null}var o,i=n(2),l=function(e){return e.state},b=n(8);!function(e){e.SET_VALUES_AT="SET-VALUES-AT",e.SET_ERROR_AT="SET-ERROR-AT",e.SET_COUNT_AT="SET-COUNT-AT",e.SET_COUNT_MESSAGE_AT="SET-COUNT-MESSAGE-AT"}(o||(o={}));var j={values:{max:0,start:0},count:0,countMessage:"",error:!0},T=function(e){return{type:o.SET_ERROR_AT,payload:{error:e}}},O=function(e){return{type:o.SET_COUNT_AT,payload:{count:e}}},d=function(e){return{type:o.SET_COUNT_MESSAGE_AT,payload:{countMessage:e}}},S=function(e){return{type:o.SET_VALUES_AT,payload:{values:e}}},v=n(1);var E=function(){var e=Object(i.b)(),t=Object(i.c)(l),n=t.values,s=t.count,r=t.countMessage,o=t.error,b=Object(a.useState)(n.max),j=Object(c.a)(b,2),E=j[0],p=j[1],m=Object(a.useState)(n.start),_=Object(c.a)(m,2),f=_[0],x=_[1];Object(a.useEffect)((function(){var t=u();t?(e(T(!1)),e(S(t)),p(t.max),x(t.start),e(O(t.start))):e(d('enter values and press "set"'))}),[]);var h=u()?o?r:s:r,A=o?"error":"",N=o||E===f?"error-input":"input";return Object(v.jsxs)("div",{className:"head-container",children:[Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("label",{children:["Set max: ",Object(v.jsx)("input",{className:N,onChange:function(t){var n=parseInt(t.currentTarget.value);p(n),e(d('enter values and press "set"')),n<0||n<=f?(e(T(!0)),e(d("incorrect values"))):e(T(!1))},value:E,type:"number"})]}),Object(v.jsxs)("label",{children:["Set min: ",Object(v.jsx)("input",{className:N,onChange:function(t){var n=parseInt(t.currentTarget.value);x(n),e(d('enter values and press "set"')),n<0||n>=E?(e(T(!0)),e(d("incorrect values"))):e(T(!1))},value:f,type:"number"})]}),Object(v.jsx)("div",{className:"button-container",children:Object(v.jsx)("button",{disabled:!!o||E===f,className:"button",onClick:function(){var t,n,a={max:E,start:f};e(O(a.start)),e(S(a)),t="values",n=a,localStorage.setItem(t,JSON.stringify(n))},children:"set"})})]}),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("span",{className:A,children:h}),Object(v.jsxs)("span",{children:["Current setup: ",Object(v.jsx)("br",{}),"max - ",n.max,", start - ",n.start]}),Object(v.jsxs)("div",{className:"button-container",children:[Object(v.jsx)("button",{disabled:s===n.max||o,className:"button",onClick:function(){e(O(s+1))},children:"count"}),Object(v.jsx)("button",{disabled:s===n.start||o,className:"button",onClick:function(){var t=u();t&&e(O(t.start))},children:"reset"})]})]})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))},m=n(7),_=Object(m.a)({state:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.SET_VALUES_AT:case o.SET_ERROR_AT:case o.SET_COUNT_AT:case o.SET_COUNT_MESSAGE_AT:return Object(b.a)(Object(b.a)({},e),t.payload);default:return e}}}),f=Object(m.b)(_);r.a.render(Object(v.jsx)(i.a,{store:f,children:Object(v.jsx)(E,{})}),document.getElementById("root")),p()}},[[23,1,2]]]);
//# sourceMappingURL=main.4e048cb9.chunk.js.map