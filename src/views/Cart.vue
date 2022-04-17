<script setup>
import { useUser } from '../stores/user.js'
import { useBooks } from '../stores/books.js'
import CartList from '../components/CartList.vue'

const userStore = useUser()
const bookStore = useBooks()

const returnBook = async (book) => {
  const newUserData = userStore.user
  newUserData.uCart = newUserData.uCart.filter((itemId) => itemId !== book.id)
  try {
    const res = await fetch(
      `http://localhost:5000/users/${userStore.user.id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newUserData),
      }
    )

    if (res.status === 200) {
      const newBook = bookStore.findBook(book.id)
      newBook.bStatus = 'available'
      await fetch(`http://localhost:5000/books/${book.id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newBook),
      })
      await fetch(`http://localhost:5000/history/`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          username: userStore.user.uName,
          book: book.id,
          action: 'RETURN',
        })
      })
    }
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <div id="cart" v-if="userStore.user">
    <div>
      <h1>Cart</h1>
    </div>
    <div class="content-bg" v-if="userStore.getCartItems && userStore.getCartItems.length > 0">
      <CartList :cart-items="userStore.getCartItems" @return-book="returnBook" />
    </div>
    <div class="content-bg" v-else>
      <h3>No item(s) in your cart.</h3>
    </div>
  </div>
</template>

<style scoped>
.content-bg {
  margin-top: 40px;
  text-align: center;
  background-color: #c4c4c4;
  width: 100%;
  height: auto;
  opacity: 0.8;
}

#cart {
  background-image: url(../assets/background-img/bg-home.jpg);
  color: rgb(248, 246, 246);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px 120px 40px 120px;
  height: 100vh;
  display: block;
  justify-content: center;
  align-items: flex-start;
}

#cart h1 {
  width: 100%;
  text-align: center;
  font-family: 'Skranji';
  color: white;
  font-size: 20pt;
}
</style>
