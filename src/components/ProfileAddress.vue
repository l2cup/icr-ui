<template>
  <b-container>
    <h3 class="mb-3">Vase Adrese</h3>
    <b-container class="mb-3" v-for="item in adresses" :key="item.id">
      <p class="h4 mb-3">

        {{item.address}}

        <b-icon icon="trash" class="ml-3" variant="danger"></b-icon> </p>
    </b-container>

    <b-modal title="Dodaj novu adresu" :id=address v-model="show" ok-title="Add">
      <b-container>
        <b-form>

          <b-form-group
            id="input-group-1"
            label="Ulica:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.street"
              type="text"
              required
              placeholder="Enter your street"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Drzava:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.state"
              type="text"
              required
              placeholder="Enter your country"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Grad:"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              v-model="form.city"
              type="text"
              required
              placeholder="Enter your city"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-4"
            label="Postanski broj:"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              v-model="form.zip"
              type="text"
              required
              placeholder="Enter your zip code"
            ></b-form-input>
          </b-form-group>


        </b-form>

      </b-container>
    </b-modal>


    <b-button class="mt-5"
      @click="show=true"
      type="submit"
      variant="primary"
    >Add new address</b-button>

  </b-container>
</template>

<script>
export default {

  data() {
    return {
      adresses: [
        {
          primary: false,
          id: 1,
          address: 'Neka Adresa 2',
        },
        {
          primary: true,
          id: 2,
          address: 'Neka Adresa 3',
        },
        {
          primary: false,
          id: 3,
          address: 'Neka Adresa 3',
        },
        {
          primary: false,
          id: 4,
          address: 'Neka Adresa 4',
        },
      ],
      show: false,
      form: {

      },
    };
  },
};
</script>

<style>

</style>
