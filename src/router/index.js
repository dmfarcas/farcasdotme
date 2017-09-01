import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/components/FirstPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage
    }
  ]
})
