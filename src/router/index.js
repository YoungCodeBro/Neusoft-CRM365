import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Start from '../components/start/Start.vue'
import Menu from '../components/liutao/Menu'
import OrderFood from '../components/liutao/OrderFood'
import HotFood from '../components/liutao/HotFood'
import Ordered from '../components/liutao/Ordered'
import Like from '../components/liutao/Like'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/start',
      name: 'Start',
      component: Start
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu,
      children: [
        {
          path: '/',
          name: 'orderFood',
          component: OrderFood,
        },
        {
          path: '/menu/hot',
          name: 'hotFood',
          component: HotFood,
        },
        {
          path: '/menu/ordered',
          name: 'ordered',
          component: Ordered,
        },
        {
          path: '/menu/like',
          name: 'like',
          component: Like,
        },
      ]
    }
  ]
})
