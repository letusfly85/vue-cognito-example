'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const loadenv = require('node-env-file')

loadenv("./.env")
console.log(process.env.COGNITO_USER_POOL_ID)
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  COGNITO_USER_POOL_ID: "'" + process.env.COGNITO_USER_POOL_ID + "'",
  COGNITO_CLIENT_ID: "'" + process.env.COGNITO_CLIENT_ID + "'"
})
