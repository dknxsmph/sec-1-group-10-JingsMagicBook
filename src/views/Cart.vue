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
        <div>
            <h1>Cart</h1>
        </div>
       <div class="content-bg">
            <Cart1 :cart="item" />
       </div>
    </div>
</template>
 
<style scoped>
.content-bg{
    margin-top: 40px;
    text-align: center;
    background-color: #C4C4C4;
    width: 100%;
    height: auto;
    opacity: 0.8;
}
#cart {
    background-image: url(../assets/background-img/bg-home.jpg);
    color: rgb(248, 246, 246);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 30px 120px 40px 120px;
    height: 100vh;
    display: block;
    justify-content: center;
    align-items: flex-start;
}

#cart h1 {
    width: 100%;
    text-align: center;
    font-family: "Skranji";
    color: white;
    font-size: 20pt;
}
</style>