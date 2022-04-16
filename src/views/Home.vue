<script setup>
import { useUser } from '../stores/user.js'
import { useBooks } from '../stores/books.js'
import { onBeforeMount, ref } from 'vue'

import BookList from '../components/BookList.vue'
import Search from '../components/Search.vue'
const userStore = useUser()
const booksStore = useBooks()

onBeforeMount(() => {
  // Fetching books if the api has any update
  booksStore.fetchBooks()
})
let filterBook = ref([])
let showFilter = ref(false)
let filter = (inputFilter) => {
  showFilter.value = true
  return (filterBook.value = booksStore.books.filter(
    (book) => book.bName.toLowerCase().indexOf(inputFilter.toLowerCase()) !== -1
  ))
}
</script>

<template>
  <div id="home">
    <div class="container book-list-box" v-if="booksStore.books">
      <h1>BOOKS FOR RENT</h1>
      <Search @click-search="filter" />
      <div class="book-list">
        <BookList
          :books="booksStore.books"
          :filterBooks="filterBook"
          :showBooks="showFilter"
        />
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
  min-height: 100vh;
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
