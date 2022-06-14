import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Start from '../components/start/Start.vue'
import NavButton from '../components/nav/NavButton.vue'
import Detail from '../components/Detail Info/Detail.vue'
import Menu from '../components/liutao/Menu'

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
  ]
})
