import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import { useUser } from '../stores/user.js'

export const useBooks = defineStore('books', () => {
  const books = ref(null)

  const removeBook = async (bookId) => {
    const res = await fetch(`http://localhost:5000/books/${bookId}`, {
      method: 'DELETE',
    })
    if (res.status == 200) {
      books.value = await booksStore.fetchBooks()
      // alert('Book Id :' + bookId + ' removed')
    }
  }

  const borrowBook = async (book) => {
    const userStore = useUser()
    try {
      const cartUpdated = await userStore.addBookToCart(book.id)
      if (cartUpdated) {
        book.bStatus = 'unavailable'
        await fetch(`http://localhost:5000/books/${book.id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(book),
        })
        // alert('Book Id : ' + book.id + ' added to cart!')
        await fetch(`http://localhost:5000/history/`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            username: userStore.user,
            bookz: { bookId: book.id, bookImg: book.bImg },
            action: 'BORROW',
          }),
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  const addBook = async (bookName, bookDesc) => {
    const res = await fetch(`http://localhost:5000/books/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        bName: bookName,
        bDesc: bookDesc,
        bStatus: 'available',
        bImg: '../src/assets/books-img/8.png',
      }),
    })
    if (res.status == 201) {
      books.value = await booksStore.fetchBooks()
    }
  }

  const findBook = (bookId) => {
    return books.value != null && books.value.find((book) => book.id === bookId)
  }

  // Fetching and store fetched data to 'books' variable
  const fetchBooks = async () => {
    try {
      const res = await fetch('http://localhost:5000/books', { method: 'GET' })
      books.value = await res.json()
      return books.value
    } catch (err) {
      console.log(err)
    }
  }

  // Fetching books for first time that store has been defined
  fetchBooks()

  return { books, fetchBooks, findBook, removeBook, borrowBook, addBook }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBooks, import.meta.hot))
}
