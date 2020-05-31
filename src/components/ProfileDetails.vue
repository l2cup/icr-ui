<template>
  <b-container>
    <h3 class="mt-3 mb-2 text-danger">{{ this.Message }}</h3>


    <b-img class="mb-3" width="200" height="200" src="../../public/food3.jpg"></b-img>
    <b-form-group class="mb-3" id="input-file" label="Change photo:" label-for="input-file">
      <b-form-file id="input-file"></b-form-file>
    </b-form-group>

    <b-form>
      <b-form-group
        id="input-group-1"
        label="Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.ime"
          type="text"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Surname:" label-for="input-2"> <b-form-input
          id="input-2"
          type="text"
          v-model="form.surname"
          required
          placeholder="Enter surname"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Date of birth:" label-for="input-3">
        <b-form-datepicker id="input-3" v-model="form.date">
        </b-form-datepicker>
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

      <b-form-group id="input-group-6" label="Sex:" label-for="input-6">
        <b-form-select id="input-6" v-model="form.sex" required>
          <b-form-select-option>Musko</b-form-select-option>
          <b-form-select-option>Zensko</b-form-select-option>
          <b-form-select-option>Drugo</b-form-select-option>
        </b-form-select>
      </b-form-group>


      <b-button
        class="mt-4"
        v-on:click.prevent="submit"
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
      form: {
        username: '',
        password: '',
      },
      Message: '',
    };
  },
};
</script>
<style scoped>

</style>
