<template>
  <div id="app-header">
  <b-navbar toggleable="md" class="navbar-workflow">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">Cognito Exapmle</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#/signIn">Sign In</b-nav-item>
        <b-nav-item href="#/signUp">Sign Up</b-nav-item>
        <b-nav-item href="#/authCheck">Auth Check</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  created: function () {
  }
}
</script>

<style>
  .navbar-workflow {
    background-color: linen;
    opacity: 1.0;
    color: black;
    z-index: 10;
  }
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
