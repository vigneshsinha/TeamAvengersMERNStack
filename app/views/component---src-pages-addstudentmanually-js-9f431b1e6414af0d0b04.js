"use strict";(self.webpackChunksmu_app=self.webpackChunksmu_app||[]).push([[477],{5505:function(e,t,n){function a(e){var t,n,u="";if("string"==typeof e||"number"==typeof e)u+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(u&&(u+=" "),u+=n);else for(t in e)e[t]&&(u&&(u+=" "),u+=t);return u}function u(){for(var e,t,n=0,u="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(u&&(u+=" "),u+=t);return u}n.d(t,{Z:function(){return u}})},5723:function(e,t,n){var a=n(6633),u=n.n(a);t.Z=u().create({baseURL:"http://localhost:8020/api",headers:{"Content-Type":"application/json"}})},7754:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(7326),u=n(4578),r=n(7294),s=n(1989),l=n(2945),i=n(6613),o=n(613),c=n(8642),d=n(5444),m=(n(6633),function(e){function t(t){var n;return(n=e.call(this,t)||this).onChangeFirst=n.onChangeFirst.bind((0,a.Z)(n)),n.onChangeLast=n.onChangeLast.bind((0,a.Z)(n)),n.onChangeId=n.onChangeId.bind((0,a.Z)(n)),n.onChangeCourse=n.onChangeCourse.bind((0,a.Z)(n)),n.saveStudent=n.saveStudent.bind((0,a.Z)(n)),n.newStudent=n.newStudent.bind((0,a.Z)(n)),n.state={Stu_firstname:"",Stu_lastname:"",Stu_id:"",Course_name:"",submitted:!1},n}(0,u.Z)(t,e);var n=t.prototype;return n.onChangeFirst=function(e){this.setState({Stu_firstname:e.target.value})},n.onChangeLast=function(e){this.setState({Stu_lastname:e.target.value})},n.onChangeId=function(e){this.setState({Stu_id:e.target.value})},n.onChangeCourse=function(e){this.setState({Course_name:e.target.value})},n.saveStudent=function(){var e=this,t={Stu_firstname:this.state.Stu_firstname,Stu_lastname:this.state.Stu_lastname,Stu_id:this.state.Stu_id,Course_name:this.state.Course_name};s.Z.create(t).then((function(t){e.setState({Stu_firstname:t.data.Stu_firstname,Stu_lastname:t.data.Stu_lastname,Stu_id:t.data.Stu_id,Course_name:t.data.Course_name,submitted:!0}),console.log(t.data)})).catch((function(e){console.log(e)}))},n.newStudent=function(){this.setState({Stu_firstname:"",Stu_lastname:"",Stu_id:"",Course_name:"",submitted:!1})},n.render=function(){return r.createElement("div",{className:"submit-form"},this.state.submitted?r.createElement("div",null,r.createElement("h4",null,"You submitted successfully!"),r.createElement("button",{className:"btn btn-success",onClick:this.newStudent},"Add")):r.createElement(l.Z,{fluid:!0,className:"container"},r.createElement(i.Z,{as:"h3"},"Please fill out the following information for the new student."),r.createElement("div",null),r.createElement("br",null),r.createElement(o.Z,{className:"form"},r.createElement(o.Z.Field,null,r.createElement("p",null,"Student First Name"),r.createElement("textarea",{id:"Stu_firstname",name:"Stu_firstname",rows:"1",cols:"50",onChange:this.onChangeFirst,value:this.state.Stu_firstname})),r.createElement("div",null),r.createElement("br",null),r.createElement(o.Z.Field,null,r.createElement("p",null,"Student Last Nme"),r.createElement("textarea",{id:"Stu_lastname",name:"Stu_lastname",rows:"1",cols:"50",onChange:this.onChangeLast,value:this.state.Stu_lastname})),r.createElement("div",null),r.createElement("br",null),r.createElement(o.Z.Field,null,r.createElement("p",null,"Student ID"),r.createElement("textarea",{id:"Stu_id",name:"Stu_id",rows:"1",cols:"25",onChange:this.onChangeId,value:this.state.Stu_id})),r.createElement("div",null),r.createElement("br",null),r.createElement(o.Z.Field,null,r.createElement("p",null,"Course ID"),r.createElement("select",{name:"Course_id",id:"Course_id",onChange:this.onChangeCourse,value:this.state.Course_id},r.createElement("option",{value:"default",selected:"true"},"Choose a Course ID"),r.createElement("option",null,"Managing Risk with Derivatives - 85098"),r.createElement("option",null,"Business Analysis - 89503"),r.createElement("option",null,"Networks Telecommunication - 47329"))),r.createElement("div",null),r.createElement("br",null),r.createElement(c.Z,{color:"black",type:"submit",onClick:this.saveStudent},"Add Student"),r.createElement(c.Z,{variant:"outline-light",size:"lg"},r.createElement(d.rU,{to:"/professoraddstudent"},"Back")))))},t}(r.Component))},1989:function(e,t,n){var a=n(5723),u=function(){function e(){}var t=e.prototype;return t.getAll=function(){return a.Z.get("/students/")},t.get=function(e){return a.Z.get("/students/"+e)},t.create=function(e){return a.Z.post("/students",e)},t.update=function(e,t){return a.Z.put("/students/"+e,t)},t.delete=function(e){return a.Z.delete("/students/"+e)},t.deleteAll=function(){return a.Z.delete("/students/")},e}();t.Z=new u},7462:function(e,t,n){function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},3366:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,u={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(u[n]=e[n]);return u}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---src-pages-addstudentmanually-js-9f431b1e6414af0d0b04.js.map