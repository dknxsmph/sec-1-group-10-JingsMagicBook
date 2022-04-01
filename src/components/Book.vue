<script setup>
defineProps({
    books: {
        type: Object,
        require: true
    }
})
</script>
 
<template>
    <div>
        <h1>Book List</h1>
        <ul>
            <li v-for="(book, index) in books" :key="index">
                {{ book.bName }}
                <img :src="book.bImg" />
            </li>
        </ul>
    </div>
</template>
 
<style>
</style>