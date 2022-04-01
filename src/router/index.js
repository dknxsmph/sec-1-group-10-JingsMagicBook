import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Users from '../views/Users.vue'
import Books from '../views/Books.vue'

const history = createWebHistory()
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/users_page',
    name: 'Users',
    component: Users
  },
  {
    path: '/books_list',
    name: 'Books',
    component: Books
  }
]
const router = createRouter({ routes, history })
export default router
