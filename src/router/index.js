import Vue from 'vue'
import Router from 'vue-router'
import InputDemo from '@/components/InputDemo'
import FormDemo from '@/components/FormDemo'
import LifeCircle from '@/components/LifeCircle'
import TableDemo from '@/components/TableDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InputDemo',
      component: InputDemo
    },
    {
      path: '/form',
      name: 'FormDemo',
      component: FormDemo
    },
    {
      path: '/life',
      name: 'LifeCircle',
      component: LifeCircle
    },
    {
      path: '/table',
      name: 'TableDemo',
      component: TableDemo
    }
  ]
})
