<script setup></script>

<template>
  <div class="container">
    <div class="content">
      <h2>
        Jing’s Magic Book เป็น Web Application เล็ก ๆ
        ที่มีการนำเอาความรู้ในรายวิชา INT203 Client-side Web Programming II
        มาใช้ในการจัดทำ ยังคิดบ่ออกเยยยยย
      </h2>
    </div>
  </div>
  <div>
    <a href="https://github.com/dknxsmph/sec-1-group-10-JingsMagicBook.git" target="_blank">
      <img class="logo-git" src="../assets/git-icon.png" />
    </a>
  </div>
</template>

<style scoped>
.container {
  width: 650px;
  position: relative;
  margin-bottom: 500px;
  margin-right: 200px;
  height: 10vh;
  display: flex;
  justify-content: center;
  font-family: 'Skranji';
  text-align: center;
  padding: 10px;
}

.content {
  position: relative;
  text-align: center;
  min-width: 80%;
  padding: 2em 0;
}

.logo {
  position: absolute;
  width: 10%;
  width: 10%;
  left: 2%;
  transition: all 1s ease-out;
}

.logo-git:hover {
  cursor: pointer;
  transform: scale(1.1);
  filter: drop-shadow(0 0 0.7rem rgba(255, 255, 255, 0.5));
}

.logo-git {
  width: 5%;
  position: absolute;
  right: 2%;
  bottom: 2%;
}
</style>
