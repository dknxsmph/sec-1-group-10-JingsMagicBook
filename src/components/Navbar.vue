<script setup>

</script>
 
<template>
<div id="navbar">
  <h1>Jing's Magic Book</h1>
  <router-link :to="{ name: 'Home' }">Home</router-link>|
  <router-link :to="{ name: 'About' }">About</router-link>
</div>
</template>
 
<style scoped>
#navbar {}
</style>