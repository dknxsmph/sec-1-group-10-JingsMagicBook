<script setup>
defineProps({
  book: {
    type: Object,
    require: true,
  },
})
</script>

<template>
  <div class="book-card-body">
    <img class="book-card-img" :src="book.bImg" />
    <p class="book-card-name">{{ book.bName }}</p>
    <div class="book-btn-group">
      <button class="btn-add-to-cart">ADD TO CART</button>
    </div>
  </div>
</template>

<style>
.book-card-body {
  width: 25%;
  border-radius: 5%;
  background-color: rgba(255,255,255,0.69);
  margin: 1px;
}
.book-card-img {
  width: 100%;
  padding: 8px;
}
.book-card-name {
  font-family: 'Skranji', cursive;
  text-align: center;
}

.book-btn-group {
  text-align: center;
}

.btn-add-to-cart {
  outline: none;
  border: none;
  font-family: 'Itim', cursive;
  color: rgb(255, 255, 255);
  background: rgb(29, 11, 1);
  width: 50%;
  border-radius: 10px;
  padding: 5px;
  transition: all 0.3s ease-out;
  margin-bottom: 5%;
}
.btn-add-to-cart:hover {
  cursor: pointer;
  transform: scale(1.1);
  filter: drop-shadow(0 0 0.7rem rgba(255, 255, 255, 0.5));
}
</style>
