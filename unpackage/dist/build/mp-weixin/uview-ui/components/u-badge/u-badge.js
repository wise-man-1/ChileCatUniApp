(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-badge/u-badge"],{3689:function(t,e,o){},"38fe":function(t,e,o){"use strict";o.r(e);var n=o("4a8a"),r=o("7dcb");for(var u in r)"default"!==u&&function(t){o.d(e,t,(function(){return r[t]}))}(u);o("3db1");var a,f=o("f0c5"),i=Object(f["a"])(r["default"],n["b"],n["c"],!1,null,"69221dd6",null,!1,n["a"],a);e["default"]=i.exports},"3db1":function(t,e,o){"use strict";var n=o("3689"),r=o.n(n);r.a},"4a8a":function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return u})),o.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,o=(t._self._c,t.show?t.__get_style([{top:t.offset[0]+"rpx",right:t.offset[1]+"rpx",fontSize:t.fontSize+"rpx",position:t.absolute?"absolute":"static",color:t.color,backgroundColor:t.bgColor},t.boxStyle]):null);t.$mp.data=Object.assign({},{$root:{s0:o}})},u=[]},"7dcb":function(t,e,o){"use strict";o.r(e);var n=o("c369"),r=o.n(n);for(var u in n)"default"!==u&&function(t){o.d(e,t,(function(){return n[t]}))}(u);e["default"]=r.a},c369:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-badge",props:{type:{type:String,default:"error"},size:{type:String,default:"default"},isDot:{type:Boolean,default:!1},count:{type:[Number,String]},overflowCount:{type:Number,default:99},showZero:{type:Boolean,default:!1},offset:{type:Array,default:function(){return[20,20]}},absolute:{type:Boolean,default:!0},fontSize:{type:[String,Number],default:"24"},color:{type:String,default:"#ffffff"},bgColor:{type:String,default:""},isCenter:{type:Boolean,default:!1}},computed:{boxStyle:function(){var t={};return this.isCenter?(t.top=0,t.right=0,t.transform="translateY(-50%) translateX(50%)"):(t.top=this.offset[0]+"rpx",t.right=this.offset[1]+"rpx",t.transform="translateY(0) translateX(0)"),"mini"==this.size&&(t.transform=t.transform+" scale(0.8)"),t},showText:function(){return this.isDot?"":this.count>this.overflowCount?"".concat(this.overflowCount,"+"):this.count},show:function(){return 0!=this.count||0!=this.showZero}}};e.default=n}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-badge/u-badge-create-component',
    {
        'uview-ui/components/u-badge/u-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("38fe"))
        })
    },
    [['uview-ui/components/u-badge/u-badge-create-component']]
]);
