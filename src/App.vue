<script setup>
</script>

<template>
  <div>
    <div>
      <h1>Jing's Magic Book</h1>
      <router-link :to="{ name: 'Home' }">Home</router-link>|
      <router-link :to="{ name: 'About' }">About</router-link>|
      <router-link :to="{ name: 'Users' }">Users</router-link>|
      <router-link :to="{ name: 'Books' }">Books</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
