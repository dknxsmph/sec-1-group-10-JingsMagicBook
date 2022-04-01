<script setup>
import { onBeforeMount, ref } from 'vue'
import User from '../components/User.vue'

const users = ref([])

const getUsers = async () => {
  try {
    const res = await fetch('http://localhost:5000/users', { method: 'GET' })
    return await res.json()
    
  } catch (err) {
    console.log(err)
  }
}

onBeforeMount(async () => {
  const usr = await getUsers()
  users.value = usr.users
})
</script>
 
<template>
<div id="login">
    <div class="container login-content">
        <div class="login-header">
            <img class="icon-login" src="../../public/icon.ico" alt="icon">
            <h1 class="title">JING'S MAGIC BOOK</h1>
            <h3 class="discription">Who's renting</h3>
        </div>

        <div class="box-user">
            <User v-for="user in users" :key="user.uId" :user="user"/>
        </div>
    </div>
</div>
</template>
 
<style scoped>
#login {
    background-image: url(../assets/background-img/bg-login.jpg);
    color: white;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 30px 120px 40px 120px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box-user {
    display: grid;
    text-align: center;
    grid-template-columns: repeat(3, auto);
    justify-items: center;
}


.login-content {
    text-align: center;
}

.login-header {
    position: relative;
    height: 100%;
    padding: 60px 0;
    font-family: 'Skranji', cursive;
}

.icon-login {
    position: absolute;
    bottom: 10%;
    left: 8%;
    transform: rotate(-10deg);
    width: 152px;
    filter: drop-shadow(0 0 2rem rgba(255, 255, 255, 0.25));
}

.login-header h1 {
    margin-bottom: 25px;
    font-size: 40px;
    font-weight: bold;
}

.login-header h3 {
    font-size: 24px;
    letter-spacing: 2px;
    font-weight: lighter;
}
</style>