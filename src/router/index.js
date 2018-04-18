import Vue from 'vue'
import Router from 'vue-router'
import CognitoClientExample from '@/components/CognitoClientExample'
import CognitoSignUp from '@/components/CognitoSignUp'
import CognitoSignIn from '@/components/CognitoSignIn'
import CognitoAuthCheck from '@/components/CognitoAuthCheck'
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
    },
    {
      path: '/signIn',
      name: 'CognitoSignIn',
      component: CognitoSignIn
    },
    {
      path: '/signUp',
      name: 'CognitoSignUp',
      component: CognitoSignUp
    },
    {
      path: '/authCheck',
      name: 'CognitoAuthCheck',
      component: CognitoAuthCheck
    }
  ]
})
