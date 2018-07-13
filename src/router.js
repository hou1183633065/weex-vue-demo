/* global Vue */
import Router from 'vue-router'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
        path: '/',
        name: 'homePage',
        meta: {
            title: '首页'
        },
        component: () => import('@/pages/homePage')
    },
  ]
})
