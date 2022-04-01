<script setup>
import { onBeforeMount, ref } from 'vue'
import User from '../components/User.vue'

const users = ref([])

const getUsers = async () => {
  try {
    const res = await fetch('http://localhost:5000/users', { method: 'GET' })
    return await res.json()
  } catch (err) {
    console.log(err)
  }
}

onBeforeMount(async () => {
  const usr = await getUsers()
  users.value = usr.user
})
</script>

<template>
  <div id="user">
    <h2>Users</h2>
    <User :users="users" />
  </div>
</template>

<style scoped></style>
