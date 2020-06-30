import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    let flag = JSON.parse(sessionStorage.getItem("store"))
    if (flag.isLogin){
        store.state.isLogin = true
        if(!to.meta.isLogin) {
            next({path: '/'})
        }else {
            next()
        }
    }else {
        if(to.meta.isLogin){
            next({path: '/login'})
        }else {
            next()
        }
    }
})

Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
