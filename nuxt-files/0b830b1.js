(window.webpackJsonp=window.webpackJsonp||[]).push([[74,6,10,35,42],{402:function(t,e,n){var l=n(18),r="["+n(403)+"]",c=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),d=function(t){return function(e){var n=String(l(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},403:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},404:function(t,e,n){"use strict";n.r(e);var l={props:{classes:String}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn",class:t.classes},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(404).default})},405:function(t,e,n){"use strict";var l=n(10),r=n(4),c=n(81),o=n(14),d=n(12),v=n(35),f=n(159),h=n(58),C=n(5),_=n(60),m=n(59).f,w=n(25).f,y=n(13).f,x=n(402).trim,N="Number",T=r.Number,S=T.prototype,E=v(_(S))==N,k=function(t){var e,n,l,r,c,o,d,code,v=h(t,!1);if("string"==typeof v&&v.length>2)if(43===(e=(v=x(v)).charCodeAt(0))||45===e){if(88===(n=v.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(v.charCodeAt(1)){case 66:case 98:l=2,r=49;break;case 79:case 111:l=8,r=55;break;default:return+v}for(o=(c=v.slice(2)).length,d=0;d<o;d++)if((code=c.charCodeAt(d))<48||code>r)return NaN;return parseInt(c,l)}return+v};if(c(N,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var I,D=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof D&&(E?C((function(){S.valueOf.call(n)})):v(n)!=N)?f(new T(k(e)),n,D):k(e)},O=l?m(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;O.length>A;A++)d(T,I=O[A])&&!d(D,I)&&y(D,I,w(T,I));D.prototype=S,S.constructor=D,o(r,N,D)}},406:function(t,e,n){"use strict";n.r(e);n(37),n(405),n(26),n(36),n(82),n(112),n(45),n(47),n(160),n(61),n(158),n(83),n(46);var l={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},407:function(t,e,n){"use strict";var l=n(2),r=n(402).trim;l({target:"String",proto:!0,forced:n(408)("trim")},{trim:function(){return r(this)}})},408:function(t,e,n){var l=n(5),r=n(403);t.exports=function(t){return l((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},409:function(t,e,n){"use strict";n.r(e);n(407),n(112);var l={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var l,r=new Array(1+n++).join("  "),c=new Array(n-1).join("  "),i=0;i<e.children.length;i++)l=document.createTextNode("\n"+r),e.insertBefore(l,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(l=document.createTextNode("\n"+c),e.appendChild(l));return e}var e,div;this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim()+"\n",t(div,0).innerHTML)}},mounted:function(){this.setSrc()}},r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs capitalize opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}],attrs:{id:"myInput"}},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-lg html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(406).default})},411:function(t,e,n){"use strict";n.r(e);var l=n(8),component=Object(l.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("progress",{staticClass:"progress"})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Progress:n(411).default})},484:function(t,e,n){"use strict";n.r(e);var l=n(8),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Wrapper",{attrs:{title:"single stat"}},[n("div",{staticClass:"stats shadow"},[n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-title"},[t._v("Total Page Views")]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("89,400")]),t._v(" "),n("div",{staticClass:"stat-desc"},[t._v("21% more than last month")])])])]),t._v(" "),n("Wrapper",{attrs:{title:"with figure"}},[n("div",{staticClass:"stats shadow w-full"},[n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-figure text-primary"},[n("Icon",{staticClass:"inline-block w-8 h-8 stroke-current",attrs:{glyph:"heart"}})],1),t._v(" "),n("div",{staticClass:"stat-title"},[t._v("Total Likes")]),t._v(" "),n("div",{staticClass:"stat-value text-primary"},[t._v("25.6K")]),t._v(" "),n("div",{staticClass:"stat-desc"},[t._v("21% more than last month")])]),t._v(" "),n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-figure text-info"},[n("Icon",{staticClass:"inline-block w-8 h-8 stroke-current",attrs:{glyph:"lightning-bolt"}})],1),t._v(" "),n("div",{staticClass:"stat-title"},[t._v("Page Views")]),t._v(" "),n("div",{staticClass:"stat-value text-info"},[t._v("2.6M")]),t._v(" "),n("div",{staticClass:"stat-desc"},[t._v("21% more than last month")])]),t._v(" "),n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-figure text-info"},[n("div",{staticClass:"avatar online"},[n("div",{staticClass:"w-16 h-16 p-1 mask mask-squircle bg-base-100"},[n("img",{staticClass:"mask mask-squircle",attrs:{src:"/tailwind-css-component-profile-5@56w.png",alt:"Avatar Tailwind CSS Component"}})])])]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("86%")]),t._v(" "),n("div",{staticClass:"stat-title"},[t._v("Tasks done")]),t._v(" "),n("div",{staticClass:"stat-desc text-info"},[t._v("31 tasks remaining")])])])]),t._v(" "),n("Wrapper",{attrs:{title:"stats row"}},[n("div",{staticClass:"stats shadow w-full"},[n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-figure text-secondary"},[n("Icon",{staticClass:"inline-block w-8 h-8 stroke-current",attrs:{glyph:"info"}})],1),t._v(" "),n("div",{staticClass:"stat-title"},[t._v("Downloads")]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("310M")]),t._v(" "),n("div",{staticClass:"stat-desc"},[t._v("Jan 1st - Feb 1st")])]),t._v(" "),n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-figure text-secondary"},[n("Icon",{staticClass:"inline-block w-8 h-8 stroke-current",attrs:{glyph:"adjustments"}})],1),t._v(" "),n("div",{staticClass:"stat-title"},[t._v("New Users")]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("4,200")]),t._v(" "),n("div",{staticClass:"stat-desc text-success"},[t._v("↗︎ 400 (22%)")])]),t._v(" "),n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-figure text-secondary"},[n("Icon",{staticClass:"inline-block w-8 h-8 stroke-current",attrs:{glyph:"archive"}})],1),t._v(" "),n("div",{staticClass:"stat-title"},[t._v("New Registers")]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("1,200")]),t._v(" "),n("div",{staticClass:"stat-desc text-error"},[t._v("↘︎ 90 (14%)")])])])]),t._v(" "),n("Wrapper",{attrs:{title:"stats row items-center"}},[n("div",{staticClass:"stats shadow w-full"},[n("div",{staticClass:"stat place-items-center place-content-center"},[n("div",{staticClass:"stat-title"},[t._v("Downloads")]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("310M")]),t._v(" "),n("div",{staticClass:"stat-desc"},[t._v("Jan 1st - Feb 1st")])]),t._v(" "),n("div",{staticClass:"stat place-items-center place-content-center"},[n("div",{staticClass:"stat-title"},[t._v("New Users")]),t._v(" "),n("div",{staticClass:"stat-value text-success"},[t._v("4,200")]),t._v(" "),n("div",{staticClass:"stat-desc text-success"},[t._v("↗︎ 400 (22%)")])]),t._v(" "),n("div",{staticClass:"stat place-items-center place-content-center"},[n("div",{staticClass:"stat-title"},[t._v("New Registers")]),t._v(" "),n("div",{staticClass:"stat-value text-error"},[t._v("1,200")]),t._v(" "),n("div",{staticClass:"stat-desc text-error"},[t._v("↘︎ 90 (14%)")])])])]),t._v(" "),n("Wrapper",{attrs:{title:"stats grid-flow-row"}},[n("div",{staticClass:"stats grid-flow-row shadow"},[n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-title"},[t._v("Downloads")]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("310M")]),t._v(" "),n("div",{staticClass:"stat-desc"},[t._v("Jan 1st - Feb 1st")])]),t._v(" "),n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-title"},[t._v("New Users")]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("4,200")]),t._v(" "),n("div",{staticClass:"stat-desc text-success"},[t._v("↗︎ 400 (22%)")])]),t._v(" "),n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-title"},[t._v("New Registers")]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("1,200")]),t._v(" "),n("div",{staticClass:"stat-desc text-error"},[t._v("↘︎ 90 (14%)")])])])]),t._v(" "),n("Wrapper",{attrs:{title:"with buttons, colors and more"}},[n("div",{staticClass:"stats border border-base-300"},[n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-title"},[t._v("Account balance")]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("$89,400")]),t._v(" "),n("div",{staticClass:"stat-actions"},[n("button",{staticClass:"btn btn-sm btn-success"},[t._v("Add funds")])])]),t._v(" "),n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-title"},[t._v("Current balance")]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("$89,400")]),t._v(" "),n("div",{staticClass:"stat-actions"},[n("button",{staticClass:"btn btn-sm btn-primary"},[t._v("Withdrawal")]),t._v(" "),n("button",{staticClass:"btn btn-sm btn-primary"},[t._v("deposit")])])])]),t._v(" "),n("div",{staticClass:"stats w-full border border-base-300 mt-2"},[n("div",{staticClass:"stat"},[n("div",{staticClass:"stat-figure text-primary"},[n("button",{staticClass:"btn loading btn-circle btn-lg bg-base-200 btn-ghost"})]),t._v(" "),n("div",{staticClass:"stat-value"},[t._v("4,900/7,300")]),t._v(" "),n("div",{staticClass:"stat-title"},[t._v("Files transfered")]),t._v(" "),n("div",{staticClass:"stat-desc"},[n("progress",{staticClass:"progress progress-secondary",attrs:{value:"60",max:"100"}})])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Wrapper:n(409).default,Icon:n(161).default,Button:n(404).default,Progress:n(411).default})}}]);