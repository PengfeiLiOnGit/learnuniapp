import Vue from 'vue'
import App from './App'

// 挂在vuex 到Vue（类似Vue.use()）
import store from './store'  
Vue.prototype.$store = store   

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App,
})
app.$mount()
