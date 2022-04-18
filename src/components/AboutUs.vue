<script setup></script>

<template>
  <div class="container">
    <div class="content">
      <p>
        Jing’s Magic Book เป็น Web Application เล็ก ๆ
        ที่มีการนำเอาความรู้ในรายวิชา INT203 Client-side Web Programming II
        มาใช้ในการจัดทำเพื่อพัฒนาความรู้และความสามารถที่ได้รับในรายวิชา โดย
        Jing’s Magic Book คือระบบยืมหนังสือในรูปแบบออนไลน์
        ที่สามารถทำให้คุณยืมหนังสือหายากของเราไปอ่านได้ในรูปแบบของ E-Book
        ได้อย่างง่ายดาย เพียงแค่คลิกเลือกหนังสือที่คุณสนใจ
      </p>
    </div>
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
  padding: 2em 0 0 3em;
  font-size: 23px;
}

.logo {
  position: absolute;
  width: 10%;
  left: 2%;
  transition: all 1s ease-out;
}

.logo-git:hover {
  cursor: pointer;
  transform: scale(1.1);
  filter: drop-shadow(0 0 0.7rem rgba(255, 255, 255, 0.8));
}

.logo-git {
  width: 5%;
  position: absolute;
  right: 2%;
  bottom: 2%;
}
</style>
