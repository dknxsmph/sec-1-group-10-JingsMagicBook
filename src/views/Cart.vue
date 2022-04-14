<script setup>
import { ref, onBeforeMount } from 'vue';
import { useUser } from '../stores/user.js';
import Cart1 from '../components/Cart.vue';

const item = ref([])

onBeforeMount(async () => {
    item.value = useUser().user.uCart;
})

</script>
 
<template>
    <div id="cart">
        <h1>Cart</h1>
        <Cart1 :cart="item" />
    </div>
</template>
 
<style scoped>
#cart {
    background-image: url(../assets/background-img/bg-home.jpg);
    color: rgb(248, 246, 246);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 30px 120px 40px 120px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

#cart h1 {
    margin-bottom: 600px;
    padding: 50px 0;
    text-align: center;
    font-family: "Skranji";
    color: white;
    font-size: 20pt;
}
</style>