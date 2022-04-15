<script setup>
import { useUser } from '../stores/user.js'

const userStore = useUser()
const search = () => (alert('A Y O O '))

</script>
 
<template>
    <select name="profile" class="profile" >
        <option value="Login as">Login as</option>
        <option value="Status">Your Status</option>
        <option value="balance">Your Balance</option>
        <option @click="userStore.logout" value="logout">logout</option>


    </select>
</template>
 
<style>
.profile {
    display: flex;
    padding: 0 0 5px 0;
    justify-content: center;
    margin-left: -20px;
    border-radius: 5px;
}

.option-profile {
    width: 30%;
    border-radius: 5px;
}
</style>