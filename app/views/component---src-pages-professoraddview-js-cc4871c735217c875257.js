/*! For license information please see component---src-pages-professoraddview-js-cc4871c735217c875257.js.LICENSE.txt */
(self.webpackChunksmu_app=self.webpackChunksmu_app||[]).push([[522],{5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},3134:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(4942),a=r(885),o=r(5987),i=r(5900),c=r.n(i),u=r(7294),l=r(5893),s=["as","disabled"];function f(e){var t=e.tagName,r=e.disabled,n=e.href,a=e.target,o=e.rel,i=e.onClick,c=e.tabIndex,u=void 0===c?0:c,l=e.type;t||(t=null!=n||null!=a||null!=o?"a":"button");var s={tagName:t};if("button"===t)return[{type:l||"button",disabled:r},s];var f=function(e){(r||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),r?e.stopPropagation():null==i||i(e)};return[{role:"button",disabled:void 0,tabIndex:r?void 0:u,href:"a"===t&&r?void 0:n,target:"a"===t?a:void 0,"aria-disabled":r||void 0,rel:"a"===t?o:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},s]}var p=u.forwardRef((function(e,t){var r=e.as,n=e.disabled,o=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,s),i=f(Object.assign({tagName:r,disabled:n},o)),c=(0,a.Z)(i,2),u=c[0],p=c[1].tagName;return(0,l.jsx)(p,Object.assign({},o,u,{ref:t}))}));p.displayName="Button";var b=r(9541),v=["as","bsPrefix","variant","size","active","className"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=u.forwardRef((function(e,t){var r=e.as,n=e.bsPrefix,i=e.variant,u=e.size,s=e.active,p=e.className,d=(0,o.Z)(e,v),g=(0,b.vE)(n,"btn"),m=f(y({tagName:r},d)),O=(0,a.Z)(m,2),j=O[0],h=O[1].tagName;return(0,l.jsx)(h,y(y(y({},d),j),{},{ref:t,className:c()(p,g,s&&"active",i&&"".concat(g,"-").concat(i),u&&"".concat(g,"-").concat(u),d.href&&d.disabled&&"disabled")}))}));g.displayName="Button",g.defaultProps={variant:"primary",active:!1,disabled:!1};var m=g},8022:function(e,t,r){"use strict";var n=r(4942),a=r(5987),o=r(5900),i=r.n(o),c=r(7294),u=r(9541),l=r(5893),s=["bsPrefix","size","vertical","className","as"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=c.forwardRef((function(e,t){var r=e.bsPrefix,n=e.size,o=e.vertical,c=e.className,f=e.as,b=void 0===f?"div":f,v=(0,a.Z)(e,s),d=(0,u.vE)(r,"btn-group"),y=d;return o&&(y="".concat(d,"-vertical")),(0,l.jsx)(b,p(p({},v),{},{ref:t,className:i()(c,y,n&&"".concat(d,"-").concat(n))}))}));b.displayName="ButtonGroup",b.defaultProps={vertical:!1,role:"group"},t.Z=b},9541:function(e,t,r){"use strict";r.d(t,{vE:function(){return o}});var n=r(7294);r(5893);var a=n.createContext({prefixes:{}});a.Consumer,a.Provider;function o(e,t){var r=(0,n.useContext)(a).prefixes;return e||r[t]||t}},6312:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=(r(3935),r(3134)),o=r(8022),i=r(5444),c=r(7977);t.default=function(){return n.createElement(n.Fragment,null,n.createElement("div",{class:"logout"},n.createElement(a.Z,{variant:"light"},n.createElement(i.rU,{to:"/logout"},"Logout"))),n.createElement("div",{class:"logo"},n.createElement("img",{src:c.Z,alt:"SMU Logo"})),n.createElement("div",{id:"menubuttons",className:"d-grip gap-2"},n.createElement(o.Z,{vertical:!0,block:!0},n.createElement(a.Z,{variant:"outline-light",size:"lg"},n.createElement(i.rU,{to:"/addcourse"},"Add Courses")),n.createElement(a.Z,{variant:"outline-light",size:"lg"},n.createElement(i.rU,{to:"/viewcourses"},"View/Edit/Delete Courses")),n.createElement(a.Z,{variant:"outline-light",size:"lg"},n.createElement(i.rU,{to:"/professormenu"},"Back")))))}},7977:function(e,t,r){"use strict";t.Z=r.p+"static/smu-498a32d8bc812a51e9d0f02c78c3b0a9.png"},4942:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},5987:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(3366);function a(e,t){if(null==e)return{};var r,a,o=(0,n.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}},3366:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,{Z:function(){return n}})},885:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(181);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(u){c=!0,a=u}finally{try{i||null==r.return||r.return()}finally{if(c)throw a}}return o}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=component---src-pages-professoraddview-js-cc4871c735217c875257.js.map