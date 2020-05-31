<template>
  <b-container class="social-box">

    <h2 class="mt-5 text-secondary">Postani deo Has tima</h2>
    <h3>Nevezano da li ste restoran ili trazite karijeru, Has Vam pruza bolju buducnost</h3>

    <b-row class="cols-md-1 mt-5" cols="1">
      <b-col class="col-md-6 text-center">
        <router-link :to="'/career/personal'" class="aii">
        <b-card class="box">
          <i class="fa fa-behance fa-3x" aria-hidden="true"></i>
          <b-container class="box-title">
            <b-card-title>Posao u Has-u</b-card-title>
          </b-container>
          <b-container fluid class="box-text">
            <b-card-text>Ukoliko zelite karijeru u Has-u, kao dostavljac, menandzer
              ili u jednoj od nasih mnogih oblasti kliknite ovde.</b-card-text>
          </b-container>
          <b-container class="box-btn">
            <a href="/career/personal" class="text-primary">Karijera</a>
          </b-container>
        </b-card>
      </router-link>
      </b-col>

      <b-col class="col-md-6 text-center">
        <router-link :to="'/career/restaurant'" class="aii">
        <b-card class="box">
          <i class="fa fa-behance fa-3x" aria-hidden="true"></i>
          <b-container class="box-title">
            <b-card-title>Predstavljam restoran</b-card-title>
          </b-container>
          <b-container fluid class="box-text">
            <b-card-text>Ukoliko predstavljate restoran i zelite da Vas restoran saradjuje sa Has
            dostavom kliknite ovde</b-card-text>
          </b-container>
          <b-container class="box-btn">
            <a href="/career/restaurant" class="text-primary">Restoran</a>
          </b-container>
        </b-card>
      </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Career',
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
