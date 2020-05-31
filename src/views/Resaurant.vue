<template>


  <b-container fluid style="padding:0 0;">
    <b-jumbotron class="image" :header="restaurants[0].name"
      text-variant="white" bg-variant="dark">

      <b-container>
        <b-icon font-scale="4" class="mr-2 ml-2" v-for="star in restaurants[0].quality"
          :key="star.id" icon="star-fill" variant="warning">
          {{star}}</b-icon>
        <b-icon font-scale="5" v-for="empty in Math.floor(5 - restaurants[0].quality)"
          :key="empty.id" icon="star">{{empty}}</b-icon>
      </b-container>


    </b-jumbotron>

    <b-container>
      <b-tabs pills class="mt-3 mb-3" align="center">

        <b-tab title="Specijali">

          <b-container class="social-box">
            <b-container class="mt-3">
              <p class="h4 left"> Sortiraj po:</p>
              <b-select split split-variant="outline-secondary" class="right">
                <b-select-option>Jeftinije prvo</b-select-option>
                <b-select-option>Skuplje prvo</b-select-option>
              </b-select>
            </b-container>

            <b-row class="cols-md-1 mt-5" cols=1>
              <b-col v-for="food in foods" :key="food.id"
                class="col-md-4 text-center">
                <CardFood v-bind:food="food"/>
              </b-col>

              <b-col v-for="food in foods" :key="food.id" class="col-md-4 text-center">
                <CardFood v-bind:food="food"/>
              </b-col>

            </b-row>
          </b-container>
        </b-tab>

        <b-tab title="Promotivno">
          <b-container class="social-box">
            <b-container class="mt-3">
              <p class="h4 left"> Sortiraj po:</p>
              <b-select split split-variant="outline-secondary" class="right">
                <b-select-option>Jeftinije prvo</b-select-option>
                <b-select-option>Skuplje prvo</b-select-option>
              </b-select>
            </b-container>

            <b-row class="cols-md-1 mt-5" cols="1">

              <p class="h3 mt-2 mb-2">Akcija dostava</p>
              <b-col v-for="food in foods" :key="food.id" class="col-md-4 text-center">
                <CardFood v-bind:food="food"/>
              </b-col>
              <p class="h3 mt-2 mb-2">Kombinacije</p>
              <b-col v-for="food in foods" :key="food.id" class="col-md-4 text-center">
                <CardFood v-bind:food="food"/>
              </b-col>

            </b-row>
          </b-container>
        </b-tab>

        <b-tab disabled title="Mediteranska"/>
        <b-tab disabled title="Paste"/>
        <b-tab disabled title="Pica"/>
        <b-tab disabled title="Ostalo"/>

        <b-tab title="Recenzije">
          <b-container class="social-box">
            <b-row class="cols-md-1 mt-5" cols="1">
              <p class=" h3 mt-2 mb-2" style="text-align=left;">Moji favoriti</p>
              <b-col v-for="food in foods" :key="food.id" class="col-md-4 text-center">
                <CardFood v-bind:food="food"/>
              </b-col>
            </b-row>
          </b-container>
        </b-tab>


      </b-tabs>
    </b-container>


  </b-container>
</template>

<script>

import { mapGetters } from 'vuex';
import CardFood from '../components/CardFood.vue';

export default {
  components: {
    CardFood,
  },
  name: 'Explore',
  computed: mapGetters(['foods', 'restaurants']),
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

.image {
  background: url(../../public/food4.jpg);
  background-position: 30%;
  background-size:cover;
  border-radius: 0;
}

.image h1 {
  color:#FFF;
  font-weight: bolder;
}
</style>
