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
      <li>
        <p class="s">
          <input name="search" id="search" type="search" />
        </p>
      </li>
      <li class="iconify" data-icon="iconoir:cart-alt" data-inline="false"></li>
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
#search {
  -webkit-appearance: none;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  width: 24px;
  padding: 0 10px;
  height: 24px;
  font-size: 14px;
  color: #666;
  line-height: 24px;
  border: 0;
  border-radius: 50px;
  box-shadow: 0 0 0 1px rgba(110, 0, 200, 0.5),
    inset 0 2px 5px rgba(82, 0, 150, 0.3), 0 2px 0 rgba(255, 255, 255, 0.6);
  position: relative;
  z-index: 5;
  -webkit-transition: 0.3s ease;
  -moz-transition: 0.3s ease;
}

#search:focus {
  outline: none;
  width: 180px;
}

p.s {
  z-index: 4;
  position: relative;
  padding: 5px;
  line-height: 0;
  border-radius: 100px;
  background: #b78cdf;
  background-image: -webkit-linear-gradient(#e2dbff, #b78cdf);
  background-image: -moz-linear-gradient(#e2dbff, #b78cdf);
  display: inline-block;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6),
    0 2px 5px rgba(186, 121, 248, 0.5);
}

p.s:hover {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6),
    0 2px 3px 2px rgba(186, 121, 248, 0.5);
}

p.s:after {
  content: "";
  display: block;
  position: absolute;
  width: 5px;
  height: 20px;
  background: #b78cdf;
  bottom: -10px;
  right: -3px;
  border-radius: 0 0 5px 5px;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  box-shadow: inset 0 -1px 0 rgbA(255, 255, 255, 0.6),
    -2px 2px 2px rgba(95, 0, 150, 0.4);
}

p.s:hover:after {
  box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.6),
    -2px 2px 2px 1px rgba(186, 121, 248, 0.5);
}
</style>