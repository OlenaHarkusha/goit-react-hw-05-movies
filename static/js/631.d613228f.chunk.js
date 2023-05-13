/*! For license information please see 631.d613228f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[631],{631:function(t,e,r){r.r(e),r.d(e,{default:function(){return O}});var n,o,i,a,c,s,u,l=r(861),h=r(439),f=r(872),p=r(791),d=r(975),v=r(689),g=r(168),y=r(87),m=r(924),x=m.ZP.div(n||(n=(0,g.Z)(["\n  padding: 20px 0;\n"]))),w=(0,m.ZP)(y.Link)(o||(o=(0,g.Z)(["\n  padding: 10px;\n  background-color: #edc5ab;\n  color: #37745b;\n  border-radius: 10px;\n  border: none;\n  text-align: center;\n  margin-bottom: 20px;\n"]))),b=(0,m.ZP)(y.Link)(i||(i=(0,g.Z)(["\n  color: #217074;\n  margin-bottom: 10px;\n  transition: transform 250ms ease-in-out;\n\n  :hover,\n  :focus {\n    transform: scale(1.1);\n  }\n"]))),j=m.ZP.div(a||(a=(0,g.Z)(["\n  margin-top: 20px;\n  display: grid;\n  gap: 20px;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: auto;\n  align-content: stretch;\n  margin-bottom: 20px;\n"]))),L=m.ZP.div(c||(c=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),E=m.ZP.h1(s||(s=(0,g.Z)(["\n  font-size: 30px;\n  color: #217074;\n  text-transform: uppercase;\n"]))),k=m.ZP.h2(u||(u=(0,g.Z)(["\n  font-size: 20px;\n  color: #217074;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n"]))),_=r(184);function Z(){Z=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var i=e&&e.prototype instanceof f?e:f,a=Object.create(i.prototype),c=new k(o||[]);return n(a,"_invoke",{value:b(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var h={};function f(){}function p(){}function d(){}var v={};s(v,i,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(_([])));y&&y!==e&&r.call(y,i)&&(v=y);var m=d.prototype=f.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(n,i,a,c){var s=l(t[n],t,i);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,c)}))}c(s.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function b(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=d,n(m,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=s(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},x(w.prototype),s(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(m),s(m,c,"Generator"),s(m,i,(function(){return this})),s(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var O=function(){var t,e,r=(0,p.useState)({}),n=(0,h.Z)(r,2),o=n[0],i=n[1],a=(0,v.UO)().movieId,c=(0,v.TH)(),s=(0,p.useRef)(null!==(t=null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/"),u=(0,p.useState)(!1),g=(0,h.Z)(u,2),y=g[0],m=g[1],O=(0,p.useState)(!1),P=(0,h.Z)(O,2),S=P[0],G=P[1];(0,p.useEffect)((function(){var t=function(){var t=(0,l.Z)(Z().mark((function t(e){var r;return Z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,(0,f.TP)(e);case 4:r=t.sent,i(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),G(!0);case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}();t(a)}),[a]);var N=o.title,T=o.overview,F=o.poster_path,I=o.vote_average,A=o.genres;return(0,_.jsxs)(x,{children:[(0,_.jsx)(w,{to:s.current,children:"Go back"}),S&&(0,_.jsx)("div",{children:"Sorry, something went wrong"}),y&&(0,_.jsx)(d.g4,{height:"80",width:"80",radius:"9",color:"#37745B",ariaLabel:"three-dots-loading",visible:!0}),(0,_.jsxs)(j,{children:[(0,_.jsx)("img",{src:F?"https://image.tmdb.org/t/p/w500".concat(F):"https://placehold.co/500x750?text=Image",alt:N}),(0,_.jsxs)(L,{children:[(0,_.jsx)(E,{children:N}),(0,_.jsxs)("p",{children:["User score: ",Math.ceil(10*I),"%"]}),(0,_.jsxs)("div",{children:[(0,_.jsx)(k,{children:"Overview"}),(0,_.jsx)("p",{children:T})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)(k,{children:"Genres"}),(0,_.jsx)("p",{children:A&&A.map((function(t){return t.name})).join(", ")})]})]})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)(k,{children:"Additional information"}),(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsx)(b,{to:"cast",children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(b,{to:"reviews",children:"Rewiews"})})]}),(0,_.jsx)(p.Suspense,{fallback:(0,_.jsx)(d.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",visible:!0}),children:(0,_.jsx)(v.j3,{})})]})]})}}}]);
//# sourceMappingURL=631.d613228f.chunk.js.map