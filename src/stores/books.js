import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'

export const useBooks = defineStore('books', () => {
  const books = ref(null)

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

  return { books, fetchBooks, findBook }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBooks, import.meta.hot))
}
