import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: require('@/views/Home.vue').default
  },
  {
    path: '/bespoke',
    component: require('@/views/Bespoke.vue').default
  },
  {
    path: '/professionals',
    component: require('@/views/Professionals.vue').default
  },
  {
    path: '/*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
