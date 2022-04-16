<script setup>
import { ref, onBeforeMount } from 'vue'
import { useUser } from '../stores/user.js'
import { useBooks } from '../stores/books.js'

const newAdded = ref([])
const bookl = ref([]);

defineProps({
  books: {
    type: Array,
    require: true,
  },
})

onBeforeMount(async () => {
  await useUser().loadUser()
  bookl.value = await useBooks().fetchBooks();
})

const removeBook = async (bookId) => {
  const res = await fetch(`http://localhost:5000/books/${bookId}`, {
    method: 'DELETE'
  })
  if (res.status == 200) {
    bookl.value = await useBooks().fetchBooks();
    alert('Book Id :' + bookId + " removed");

  }
}
const borrowBook = async (book) => {
  newAdded.value = useUser().user
  newAdded.value.uCart.push(book)
  const res = await fetch(`http://localhost:5000/users/${useUser().user.id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      id: newAdded.value.id,
      uName: newAdded.value.uName,
      uImg: newAdded.value.uImg,
      uCart: newAdded.value.uCart,
    }),
  })
  if (res.status === 200) {
    await fetch(`http://localhost:5000/books/${book.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        id: book.id,
        bName: book.bName,
        bDesc: book.bDesc,
        bStatus: 'unavailable',
        bImg: book.bImg,
      }),
    })
    bookl.value = await useBooks().fetchBooks();
    alert('Book Id : ' + book.id + ' added to cart!')
  }
}

/***
 * To transform string if the legnth longer than max length, then relace them with hellips.
 * Ref: https://stackoverflow.com/questions/1199352/smart-way-to-truncate-long-strings
 */
const shouldBookNameTruncate = (bookName, maxLength) => {
  return bookName.length > maxLength
    ? `${bookName.substr(0, maxLength - 1)} \u2026`
    : bookName
}
</script>

<template>
  <div class="book-card" v-for="book in bookl" :key="bookl.id">
    <img class="book-card-img" :src="book.bImg" />
    <p class="book-card-name">{{ shouldBookNameTruncate(book.bName, 27) }}</p>
    <div class="book-btn-group">
      <div v-if="book.bStatus == 'available'">
        <button class="btn-add-to-cart" @click="borrowBook(book)"> BORROW THIS BOOK</button>
        <button class="btn-add-to-cart" @click="removeBook(book.id)"> REMOVE THIS BOOK</button>
      </div>
      <div v-else>
        <button class="btn-add-to-cart"> UNAVAILABLE</button>
      </div>
    </div>
  </div>
</template>

<style>
.book-card {
  width: 80%;
  border-radius: 1em;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.69);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.book-card-img {
  display: block;
  width: 100%;
  padding: 8px;
}

.book-card-name {
  font-family: 'Skranji', cursive;
  text-align: center;
  padding: 5px;
  margin: 8px 0;
}

.book-btn-group {
  text-align: center;
  margin: 10px 0;
}

.btn-add-to-cart {
  font-family: 'Itim', cursive;
  color: rgb(255, 255, 255);
  background: rgb(29, 11, 1);
  width: 100%;
  border-radius: 10px;
  padding: 6px 10px;
  transition: all 0.3s ease-out;
  margin-bottom: 5%;
}

.btn-add-to-cart:hover {
  cursor: pointer;
  transform: scale(1.1);
  filter: drop-shadow(0 0 0.7rem rgba(255, 255, 255, 0.5));
}
</style>
