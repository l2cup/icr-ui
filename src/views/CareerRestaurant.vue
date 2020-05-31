<template>
  <b-container>

    <h2 class="mt-5 text-secondary">Prijavi restoran</h2>

    <h3 class="mt-3 mb-2 text-danger">{{ this.Message }}</h3>
    <b-form>

      <b-form-group
        id="input-group-1"
        label="Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.naziv"
          type="text"
          required
          placeholder="Enter your restaurant name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Owner:" label-for="input-2"> <b-form-input
          id="input-2"
          type="text"
          v-model="form.owner"
          required
          placeholder="Enter the restaurant's owner name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Email:" label-for="input-4">
        <b-form-input
          id="input-4"
          type="email"
          v-model="form.email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="Number:"
        label-for="input-5"
      >
        <b-form-input
          id="input-5"
          v-model="form.number"
          type="number"
          required
          placeholder="Enter your phone number"
        ></b-form-input>
      </b-form-group>

      <b-button
        v-on:click.prevent="submit"
        type="submit"
        variant="primary"
      >Prijavi se</b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
      },
      Message: '',
    };
  },
};
</script>
<style scoped>

</style>
