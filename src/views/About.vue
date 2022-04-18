<script setup></script>

<template>
  <div id="about">
    <div class="about-container">
      <h1>About</h1>
      <div class="box">
        <p class="content">
          Jing’s Magic Book เป็น Web Application เล็ก ๆ
          ที่มีการนำเอาความรู้ในรายวิชา INT203 Client-side Web Programming II
          มาใช้ในการจัดทำเพื่อพัฒนาความรู้และความสามารถที่ได้รับในรายวิชา โดย
          Jing’s Magic Book คือระบบยืมหนังสือในรูปแบบออนไลน์
          ที่สามารถทำให้คุณยืมหนังสือหายากของเราไปอ่านได้ในรูปแบบของ E-Book
          ได้อย่างง่ายดาย เพียงแค่คลิกเลือกหนังสือที่คุณสนใจ
        </p>
      </div>
    </div>
    <div>
      <a
        href="https://github.com/dknxsmph/sec-1-group-10-JingsMagicBook.git"
        target="_blank"
      >
        <img class="logo-git" src="../assets/git-icon.png" />
      </a>
    </div>
  </div>
</template>

<style scoped>
#about {
  position: relative;
  background-image: url(../assets/background-img/bg-aboutUs.jpg);
  color: rgb(0, 0, 0);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100%;
  padding-top: 1in;
}

.box {
  background-color: rgb(255, 255, 255);
  opacity: 0.85;
  border-radius: 20px;
  width: 80%;
  border: 5px solid black;
  margin: 0 auto;
}

#about h1 {
  padding: 50px 0 50px 0;
  text-align: center;
  font-family: 'Skranji';
  color: white;
  font-size: 20pt;
}

.about-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 1080px;
  padding: 10px;
}

.content {
  text-align: justify;
  padding: 1em;
  font-size: 16pt;
  text-indent: 1in;
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  transition: all 0.3s ease-out;
}
</style>
