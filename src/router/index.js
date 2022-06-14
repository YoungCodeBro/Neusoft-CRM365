import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Start from '../components/start/Start.vue'
import ShoppingCar from '../components/ShoppingCar/ShoppingCar.vue'
import order from '../components/ShoppingCar/order.vue'
import ShoppingCarTwo from '../components/ShoppingCar/ShoppingCarTwo.vue'
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
      path: '/ShoppingCar',
      name: 'ShoppingCar',
      component: ShoppingCar
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/ShoppingCarTwo',
      name: 'ShoppingCarTwo',
      component: ShoppingCarTwo
    },
  ]
})
