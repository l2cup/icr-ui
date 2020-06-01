<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand v-if="this.user.loggedIn === false" :to="'/'">
      <b-icon class="mr-1" icon="egg-fried"/> Has</b-navbar-brand>
    <b-navbar-brand v-else :to="'/explore'"><b-icon class="mr-1" icon="egg-fried"/>
       Has</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse v-if="this.user.loggedIn === false" id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="'/register'"><b-icon class="mr-2" icon="person-plus"/>
            Sign up</b-nav-item>
        <b-nav-item :to="'/login'"><b-icon class="mr-2" icon="box-arrow-in-right"/>
          Login</b-nav-item>
        <b-nav-item :to="'/about'"><b-icon class="mr-2" icon="people-fill"/> About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    <b-collapse v-else id="nav-colapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="'/cart'"><b-icon class="mr-2" icon="cart"/> Cart</b-nav-item>
        <b-nav-item :to="'/profile'"><b-icon class="mr-2" icon="person-circle"/>
          Profile</b-nav-item>
        <b-nav-item :to="'/about'"><b-icon class="mr-2" icon="people-fill" /> About</b-nav-item>
        <b-nav-item href="/"><b-icon class="mr-2" icon="box-arrow-right"/> Logout</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  computed: mapGetters(['user']),
};
</script>

<style>

</style>
