<template>

  <b-container>
    <b-tabs pills class="mt-3 mb-3" align="center">

      <b-tab title="Istrazi">

        <b-container class="social-box">
          <b-container class="mt-3">
            <p class="h4 left"> Sortiraj po: </p>
            <b-select split split-variant="outline-secondary" class="right">
              <b-select-option>Ceni</b-select-option>
              <b-select-option>Kategoriji</b-select-option>
              <b-select-option>Brzini dostave</b-select-option>
              <b-select-option>Najblize</b-select-option>
            </b-select>
          </b-container>
          <b-row class="cols-md-1 mt-5" cols=1>
            <p class="h3 mt-2 mb-2">Dostava do sat vremena</p>
            <b-col v-for="res in restaurants" :key="res.id"
              class="col-md-4 text-center">
              <CardRestaurant v-bind:restaurant="res"/>
            </b-col>

            <p class=" h3 mt-2 mb-2">Dostava preko sat vremena</p>
            <b-col v-for="res in restaurants" :key="res.id" class="col-md-4 text-center">
              <CardRestaurant v-bind:restaurant="res"/>
            </b-col>

          </b-row>
        </b-container>
      </b-tab>

      <b-tab title="Poruci">
        <b-container class="social-box">
          <b-container class="mt-3">
            <p class="h4 left"> Sortiraj po: </p>
            <b-select split split-variant="outline-secondary" class="right">
              <b-select-option>Ceni</b-select-option>
              <b-select-option>Kategoriji</b-select-option>
              <b-select-option>Brzini dostave</b-select-option>
              <b-select-option>Najblize</b-select-option>
            </b-select>
          </b-container>

          <b-row class="cols-md-1 mt-5" cols="1">

            <p class="h3 mt-2 mb-2">Mediteranski restorani</p>
            <b-col v-for="res in restaurants" :key="res.id" class="col-md-4 text-center">
              <CardRestaurant v-bind:restaurant="res"/>
            </b-col>
            <p class="h3 mt-2 mb-2">Novi specijaliteti</p>
            <b-col v-for="res in restaurants" :key="res.id" class="col-md-4 text-center">
              <CardRestaurant v-bind:restaurant="res"/>
            </b-col>

          </b-row>
        </b-container>
      </b-tab>

      <b-tab title="Favoriti">
        <b-container class="social-box">
          <b-row class="cols-md-1 mt-5" cols="1">
            <p class=" h3 mt-2 mb-2" style="text-align=left;">Moji favoriti</p>
            <b-col v-for="res in restaurants" :key="res.id" class="col-md-4 text-center">
              <CardRestaurant v-bind:restaurant="res"/>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>


    </b-tabs>

  </b-container>
</template>

<script>

import { mapGetters } from 'vuex';
import CardRestaurant from '../components/CardRestaurant.vue';

export default {
  components: {
    CardRestaurant,
  },
  name: 'Explore',
  computed: mapGetters(['restaurants']),
};
</script>

<style scoped>

body{
  background: #f2f2f2;
}

.social-box .box{
  background: #FFF;
  border-radius: 10px;
  padding: 0px 0px;
  margin: 20px 0px;
  cursor: pointer;
  transition: all 0.5s ease-out;
}

.social-box .box:hover{
  box-shadow: 0 0 7px #78C2AD;
}

.social-box .box .box-text{
  margin:20px 0px;
  font-size: 15px;
  line-height: 30px;
}

.social-box .box .box-btn a{
  text-decoration: inherit;
  color: inherit;
  cursor: pointer;
  font-size: 16px;
}

.aii {
  text-decoration: inherit;
  color: inherit;
  cursor: pointer;
}

.right {
  text-align:right;
  width: 25%;
  display: inline-block;

}

.left {
  text-align: left;
  width: 25%;
  display: inline-block;

}
.fa{
  color:#78C2AD;
}
</style>
