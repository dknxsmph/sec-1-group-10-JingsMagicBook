<script setup>
import { useUser } from '../stores/user.js'
const userStore = useUser()
</script>

<template>
  <div id="home" v-if="userStore.user">
    <h2>Home</h2>
    <p>
      Hello,
      <b
        >{{ userStore.user.uName }} (Balance: ${{
          userStore.user.uBalance.toLocaleString('en-US')
        }})</b
      >&nbsp;
      <a href="" @click="userStore.logout()">Logout</a>
    </p>
  </div>
</template>

<style scoped></style>
