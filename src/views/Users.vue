<script setup>
import { onBeforeMount, ref } from 'vue'
import User from '../components/User.vue';

const users = ref([])

const getUsers = async () => {
    const res = await fetch('http://localhost:5000/users', { method: 'GET' })
    if (res.status === 200) {
        return await res.json()
    } else {
        console.log('cant fetch user')
    }
}

onBeforeMount(async () => {
    const usr = await getUsers();
    users.value = usr.user
})



</script>
 
<template>
    <div id="user">
        <h2>Users</h2>
        <User :users="users" />
    </div>
</template>

<style scoped>
</style>