<template>
  <b-container class="social-box">

    <h2 class="mt-5 text-secondary">Sta je Has?</h2>
    <h3> Has je dostava hrane koja ti donosi hranu iz vrhunskih
      restorana na kucnu adresu. Par klika i hrana je kod tebe. </h3>

    <b-row class="cols-md-1 mt-5" cols="1">
      <b-col class="col-md-4 text-center">
        <router-link :to="'/contact'" class="aii">
          <b-card class="box">
            <i class="fa fa-behance fa-3x" aria-hidden="true"></i>
            <b-container class="box-title">
              <b-card-title>Kontaktiraj Has</b-card-title>
            </b-container>
            <b-container fluid class="box-text">
              <b-card-text>Hasov call centar radi svakog dana 07:00-22:00.
                Za bilo kakvo pitanje ili zalbu mozete kontaktirati Has tim.</b-card-text>
            </b-container>
            <b-container class="box-btn">
              <a href="contact" class="text-primary">Kontaktiraj Has</a>
            </b-container>
          </b-card>
        </router-link>
      </b-col>

      <b-col class="col-md-4 text-center">
        <router-link :to="'/career'" class="aii">
          <b-card class="box">
            <i class="fa fa-behance fa-3x" aria-hidden="true"></i>
            <b-container class="box-title">
              <b-card-title>Postani deo tima</b-card-title>
            </b-container>
            <b-container fluid class="box-text">
              <b-card-text>Ukoliko zelite da postanete deo has tima, ili ste restoran koji zeli da
                koristi usluge hasa, klinite na link dole.
              </b-card-text>
            </b-container>
            <b-container class="box-btn">
              <a href="/career" class="text-primary">Postani deo tima</a>
            </b-container>
          </b-card>
        </router-link>
      </b-col>
      <b-col class="col-md-4 text-center">
        <router-link :to="'/help'" class="aii">
          <b-card class="box">
            <i class="fa fa-behance fa-3x" aria-hidden="true"></i>
            <b-container class="box-title">
              <b-card-title>Pomoc oko koriscenja</b-card-title>
            </b-container>
            <b-container fluid class="box-text">
              <b-card-text>Has je jednostavan za koriscenje.
                Ispod ovoga se nalazi link za uputstvo.</b-card-text>
            </b-container>
            <b-container class="box-btn">
              <a href="/help" class="text-primary">Pomoc</a>
            </b-container>
          </b-card>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'About',
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
</style>
