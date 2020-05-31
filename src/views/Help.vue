<template>
  <b-container class="social-box">

    <h2 class="mt-5 text-secondary">Kako poruciti hranu?</h2>
    <h3>Porucivanje hrane preko Has-a je proces koji sadrzi tri jednostavna koraka.</h3>

    <b-row class="cols-md-1 mt-5" cols="1">
      <b-col class="col-md-4 text-center">
        <b-card class="box">
          <i class="fa fa-behance fa-3x" aria-hidden="true"></i>
          <b-container class="box-title">
            <b-card-title>1. Odaberi Restoran</b-card-title>
          </b-container>
          <b-container fluid class="box-text">
            <b-card-text>Odaberi jedan od mnogih restorana koji koriste Has. Izaberi hranu
              koju zelis da jedes i ta ista hrana ce biti na tvojim vratima u najkracem roku.
            </b-card-text>
          </b-container>
        </b-card>
      </b-col>

      <b-col class="col-md-4 text-center">
        <b-card class="box">
          <i class="fa fa-behance fa-3x" aria-hidden="true"></i>
          <b-container class="box-title">
            <b-card-title>2. Unesi adresu</b-card-title>
          </b-container>
          <b-container fluid class="box-text">
            <b-card-text>Unesi adresu gde zelis da ti donesemo hranu i nas tim ti je dostavlja.
              Imaces uvid u to gde se nas dostavljac nalazi sve vreme.</b-card-text>
          </b-container>
        </b-card>
      </b-col>
      <b-col class="col-md-4 text-center">
        <b-card class="box">
          <i class="fa fa-behance fa-3x" aria-hidden="true"></i>
          <b-container class="box-title">
            <b-card-title>3. Plati karticom</b-card-title>
          </b-container>
          <b-container fluid class="box-text">
            <b-card-text>Mozes platiti karticom ako ti je tako lakse.
              Kada platis restoran sprema tvoju hranu, a nas dostavljac
            dolazi sto pre.</b-card-text>
          </b-container>
        </b-card>
      </b-col>
    </b-row>

      <router-link :to="'/login'">
        <h2 class="mt-3 mb-3 text-primary" style="text-decoration:underline;">
          Spreman sam da porucim hranu!</h2>
      </router-link>

  </b-container>
</template>

<script>
export default {
  name: 'Help',
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
