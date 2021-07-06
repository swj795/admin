import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui' // 组件库的样式
// 引入组件库的样式
import 'element-ui/lib/theme-chalk/index.css'
// 引入初始化css
import './assets/css/reset.css'
// 引入axios
import request from './utils/request'
// 引入拦截请求 模拟数据
import "./mock"
Vue.use(ElementUI)

Vue.config.productionTip = false

// axios 挂载到全局
Vue.prototype.$request = request;
// 重新注册路由 需要放在路由守卫之前，一进入入口就注册
// 刷新页面，取出菜单动态注册
store.commit("addMenu",router);

// 全局路由守卫
router.beforeEach((to,from,next) => {
  // to 去往那个页面 from 从那个页面来 next()放行
  // 防止页面刷新回到登陆页面
  store.commit("getToken");
  // 判断登录状态是否有效
  let token = store.state.user.token;
  if(!token && to.name !== "login"){
    // 登录失效
    next({
      name: "login",
    })
  }else{
    console.log("登录有效");
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
