<template>
  <b-container>
    <h3 class="mt-3 mb-2 text-danger">{{ this.Message }}</h3>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Username:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          required
          placeholder="Enter username"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <b-button
        v-on:click.prevent="submit"
        type="submit"
        variant="primary"
      >Login</b-button>
      <br><br><br>
          <small class="subtitle">Don't have an account?</small>
          <br>
          <router-link class="text-secondary" :to="'/register'">
            Register now!
          </router-link>
        </b-form>
      </b-container>
    </template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      Message: '',
    };
  },
  methods: {
    ...mapActions(['login']),
    async submit() {
      if (this.form.username.length < 1 || this.form.password.length < 1) {
        this.Message = 'Fill in empty fields';
      } else {
        try {
          const res = await this.login(this.form.username, this.form.password);
          this.Message = res;
          if (res.data.msg) {
            this.Message = res.data.msg;
          } else {
            this.$cookie.set('user-token', res.data.token, { expires: '2h' });
            this.$router.push('/explore');
          }
        } catch (err) {
          console.log(err);
          this.Message = 'Wrong username or password';
        }
      }
    },
  },
};
</script>
<style scoped>

</style>
