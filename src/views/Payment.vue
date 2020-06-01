<template>
  <b-container>


    <h3 class="mt-3 mb-3">Placanje</h3>

    <b-form>
      <b-form-group id="input-group-1" label="Nacin placanja:" label-for="input-1">
        <b-form-select id="input-1" v-model="form.nacin" required>
          <b-form-select-option>Platna Kartica</b-form-select-option>
          <b-form-select-option>Kes</b-form-select-option>
          <b-form-select-option>PayPal</b-form-select-option>
        </b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Adresa:" label-for="input-2">
        <b-icon @click="'/profile'" icon="plus" font-scale="1.5" class="left mb-2" />
        <b-form-select id="input-2" v-model="form.adress" required>
          <b-form-select-option>Neka Adresa 1</b-form-select-option>
          <b-form-select-option>Neka Adresa 2</b-form-select-option>
          <b-form-select-option>Neka Adresa 3</b-form-select-option>
        </b-form-select>
      </b-form-group>

      <b-form-group id="input-group-1" label="Platna kartica:" label-for="input-1">
        <b-icon icon="plus" font-scale="1.5" class="left mb-2" />
        <b-form-select id="input-1" v-model="form.kartica" required>
          <b-form-select-option>Visa ****4925</b-form-select-option>
          <b-form-select-option>Mastercard ****1132</b-form-select-option>
          <b-form-select-option>American Express ****1337</b-form-select-option>
        </b-form-select>
      </b-form-group>

      <b-form-group id="input-group-1" label="Kupon:" label-for="input-1">

        <b-icon @click="show=true" icon="plus" font-scale="1.5" class="left mb-2" />
        <b-form-select id="input-1" v-model="form.kupon" required>
          <b-form-select-option>COVID19PERCENT</b-form-select-option>
          <b-form-select-option>NEKI_KUPON2020</b-form-select-option>
          <b-form-select-option>RAFFAR33</b-form-select-option>
        </b-form-select>
      </b-form-group>


      <b-modal title="Dodaj kupon" :id=card v-model="show" ok-title="Add">
        <b-container>
          <b-form>

            <b-form-group
              id="input-group-1"
              label="Broj kupona:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.kupon"
                type="text"
                required
                placeholder="Vas broj kupona"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Ime prijatelja:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.name"
                type="text"
                required
                placeholder="Unesite ime prijatelja"
              ></b-form-input>
            </b-form-group>
            <small class="mt-3 mb-3">Ovo je opciono polje.
              Koristi se da nagradimo prijatelja koji Vam je dao kupon.</small>
          </b-form>
        </b-container>
      </b-modal>


      <b-button
        class="mt-4"
        :to="'/explore'"
        v-on:click.prevent="submit"
        type="submit"
        variant="primary"
      >Pay</b-button>

    </b-form>


  </b-container>
</template>

<script>
export default {
  name: 'Payment',
  data() {
    return {
      form: {
      },
      show: false,
    };
  },
};
</script>

<style scoped>

</style>
