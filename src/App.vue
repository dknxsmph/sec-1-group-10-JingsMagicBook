<script setup>
import LoginVue from './views/Login.vue'
import { CookieUtil } from './utils/CookieUtil.js'
</script>

<template>
  <!-- <div>
    <div>
      <h1>Jing's Magic Book</h1>
      <router-link :to="{ name: 'Home' }">Home</router-link>|
      <router-link :to="{ name: 'About' }">About</router-link>|
      <router-link :to="{ name: 'Books' }">Books</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div> -->
  <div>
    <LoginVue v-if="!CookieUtil.get('userData')" />
    <div class="container" v-else>
      <div>
        <h1>Jing's Magic Book</h1>
        <router-link :to="{ name: 'Home' }">Home</router-link>|
        <router-link :to="{ name: 'About' }">About</router-link>|
        <router-link :to="{ name: 'Books' }">Books</router-link>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  margin: 0 auto;
  max-width: 1080px;
}
</style>
