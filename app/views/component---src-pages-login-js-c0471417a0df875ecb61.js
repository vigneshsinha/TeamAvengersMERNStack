"use strict";(self.webpackChunksmu_app=self.webpackChunksmu_app||[]).push([[2875],{4646:function(e,t,r){r.d(t,{lX:function(){return d}});var n,o=r(7462),a=n||(n={});a.Pop="POP",a.Push="PUSH",a.Replace="REPLACE";var i=function(e){return e};function s(e){e.preventDefault(),e.returnValue=""}function c(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function l(){return Math.random().toString(36).substr(2,8)}function u(e){var t=e.pathname,r=e.search;return(void 0===t?"/":t)+(void 0===r?"":r)+(void 0===(e=e.hash)?"":e)}function p(e){var t={};if(e){var r=e.indexOf("#");0<=r&&(t.hash=e.substr(r),e=e.substr(0,r)),0<=(r=e.indexOf("?"))&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function d(e){function t(){var e=f.location,t=g.state||{};return[t.idx,i({pathname:e.pathname,search:e.search,hash:e.hash,state:t.usr||null,key:t.key||"default"})]}function r(e){return"string"==typeof e?e:u(e)}function a(e,t){return void 0===t&&(t=null),i((0,o.Z)({},y,"string"==typeof e?p(e):e,{state:t,key:l()}))}function d(e){x=e,e=t(),b=e[0],y=e[1],v.call({action:x,location:y})}function m(e){g.go(e)}void 0===e&&(e={});var f=void 0===(e=e.window)?document.defaultView:e,g=f.history,h=null;f.addEventListener("popstate",(function(){if(h)w.call(h),h=null;else{var e=n.Pop,r=t(),o=r[0];if(r=r[1],w.length){if(null!=o){var a=b-o;a&&(h={action:e,location:r,retry:function(){m(-1*a)}},m(a))}}else d(e)}}));var x=n.Pop,b=(e=t())[0],y=e[1],v=c(),w=c();return null==b&&(b=0,g.replaceState((0,o.Z)({},g.state,{idx:b}),"")),{get action(){return x},get location(){return y},createHref:r,push:function e(t,o){var i=n.Push,s=a(t,o);if(!w.length||(w.call({action:i,location:s,retry:function(){e(t,o)}}),0)){var c=[{usr:s.state,key:s.key,idx:b+1},r(s)];s=c[0],c=c[1];try{g.pushState(s,"",c)}catch(l){f.location.assign(c)}d(i)}},replace:function e(t,o){var i=n.Replace,s=a(t,o);w.length&&(w.call({action:i,location:s,retry:function(){e(t,o)}}),1)||(s=[{usr:s.state,key:s.key,idx:b},r(s)],g.replaceState(s[0],"",s[1]),d(i))},go:m,back:function(){m(-1)},forward:function(){m(1)},listen:function(e){return v.push(e)},block:function(e){var t=w.push(e);return 1===w.length&&f.addEventListener("beforeunload",s),function(){t(),w.length||f.removeEventListener("beforeunload",s)}}}}},7102:function(e,t,r){r.r(t),r.d(t,{default:function(){return ae}});var n=r(7294),o=r(5444),a=r(3332),i=r(7462),s=r(638),c={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},l=function(e){return(0,i.Z)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};var u=(0,s.Z)((function(e){return{"@global":{html:c,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,i.Z)({margin:0},l(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,r=void 0===t?null:t;return e.classes,n.createElement(n.Fragment,null,r)})),p=r(5987),d=r(5505),m=[0,1,2,3,4,5,6,7,8,9,10],f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=parseFloat(e);return"".concat(r/t).concat(String(e).replace(String(r),"")||"px")}var h=n.forwardRef((function(e,t){var r=e.alignContent,o=void 0===r?"stretch":r,a=e.alignItems,s=void 0===a?"stretch":a,c=e.classes,l=e.className,u=e.component,m=void 0===u?"div":u,f=e.container,g=void 0!==f&&f,h=e.direction,x=void 0===h?"row":h,b=e.item,y=void 0!==b&&b,v=e.justify,w=e.justifyContent,k=void 0===w?"flex-start":w,E=e.lg,S=void 0!==E&&E,C=e.md,Z=void 0!==C&&C,W=e.sm,j=void 0!==W&&W,P=e.spacing,z=void 0===P?0:P,K=e.wrap,M=void 0===K?"wrap":K,N=e.xl,R=void 0!==N&&N,T=e.xs,F=void 0!==T&&T,G=e.zeroMinWidth,I=void 0!==G&&G,L=(0,p.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),O=(0,d.Z)(c.root,l,g&&[c.container,0!==z&&c["spacing-xs-".concat(String(z))]],y&&c.item,I&&c.zeroMinWidth,"row"!==x&&c["direction-xs-".concat(String(x))],"wrap"!==M&&c["wrap-xs-".concat(String(M))],"stretch"!==s&&c["align-items-xs-".concat(String(s))],"stretch"!==o&&c["align-content-xs-".concat(String(o))],"flex-start"!==(v||k)&&c["justify-content-xs-".concat(String(v||k))],!1!==F&&c["grid-xs-".concat(String(F))],!1!==j&&c["grid-sm-".concat(String(j))],!1!==Z&&c["grid-md-".concat(String(Z))],!1!==S&&c["grid-lg-".concat(String(S))],!1!==R&&c["grid-xl-".concat(String(R))]);return n.createElement(m,(0,i.Z)({className:O,ref:t},L))})),x=(0,s.Z)((function(e){return(0,i.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var r={};return m.forEach((function(n){var o=e.spacing(n);0!==o&&(r["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(g(o,2)),width:"calc(100% + ".concat(g(o),")"),"& > $item":{padding:g(o,2)}})})),r}(e,"xs"),e.breakpoints.keys.reduce((function(t,r){return function(e,t,r){var n={};f.forEach((function(e){var t="grid-".concat(r,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===r?(0,i.Z)(e,n):e[t.breakpoints.up(r)]=n}(t,e,r),t}),{}))}),{name:"MuiGrid"})(h),b=x,y=r(2982),v=(r(5697),r(4131));function w(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}function k(e){var t=function(t){var r=e(t);return t.css?(0,i.Z)({},(0,v.Z)(r,e((0,i.Z)({theme:t.theme},t.css))),w(t.css,[e.filterProps])):t.sx?(0,i.Z)({},(0,v.Z)(r,e((0,i.Z)({theme:t.theme},t.sx))),w(t.sx,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css","sx"].concat((0,y.Z)(e.filterProps)),t}var E=k;var S=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=function(e){return t.reduce((function(t,r){var n=r(e);return n?(0,v.Z)(t,n):t}),{})};return n.propTypes={},n.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),n},C=r(4942),Z=r(3592);function W(e,t){return t&&"string"==typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var j=function(e){var t=e.prop,r=e.cssProperty,n=void 0===r?e.prop:r,o=e.themeKey,a=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=W(e.theme,o)||{};return(0,Z.k)(e,r,(function(e){var t;return"function"==typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=W(i,e)||e,a&&(t=a(t))),!1===n?t:(0,C.Z)({},n,t)}))};return i.propTypes={},i.filterProps=[t],i};function P(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var z=S(j({prop:"border",themeKey:"borders",transform:P}),j({prop:"borderTop",themeKey:"borders",transform:P}),j({prop:"borderRight",themeKey:"borders",transform:P}),j({prop:"borderBottom",themeKey:"borders",transform:P}),j({prop:"borderLeft",themeKey:"borders",transform:P}),j({prop:"borderColor",themeKey:"palette"}),j({prop:"borderRadius",themeKey:"shape"})),K=S(j({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),j({prop:"display"}),j({prop:"overflow"}),j({prop:"textOverflow"}),j({prop:"visibility"}),j({prop:"whiteSpace"})),M=S(j({prop:"flexBasis"}),j({prop:"flexDirection"}),j({prop:"flexWrap"}),j({prop:"justifyContent"}),j({prop:"alignItems"}),j({prop:"alignContent"}),j({prop:"order"}),j({prop:"flex"}),j({prop:"flexGrow"}),j({prop:"flexShrink"}),j({prop:"alignSelf"}),j({prop:"justifyItems"}),j({prop:"justifySelf"})),N=S(j({prop:"gridGap"}),j({prop:"gridColumnGap"}),j({prop:"gridRowGap"}),j({prop:"gridColumn"}),j({prop:"gridRow"}),j({prop:"gridAutoFlow"}),j({prop:"gridAutoColumns"}),j({prop:"gridAutoRows"}),j({prop:"gridTemplateColumns"}),j({prop:"gridTemplateRows"}),j({prop:"gridTemplateAreas"}),j({prop:"gridArea"})),R=S(j({prop:"position"}),j({prop:"zIndex",themeKey:"zIndex"}),j({prop:"top"}),j({prop:"right"}),j({prop:"bottom"}),j({prop:"left"})),T=S(j({prop:"color",themeKey:"palette"}),j({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),F=j({prop:"boxShadow",themeKey:"shadows"});function G(e){return e<=1?"".concat(100*e,"%"):e}var I=j({prop:"width",transform:G}),L=j({prop:"maxWidth",transform:G}),O=j({prop:"minWidth",transform:G}),A=j({prop:"height",transform:G}),B=j({prop:"maxHeight",transform:G}),U=j({prop:"minHeight",transform:G}),D=(j({prop:"size",cssProperty:"width",transform:G}),j({prop:"size",cssProperty:"height",transform:G}),S(I,L,O,A,B,U,j({prop:"boxSizing"}))),H=r(5408),q=S(j({prop:"fontFamily",themeKey:"typography"}),j({prop:"fontSize",themeKey:"typography"}),j({prop:"fontStyle",themeKey:"typography"}),j({prop:"fontWeight",themeKey:"typography"}),j({prop:"letterSpacing"}),j({prop:"lineHeight"}),j({prop:"textAlign"})),X=r(6410),V=E(S(z,K,M,N,R,T,F,D,H.Z,q)),J=(0,X.Z)("div")(V,{name:"MuiBox"}),_=r(920),$=r(1664),Q=n.forwardRef((function(e,t){var r=e.classes,o=e.className,a=e.component,s=void 0===a?"div":a,c=e.disableGutters,l=void 0!==c&&c,u=e.fixed,m=void 0!==u&&u,f=e.maxWidth,g=void 0===f?"lg":f,h=(0,p.Z)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return n.createElement(s,(0,i.Z)({className:(0,d.Z)(r.root,o,m&&r.fixed,l&&r.disableGutters,!1!==g&&r["maxWidth".concat((0,$.Z)(String(g)))]),ref:t},h))})),Y=(0,s.Z)((function(e){return{root:(0,C.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,r){var n=e.breakpoints.values[r];return 0!==n&&(t[e.breakpoints.up(r)]={maxWidth:n}),t}),{}),maxWidthXs:(0,C.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:(0,C.Z)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:(0,C.Z)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:(0,C.Z)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:(0,C.Z)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(Q),ee=r(453),te=r(1097),re=r(4646),ne=r(7977),oe=(0,_.Z)((function(e){var t;return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:(t={margin:e.spacing(3,0,2),padding:2,height:40,backgroundColor:"#E3B680",color:"#1E4C38",width:"100%"},t.height="40pt",t.textTransform="none",t.fontWeight="bold",t.marginTop="5%",t.fontFamily="Verdana",t),rightgrid:{backgroundColor:"white",width:"100%"},title:{fontWeight:"bold",color:"#1E4C38"},outsidegrid:{backgroundColor:"linear-gradient(to right, #12c2e9, #c471ed, #f64f59)",height:"100%"},insidegrid:{},lefttitle:{fontWeight:"bold",color:"black",margin:"2px"},text:{color:"#1E4C38"}}}));function ae(e){var t=(0,n.useState)({loading:!1,msg:null,hasMsg:!1,success:!1,showPassword:!1}),r=t[0],i=t[1],s=(0,n.useState)((function(){var e=localStorage.getItem("username");return JSON.parse(e)||""})),c=s[0],l=s[1],p=(0,n.useState)(""),d=(p[0],p[1]),m=(0,re.lX)(),f=function(){m.push("/menu"),window.location.reload()},g=function(){m.push("/professormenu"),window.location.reload()},h=oe();return document.body.classList.add("no-scroll"),(0,n.useEffect)((function(){localStorage.setItem("username",JSON.stringify(c))}),[c]),n.createElement(J,{display:"flex",justifyContent:"center",bgcolor:"gray",style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},width:"50%"},n.createElement(Y,{component:"main",width:"50%",justify:"center"},n.createElement(u,null),n.createElement(b,{container:!0,direction:"row",width:"100",position:"absolute",top:"50%",left:"50%","margin-right":"-50%",className:h.insidegrid},n.createElement(b,{item:!0,sm:12,md:12,className:h.rightGrid},n.createElement("div",{className:h.paper},n.createElement(b,{container:!0,justify:"center"},n.createElement(b,{item:!0},n.createElement(ee.Z,{component:"h1",variant:"h5",justify:"flex-start",className:h.title},"Login"))),n.createElement("div",null),n.createElement("br",null),n.createElement(b,{container:!0,justify:"center"},n.createElement(b,{item:!0},n.createElement("img",{src:ne.Z,alt:"SMU Logo"}))),n.createElement("form",{id:"registerUserForm",name:"registerUserForm",className:h.form,onSubmit:function(e){e.preventDefault(),i((function(e){return Object.assign({},e,{loadin:!0})}));r.email,r.password;var t=document.forms.registerUserForm.username.value,n=document.forms.registerUserForm.password.value;["markpal@smu.edu.sg","ttest@smu.edu.sg","ttesta@smu.edu.sg","markpalm@smu.edu.sg","wileym@smu.edu.sg","allieam@smu.edu.sg","vigneshsinha@smu.edu.sg","otism@smu.edu.sg","derekstoughton@smu.edu.sg","kirkg@smu.edu.sg","jacquelynyoung@smu.edu.sg","jacobmims@smu.edu.sg","calizonn@smu.edu.sg","psastri@smu.edu.sg"].includes(t)?["password","hokies3","pass321","password1","benjithedog2","batman123","password123","qwery","picture1","passwordabc123","abcdefg","villains2"].includes(n)?f():console.log("The password is incorrect."):["buketavci@smu.edu.sg","shchan@smu.edu.sg","kmchan@smu.edu.sg","dbhave@smu.edu.sg","mbashshur@smu.edu.sg","rbledow@smu.edu.sg","eboehmer@smu.edu.sg","oboyabatli@smu.edu.sg","sandeepc@smu.edu.sg","shantanub@smu.edu.sg"].includes(t)?["password"].includes(n)?g():console.log("The password is incorrect."):console.log("The username is incorrect.")}},n.createElement(b,{container:!0,spacing:2,justify:"center"},n.createElement(b,{item:!0,xs:11,sm:11},n.createElement(te.Z,{autoFocus:"true",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",type:"email",autoComplete:"email",onChange:function(e){return l(e.target.value)}})),n.createElement(b,{item:!0,xs:11,sm:11},n.createElement(te.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",id:"password",type:r.showPassword?"text":"password",onChange:function(e){return d(e.target.value)},autoComplete:"current-password"})),n.createElement(b,{item:!0,xs:12,sm:12,align:"left"},n.createElement(o.rU,{href:"#",variant:"body2",className:h.text},"Forgot Password?")),n.createElement(b,{item:!0,xs:12,sm:12,align:"right"},n.createElement(a.Z,{variant:"outline-light",size:"lg"},n.createElement(o.rU,{to:"/signup"},"Not a member yet?")))),n.createElement(b,{container:!0,justify:"center"},n.createElement(b,{item:!0,xs:12,sm:12},n.createElement(ee.Z,{style:(r.hasMsg,{color:r.success?"green":"red"}),component:"p",variant:"subtitle1",justify:"center",align:"center"},r.msg)),n.createElement(b,{item:!0,xs:4,sm:4},n.createElement(a.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"dark",padding:5,className:h.submit},"Submit")))))))))}},7977:function(e,t,r){t.Z=r.p+"static/smu-498a32d8bc812a51e9d0f02c78c3b0a9.png"}}]);
//# sourceMappingURL=component---src-pages-login-js-c0471417a0df875ecb61.js.map