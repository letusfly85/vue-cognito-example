<template>
  <div>
    <app-header></app-header>
    <br/><br/>
    <b-form class="auth-form">
      <b-form-input v-model="form.signUp.email"    type="text" class="auth-form-text"></b-form-input>
      <b-form-input v-model="form.signUp.password" type="password" class="auth-form-text"></b-form-input>
      <b-btn @click="signUp" variant="info" style="margin-bottom: 1rem;">sign up</b-btn>
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
  name: 'CognitoSignUp',
  components: { Auth, AppHeader, AppFooter },
  data () {
    return {
      form: {
        signUp: {
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
    signUp: function () {
      console.log('sign up....')
      console.log(this.form.signUp)
      Auth.signUp(this.form.signUp.email, this.form.signUp.password).then(result => {
        console.log(result)
        this.showSuccessDismissibleAlert = true
        this.message = 'Sign Up succeeded..., '
      }).catch(error => {
        if (error.code) {
          console.log(error.message)
          this.showFailureDismissibleAlert = true
          this.message = 'Sign Up failed..., ' + error.message
        }
      })
    }
  }
}
</script>
