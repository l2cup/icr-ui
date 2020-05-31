<template>
  <b-container class="social-box">

    <h2 class="mt-5 text-secondary">Kontantiraj Has</h2>
    <h3>Ukoliko zelite da postavite neko pitanje
      ili da podnesete zalbu kontaktirajte nas call center</h3>

    <b-container class="mt-3">
      <b-card class="box">
        <i class="fa fa-behance fa-3x" aria-hidden="true"></i>
        <b-container fluid class="box-text">
          <b-card-text class="left">Call center</b-card-text>
          <b-card-text class="right text-info">0800 1234 123</b-card-text>
          <b-card-text class="left">Has HQ Beograd</b-card-text>
          <b-card-text class="right text-info">011 244 255</b-card-text>
          <b-card-text class="left">Has Marketing</b-card-text>
          <b-card-text class="right text-info">011 244 256</b-card-text>
          <b-card-text class="left">Pitanja o karijeri</b-card-text>
          <b-card-text class="right text-info">011 244 257</b-card-text>
          <b-card-text class="left">Email</b-card-text>
          <b-card-text class="right text-info"><a href="mailto:support@has.rs" class="text-info">
              support@has.rs</a></b-card-text>
          <b-card-text class="left">Adresa</b-card-text>
          <b-card-text class="right">Neka adresa 12b</b-card-text>
        </b-container>
      </b-card>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: 'Contact',
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
  width: 49%;
  display: inline-block;
}

.left {
  text-align: left;
  width: 50%;
  display: inline-block;
}
</style>
