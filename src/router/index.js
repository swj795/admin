import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/Home.vue'
import Main from '../views/Main.vue';
import Login from "../views/Login/Login.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login

  //   path: '/',
  //   component: Main,
  //   children: [
  //     {
  //       path: "/",
  //       name: "Home",
  //       component: ()=>import("../views/Home/Home.vue")
  //     },
  //     {
  //       path: "/user",
  //       name: "User",
  //       component: ()=>import("../views/User/User.vue")
  //     }
  //   ]
  // },
  // {
  //   path: "/login",
  //   component: Login,
  //   name: "login",
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
