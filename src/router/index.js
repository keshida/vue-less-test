import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/components/HelloWorld'], resolve)
    },
    {
      path: '/consumption',
      component: resolve => require(['@/views/consumption/consumption'], resolve)
    },
    {
      path: '/flexbox',
      component: resolve => require(['@/views/flexbox/flexbox'], resolve)
    },
    {
      path: '/cssborder',
      component: resolve => require(['@/views/csstest/cssborder'], resolve)
    }
  ]
})
