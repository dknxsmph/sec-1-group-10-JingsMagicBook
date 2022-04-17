<script setup>
defineProps({
  cartItems: {
    type: Array,
    required: true,
  },
})
defineEmits(['return-book'])
</script>

<template>
  <div class="container">
    <h1 style="color: black; padding-top: 20px">Your Books</h1>
    <table style="width: 100%">
      <tr>
        <th>BOOK</th>
        <th>RETURN</th>
      </tr>
      <tr v-for="(cartItem, index) in cartItems" :key="index">
        <td>
          <li>
            <th>
              <img class="book-img" :src="cartItem.bImg" style="width: 100%" />
            </th>
            <th>
              <span class="book-id"><b>book id : </b>{{ cartItem.id }} </span>
            </th>
            <th>
              <span class="book-name"
                ><b>book name </b> : {{ cartItem.bName }}</span
              >
            </th>
          </li>
          <hr />
        </td>
        <td class="return-icon">
          <img
            @click="$emit('return-book', cartItem)"
            class="remove-icon"
            style="height: 60px; width: 60px"
            src="../assets/return-icon.png"
            alt="remove icon "
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
table {
  /* border-bottom: 2px solid black; */
}
th {
  /* border: 2px solid black; */
}
.book-img {
  grid-area: 1/1;
}
.book-name {
  grid-area: 2/2;
}
.boo-id {
  grid-area: 1/2;
}
.container {
  font-family: 'Skranji', cursive;
  color: #000000;
  border-radius: 50%;
}

.container img {
  width: 20%;
  padding: 8px;
}

.return-icon {
  /* border: 2px solid black; */
}

.container li {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
}
</style>
