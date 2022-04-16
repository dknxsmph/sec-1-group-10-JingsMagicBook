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
  <div id="cart-list" class="container">
    <h1 style="color: black; padding-top: 20px">Your Cart</h1>
    <table style="width: 100%">
      <tr>
        <th>PRODUCT LIST</th>
        <th>DAY</th>
        <th>PRICE</th>
        <th>TOTAL</th>
      </tr>
      <tr v-for="(cartItem, index) in cartItems" :key="index">
        <td>
          <li>
            <span><b>book id : </b>{{ cartItem.id }} </span
            ><span><b>book name </b> : {{ cartItem.bName }}</span
            ><img :src="cartItem.bImg" />
          </li>
          <hr />
        </td>
        <td class="days">
          <div class="number-input">
            <button
              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
            ></button>
            <input
              class="quantity"
              min="0"
              name="quantity"
              value="7"
              type="number"
            />
            <button
              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
              class="plus"
            ></button>
          </div>
        </td>
        <td>
          {{ cartItem.bPrice }}
        </td>
        <td>asd</td>
        <td>
          <img
            @click="$emit('return-book', cartItem)"
            class="remove-icon"
            style="height: 60px; width: 60px"
            src="../assets/remove-icon.png"
            alt="remove icon "
          />
        </td>
      </tr>
    </table>

    <div class="summary">
      <h2>Order Summary</h2>
      <p>Subtotal</p>
      <p>Total</p>
      <button>CHECKOUT</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: 'Skranji', cursive;
  color: #000000;
}
.container img {
  display: flex;
  width: 20%;
  padding: 8px;
}
.remove-icon {
  cursor: pointer;
  display: flex;
  margin: right;
}
.container button {
}
.container li {
  list-style: none;
  display: grid;
}
.days button {
  font-family: 'Skranji', cursive;
  background-color: rgb(116, 119, 116);
  padding: 8px;
  border-radius: 10em;
}
.summary {
  font-family: 'Skranji', cursive;
  width: 40%;
  border-radius: 1em;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.69);
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}
.summary button {
  font-family: 'Skranji', cursive;
  background-color: green;
  padding: 8px;
  border-radius: 2em;
}
input[type='number'] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
.number-input {
  border: 0;
  display: inline-flex;
}
.number-input,
.number-input * {
  box-sizing: border-box;
}
.number-input button {
  outline: none;
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin: 0;
  position: relative;
  box-shadow: 0px 0px 1px #474747;
  border-radius: 80%;
}
.number-input button:before,
.number-input button:after {
  display: inline-block;
  position: absolute;
  content: '';
  width: 1rem;
  height: 2px;
  background-color: #212121;
  transform: translate(-50%, -50%);
}
.number-input button.plus:after {
  transform: translate(-50%, -50%) rotate(90deg);
}
.number-input input[type='number'] {
  font-family: 'Skranji', cursive;
  max-width: 30px;
  padding: 0.5rem;
  border: none;
  border-width: 0 2px;
  font-size: 1rem;
  height: 3rem;
  font-weight: bold;
  text-align: center;
  color: #000000;
}
</style>
