<script setup>
import AboutUs from '../components/AboutUs.vue'
</script>
 
<template>
  <div id="about">
    <h1>About</h1>

    <div class="box">
      <div class="container-content">
        <AboutUs class="content" />
      </div>
    </div>
  </div>
</template>
 
<style scoped>
.container-content{
  display: grid;
  align-content: center;
  padding-left: 30px;
}
.box{
  background-color: rgb(255, 255, 255);
  opacity: 0.7;
  border-radius: 20px;
  background-size: cover;
  width: 50%;
  height: 50%;
}
#about {
  background-image: url(../assets/background-img/bg-aboutUs.jpg);
  color: rgb(0, 0, 0);
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
  padding: 50px 0 50px 0;
  text-align: center;
  font-family: "Skranji";
  color: white;
  font-size: 20pt;
}
</style>