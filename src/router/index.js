import Vue from 'vue'
import Router from 'vue-router'
import app from '@/App'
import login from '@/page/login'
import save from '@/page/save-message'
import get from '@/page/get-message'
import table from '@/page/message-table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'save',
      component: save
    },
    {
      path: '/get',
      name: 'get',
      component: get
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/table',
      name: 'table',
      component: table
    }
  ]
})
