<script setup>
import { useUser } from '../stores/user.js'
import { onBeforeMount, ref } from 'vue'
import BookCard from '../components/BookCard.vue';
const userStore = useUser()
const books = ref([])

const getUsers = async () => {
  try {
    const res = await fetch('http://localhost:5000/books', { method: 'GET' })
    return await res.json()
  } catch (err) {
    console.log(err)
  }
}

onBeforeMount(async () => {
  const fetchedBooks = await getUsers()
  books.value = fetchedBooks
})
</script>

<template>
<div>
  <div v-if="userStore.user">
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
    <div id="BookCard">
      <BookCard :books="books" />
  </div>
</div>
</template>

<style scoped>
#BookCard{
  background: rgba(0, 151, 19, 0.1);
}
</style>
