import { createRouter, createWebHistory } from 'vue-router'
import { useUser } from '../stores/user.js'

import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue';
import NavbarComp from '../components/Navbar.vue'

const history = createWebHistory()
const routes = [{
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
        path: "/:catchNotMatchPath(.*)",
        name: "NotFound",
        component: NotFound,
    },

]
const router = createRouter({ routes, history })

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