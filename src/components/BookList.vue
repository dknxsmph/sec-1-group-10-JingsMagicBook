<script setup>
defineProps({
  books: {
    type: Array,
    require: true,
  },
})

defineEmits(['add-to-cart'])

/***
 * To transform string if the legnth longer than max length, then relace them with hellips.
 * Ref: https://stackoverflow.com/questions/1199352/smart-way-to-truncate-long-strings
 */
const shouldBookNameTruncate = (bookName, maxLength) => {
  return bookName.length > maxLength
    ? `${bookName.substr(0, maxLength - 1)} \u2026`
    : bookName
}
</script>

<template>
  <div class="book-card" v-for="book in books" :key="book.id">
    <img class="book-card-img" :src="book.bImg" />
    <p class="book-card-name">{{ shouldBookNameTruncate(book.bName, 27) }}</p>
    <div class="book-btn-group">
      <div v-if="book.bStatus == 'available'">
        <button class="btn-add-to-cart" @click="$emit('add-to-cart', book)">
          ADD TO CART
        </button>
      </div>
      <div v-else>
        <button class="btn-add-to-cart">UNAVAILABLE</button>
      </div>
    </div>
  </div>
</template>

<style>
.book-card {
  width: 80%;
  border-radius: 1em;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.69);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.book-card-img {
  display: block;
  width: 100%;
  padding: 8px;
}

.book-card-name {
  font-family: 'Skranji', cursive;
  text-align: center;
  padding: 5px;
  margin: 8px 0;
}

.book-btn-group {
  text-align: center;
  margin: 10px 0;
}

.btn-add-to-cart {
  font-family: 'Itim', cursive;
  color: rgb(255, 255, 255);
  background: rgb(29, 11, 1);
  width: 100%;
  border-radius: 10px;
  padding: 6px 10px;
  transition: all 0.3s ease-out;
  margin-bottom: 5%;
}

.btn-add-to-cart:hover {
  cursor: pointer;
  transform: scale(1.1);
  filter: drop-shadow(0 0 0.7rem rgba(255, 255, 255, 0.5));
}
</style>
