<script setup>
import { useUser } from '../stores/user.js'
import { useBooks } from '../stores/books.js'
import { onBeforeMount, ref } from 'vue'

import BookList from '../components/BookList.vue'
import Search from '../components/Search.vue'
import AddBook from '../components/AddBook.vue'
import { storeToRefs } from 'pinia'

const userStore = useUser()
const booksStore = useBooks()

const { books } = storeToRefs(booksStore)
const filteredBooks = ref([])

const filter = (inputFilter) => {
  filteredBooks.value = books.value.filter(
    (book) => book.bName.toLowerCase().indexOf(inputFilter.toLowerCase()) !== -1
  )
}

onBeforeMount(async () => {
  // Fetching books if the api has any update
  await booksStore.fetchBooks()
})
</script>

<template>
  <div id="home" v-if="userStore.user">
    <AddBook @add-book="booksStore.addBook" />
    <div class="container book-list-box" v-if="books">
      <h1>BOOKS FOR BORROW</h1>
      <Search @click-search="filter" />
      <div class="book-list">
        <BookList
          :books="books"
          :filteredBooks="filteredBooks"
          :isAdmin="userStore.user.id === 203"
          @borrow-book="booksStore.borrowBook"
          @remove-book="booksStore.removeBook"
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
  min-height: 100%;
  padding-top: 1in;
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
