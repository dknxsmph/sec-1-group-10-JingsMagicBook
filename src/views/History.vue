<script setup>
import { onBeforeMount, ref } from 'vue';
import History1 from '../components/History.vue';

const history = ref([])

onBeforeMount(async () => {
    history.value = await (await fetch('http://localhost:5000/history', { method: 'GET' })).json()
})

</script>
 
 
<template>
    <div id="history">
        <h1>History</h1>
        <History1 :Histories="history" />
    </div>
</template>
 
<style scoped>
#history {
    background-image: url(../assets/background-img/bg-history.jpg);
    color: rgb(248, 246, 246);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 30px 120px 40px 120px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

#history h1 {
    margin-bottom: 600px;
    padding: 50px 0;
    text-align: center;
    font-family: "Skranji";
    color: white;
    font-size: 20pt;
}
</style>