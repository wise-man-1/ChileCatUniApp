(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"08e7":function(t,e,n){"use strict";n("a9e3"),n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-skeleton",props:{elColor:{type:String,default:"#e5e5e5"},bgColor:{type:String,default:"#ffffff"},animation:{type:Boolean,default:!1},borderRadius:{type:[String,Number],default:"10"},loading:{type:Boolean,default:!0}},data:function(){return{windowWinth:750,windowHeight:1500,filletNodes:[],circleNodes:[],RectNodes:[],top:0,left:0}},methods:{selecterQueryInfo:function(){var t=this,e="";e=uni.createSelectorQuery(),e.selectAll(".u-skeleton").boundingClientRect().exec((function(e){t.windowHeight=e[0][0].height,t.windowWinth=e[0][0].width,t.top=e[0][0].bottom-e[0][0].height,t.left=e[0][0].left})),this.getRectEls(),this.getCircleEls(),this.getFilletEls()},getRectEls:function(){var t=this,e="";e=uni.createSelectorQuery(),e.selectAll(".u-skeleton-rect").boundingClientRect().exec((function(e){t.RectNodes=e[0]}))},getFilletEls:function(){var t=this,e="";e=uni.createSelectorQuery(),e.selectAll(".u-skeleton-fillet").boundingClientRect().exec((function(e){t.filletNodes=e[0]}))},getCircleEls:function(){var t=this,e="";e=uni.createSelectorQuery(),e.selectAll(".u-skeleton-circle").boundingClientRect().exec((function(e){t.circleNodes=e[0]}))}},mounted:function(){var t=uni.getSystemInfoSync();this.windowHeight=t.windowHeight,this.windowWinth=t.windowWidth,this.selecterQueryInfo()}};e.default=i},1647:function(t,e,n){var i=n("59d5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("36c42c9d",i,!0,{sourceMap:!1,shadowMode:!1})},"4f0b":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.container[data-v-29506f92]{padding:%?20?% %?60?%}.userinfo[data-v-29506f92]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.userinfo-avatar[data-v-29506f92]{width:%?128?%;height:%?128?%;margin:%?20?%;border-radius:50%}.lists[data-v-29506f92]{margin:10px 0}',""]),t.exports=e},"59d5":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.index[data-v-29506f92]{font-family:YouShe}',""]),t.exports=e},"61c9":function(t,e,n){"use strict";n.r(e);var i=n("08e7"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},6287:function(t,e,n){var i=n("a583");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("25ccd88a",i,!0,{sourceMap:!1,shadowMode:!1})},7098:function(t,e,n){var i=n("4f0b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("b5698444",i,!0,{sourceMap:!1,shadowMode:!1})},8329:function(t,e,n){"use strict";n.r(e);var i=n("92d4"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},8901:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?n("v-uni-view",{style:{width:t.windowWinth+"px",height:t.windowHeight+"px",backgroundColor:t.bgColor,position:"absolute",left:t.left+"px",top:t.top+"px",zIndex:9998,overflow:"hidden"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[t._l(t.RectNodes,(function(e,i){return n("v-uni-view",{key:t.$u.guid(),class:[t.animation?"skeleton-fade":""],style:{width:e.width+"px",height:e.height+"px",backgroundColor:t.elColor,position:"absolute",left:e.left-t.left+"px",top:e.top-t.top+"px"}})})),t._l(t.circleNodes,(function(e,i){return n("v-uni-view",{key:t.$u.guid(),class:t.animation?"skeleton-fade":"",style:{width:e.width+"px",height:e.height+"px",backgroundColor:t.elColor,borderRadius:e.width/2+"px",position:"absolute",left:e.left-t.left+"px",top:e.top-t.top+"px"}})})),t._l(t.filletNodes,(function(e,i){return n("v-uni-view",{key:t.$u.guid(),class:t.animation?"skeleton-fade":"",style:{width:e.width+"px",height:e.height+"px",backgroundColor:t.elColor,borderRadius:t.borderRadius+"rpx",position:"absolute",left:e.left-t.left+"px",top:e.top-t.top+"px"}})}))],2):t._e()},a=[]},"92d4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{userInfo:{avatarUrl:"https://qlogo2.store.qq.com/qzone/1416956117/1416956117/100?1531323520",nickName:"uView"},lists:["君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。","人生得意须尽欢，莫使金樽空对月","天生我材必有用，千金散尽还复来"],loading:!0}},onLoad:function(){var t=this;setTimeout((function(){t.loading=!1}),2e3)}};e.default=i},"964c":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uSkeleton:n("e8b6").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"index"},[n("v-uni-view",{staticClass:"container u-skeleton"},[n("v-uni-view",{staticClass:"userinfo"},[[n("v-uni-image",{staticClass:"userinfo-avatar u-skeleton-circle",attrs:{src:t.userInfo.avatarUrl}}),n("v-uni-text",{staticClass:"u-skeleton-fillet"},[t._v(t._s(t.userInfo.nickName))])]],2),n("v-uni-view",{staticStyle:{margin:"20px 0"}},t._l(t.lists,(function(e,i){return n("v-uni-view",{key:i,staticClass:"lists"},[n("v-uni-text",{staticClass:"u-skeleton-rect"},[t._v(t._s(e))])],1)})),1)],1),n("u-skeleton",{attrs:{loading:t.loading,animation:!0,bgColor:"#FFF"}})],1)},a=[]},"972a":function(t,e,n){"use strict";var i=n("1647"),o=n.n(i);o.a},a583:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.skeleton-fade[data-v-f551b034]{width:100%;height:100%;background:#c2cfd6;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-name:blink-data-v-f551b034;animation-name:blink-data-v-f551b034;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes blink-data-v-f551b034{0%{opacity:1}50%{opacity:.4}100%{opacity:1}}@keyframes blink-data-v-f551b034{0%{opacity:1}50%{opacity:.4}100%{opacity:1}}',""]),t.exports=e},bd25:function(t,e,n){"use strict";var i=n("6287"),o=n.n(i);o.a},cf02:function(t,e,n){"use strict";var i=n("7098"),o=n.n(i);o.a},de3f:function(t,e,n){"use strict";n.r(e);var i=n("964c"),o=n("8329");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("972a"),n("cf02");var r,s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"29506f92",null,!1,i["a"],r);e["default"]=u.exports},e8b6:function(t,e,n){"use strict";n.r(e);var i=n("8901"),o=n("61c9");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("bd25");var r,s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"f551b034",null,!1,i["a"],r);e["default"]=u.exports}}]);