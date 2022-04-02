<script setup>
import { useUser } from '../stores/user.js'
import { onBeforeMount, ref } from 'vue'

import BookCard from '../components/BookCard.vue'

const userStore = useUser()
const books = ref([])

const getBooks = async () => {
  try {
    const res = await fetch('http://localhost:5000/books', { method: 'GET' })
    return await res.json()
  } catch (err) {
    console.log(err)
  }
}

onBeforeMount(async () => {
  const fetchedBooks = await getBooks()
  books.value = fetchedBooks
})
</script>

<template>
  <div id="home">
    <!-- <div v-if="userStore.user">
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
  </div> -->
    <div class="container">
      <h1>BOOKS FOR RENT</h1>
      <ul class="boox-list-box">
        <li class="book-list">
          <BookCard v-for="(book, index) in books" :key="index" :book="book" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#home {
  background: url(../assets/background-img/bg.png);
}
#home h1 {
  text-align: center;
  font-family: 'Skranji', cursive;
}

.book-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  
}
</style>
