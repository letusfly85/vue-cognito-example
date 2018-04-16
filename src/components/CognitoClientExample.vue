<template>
  <div>
    <b-form>
      <b-btn @click="signUp" variant="outline-success">sign up</b-btn>
      <b-btn @click="signIn" variant="outline-success">sign in</b-btn>
      <b-btn @click="isAuthenticated" variant="outline-success">Authenticated?</b-btn>
    </b-form>
  </div>
</template>

<script>
import Auth from './auth/AuthenticateClient'

export default {
  name: 'CognitoClientExample',
  components: { Auth },
  methods: {
    signUp: function () {
      console.log('sign up....')
      let result = Auth.signUp('test@gmail.com', 'testtest')
      console.log(result)
    },
    signIn: function () {
      console.log('sign in....')
      let result = Auth.signIn('test@gmail.com', 'testtest')
      console.log(result)
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
