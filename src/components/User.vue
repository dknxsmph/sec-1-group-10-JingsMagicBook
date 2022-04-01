<script setup>
defineProps({
    users: {
        type: Object,
        require: true
    }
})
</script>
 
<template>
    <div>
        <h1>Who's Renting</h1>
        <ul>
            <li v-for="(user, index) in users" :key="index">
            <li> {{ user.uName }}</li>
            </li>
        </ul>
    </div>
</template>
 
<style>
</style>