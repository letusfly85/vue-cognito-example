<template>
  <div>
    <b-btn @click="isAuthenticated" variant="outline-info">Authenticated?</b-btn>
    <br/><br/>
    <b-form class="auth-form">
      <b-form-input v-model="form.signUp.email"    type="text" class="auth-form-text"></b-form-input>
      <b-form-input v-model="form.signUp.password" type="password" class="auth-form-text"></b-form-input>
      <b-btn @click="signUp" variant="info" style="margin-bottom: 1rem;">sign up</b-btn>
    </b-form>
    <br/>
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
  </div>
</template>

<script>
import Auth from './auth/AuthenticateClient'

export default {
  name: 'CognitoClientExample',
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
  components: { Auth },
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
    },
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
    },
    resetPassword: function () {
      console.log('reset password....')
      Auth.resetPassword('Sample', 'xxxxxxx', 'testtest')
    },
    isAuthenticated: function () {
      console.log('check authenticated..?....')
      let result = Auth.isAuthenticated()
      console.log(result)
    }
  }
}
</script>

<style>
  .auth-form {
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
    border: solid 1px;
    border-color: lightyellow;
    background-color: lightgoldenrodyellow;
    opacity: 0.8;
    background-clip: padding-box;
    border-radius: 2%;
  }
  .auth-form-text {
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
