<script setup>
import { onBeforeMount, ref } from 'vue'
import Book from '../components/Book.vue'

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
  const bk = await getUsers()
  books.value = bk.books
})
</script>

<template>
  <div id="user">
    <h2>Users</h2>
    <Book :books="books" />
  </div>
</template>

<style scoped></style>
