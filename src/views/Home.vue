<script setup>
import { useUser } from '../stores/user.js'
import { useBooks } from '../stores/books.js'
import { onBeforeMount, ref } from 'vue'

import BookList from '../components/BookList.vue'

const userStore = useUser()
const booksStore = useBooks()

onBeforeMount(() => {
  // Fetching books if the api has any update
  booksStore.fetchBooks()
})
</script>

<template>
  <div id="home">
    <div class="container book-list-box" v-if="booksStore.books">
      <h1>BOOKS FOR RENT</h1>
      <div class="book-list">
        <BookList :books="booksStore.books" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#home {
  background: url(../assets/background-img/bg-home.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#home h1 {
  padding: 50px 0;
  text-align: center;
  font-family: 'Skranji', cursive;
  color: white;
  font-size: 20pt;
}

.book-list-box {
  padding: 1em 0 50px 0;
}

.book-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1em;
  grid-row-gap: 1em;
}
</style>
