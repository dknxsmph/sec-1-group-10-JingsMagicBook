<script setup>
import { ref, onBeforeMount } from 'vue';
import { useUser } from '../stores/user.js';

defineProps({
  cart: {
    type: Object,
    require: true,
  },
})

const newRemove = ref([]);

onBeforeMount(async () => {
  await useUser().loadUser();
})

const removeFromCart = async (bookId) => {
  newRemove.value = useUser().user;
  newRemove.value.uCart = newRemove.value.uCart.filter((p) => p.id !== bookId);
  const res = await fetch(`http://localhost:5000/users/${useUser().user.id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(
      {
        id: newRemove.value.id,
        uName: newRemove.value.uName,
        uBalance: newRemove.value.uBalance,
        uImg: newRemove.value.uImg,
        uCart: newRemove.value.uCart
      })
  })
  if (res.status === 200) {
    alert('Book Id : ' + bookId + ' removed from your cart!');
  }
}

</script>

<template>
  <div class="container">
    <h1 style="color: black; padding-top: 20px;"> Your Cart</h1>
    <ul v-for="(itx, index) in cart" :key="index">
 
      <li>      <img :src="itx.bImg">  <b>book id</b> : {{ itx.id }} <br><b>book name </b> : {{ itx.bName }}</li>
      <button @click="removeFromCart(itx.id)">remove from cart</button>
    </ul>
  </div>
</template>

<style>
li{
  list-style: none;
}
</style>
