(window.webpackJsonp=window.webpackJsonp||[]).push([[57,8,10,16,42],{402:function(e,t,n){var r=n(18),c="["+n(403)+"]",o=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),d=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(o,"")),2&e&&(n=n.replace(l,"")),n}};e.exports={start:d(1),end:d(2),trim:d(3)}},403:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},405:function(e,t,n){"use strict";var r=n(10),c=n(4),o=n(81),l=n(14),d=n(12),h=n(35),f=n(159),m=n(58),v=n(5),C=n(60),x=n(59).f,y=n(25).f,_=n(13).f,k=n(402).trim,w="Number",E=c.Number,S=E.prototype,T=h(C(S))==w,N=function(e){var t,n,r,c,o,l,d,code,h=m(e,!1);if("string"==typeof h&&h.length>2)if(43===(t=(h=k(h)).charCodeAt(0))||45===t){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(h.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+h}for(l=(o=h.slice(2)).length,d=0;d<l;d++)if((code=o.charCodeAt(d))<48||code>c)return NaN;return parseInt(o,r)}return+h};if(o(w,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var I,O=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof O&&(T?v((function(){S.valueOf.call(n)})):h(n)!=w)?f(new E(N(t)),n,O):N(t)},D=r?x(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;D.length>A;A++)d(E,I=D[A])&&!d(O,I)&&_(O,I,y(E,I));O.prototype=S,S.constructor=O,l(c,w,O)}},406:function(e,t,n){"use strict";n.r(t);n(37),n(405),n(26),n(36),n(82),n(112),n(45),n(47),n(160),n(61),n(158),n(83),n(46);var r={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(e){return["height","width"].includes(e)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var e=this,t=[];return Object.keys(this.cachedStyles).forEach((function(n){t.push("".concat(e.convertToCssProperty(n)," ").concat(e.duration,"ms ").concat(e.easing))})),t.join(", ")}},methods:{enter:function(e,t){this.detectAndCacheDimensions(e),this.setClosedDimensions(e),this.hideOverflow(e),this.forceRepaint(e),this.setTransition(e),this.setOpenedDimensions(e),setTimeout(t,this.duration)},afterEnter:function(e){this.unsetOverflow(e),this.unsetTransition(e),this.unsetDimensions(e),this.clearCachedDimensions()},leave:function(e,t){this.detectAndCacheDimensions(e),this.setOpenedDimensions(e),this.hideOverflow(e),this.forceRepaint(e),this.setTransition(e),this.setClosedDimensions(e),setTimeout(t,this.duration)},afterLeave:function(e){this.unsetOverflow(e),this.unsetTransition(e),this.unsetDimensions(e),this.clearCachedDimensions()},detectAndCacheDimensions:function(e){if(!this.cachedStyles){var t=e.style.visibility,n=e.style.display;e.style.visibility="hidden",e.style.display="",this.cachedStyles=this.detectRelevantDimensions(e),e.style.visibility=t,e.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(e){return"height"===this.dimension?{height:e.offsetHeight+"px",paddingTop:e.style.paddingTop||this.getCssValue(e,"padding-top"),paddingBottom:e.style.paddingBottom||this.getCssValue(e,"padding-bottom")}:"width"===this.dimension?{width:e.offsetWidth+"px",paddingLeft:e.style.paddingLeft||this.getCssValue(e,"padding-left"),paddingRight:e.style.paddingRight||this.getCssValue(e,"padding-right")}:{}},setTransition:function(e){e.style.transition=this.transition},unsetTransition:function(e){e.style.transition=""},hideOverflow:function(e){e.style.overflow="hidden"},unsetOverflow:function(e){e.style.overflow=""},setClosedDimensions:function(e){Object.keys(this.cachedStyles).forEach((function(t){e.style[t]="0"}))},setOpenedDimensions:function(e){var t=this;Object.keys(this.cachedStyles).forEach((function(n){e.style[n]=t.cachedStyles[n]}))},unsetDimensions:function(e){Object.keys(this.cachedStyles).forEach((function(t){e.style[t]=""}))},forceRepaint:function(e){getComputedStyle(e)[this.dimension]},getCssValue:function(e,style){return getComputedStyle(e,null).getPropertyValue(style)},convertToCssProperty:function(style){var e=style.match(/([A-Z])/g);if(!e)return style;for(var i=0,t=e.length;i<t;i++)style=style.replace(new RegExp(e[i]),"-"+e[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},c=n(8),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",{attrs:{name:e.name},on:{enter:e.enter,"after-enter":e.afterEnter,leave:e.leave,"after-leave":e.afterLeave}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},407:function(e,t,n){"use strict";var r=n(2),c=n(402).trim;r({target:"String",proto:!0,forced:n(408)("trim")},{trim:function(){return c(this)}})},408:function(e,t,n){var r=n(5),c=n(403);e.exports=function(e){return r((function(){return!!c[e]()||"​᠎"!="​᠎"[e]()||c[e].name!==e}))}},409:function(e,t,n){"use strict";n.r(t);n(407),n(112);var r={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function e(t,n){for(var r,c=new Array(1+n++).join("  "),o=new Array(n-1).join("  "),i=0;i<t.children.length;i++)r=document.createTextNode("\n"+c),t.insertBefore(r,t.children[i]),e(t.children[i],n),t.lastElementChild==t.children[i]&&(r=document.createTextNode("\n"+o),t.appendChild(r));return t}var t,div;this.sourcecode=(t=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=t.trim()+"\n",e(div,0).innerHTML)}},mounted:function(){this.setSrc()}},c=n(8),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs capitalize opacity-60"},[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),e.nocode?e._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!e.showcode},on:{click:function(t){e.showcode=!1}}},[e._v("Preview")]),e._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":e.showcode},on:{click:function(t){e.showcode=!0}}},[e._v("HTML")]),e._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),e._v(" "),n("div",[n("collapse-transition",[!e.nocode&&e.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.sourcecode,expression:"sourcecode"}],attrs:{id:"myInput"}},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-lg html"})])]):e._e()]),e._v(" "),n("collapse-transition",[e.showcode?e._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:e.classes},[e._t("default")],2)])])],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CollapseTransition:n(406).default})},412:function(e,t,n){"use strict";n.r(t);var r=n(8),component=Object(r.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"form-control"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},418:function(e,t,n){"use strict";n.r(t);var r={props:{classes:String}},c=n(8),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{staticClass:"checkbox",class:e.classes,attrs:{type:"checkbox",checked:""}}),e._v(" "),n("span",{staticClass:"checkbox-mark"})])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Input:n(113).default})},495:function(e,t,n){"use strict";n.r(t);var r=n(8),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Wrapper",{attrs:{title:"checkbox",classes:"flex flex-col space-y-2 max-w-xs"}},[n("div",{staticClass:"p-6 card bordered"},[n("FormControl",[n("label",{staticClass:"cursor-pointer label"},[n("span",{staticClass:"label-text"},[e._v("Remember me")]),e._v(" "),n("Checkbox",{})],1)])],1)]),e._v(" "),n("Wrapper",{attrs:{title:"checkbox primary",classes:"flex flex-col space-y-2 max-w-xs"}},[n("div",{staticClass:"p-6 card bordered"},[n("FormControl",[n("label",{staticClass:"cursor-pointer label"},[n("span",{staticClass:"label-text"},[e._v("Remember me")]),e._v(" "),n("Checkbox",{attrs:{classes:"checkbox-primary"}})],1)])],1)]),e._v(" "),n("Wrapper",{attrs:{title:"checkbox secondary",classes:"flex flex-col space-y-2 max-w-xs"}},[n("div",{staticClass:"p-6 card bordered"},[n("FormControl",[n("label",{staticClass:"cursor-pointer label"},[n("span",{staticClass:"label-text"},[e._v("Remember me")]),e._v(" "),n("Checkbox",{attrs:{classes:"checkbox-secondary"}})],1)])],1)]),e._v(" "),n("Wrapper",{attrs:{title:"checkbox accent",classes:"flex flex-col space-y-2 max-w-xs"}},[n("div",{staticClass:"p-6 card bordered"},[n("FormControl",[n("label",{staticClass:"cursor-pointer label"},[n("span",{staticClass:"label-text"},[e._v("Remember me")]),e._v(" "),n("Checkbox",{attrs:{classes:"checkbox-accent"}})],1)])],1)]),e._v(" "),n("Wrapper",{attrs:{title:"checkbox disabled",classes:"flex flex-col space-y-2 max-w-xs"}},[n("div",{staticClass:"p-6 card bordered"},[n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[e._v("Disabled + unchecked")]),e._v(" "),n("input",{staticClass:"checkbox",attrs:{type:"checkbox",disabled:""}}),e._v(" "),n("span",{staticClass:"checkbox-mark"})])]),e._v(" "),n("FormControl",[n("label",{staticClass:"label"},[n("span",{staticClass:"label-text"},[e._v("Disabled + checked")]),e._v(" "),n("input",{staticClass:"checkbox",attrs:{type:"checkbox",checked:"checked",disabled:""}}),e._v(" "),n("span",{staticClass:"checkbox-mark"})])])],1)])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Checkbox:n(418).default,FormControl:n(412).default,Wrapper:n(409).default,Input:n(113).default})}}]);