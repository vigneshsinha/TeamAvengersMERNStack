"use strict";(self.webpackChunksmu_app=self.webpackChunksmu_app||[]).push([[905],{3484:function(e,t,n){var r=n(5723),l=function(){function e(){}var t=e.prototype;return t.getAll=function(){return r.Z.get("/courses/")},t.get=function(e){return r.Z.get("/courses/"+e)},t.create=function(e){return r.Z.post("/courses",e)},t.update=function(e,t){return r.Z.put("/courses/"+e,t)},t.delete=function(e){return r.Z.delete("/courses/"+e)},t.deleteAll=function(){return r.Z.delete("/courses/")},e}();t.Z=new l},5723:function(e,t,n){var r=n(6633),l=n.n(r);t.Z=l().create({baseURL:"http://localhost:8020/api",headers:{"Content-Type":"application/json"}})},6207:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(7326),l=n(4578),s=n(7294),a=n(3484),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).onChangeSearch=n.onChangeSearch.bind((0,r.Z)(n)),n.retrieveCourses=n.retrieveCourses.bind((0,r.Z)(n)),n.refreshList=n.refreshList.bind((0,r.Z)(n)),n.setActiveCourse=n.setActiveCourse.bind((0,r.Z)(n)),n.removeAll=n.removeAll.bind((0,r.Z)(n)),n.searchCourse=n.searchCourse.bind((0,r.Z)(n)),n.state={courses:[],currentCourse:null,currentIndex:-1,search:""},n}(0,l.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.retrieveCourses()},n.onChangeSearch=function(e){var t=e.target.value;this.setState({search:t})},n.retrieveCourses=function(){var e=this;a.Z.getAll().then((function(t){e.setState({courses:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))},n.refreshList=function(){this.retrieveTutorials(),this.setState({currentTutorial:null,currentIndex:-1})},n.setActiveCourse=function(e,t){this.setState({currentCourse:e,currentIndex:t})},n.removeAll=function(){var e=this;a.Z.deleteAll().then((function(t){console.log(t.data),e.refreshList()})).catch((function(e){console.log(e)}))},n.searchCourse=function(){var e=this;a.Z.findOne(this.state.search).then((function(t){e.setState({courses:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))},n.render=function(){var e=this,t=this.state,n=t.search,r=t.courses,l=t.currentCourse,a=t.currentIndex;return s.createElement("div",{className:"list row"},s.createElement("div",{className:"col-md-8"},s.createElement("div",{className:"input-group mb-3"},s.createElement("input",{type:"text",className:"form-control",placeholder:"Search",value:n,onChange:this.onChangeSearch}),s.createElement("div",{className:"input-group-append"},s.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.searchCourse},"Search")))),s.createElement("div",{className:"col-md-6"},s.createElement("h4",null,"Courses List"),s.createElement("ul",{className:"list-group"},r&&r.map((function(t,n){return s.createElement("li",{className:"list-group-item"+(n===a?"active":""),onClick:function(){return e.setActiveCourse(t,n)},key:n},t.Course_name)}))),s.createElement("button",{className:"m-3 btn btn-sm btn-danger",onClick:this.removeAll},"Remove All")),s.createElement("div",{className:"col-md-6"},l?s.createElement("div",null,s.createElement("h4",null,"Course"),s.createElement("div",null,s.createElement("label",null,s.createElement("strong",null,"Course ID:"))," ",l.Course_id),s.createElement("div",null,s.createElement("label",null,s.createElement("strong",null,"Course Name"))," ",l.Course_name),s.createElement("div",null,s.createElement("label",null,s.createElement("strong",null,"Course Term:"))," ",l.Course_term),s.createElement("div",null,s.createElement("label",null,s.createElement("strong",null,"Course Year:"))," ",l.Course_year),s.createElement("div",null,s.createElement("label",null,s.createElement("strong",null,"Professor ID:"))," ",l.Prof_id),s.createElement("div",null,s.createElement("label",null,s.createElement("strong",null,"Course Start Time:"))," ",l.Course_start),s.createElement("div",null,s.createElement("label",null,s.createElement("strong",null,"Course End Time:"))," ",l.Course_end),s.createElement("div",null,s.createElement("label",null,s.createElement("strong",null,"Course Day(s):"))," ",l.Course_day)):s.createElement("div",null,s.createElement("br",null),s.createElement("p",null,"Please click on a course."))))},t}(s.Component)}}]);
//# sourceMappingURL=component---src-pages-course-list-component-js-d338ed1ee810e7140515.js.map