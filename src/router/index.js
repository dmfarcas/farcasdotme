import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/components/FirstPage'
import NiceGameOfPong from '@/components/NiceGameOfPong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/pong',
      name: 'NiceGameOfPong',
      component: NiceGameOfPong
    }
  ]
})
