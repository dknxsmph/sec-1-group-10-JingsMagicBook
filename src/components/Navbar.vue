<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import { useUser } from '../stores/user.js'
const isScrolled = ref(false)
let userImg = ref('')
const handleScroll = (evt) => {
  isScrolled.value = (window.scrollY > 200)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// loadUser() onBeforeMount
onBeforeMount(async () => {
  await useUser().loadUser();
  userImg.value = useUser().user.uImg;
})
//

</script>
 
<template>
  <nav id="navbar" :class="isScrolled && 'scrolled'">
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
      <!-- NAV BAR USER IMAGE -->
      <img @click="useUser().logout()" :src="userImg" alt="user image" style="width: 50px" />
      <!-- NAV BAR USER IMAGE -->
    </ul>
  </nav>
</template>
 
<style scoped>
#navbar {
  position: sticky;
  top: 0;
  width: 100%;
  background: #cc9545;

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