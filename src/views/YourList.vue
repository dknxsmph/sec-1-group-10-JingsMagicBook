<script setup>
import { useUser } from '../stores/user.js'
import { useBooks } from '../stores/books.js'
import YourList from '../components/YourList.vue'

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
          username: userStore.user,
          bookz: { bookId: newBook.id, bookImg: newBook.bImg },
          action: 'RETURN',
        }),
      })
    }
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <div id="yourList" v-if="userStore.user">
    <div>
      <h1>Your List</h1>
    </div>
    <div class="content-bg" v-if="userStore.getCartItems && userStore.getCartItems.length > 0">
      <YourList :cart-items="userStore.getCartItems" @return-book="returnBook" />
    </div>
    <div class="content-bg" v-else>
      <h3>No item(s) in your list.</h3>
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
  font-family: 'Skranji';
  color:black;
}

#yourList {
  background-image: url(../assets/background-img/bg-home.jpg);
  color: rgb(248, 246, 246);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px 120px 40px 120px;
  display: block;
  justify-content: center;
  align-items: flex-start;
  background-position: center;
  min-height: 100vh;
}

#yourList h1 {
  width: 100%;
  text-align: center;
  font-family: 'Skranji';
  color: white;
  font-size: 20pt;
}
</style>
