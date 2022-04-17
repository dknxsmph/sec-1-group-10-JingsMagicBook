<script setup>

defineProps({
    Histories: {
        type: Object,
        require: true,
        default: {}
    }
})
</script>

<template>
    <div class="container">
        <table>
            <tr>
                <th class="user">User</th>
                <th class="book">Book</th>
                <th class="bookID">Book ID</th>
                <th class="status">Status</th>
            </tr>
            <tr v-for="(history, index) in Histories" :key="index">
                <th>{{ history.username.uName }} </th>
                <th><img :src="history.bookz.bookImg" /></th>
                <th>{{ history.bookz.bookId }}</th>
                <th>{{ history.action }}</th>
            </tr>
        </table>
    </div>
</template>

<style scoped>
th {
    border-bottom: 1px groove white;
}

.container {
    background-color: rgb(0, 0, 0, 0.6);
    width: 70%;
    height: 500px;
    display: grid;
    grid-template-columns: repeat(4 auto);
    align-items: flex-start;
    padding-top: 20px;
}
</style>
