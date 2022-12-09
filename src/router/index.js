import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
    meta: {
      notRequireAuth: true,
    },
  },
  {
    path: '/app/*',
    name: 'home',
    component: Layout,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.notRequireAuth) {
    next()
  } else {
    // 确认是否已登录
    const userInfo = store.state.userInfo
    //1.未登录
    if (!userInfo || !userInfo.userName) {
      return router.replace({
        path: '/login',
      })
    } else {
      next()
    }
  }
})
export default router
