import Vue from 'vue'
import VueRouter from 'vue-router'
import datatablefork from '../forklift/list/routes'
import forklift from '../forklift/report/routes'
Vue.use(VueRouter)

const routes = [
  forklift,
  datatablefork
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
