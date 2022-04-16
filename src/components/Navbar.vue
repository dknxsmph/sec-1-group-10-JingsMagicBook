<script setup>
import { ref, onMounted } from 'vue'
import { useUser } from '../stores/user.js'

defineEmits(['search-book'])
const userStore = useUser()

const isScrolled = ref(false)
const handleScroll = (evt) => {
  isScrolled.value = window.scrollY > 200
}

const showUserDropdown = ref(false)
const toggleUserDropdown = () => {
  showUserDropdown.value = !showUserDropdown.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    id="navbar"
    :class="isScrolled && 'scrolled'"
    v-if="userStore && userStore.user"
  >
    <div class="navbar-banner">
      <router-link :to="{ path: '/' }">
        <img
          class="navbar-logo"
          src="../assets/icon.png"
          alt="Jing's Magic Book Logo"
        />
      </router-link>
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

      <!-- check if user is aj-jing -->
      <li>
        <router-link :to="{ name: 'Cart' }">
          <img
            class="navbar-logo"
            style="height: 30px; width: 30px"
            src="../assets/book-mark.png"
            alt="cart icon "
          />
        </router-link>
      </li>
      <!-- NAV BAR USER IMAGE -->
      <li>
        <img
          class="user-img"
          @click="toggleUserDropdown"
          :src="userStore.user.uImg"
          alt="user image"
          style="width: 50px"
        />
        <div
          class="dropdown"
          :class="showUserDropdown && 'fade-in'"
          v-show="showUserDropdown"
        >
          <div class="dropdown-content">
            <div class="user-info">
              <h5>User ID : {{ userStore.user.id }}</h5>
              <h5>Name : {{ userStore.user.uName }}</h5>
            </div>
            <button class="button-logout" @click="userStore.logout">
              LOG OUT
            </button>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
#search {
  border-radius: 5px;
}

.navs-container {
  display: flex;
  gap: 20px;
  list-style-type: none;
  font-size: 20px;
  align-items: center;
}

.navs-container li a {
  color: rgb(220, 220, 220);
  transition: 0.2s ease-out;
  text-decoration: none;
}

.navs-container li a:hover {
  color: white;
}

#navbar {
  position: sticky;
  top: 0;
  width: 100%;
  background: #2c285a;
  font-family: 'Skranji';
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 32px;
  transition: padding 0.3s ease-out;
}

.active-link {
  color: rgb(233, 200, 39) !important;
}

.navbar-banner {
  display: flex;
  align-items: center;
}

.user-img {
  cursor: pointer;
  transition: 0.3s ease;
}

.user-img:hover {
  transform: scale(1.1);
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
  align-items: center;
}
.button-logout {
  cursor: pointer;
  color: white;
  font-size: 17px;
  background-color: rgb(200, 0, 0);
  width: 100%;
  height: 30px;
  font-family: 'Skranji';
  transition: 0.2s ease;
}

.button-logout:hover {
  background-color: rgb(220, 0, 0);
}

.scrolled {
  padding: 2px 32px !important;
  opacity: 0.9;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  border-radius: 5px;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 200px;
  z-index: 1;
  padding: 1rem;
}

.user-info {
  line-height: 28px;
  margin-bottom: 10px;
}

.fade-in {
  -webkit-animation: fade-in 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
