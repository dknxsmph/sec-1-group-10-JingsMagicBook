<script setup>
import { useUser } from '../stores/user.js'
import { useBooks } from '../stores/books.js'
import { onBeforeMount, ref } from 'vue'

import BookList from '../components/BookList.vue'
import Search from '../components/Search.vue'
import AddBook from '../components/AddBook.vue'

const userStore = useUser()
const booksStore = useBooks()

const books = ref(booksStore.books)

const filter = (inputFilter) => {
  books.value = booksStore.books.filter(
    (book) => book.bName.toLowerCase().indexOf(inputFilter.toLowerCase()) !== -1
  )
}

const removeBook = async (bookId) => {
  const res = await fetch(`http://localhost:5000/books/${bookId}`, {
    method: 'DELETE',
  })
  if (res.status == 200) {
    alert('Book Id :' + bookId + ' removed')
  }
}

const borrowBook = async (book) => {
  userStore.user.uCart.push(book.id)
  try {
    const res = await fetch(
      `http://localhost:5000/users/${userStore.user.id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(userStore.user),
      }
    )
    if (res.status === 200) {
      book.bStatus = 'unavailable'
      await fetch(`http://localhost:5000/books/${book.id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(book),
      })
      alert('Book Id : ' + book.id + ' added to cart!')
    }
  } catch (err) {
    console.log(err)
  }
}

onBeforeMount(() => {
  // Fetching books if the api has any update
  if (!books.value && !booksStore.books) {
    booksStore.fetchBooks().then((fetchedBooks) => (books.value = fetchedBooks))
  }
})
</script>

<template>
  <div id="home" v-if="userStore.user">
    <AddBook class="btn-add" />
    <div class="container book-list-box" v-if="booksStore.books">
      <h1>BOOKS FOR BORROW</h1>
      <Search @click-search="filter" />
      <div class="book-list">
        <BookList
          :books="books"
          @borrow-book="borrowBook"
          @remove-book="removeBook"
          @isAdmin="userStore.user.id === 203"
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
