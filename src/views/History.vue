<script setup>
import { onBeforeMount, ref } from 'vue'
import HistoryList from '../components/HistoryList.vue'

const history = ref([])

onBeforeMount(async () => {
  history.value = await fetch('http://localhost:5000/history', {
    method: 'GET',
  }).then((res) => res.json())
})
</script>

<template>
  <div id="history">
    <div id="title-history">
      <h1>History</h1>
    </div>
    <HistoryList :histories="history" />
  </div>
</template>

<style scoped>
#history {
  background-image: url(../assets/background-img/bg-history.jpg);
  color: rgb(248, 246, 246);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100%;
  padding-top: 1in;
}

#history h1 {
  padding: 50px 0;
  font-family: 'Skranji';
  color: white;
  font-size: 20pt;
  width: 100%;
  text-align: center;
}
</style>
