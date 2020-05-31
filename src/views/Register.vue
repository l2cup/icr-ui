<template>
  <b-container>
    <h3 class="mt-3 mb-2 text-danger">{{ Message }}</h3>
    <b-form>
      <b-form-group id="input-group-1" label="Username:" label-for="input-1"
      ><b-form-input
          id="input-1"
          required
          v-model="form.username"
          placeholder="Enter username"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Email address:"
        label-for="input-2"
        description="We'll never share your email with anyone else."
      ><b-form-input
          id="input-2"
          v-model="form.email"
          required
          type="email"
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input
          id="input-3"
          type="password"
          required
          v-model="passwords.password1"
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="Confirm password:"
        label-for="input-3"
      >
        <b-form-input
          id="input-4"
          required
          type="password"
          v-model="passwords.password2"
          placeholder="Confirm password"
        ></b-form-input>
      </b-form-group>
      <b-button
        v-on:click.prevent="register"
        type="submit"
        variant="primary"
      >Register</b-button>

    </b-form>
  </b-container>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Register',

  data() {
    return {
      passwords: {
        password1: '',
        password2: '',
      },
      form: {
        email: '',
        password: '',
        username: '',
      },
      Message: '',
    };
  },

  methods: {
    async register() {
      if (this.passwords.password1 !== this.passwords.password2) {
        this.Message = 'Passwords must be equal';
      } else if (this.form.email.length < 1
          || this.passwords.password.length < 1
          || this.passwords.password2.length < 1
          || this.form.username.length < 1) {
        this.Message = 'Fill in empty fields';
      } else {
        this.form.password = this.passwords.password1;
        try {
          this.Message = 'PASSING';
          await axios.post('http://localhost:1234/register', this.form);
          this.$router.push('/login');
        } catch (err) {
          this.Message = err;
        }
      }
    },
  },
};


</script>

<style>

</style>
