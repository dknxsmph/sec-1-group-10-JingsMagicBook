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
                <th><img id="his-img" style="width: 20%;" :src="history.bookz.bookImg" /></th>
                <th>{{ history.bookz.bookId }}</th>
                <th v-if="history.action == 'BORROW'" id="actionStatus" style="color: palevioletred;">{{
                    history.action
                }}</th>
                <th v-else id="actionStatus" style="color: aquamarine;">{{ history.action }}</th>
            </tr>
        </table>
          <h3 v-show="Histories.length  == 0" style="width: 100%; text-align: center;">No history(s) in history list.</h3>
    </div>
</template>

<style scoped>
.user,
.book,
.bookID,
.status {
    font-size: 20px;
    color: rgb(239, 187, 31);
}

th {
    border-bottom: 1px groove white;
    font-family: "Skranji";
    transform: scale(1.1);
    filter: drop-shadow(0 0 0.7rem rgba(255, 255, 255, 0.5));
}

.container {
    background-color: rgb(0, 0, 0, 0.6);
    width: 70%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4 auto);
    align-items: flex-start;
    padding-top: 20px;
}
</style>
