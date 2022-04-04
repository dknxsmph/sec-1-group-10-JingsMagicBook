<script setup>
import { ref, onMounted } from 'vue'
const isScrolled = ref(false)

const handleScroll = (evt) => {
  isScrolled.value = (window.scrollY > 200)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>
 
<template>
<nav id="navbar" :class="isScrolled && 'scrolled'">
  <div class="navbar-banner">
    <img class="navbar-logo" src="../assets/icon.png" alt="Jing's Magic Book Logo"/>
    <div class="navbar-title">Jing's Magic Book</div>
  </div>
  <ul class="navs">
    <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
    <li><router-link :to="{ name: 'About' }">About</router-link></li>
  </ul>
</nav>
</template>
 
<style scoped>
#navbar {
  position: sticky;
  top: 0;
  width: 100%;
  background: #CC9545;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 32px;
  transition: padding .3s ease-out;
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
  transition: all .3s ease-out;
}

.navs li a:hover {
  color: white;
}

.scrolled {
  padding: 8px 32px !important;
  opacity: 0.9;
}
</style>