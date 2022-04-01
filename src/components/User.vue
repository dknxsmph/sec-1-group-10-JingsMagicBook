<script setup>
defineProps({
  user: {
    type: Object,
    require: true,
  },
})
</script>

<template>
  <div class="user-box">
    <img
      class="profile-img"
      :src="user.uImg"
      :alt="`${user.uName}'s Profile image`"
    />
    <h3>{{ user.uName }}</h3>
  </div>
</template>

<style scoped>
.user-box {
  width: 60%;
  padding: 8px;
  transition: all 0.3s ease-out;
}
.user-box:hover {
  cursor: pointer;
  transform: scale(1.1);
  filter: drop-shadow(0 0 0.7rem rgba(255, 255, 255, 0.5));
}

.user-box:active {
  transform: scale(1);
}

img.profile-img {
  width: 100%;
}
.user-box > h3 {
  letter-spacing: 2px;
  font-family: 'Skranji', cursive;
}
</style>
