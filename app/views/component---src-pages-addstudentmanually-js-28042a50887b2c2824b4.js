"use strict";(self.webpackChunksmu_app=self.webpackChunksmu_app||[]).push([[477],{5505:function(e,t,n){function l(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=l(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=l(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},7754:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var l=n(7294),r=n(2945),u=n(6613),a=n(613),o=n(8642),i=n(5444),c=n(6633),s=n.n(c),m=n(4646);function f(){var e=(0,l.useState)(""),t=e[0],n=e[1],c=(0,l.useState)(""),f=c[0],d=c[1],E=(0,l.useState)(""),p=E[0],h=E[1],v=(0,l.useState)(""),g=v[0],b=v[1],C=(0,m.lX)();return l.createElement(r.Z,{fluid:!0,className:"container"},l.createElement(u.Z,{as:"h3"},"Please fill out the following information for the new student."),l.createElement("div",null),l.createElement("br",null),l.createElement(a.Z,{className:"form"},l.createElement(a.Z.Field,null,l.createElement("p",null,"Student First Name"),l.createElement("textarea",{id:"studentFirst",name:"studentFirst",rows:"1",cols:"50",onChange:function(e){return n(e.target.value)}})),l.createElement("div",null),l.createElement("br",null),l.createElement(a.Z.Field,null,l.createElement("p",null,"Student Last Nme"),l.createElement("textarea",{id:"studentLast",name:"studentLast",rows:"1",cols:"50",onChange:function(e){return d(e.target.value)}})),l.createElement("div",null),l.createElement("br",null),l.createElement(a.Z.Field,null,l.createElement("p",null,"Student ID"),l.createElement("textarea",{id:"Stu_id",name:"Stu_id",rows:"1",cols:"25",onChange:function(e){return h(e.target.value)}})),l.createElement("div",null),l.createElement("br",null),l.createElement(a.Z.Field,null,l.createElement("p",null,"Course ID"),l.createElement("select",{name:"Course_id",id:"Course_id",onChange:function(e){return b(e.target.value)}},l.createElement("option",{value:"default",selected:"true"},"Choose a Course ID"),l.createElement("option",null,"104"),l.createElement("option",null,"102"),l.createElement("option",null,"106"),l.createElement("option",null,"108"),l.createElement("option",null,"232"),l.createElement("option",null,"222"),l.createElement("option",null,"233"),l.createElement("option",null,"205"),l.createElement("option",null,"218"),l.createElement("option",null,"237"),l.createElement("option",null,"227"),l.createElement("option",null,"223"))),l.createElement("div",null),l.createElement("br",null),l.createElement(o.Z,{color:"black",type:"submit",onClick:function(e){var n={studentFirst:t,studentLast:f,Stu_id:p,Course_id:g};s().post("https://sheet.best/api/sheets/e57f2e8a-dff6-4a23-9145-c81449e9fd2e",n).then((function(e){console.log(e)})),C.push("/studentsuccess"),window.location.reload()}},"Add Student"),l.createElement(o.Z,{variant:"outline-light",size:"lg"},l.createElement(i.rU,{to:"/professoraddstudent"},"Back"))))}},7326:function(e,t,n){function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return l}})},7462:function(e,t,n){function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{Z:function(){return l}})},3366:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,r={},u=Object.keys(e);for(l=0;l<u.length;l++)n=u[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:function(){return l}})}}]);
//# sourceMappingURL=component---src-pages-addstudentmanually-js-28042a50887b2c2824b4.js.map