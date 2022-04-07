<script setup>
import AboutUs from '../components/AboutUs.vue'
</script>
 
<template>
  <div id="about">
    <h1>About</h1>

    <div>
      <AboutUs />
    </div>
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
#about h1 {
  margin-bottom: 600px;
  padding: 50px 0;
  text-align: center;
  font-family: "Skranji";
  color: white;
  font-size: 20pt;
}
</style>