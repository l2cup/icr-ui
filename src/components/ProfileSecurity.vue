<template>
  <b-container>
    <b-form>
      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input
          id="input-3"
          type="password"
          required
          v-model="passwords.password1"
          placeholder="Enter new password"
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
          placeholder="Confirm new password"
        ></b-form-input>
      </b-form-group>

      <b-form-checkbox class="left" checked="true">
        Zelim da dozvolim Has-u da koristi moje podatke za prilagodjene reklame.
      </b-form-checkbox>

      <b-form-checkbox class="left" checked="true">
        Zelim da dozvolim Has-u da koristi moje podatke za unapredjenje svog servisa.
      </b-form-checkbox>

      <b-form-checkbox class="left" checked="true">
        Zelim da dozvolim Has-u da mi salje promocije na email.
      </b-form-checkbox>

      <b-form-checkbox class="left">
        Zelim da dozvolim Has-u da mi salje promocije preko sms-a.
      </b-form-checkbox>

      <b-button
        class="mt-4"
        v-on:click.prevent="register"
        type="submit"
        variant="primary"
      >Save changes</b-button>

    </b-form>
  </b-container>
</template>

<script>
export default {

  data() {
    return {
      passwords: {
        password1: '',
        password2: '',

      },
    };
  },

};
</script>

<style>

.left {
  text-align:left;
}
</style>
