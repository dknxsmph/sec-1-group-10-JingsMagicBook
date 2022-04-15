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
      <img @click="userStore.logout" :src="userStore.user.uImg" alt="user image" style="width: 50px" />
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
</style>


