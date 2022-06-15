import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Start from '../components/start/Start.vue'
import NavButton from '../components/nav/NavButton.vue'
import Detail from '../components/Detail Info/Detail.vue'
import Menu from '../components/foodMenu/Menu'
import OrderFood from '../components/foodMenu/OrderFood'
import HotFood from '../components/foodMenu/HotFood'
import Ordered from '../components/foodMenu/Ordered'
import Like from '../components/foodMenu/Like'
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
      path: '/nav',
      name: 'Nav',
      component: NavButton
    },
    {
      path: '/detail/:fid',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/menu',
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
