(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ask/history"],{3401:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{orderList:[[],[],[],[]],dataList:[{id:1,store:"夏日流星限定贩卖",deal:"交易成功",goodsList:[{goodsUrl:"//img13.360buyimg.com/n7/jfs/t1/103005/7/17719/314825/5e8c19faEb7eed50d/5b81ae4b2f7f3bb7.jpg",title:"【冬日限定】现货 原创jk制服女2020冬装新款小清新宽松软糯毛衣外套女开衫短款百搭日系甜美风",type:"灰色;M",deliveryTime:"付款后30天内发货",price:"348.58",number:2},{goodsUrl:"//img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg",title:"【葡萄藤】现货 小清新学院风制服格裙百褶裙女短款百搭日系甜美风原创jk制服女2020新款",type:"45cm;S",deliveryTime:"付款后30天内发货",price:"135.00",number:1}]},{id:2,store:"江南皮革厂",deal:"交易失败",goodsList:[{goodsUrl:"//img14.360buyimg.com/n7/jfs/t1/60319/15/6105/406802/5d43f68aE9f00db8c/0affb7ac46c345e2.jpg",title:"【冬日限定】现货 原创jk制服女2020冬装新款小清新宽松软糯毛衣外套女开衫短款百搭日系甜美风",type:"粉色;M",deliveryTime:"付款后7天内发货",price:"128.05",number:1}]},{id:3,store:"三星旗舰店",deal:"交易失败",goodsList:[{goodsUrl:"//img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg",title:"三星（SAMSUNG）京品家电 UA65RUF70AJXXZ 65英寸4K超高清 HDR 京东微联 智能语音 教育资源液晶电视机",type:"4K，广色域",deliveryTime:"保质5年",price:"1998",number:3},{goodsUrl:"//img14.360buyimg.com/n7/jfs/t6007/205/4099529191/294869/ae4e6d4f/595dcf19Ndce3227d.jpg!q90.jpg",title:"美的(Midea)639升 对开门冰箱 19分钟急速净味 一级能效冷藏双开门杀菌智能家用双变频节能 BCD-639WKPZM(E)",type:"容量大，速冻",deliveryTime:"保质5年",price:"2354",number:1}]},{id:4,store:"三星旗舰店",deal:"交易失败",goodsList:[{goodsUrl:"//img10.360buyimg.com/n7/jfs/t22300/31/1505958241/171936/9e201a89/5b2b12ffNe6dbb594.jpg!q90.jpg",title:"法国进口红酒 拉菲（LAFITE）传奇波尔多干红葡萄酒750ml*6整箱装",type:"4K，广色域",deliveryTime:"珍藏10年好酒",price:"1543",number:3},{goodsUrl:"//img10.360buyimg.com/n7/jfs/t1/107598/17/3766/525060/5e143aacE9a94d43c/03573ae60b8bf0ee.jpg",title:"蓝妹（BLUE GIRL）酷爽啤酒 清啤 原装进口啤酒 罐装 500ml*9听 整箱装",type:"一打",deliveryTime:"口感好",price:"120",number:1}]},{id:5,store:"三星旗舰店",deal:"交易成功",goodsList:[{goodsUrl:"//img12.360buyimg.com/n7/jfs/t1/52408/35/3554/78293/5d12e9cfEfd118ba1/ba5995e62cbd747f.jpg!q90.jpg",title:"企业微信 中控人脸指纹识别考勤机刷脸机 无线签到异地多店打卡机WX108",type:"识别效率高",deliveryTime:"使用方便",price:"451",number:9}]}],list:[{name:"待付款"},{name:"待发货"},{name:"待收货"},{name:"待评价",count:12}],current:0,swiperCurrent:0,tabsHeight:0,dx:0,loadStatus:["loadmore","loadmore","loadmore","loadmore"]}},onLoad:function(){this.getOrderList(0),this.getOrderList(1),this.getOrderList(3)},computed:{priceDecimal:function(){return function(t){return t!==parseInt(t)?t.slice(-2):"00"}},priceInt:function(){return function(t){return t!==parseInt(t)?t.split(".")[0]:t}}},methods:{reachBottom:function(){var t=this;2!=this.current&&(this.loadStatus.splice(this.current,1,"loading"),setTimeout((function(){t.getOrderList(t.current)}),1200))},getOrderList:function(t){for(var e=0;e<5;e++){var i=this.$u.random(0,this.dataList.length-1),r=JSON.parse(JSON.stringify(this.dataList[i]));r.id=this.$u.guid(),this.orderList[t].push(r)}this.loadStatus.splice(this.current,1,"loadmore")},totalPrice:function(t){var e=0;return t.map((function(t){e+=parseFloat(t.price)})),e.toFixed(2)},totalNum:function(t){var e=0;return t.map((function(t){e+=t.number})),e},change:function(t){this.swiperCurrent=t,this.getOrderList(t)},transition:function(t){var e=t.detail.dx;this.$refs.tabs.setDx(e)},animationfinish:function(t){var e=t.detail.current;this.$refs.tabs.setFinishCurrent(e),this.swiperCurrent=e,this.current=e}}};e.default=r},4304:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return r}));var r={uTabsSwiper:function(){return Promise.all([i.e("common/vendor"),i.e("uview-ui/components/u-tabs-swiper/u-tabs-swiper")]).then(i.bind(null,"6ff1"))},uIcon:function(){return i.e("uview-ui/components/u-icon/u-icon").then(i.bind(null,"327e"))},uLoadmore:function(){return i.e("uview-ui/components/u-loadmore/u-loadmore").then(i.bind(null,"fd7b"))}},o=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.orderList[0],(function(e,i){var r=t.__get_orig(e),o=t.__map(e.goodsList,(function(e,i){var r=t.__get_orig(e),o=t.priceInt(e.price),n=t.priceDecimal(e.price);return{$orig:r,m0:o,m1:n}})),n=t.totalNum(e.goodsList),a=t.priceInt(t.totalPrice(e.goodsList)),c=t.priceDecimal(t.totalPrice(e.goodsList));return{$orig:r,l0:o,m2:n,m3:a,m4:c}}))),r=t.__map(t.orderList[1],(function(e,i){var r=t.__get_orig(e),o=t.__map(e.goodsList,(function(e,i){var r=t.__get_orig(e),o=t.priceInt(e.price),n=t.priceDecimal(e.price);return{$orig:r,m5:o,m6:n}})),n=t.totalNum(e.goodsList),a=t.priceInt(t.totalPrice(e.goodsList)),c=t.priceDecimal(t.totalPrice(e.goodsList));return{$orig:r,l2:o,m7:n,m8:a,m9:c}})),o=t.__map(t.orderList[3],(function(e,i){var r=t.__get_orig(e),o=t.__map(e.goodsList,(function(e,i){var r=t.__get_orig(e),o=t.priceInt(e.price),n=t.priceDecimal(e.price);return{$orig:r,m10:o,m11:n}})),n=t.totalNum(e.goodsList),a=t.priceInt(t.totalPrice(e.goodsList)),c=t.priceDecimal(t.totalPrice(e.goodsList));return{$orig:r,l4:o,m12:n,m13:a,m14:c}}));t.$mp.data=Object.assign({},{$root:{l1:i,l3:r,l5:o}})},n=[]},"4a29":function(t,e,i){"use strict";var r=i("b874"),o=i.n(r);o.a},"5a5a":function(t,e,i){"use strict";(function(t){i("137f");r(i("66fd"));var e=r(i("7f54"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},"5a8b":function(t,e,i){"use strict";var r=i("f5bb"),o=i.n(r);o.a},"617f":function(t,e,i){"use strict";i.r(e);var r=i("3401"),o=i.n(r);for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=o.a},"7f54":function(t,e,i){"use strict";i.r(e);var r=i("4304"),o=i("617f");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("5a8b"),i("4a29");var a,c=i("f0c5"),s=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"9d306dd4",null,!1,r["a"],a);e["default"]=s.exports},b874:function(t,e,i){},f5bb:function(t,e,i){}},[["5a5a","common/runtime","common/vendor"]]]);