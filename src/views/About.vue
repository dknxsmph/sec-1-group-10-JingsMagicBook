<script setup>
import AboutUs from '../components/AboutUs.vue'
</script>
 
<template>
  <div id="about">
    <h2>About</h2>
    <AboutUs />
  </div>
</template>
 
<style scoped>
#about {
  background-image: url(../assets/background-img/bg-aboutUs.jpg);
  color: rgb(248, 246, 246);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px 120px 40px 120px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>