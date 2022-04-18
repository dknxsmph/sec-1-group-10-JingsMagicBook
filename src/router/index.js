import { createRouter, createWebHistory } from 'vue-router'
import { useUser } from '../stores/user.js'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import NavbarComp from '../components/Navbar.vue'
import History from '../views/History.vue'
import YourList from '../views/YourList.vue'

const history = createWebHistory()
const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      NavbarComp,
      default: Home,
    },
    meta: { requiresAuth: true },
  },
  {
    path: '/about',
    name: 'About',
    components: {
      NavbarComp,
      default: About,
    },
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { hideForAuth: true },
  },
  {
    path: '/history',
    name: 'History',
    components: {
      NavbarComp,
      default: History,
    },
    meta: { requiresAuth: true },
  },

  {
    path: '/yourlist',
    name: 'YourList',
    components: {
      NavbarComp,
      default: YourList,
    },
    meta: { requiresAuth: true },
  },

  {
    path: '/:catchNotMatchPath(.*)',
    name: 'NotFound',
    component: NotFound,
  },
]
const router = createRouter({ routes, history, linkActiveClass: 'active-link' })

router.beforeEach((to, from, next) => {
  const userStore = useUser()

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const hideForAuth = to.matched.some((record) => record.meta.hideForAuth)

  if (requiresAuth && !userStore.isLoggedIn) {
    return next({ path: '/login' })
  } else if (hideForAuth && userStore.isLoggedIn) {
    return next({ path: '/' })
  }
  next()
})

export default router
