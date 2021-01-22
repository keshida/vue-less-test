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
      path: '/consumptionHome',
      component: resolve => require(['@/views/consumption/index.vue'], resolve)
    },
    {
      path: '/layoutHome',
      component: resolve => require(['@/views/layout/index.vue'], resolve)
    },
    {
      path: '/csstest',
      component: resolve => require(['@/views/csstest/index'], resolve)
    },
    {
      path: '/brawserHome',
      component: resolve => require(['@/views/brawser/index.vue'], resolve)
    },
    {
      path: '/textSpecialEffectHome',
      component: resolve => require(['@/views/textSpecialEffects/textSpecialEffectHome'], resolve)
    },
    {
      path: '/svgHome',
      component: resolve => require(['@/views/svgHome/svgHome'], resolve)
    },
    {
      path: '/jsScriptHome',
      component: resolve => require(['@/views/jsScript/index.vue'], resolve)
    },
    {
      path: '/weaponHome',
      component: resolve => require(['@/views/weapon/weaponHome'], resolve)
    },
    {
      path: '/canvasTest',
      component: resolve => require(['@/views/canvasTest/index.vue'], resolve)
    },
    {
      path: '/videoAudioHome',
      component: resolve => require(['@/views/videoAndAudio'], resolve)
    }
  ]
})