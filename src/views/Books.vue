<script setup>
import { onBeforeMount, ref } from 'vue'
import Book from '../components/Book.vue';

const books = ref([])

const getUsers = async () => {
    const res = await fetch('http://localhost:5000/books', { method: 'GET' })
    if (res.status === 200) {
        return await res.json()
    } else {
        console.log('cant fetch book')
    }
}

onBeforeMount(async () => {
    const bk = await getUsers();
    books.value = bk.book
})

</script>
 
<template>
    <div id="user">
        <h2>Users</h2>
        <Book :books="books" />
    </div>
</template>

<style scoped>
</style>