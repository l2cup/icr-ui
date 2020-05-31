<template>
  <b-container>
    <b-form-checkbox v-for="i in 7" :key="i.id" class="mb-3 mt-3">
      Prilog {{i}}
    </b-form-checkbox>

    <b-form-textarea rows="4" no-resize class="mb-3 mt-3" placeholder="Posebna napomena."/>
  </b-container>
</template>

<script>
export default {
  name: 'Prilog',
};
</script>

<style>

</style>
