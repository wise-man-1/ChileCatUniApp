(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setting/bed_position"],{"71b9":function(t,n,e){"use strict";e.r(n);var o=e("7279"),u=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=u.a},7279:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){e.e("pages/attendance/component/people_list").then(function(){return resolve(e("0edd"))}.bind(null,e)).catch(e.oe)},u={data:function(){return{show:!1,content:"",bed:{}}},components:{PeopleList:o},created:function(){},methods:{to_people:function(t){t.user_id?this.content="确定和 "+t.name+" 交换床位吗?":this.content="确定换到新的床位吗?",this.bed=t,this.show=!0},confirm:function(){var t=this;this.$refs.uModal;this.$u.api.school_information_update_beds({position:this.bed.bed_position}).then((function(n){setTimeout((function(){t.$refs.uToast.show({title:"修改成功 请刷新页面",type:"success"}),t.show=!1}),500)})).catch((function(n){t.show=!1}))}}};n.default=u},"7b69":function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}));var o={uModal:function(){return e.e("uview-ui/components/u-modal/u-modal").then(e.bind(null,"edf4"))},uToast:function(){return e.e("uview-ui/components/u-toast/u-toast").then(e.bind(null,"11f5"))}},u=function(){var t=this,n=t.$createElement;t._self._c},i=[]},a145:function(t,n,e){"use strict";(function(t){e("6a2a");o(e("66fd"));var n=o(e("d621"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},d621:function(t,n,e){"use strict";e.r(n);var o=e("7b69"),u=e("71b9");for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);var c,s=e("f0c5"),a=Object(s["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);n["default"]=a.exports}},[["a145","common/runtime","common/vendor"]]]);