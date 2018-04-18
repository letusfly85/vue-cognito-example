<script>
import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute
} from 'amazon-cognito-identity-js'
import { CognitoIdentityServiceProvider } from 'aws-sdk'

export default {
  name: 'AuthenticateClient',
  data () {
    return {
      options: [],
      userPool: null
    }
  },
  prepare: function () {
    let config = {
      UserPoolId: process.env.COGNITO_USER_POOL_ID,
      ClientId: process.env.COGNITO_CLIENT_ID,
      region: 'ap-northeast-1'
    }

    this.configure(config)
  },
  changePassword: function (email, oldPassword, newPassword, success, failure) {
    new CognitoIdentityServiceProvider.CognitoUser({
      Username: email,
      Pool: this.userPool
    }).changePassword(oldPassword, newPassword, function (err, result) {
      return err ? failure(err) : success(result.user())
    })
  },
  resetPassword: function (username, resetCode, newPassword) {
    if (this.userPool === undefined) {
      console.log('preparing user pool')
      this.prepare()
    }
    const userData = { Username: username, Pool: this.userPool }
    const cognitoUser = new CognitoUser(userData)
    let result = cognitoUser.confirmPassword(resetCode, newPassword, this)
    console.log(result)
    return result
  },
  configure: function (config) {
    if (config.userPool) {
      this.userPool = config.userPool
    } else {
      this.userPool = new CognitoUserPool({
        UserPoolId: config.UserPoolId,
        ClientId: config.ClientId
      })
    }
    console.log(this.userPool.getUserPoolId())
  },
  signUp: function (username, password) {
    console.log(username, password)
    if (this.userPool === undefined) {
      console.log('preparing user pool')
      this.prepare()
    }
    const dataEmail = { Name: 'email', Value: username }
    const attributeList = []
    attributeList.push(new CognitoUserAttribute(dataEmail))
    return new Promise((resolve, reject) => {
      this.userPool.signUp(username, password, attributeList, null, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  },
  signIn: function (username, password) {
    if (this.userPool === undefined) {
      console.log('preparing user pool')
      this.prepare()
    }
    const userData = { Username: username, Pool: this.userPool }
    const cognitoUser = new CognitoUser(userData)
    const authenticationData = { Username: username, Password: password }
    const authenticationDetails = new AuthenticationDetails(authenticationData)
    return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          console.log(result)
          resolve(result)
        },
        onFailure: (err) => {
          reject(err)
        }
      })
    })
  },
  isAuthenticated: function () {
    if (this.userPool === undefined) {
      console.log('preparing user pool')
      this.prepare()
    }
    const cognitoUser = this.userPool.getCurrentUser()
    return new Promise((resolve, reject) => {
      if (cognitoUser === null) {
        reject(cognitoUser)
      }
      cognitoUser.getSession((err, session) => {
        if (err) {
          reject(err)
        } else {
          if (!session.isValid()) {
            reject(session)
          } else {
            resolve(session)
          }
        }
      })
    })
  }
}
</script>
