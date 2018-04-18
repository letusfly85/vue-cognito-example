<template>
  <div>
    <app-header></app-header>
    <br/><br/>
    <b-form class="auth-form">
      <b-input v-model="form.signIn.email" type="text" class="auth-form-text"></b-input>
      <b-input v-model="form.signIn.password" type="password" class="auth-form-text"></b-input>
      <b-btn @click="signIn" variant="info" style="margin-bottom: 1rem;">sign in</b-btn>
    </b-form>
    <br/>
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
  name: 'CognitoSignIn',
  components: { Auth, AppHeader, AppFooter },
  data () {
    return {
      form: {
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
    signIn: function () {
      console.log('sign in....')
      console.log(this.form.signIn)
      Auth.signIn(this.form.signIn.email, this.form.signIn.password).then(result => {
        console.log(result)
        this.showSuccessDismissibleAlert = true
        this.message = 'Sign In succeeded..., '
      }).catch(error => {
        if (error.code) {
          console.log(error.message)
          this.showFailureDismissibleAlert = true
          this.message = 'Sign In failed..., ' + error.message
        }
      })
    }
  }
}
</script>
