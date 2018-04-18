<template>
  <div>
    <app-header></app-header>
    <br/><br/>
    <b-btn @click="isAuthenticated" variant="outline-info">Authenticated?</b-btn>
    <br/><br/>
    <b-alert variant="danger"
             style="width: 80%; margin-left:10%; margin-right: 10%;"
             dismissible
             :show="showFailureDismissibleAlert"
             @dismissed="showFailureDismissibleAlert=false; message=null">
      {{ message }}
    </b-alert>
    <b-alert variant="success"
             style="width: 80%; margin-left:10%; margin-right: 10%;"
             dismissible
             :show="showSuccessDismissibleAlert"
             @dismissed="showSuccessDismissibleAlert=false; message=null">
      {{ message }}
    </b-alert>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Auth from './auth/AuthenticateClient'
import AppHeader from './common/AppHeader'
import AppFooter from './common/AppFooter'

export default {
  name: 'CognitoSignUp',
  components: { Auth, AppHeader, AppFooter },
  data () {
    return {
      form: {
        signUp: {
          email: null,
          password: null
        },
        signIn: {
          email: null,
          password: null
        }
      },
      showSuccessDismissibleAlert: false,
      showFailureDismissibleAlert: false,
      message: null
    }
  },
  methods: {
    isAuthenticated: function () {
      console.log('check authenticated..?....')
      Auth.isAuthenticated().then(response => {
        this.showSuccessDismissibleAlert = true
        this.message = 'you are authenticated <br/>' + response.accessToken.jwtToken
      }).catch(error => {
        this.showFailureDismissibleAlert = true
        console.log(error)
        this.message = 'you are not signed in..'
      })
    }
  }
}
</script>
