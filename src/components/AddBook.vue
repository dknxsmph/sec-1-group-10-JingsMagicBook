<script setup>
import { ref } from 'vue';
import { useUser } from '../stores/user.js'
const userStore = useUser()


const bookName = ref('');
const bookDesc = ref('');

let showAddBook = ref(false)


const addBook = async () => {
  const res = await fetch(`http://localhost:5000/books/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      bName: bookName.value,
      bDesc: bookDesc.value,
      bStatus: 'available',
      bImg: '../src/assets/books-img/8.png'
    })
  })
  if (res.status == 201) {
    bookName.value = '';
    bookDesc.value = '';
    window.location.reload();

  }
}

</script>

<template>
  <div v-if="userStore.user">

    <li class="buttomAddBook-content" v-show="userStore.user.id == 203">
      <button @click="showAddBook = !showAddBook" id="btn-addBook">
        <p>Add Book</p>
      </button>
    </li>

    <div class="container">
      <!-- check if user is aj-jing -->
      <div class="modal" v-show="userStore.user.id == 203 && showAddBook">
        <label for="book-name">Book Name : </label>
        <input type="text" id="book-name" placeholder="book name" v-model="bookName">

        <label for="description">Description : </label>
        <input type="text" id="description" placeholder="description" v-model="bookDesc">

        <div class="content-submit">
          <button class="btn-submit" @click="addBook">Submit</button>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.buttomAddBook-content {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 2% 3% 0 0;
}

.container {
  width: 100%;
}

.content-submit {
  display: flex;
  justify-content: center;
  padding: 10px 0 5px 0;

}

.btn-submit {
  font-family: 'Skranji', cursive;
  background-color: green;
  padding: 8px;
  border-radius: 2em;
  width: 50%;
  cursor: pointer;
}

input[type="text"] {
  background-color: aliceblue;
  height: 30px;

}


.modal {
  font-family: 'Skranji', cursive;
  width: 40%;
  height: 100%;
  display: grid;
  border-radius: 1em;
  padding: 8px 8px 0 8px;
  background-color: rgba(255, 255, 255, 0.69);
  align-items: center;
  margin: 0 auto
}

#btn-addBook {
  width: 85px;
  height: 33px;
  border-radius: 15px;
  background-color: rgb(25, 161, 223);
}

p {
  font-size: 16px;
  font-family: 'Skranji', cursive;
}

#btn-addBook:hover {
  cursor: pointer;
  transform: scale(1.1);
  filter: drop-shadow(0 0 0.7rem rgba(255, 255, 255, 0.5));
}
</style>
