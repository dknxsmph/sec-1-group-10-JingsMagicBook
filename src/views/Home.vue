<script setup>
import { useUser } from '../stores/user.js'
import { useBooks } from '../stores/books.js'
import { onBeforeMount, ref } from 'vue'

import BookList from '../components/BookList.vue'
import Search from '../components/Search.vue'

// const searchInput = ref('')

const userStore = useUser()
const booksStore = useBooks()

onBeforeMount(() => {
  // Fetching books if the api has any update
  booksStore.fetchBooks()
})

</script>

<template>
  <div id="home">
    <h1>BOOKS FOR RENT</h1>   
    <Search />
    <div class="book-list">
      <BookList :books="booksStore.books" />
    </div>


  </div>
</template>

<style scoped>
.serachIcon-andIconUser {
  display: flex;
  justify-content: center;
}

#home {
  background: url(../assets/background-img/bg-home.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#home h1 {
  padding: 50px 0 20px 0;
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
  grid-template-columns: repeat(3, auto);
  grid-row-gap: 2em;
  padding-left: 10%;
}
</style>
