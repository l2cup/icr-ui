<template>
  <b-container fluid="md">

    <b-card class="mt-5" no-body>
      <b-tabs vertical pills card>
        <b-tab title="Detalji">
          <Details/>
        </b-tab>
        <b-tab title="Adrese">
          <Address/>
        </b-tab>
        <b-tab title="Nacin placanja">
          <Payment/>
        </b-tab>
        <b-tab title="Sigurnost">
          <Security/>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>

import Details from '../components/ProfileDetails.vue';
import Address from '../components/ProfileAddress.vue';
import Payment from '../components/ProfilePayment.vue';
import Security from '../components/ProfileSecurity.vue';

export default {
  name: 'Profile',
  components: {
    Details,
    Address,
    Payment,
    Security,
  },
};
</script>

<style>

</style>
