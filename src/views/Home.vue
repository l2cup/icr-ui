<template>
  <b-container>
    <h1 class="mt-5">Hrana iz restorana</h1>
    <h3>Toplina doma</h3>
    <br><br>
      <b-card style="max-width:100vw" overlay img-src="../../public/food3.jpg"
        text-variant=white>
        <b-card-title class="header text-secondary">Sta je Has?</b-card-title>
        <b-card-text class="header">Has je dostava hrane koja ti donosi hranu iz vrhunskih
          restorana na kucnu adresu. Par klika i hrana je je kod tebe.</b-card-text>
      </b-card>
      <br>
      <router-link :to="'/login'">
        <h2 class="mt-3 mb-3 text-primary">Poruci hranu!</h2>
      </router-link>
      <br>
    </b-container>
  </template>
<script>

export default {
  name: 'Home',
};

</script>


<style scoped>
.header {
  font-size: 5vw;
}
.card-img {
  filter: blur(8px);
  -webkit-filter: blur(8px);
}
</style>
