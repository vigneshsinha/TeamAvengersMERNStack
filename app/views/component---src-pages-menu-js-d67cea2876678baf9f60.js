/*! For license information please see component---src-pages-menu-js-d67cea2876678baf9f60.js.LICENSE.txt */
(self.webpackChunksmu_app=self.webpackChunksmu_app||[]).push([[675],{7715:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var o=a.apply(null,r);o&&e.push(o)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},7982:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(7462),a=r(3366),i=r(7715),o=r.n(i),l=r(7294),u=r(8498);var s=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];e.apply(this,n),t.apply(this,n)}}),null)},c=["as","disabled","onKeyDown"];function f(e){return!e||"#"===e.trim()}var v=l.forwardRef((function(e,t){var r=e.as,i=void 0===r?"a":r,o=e.disabled,u=e.onKeyDown,v=(0,a.Z)(e,c),p=function(e){var t=v.href,r=v.onClick;(o||f(t))&&e.preventDefault(),o?e.stopPropagation():r&&r(e)};return f(v.href)&&(v.role=v.role||"button",v.href=v.href||"#"),o&&(v.tabIndex=-1,v["aria-disabled"]=!0),l.createElement(i,(0,n.Z)({ref:t},v,{onClick:p,onKeyDown:s((function(e){" "===e.key&&(e.preventDefault(),p(e))}),u)}))}));v.displayName="SafeAnchor";var p=v,d=["bsPrefix","variant","size","active","className","block","type","as"],m=l.forwardRef((function(e,t){var r=e.bsPrefix,i=e.variant,s=e.size,c=e.active,f=e.className,v=e.block,m=e.type,g=e.as,y=(0,a.Z)(e,d),b=(0,u.vE)(r,"btn"),h=o()(f,b,c&&"active",i&&b+"-"+i,v&&b+"-block",s&&b+"-"+s);if(y.href)return l.createElement(p,(0,n.Z)({},y,{as:g,ref:t,className:o()(h,y.disabled&&"disabled")}));t&&(y.ref=t),m?y.type=m:g||(y.type="button");var E=g||"button";return l.createElement(E,(0,n.Z)({},y,{className:h}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1};var g=m},8498:function(e,t,r){"use strict";r.d(t,{vE:function(){return i}});var n=r(7294),a=n.createContext({});a.Consumer,a.Provider;function i(e,t){var r=(0,n.useContext)(a);return e||r[t]||t}},6767:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(7294),a=(r(3935),r(7982)),i=r(7462),o=r(3366),l=r(7715),u=r.n(l),s=r(8498),c=["bsPrefix","size","toggle","vertical","className","as"],f=n.forwardRef((function(e,t){var r=e.bsPrefix,a=e.size,l=e.toggle,f=e.vertical,v=e.className,p=e.as,d=void 0===p?"div":p,m=(0,o.Z)(e,c),g=(0,s.vE)(r,"btn-group"),y=g;return f&&(y=g+"-vertical"),n.createElement(d,(0,i.Z)({},m,{ref:t,className:u()(v,y,a&&g+"-"+a,l&&g+"-toggle")}))}));f.displayName="ButtonGroup",f.defaultProps={vertical:!1,toggle:!1,role:"group"};var v=f,p=r(5444);var d=function(){return n.createElement(n.Fragment,null,n.createElement("div",{class:"logout"},n.createElement(a.Z,{variant:"light"},n.createElement(p.rU,{to:"/logout"},"Logout"))),n.createElement("div",{id:"menubuttons",className:"d-grip gap-2"},n.createElement(v,{vertical:!0,block:!0},n.createElement(a.Z,{variant:"outline-light",size:"lg"},n.createElement(p.rU,{to:"/student"},"Peer Evaluation Form")),n.createElement(a.Z,{variant:"outline-light",size:"lg"},"View Completed Evaluation"),n.createElement(a.Z,{variant:"outline-light",size:"lg"},"Compare Peer Evaluation"))))}},7462:function(e,t,r){"use strict";function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:function(){return n}})},3366:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=component---src-pages-menu-js-d67cea2876678baf9f60.js.map