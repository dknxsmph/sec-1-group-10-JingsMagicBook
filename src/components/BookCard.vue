<script setup>
defineProps({
  books: {
    type: Object,
    require: true,
  },
})
</script>

<template>
  <div>
    <h1 id="H1">BOOKS FOR RENT</h1>
    <ul>
      <li class="BookBox" v-for="(book, index) in books" :key="index">
        <div class="BookCard">
            <img class="book_img" :src="book.bImg" />
            <br>
                <p class="book_name">{{ book.bName }}</p>
            <div class="addToCardBox">
                <p class="addToCartBtn">ADD TO CART</p>
            </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
#H1{
    text-align: center;
    font-family: 'Skranji', cursive;
}
.BookBox{
    display: flex;
    justify-content: space-around;
}
.BookCard{
    width:25%
}
.book_img{
    width: 100%;
    padding: 8px;
}
.book_name{
    font-family: 'Skranji', cursive;
    text-align: center;
}
.addToCartBtn{
    text-align: center;
    font-family: 'Itim', cursive;
    color: rgb(255, 255, 255);
}
.addToCardBox{
    background: rgb(29, 11, 1);
    margin: auto;
    width: 50%;
    border-radius: 10px;
    padding: 5px;
    transition: all 0.3s ease-out;
}
.addToCardBox:hover {
  cursor: pointer;
  transform: scale(1.1);
  filter: drop-shadow(0 0 0.7rem rgba(255, 255, 255, 0.5));
}
</style>
