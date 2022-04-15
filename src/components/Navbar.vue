<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import { useUser } from '../stores/user.js'
import Dropdown from './Dropdown.vue';

defineEmits(['search-book'])
const userStore = useUser()


const isScrolled = ref(false)
const handleScroll = (evt) => {
  isScrolled.value = window.scrollY > 200
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

</script>

<template>

  <nav id="navbar" :class="isScrolled && 'scrolled'" v-if="userStore && userStore.user">
    <div class="navbar-banner">
      <img class="navbar-logo" src="../assets/icon.png" alt="Jing's Magic Book Logo" />
      <div class="navbar-title">Jing's Magic Book</div>
    </div>
    <ul class="navs-container">
      <li>
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }">About</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'History' }">History</router-link>
      </li>

      <li>
        <router-link :to="{ name: 'Cart' }">
          <img class="navbar-logo" style="height: 30px; width: 30px;" src="../assets/cart-icon.png" alt="cart icon " />
        </router-link>
      </li>
      <!-- NAV BAR USER IMAGE -->
    
  <!-- <img @click="userStore.logout" :src="userStore.user.uImg" alt="user image" style="width: 50px" /> -->
      <div class="dropdown">
  <img class="logo" :src="userStore.user.uImg" alt="user image" style="width: 50px" />
  <div class="dropdown-content">
    <h5>User ID : {{userStore.user.id}} </h5> 
    <h5>Name : {{userStore.user.uName}}</h5> 
    <h5>Count : {{userStore.user.uBalance}} Bath</h5> 
    <button class="button-logout" @click="userStore.logout">LOG OUT</button>
  </div>
</div>


      <!-- NAV BAR USER IMAGE -->
      <!-- NAV DROPDOWN -->
<Dropdown/>    



  <!-- NAV DROPDOWN -->

    </ul>

  </nav>
</template>

<style scoped>
#search {
  border-radius: 5px;
}
.button-logout{
  cursor: pointer;
  color: white;
  width: 100%;
  height: 30px;
  background-color: red;
}

.serachIcon-andIconUser {
  display: flex;
  gap: 10px;
}

.navs-container {
  display: flex;
  gap: 20px;
  list-style-type: none;
  font-size: 20px;
  align-items: center;
}

#navbar {
  position: sticky;
  top: 0;
  width: 100%;
  background: #a3a1b9;
  font-family: 'Skranji';
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 32px;
  transition: padding 0.3s ease-out;
}

.active-link {
  color: white !important;
}

.navbar-banner {
  display: flex;
  align-items: center;
}
.dropdown-content h5{
  border: 1px solid black;
}
.logo{
  cursor: pointer;
}
.navbar-logo {
  width: 45px;
}

.navbar-title {
  font-size: 16pt;
  margin: 0 25px;
  font-weight: bold;
}



.scrolled {
  padding: 8px 32px !important;
  opacity: 0.9;
}




.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  border-radius: 5px;
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  padding: 10px 0 0 0;
}


.dropdown-content a:hover {background-color: #f1f1f1;}
.dropdown:hover .dropdown-content {display: block;}

</style>


