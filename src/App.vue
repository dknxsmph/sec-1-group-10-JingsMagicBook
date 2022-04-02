<script setup>
import { onBeforeMount } from 'vue'
import LoginVue from './views/Login.vue'
import { useUser } from './stores/user.js'
const userStore = useUser()

onBeforeMount(() => {
  userStore.loadUser()
})
</script>

<template>
  <div>
    <router-view name="NavbarComp"></router-view>
    <router-view></router-view>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Skranji:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  outline: none;
  border: none;
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
