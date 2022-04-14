<script setup>
defineProps({
  cart: {
    type: Object,
    require: true,
  },
})


</script>

<template>
  <div>
    <h1>Cart List</h1>
    <ul v-for="(itx, index) in cart" :key="index">
      <li>{{ itx }}</li>
    </ul>
  </div>
</template>

<style>
</style>
