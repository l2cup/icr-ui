<template>
  <b-container>
    <h3 class="mb-3">Vase Kartice</h3>
    <b-container class="mb-3" v-for="item in cards" :key="item.id">
      <p class="h4 mb-3" >

        {{item.card}}

        <b-icon icon="trash" class="ml-3" variant="danger" align="right"></b-icon> </p>
    </b-container>

    <b-modal title="Dodaj novu karticu" :id=card v-model="show" ok-title="Add">
      <b-container>
        <b-form>

          <b-form-group
            id="input-group-1"
            label="Broj kartice:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.cardNumber"
              type="number"
              required
              placeholder="Enter your card number"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Ime na kartici:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.name"
              type="text"
              required
              placeholder="Enter your name"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Drzava:"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              v-model="form.country"
              type="text"
              required
              placeholder="Enter your country" ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Expiration date:" label-for="input-4">
            <b-form-datepicker id="input-4" v-model="form.date">
            </b-form-datepicker>
          </b-form-group>

          <b-form-group
            id="input-group-5"
            label="CVE:"
            label-for="input-5"
          >
            <b-form-input
              id="input-5"
              v-model="form.CVE"
              type="number"
              required
              placeholder="Enter your CVE"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-6"
            label="Token:"
            label-for="input-6"
          >
            <b-form-input
              id="input-6"
              v-model="form.CVE"
              type="number"
              required
              placeholder="Enter your Token"
            ></b-form-input>
          </b-form-group>


        </b-form>

      </b-container>
    </b-modal>


    <b-button class="mt-5"
      @click="show=true"
      type="submit"
      variant="primary"
    >Add new card</b-button>

  </b-container>
</template>

<script>
export default {

  data() {
    return {
      cards: [
        {
          primary: false,
          id: 1,
          card: 'Visa ****4925',
        },
        {
          primary: true,
          id: 2,
          card: 'Mastercard ****1132',
        },
        {
          primary: false,
          id: 3,
          card: 'American Express ****1337',
        },
      ],
      form: {

      },
      show: false,
    };
  },
};
</script>

<style>

</style>
