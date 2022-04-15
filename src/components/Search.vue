<script setup>
import { ref } from 'vue'
defineProps({
    books: {
        type: Array,
        require: true,
    },
})

const searchInput = ref('')
const search = () => (alert('A Y O O '))

</script>

<template>
    <div class="search">
        <input class="input-search" type="text" placeholder="Search" v-model="searchInput">
        <img class="img-icon" src="../assets/search-icon.png" alt="search-icon" @click="search">
        <ul v-for="book in books" :key="book.bId">
            <li>

            </li>
        </ul>
    </div>

</template>

<style>
.img-icon {
    width: 30px;
    height: 30px;
}

.search {
    display: flex;
    padding: 0 0 50px 0;
    justify-content: center;
    gap: 10px;
    margin-left: 20px;
}

.input-search {
    width: 30%;
    border-radius: 5px;
}
</style>
