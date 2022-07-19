import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import './styles/icon/iconfont.css'
import request from '@/utils/request'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = request
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
