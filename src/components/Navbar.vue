<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import { useUser } from '../stores/user.js'
defineEmits(['searchBook'])
const searchInput = ref('')
const userStore = useUser()


const isScrolled = ref(false)
const handleScroll = (evt) => {
  isScrolled.value = (window.scrollY > 200)
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
    <ul class="navs">
      <li>
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }">About</router-link>
      </li>
      <li @click="$emit('searchBook', searchInput)">
        <input name="search" id="search" type="search" v-model="searchInput" />
      <img class="navbar-logo" src="../assets/search-icon.png" alt="search icon " />

      </li>
      <li class="iconify" data-icon="iconoir:cart-alt" data-inline="false"></li>
      <!-- NAV BAR USER IMAGE -->
      <img @click="userStore.logout" :src="userStore.user.uImg" alt="user image" style="width: 50px" />
      <!-- NAV BAR USER IMAGE -->
    </ul>
  </nav>
</template>
 
<style scoped>
#navbar {
  position: sticky;
  top: 0;
  width: 100%;
  background: #a3a1b9;
  font-family: "Skranji";
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 32px;
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

ul.navs {
  list-style: none;
  display: flex;
}

.navs li {
  margin: 0 10px;
  font-size: 16pt;
}

.navs li a {
  text-decoration: none;
  color: rgb(230, 230, 230);
  font-weight: bold;
  transition: all 0.3s ease-out;
}

.navs li a:hover {
  color: white;
}

.scrolled {
  padding: 8px 32px !important;
  opacity: 0.9;
}
</style>