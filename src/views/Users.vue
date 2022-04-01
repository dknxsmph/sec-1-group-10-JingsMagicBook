<script setup>
import { ref } from 'vue'
import User from '../components/User.vue';

const users = ref([])

const getUsers = async () => {
    const res = await fetch('http://localhost:5000/users', { method: 'GET' })
    if (res.status === 200) {
        users.value = await res.json()
        console.log(users.value);
    } else {
        console.log('cant fetch user')
    }
}

getUsers();

</script>
 
<template>
    <div id="user">
        <h2>Users</h2>
        <User />
    </div>
</template>
 
<style scoped>
</style>