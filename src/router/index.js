import Vue from 'vue'
import Router from 'vue-router'
import CognitoClientExample from '@/components/CognitoClientExample'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CognitoClientExample',
      component: CognitoClientExample
    }
  ]
})
