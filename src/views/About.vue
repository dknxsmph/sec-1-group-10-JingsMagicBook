<script setup>
import AboutUs from '../components/AboutUs.vue'
</script>
 
<template>
  <div class="about">
    <h1 class="titel-about">About</h1>

    <div class="box">
      <div>
        <AboutUs class="content" />
      </div>
    </div>
  </div>
</template>
 
<style scoped>
h1{
  color: white;
  width: 100%;
  text-align: center;
  padding: 20px 0 0 0;
      font-family: "Skranji";
}
.box {
  background-color: rgb(255, 255, 255);
  opacity: 0.85;
  border-radius: 20px;
  background-size: cover;
  width: 50%;
  height: 50%;
  border: 10px solid black;
  margin: 0 auto;
  margin-top: 5%;
}

.about {
  background-image: url(../assets/background-img/bg-aboutUs.jpg);
  color: rgb(0, 0, 0);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px 120px 40px 120px;
  height: 100vh;
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