<template>

  <router-link :to="'/restaurant'" class="aii">
  <b-card class="box" :img-src="restaurant.picUrl" img-top
    img-width="300" img-height="200">
    <b-container class="box-title">
      <b-card-title>{{restaurant.name}} {{restaurant.id}}</b-card-title>
    </b-container>
    <b-container fluid class="box-text">
      <b-card-text>{{restaurant.about}}</b-card-text>
    </b-container>
    <b-container class="left">
      <b-icon v-for="star in restaurant.quality" :key="star.id" icon="star-fill">
        {{star}}</b-icon>
      <b-icon v-for="empty in Math.floor(5 - restaurant.quality)"
        :key="empty.id" icon="star">{{empty}}</b-icon>
    </b-container>

    <b-container class="right">
      <b-icon v-for="star in restaurant.quality" :key="star.id" icon="lightning-fill">
        {{star}}</b-icon>

      <b-icon v-for="empty in Math.floor(5 - restaurant.quality)"
        :key="empty.id" icon="lightning">{{empty}}</b-icon>

    </b-container>

  </b-card>
  </router-link>
</template>

<script>
export default {
  props: [
    'restaurant',
  ],
};
</script>

<style scoped>

body{
  background: #f2f2f2;
}

.social-box .box{
  background: #FFF;
  border-radius: 10px;
  margin: 20px 0px;
  cursor: pointer;
  transition: all 0.5s ease-out;
}

.social-box .box:hover{
  box-shadow: 0 0 6px #78C2AD;
}

.social-box .box .box-text{
  margin:10px 0px;
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

.fa{
  color:#78C2AD;
}

.right {
  text-align:right;
  width: 49%;
  display: inline-block;
}

.left {
  text-align: left;
  width: 50%;
  display: inline-block;
}

</style>
