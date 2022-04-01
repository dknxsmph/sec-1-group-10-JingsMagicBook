import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { CookieUtil } from '../utils/CookieUtil.js'

export const useUser = defineStore('user', () => {
  const router = useRouter()
  const user = ref(null)

  const login = (userData) => {
    if (!userData) {
      return
    }

    user.value = userData
    CookieUtil.set('username', userData.uName)
    router.push('/')
  }

  const logout = () => {
    user.value = null
    CookieUtil.unset('username')
    router.push('/login')
  }

  const loadUser = async () => {
    if (CookieUtil.get('username')) {
      try {
        const username = CookieUtil.get('username')
        const res = await fetch(
          `http://localhost:5000/users?uName=${username}`,
          { method: 'GET' }
        )
        const data = await res.json()
        user.value = data[0]
      } catch (err) {
        console.log(err)
      }
    }
  }

  const isLoggedIn = computed(
    () => user.value != null || CookieUtil.get('username') != null
  )

  return { user, login, logout, loadUser, isLoggedIn }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
}
