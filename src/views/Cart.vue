<template>
  <b-container>
    <b-card class=" box mt-4">
      <b-container fluid class="box-text">
        <p class="h3 mt-3 mb-3"><b-icon class="mr-3" icon="cart"></b-icon>Vasa korpa</p>
        <b-container v-for="food in foods" :key="food.id">
          <b-card-text class="mt-2 h5 left">{{food.name}}</b-card-text>
          <b-card-text class="h5 right">{{food.price}}
          <b-icon class="ml-2 text-danger" icon="trash"></b-icon></b-card-text>
        <b-card-sub-title style="text-align:left;display:block;">
          Prilog Prilog</b-card-sub-title>
        </b-container>

        <b-container class="mt-3">
          <b-card-text class="mt-2 h3 left">Ukupno:</b-card-text>
          <b-card-text class="mt-2 h3 right">99999</b-card-text>

          <b-btn :to="'/payment'" class="mt-2 mb-2" variant="primary">Placanje</b-btn>
        </b-container>

      </b-container>
    </b-card>
  </b-container>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'Cart',
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
  padding: 40px 10px;
  margin: 20px 0px;
  cursor: pointer;
  transition: all 0.5s ease-out;
}

.social-box .box:hover{
  box-shadow: 0 0 6px #78C2AD;
}

.social-box .box .box-text{
  margin:20px 0px;
  font-size: 20px;
  line-height: 30px;
}

.social-box .box .box-btn a{
  text-decoration: none;
  color: #78C2AD;
  font-size: 16px;
}

.fa{
  color:#78C2AD;
}

.right {
  text-align:right;
  width: 50%;
  display: inline-block;
}

.left {
  text-align: left;
  width: 50%;
  display: inline-block;
}
</style>
