import Vue from 'vue'
import Router from 'vue-router'
import OCR from '@/components/OCR'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OCR',
      component: OCR
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
