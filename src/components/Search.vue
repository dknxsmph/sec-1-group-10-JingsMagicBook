<script setup>
import { ref } from 'vue'
const emit = defineEmits(['click-search'])

const inputSearch = ref('')

const onSearch = () => {
  emit('click-search', inputSearch.value)
  inputSearch.value = ''
}
</script>

<template>
  <div class="container-search">
    <div>
      <input
        v-model="inputSearch"
        class="input-search"
        type="text"
        placeholder="Search"
      />
    </div>
    <div>
      <img
        class="icon-search"
        src="../assets/search-icon.png"
        alt="search-icon"
        @click="onSearch"
      />
    </div>
  </div>
</template>

<style>
.container-search {
  display: flex;
  justify-items: center;
  padding: 0 0 40px 0;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-left: 20px;
}
.icon-search {
  cursor: pointer;
  height: 30px;
  width: 30px;
}
.input-search {
  height: 30px;
  width: 600px;
}
</style>
