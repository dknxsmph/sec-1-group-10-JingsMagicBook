<script setup>
import { storeToRefs } from 'pinia'
import { useBooks } from '../stores/books'
import AddBook from '../components/AddBook.vue'

const bookStore = useBooks()
</script>

<template>
  <div id="admin-panel">
    <h1>Admin Panel</h1>
    <table id="book-list" v-if="bookStore.books">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Manage</th>
        </tr>
      </thead>
      <tbody v-for="(book, index) in bookStore.books" :key="book.id">
        <tr :class="index % 2 === 0 && 'strip'">
          <td class="book-id">{{ book.id }}</td>
          <td class="book-name">{{ book.bName }}</td>
          <td class="book-status">{{ book.bStatus.toUpperCase() }}</td>
          <td class="input-group">
            <button class="btn">Edit</button>
            <button class="btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <AddBook @add-book="addBook" />
  </div>
</template>

<style scoped>
#admin-panel {
  background-color: #221f3f;
  min-height: 100vh;
  color: white;
  padding: 32px;
}

#admin-panel h1 {
  margin: 1em 0;
}

#book-list {
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
}

#book-list thead {
  background: black;
  height: 50px;
}

#book-list tr {
  text-align: center;
}

#book-list tbody tr {
  height: 50px;
}

#book-list tbody tr.strip {
  background: rgba(35, 35, 35, 0.5);
}

.btn {
  cursor: pointer;
  padding: 8px 10px;
  margin: 0 5px;
}
</style>
