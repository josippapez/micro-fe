"use strict";(self.webpackChunkmicro_fe_testing_2=self.webpackChunkmicro_fe_testing_2||[]).push([[585],{585:function(n,e,t){t.r(e);var r=t(755),o=t(292),i=t(47),c=t.n(i),a=t(691),s=t.n(a),l=t(694);t(722),e.default=function(){var n=(0,l.useSelector)((function(n){return n})),e=(0,a.useState)([]),t=(0,o.Z)(e,2),i=t[0],p=t[1];console.log("remoteApp",n),console.info("remoteApp",i);var u=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://jsonplaceholder.typicode.com/posts").then((function(n){return n.json()}));case 2:(e=n.sent)&&p(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return s().createElement("div",{className:"App"},"First app, ",n.counter.counter,s().createElement("button",{onClick:function(){return u()}},"Fetch"),s().createElement("div",{style:{maxHeight:"200px",overflow:"auto",scrollBehavior:"smooth"}},i.map((function(n){return s().createElement("div",{key:n.id,style:{padding:"20px"}},n.title,s().createElement("div",null,n.body))}))))}},87:function(n,e,t){var r=t(402),o=t.n(r),i=t(352),c=t.n(i)()(o());c.push([n.id,".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n",""]),e.Z=c},722:function(n,e,t){var r=t(701),o=t.n(r),i=t(236),c=t.n(i),a=t(80),s=t.n(a),l=t(850),p=t.n(l),u=t(182),f=t.n(u),m=t(213),d=t.n(m),h=t(87),v={};v.styleTagTransform=d(),v.setAttributes=p(),v.insert=s().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=f(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals}}]);