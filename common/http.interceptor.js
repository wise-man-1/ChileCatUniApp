// 这里的vm，就是我们在vue文件里面的this，所以我们能在这里获取vuex的变量，比如存放在里面的token
// 同时，我们也可以在此使用getApp().globalData，如果你把token放在getApp().globalData的话，也是可以使用的


export function getIpAddres(){
	if(process.env.NODE_ENV === 'development'){
		return "127.0.0.1:8888"
		// return "django.zhcy.top"
	}else{
		// 正式后端
		// return "django.zhcy.top"
		// 开发测试后端
		return '8.130.73.188:8000'
	}
}


function getUrl(){
	return "http://" + getIpAddres()
}


function show_msg(icon,msg){
	uni.showToast({
		title: msg,
		icon: icon,
		duration: 2000
	});
}
const install = (Vue, vm) => {
	Vue.prototype.$u.http.setConfig({
		baseUrl: getUrl(),
		// 如果将此值设置为true，拦截回调中将会返回服务端返回的所有数据response，而不是response.data
		// 设置为true后，就需要在this.$u.http.interceptor.response进行多一次的判断，请打印查看具体值
		originalData: true, 
		header: {
			'Content-Type':'application/json;charset=UTF-8',
		},  
	});
	// 请求拦截，配置Token等参数
	Vue.prototype.$u.http.interceptor.request = (config) => {
		// 方式一，存放在vuex的token，假设使用了uView封装的vuex方式，见：https://uviewui.com/components/globalVariable.html
		// config.header.token = vm.token;
		
		// 方式二，如果没有使用uView封装的vuex方法，那么需要使用$store.state获取
		// config.header.token = vm.$store.state.token;
		
		// 方式三，如果token放在了globalData，通过getApp().globalData获取
		// config.header.token = getApp().globalData.username;
		
		// 方式四，如果token放在了Storage本地存储中，拦截是每次请求都执行的，所以哪怕您重新登录修改了Storage，下一次的请求将会是最新值
		const token = uni.getStorageSync('token');
		config.header.token = token;
		return config; 
	}
	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptor.response = (res) => {
		// 如果把originalData设置为了true，这里得到将会是服务器返回的所有的原始数据
		// 判断可能变成了res.statueCode，或者res.data.code之类的，请打印查看结果
		if(res.statusCode == 200 ) {
			// 如果把originalData设置为了true，这里return回什么，this.$u.post的then回调中就会得到什么
			if(res.data.code == 0 || res.data.code == 2000){
				return res.data;  
			}else{
				show_msg('none',res.data.message)
				return false
			}
		} else{
			show_msg('none',res.data.message)
			if(res.data){
				if(res.data.code==3001){
					vm.$store.dispatch('logout')
				}
			}
		    return false
		};
	}
}

export default {
	install
}