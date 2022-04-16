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
    CookieUtil.set('userId', userData.id)
    router.push('/')
  }

  const logout = () => {
    user.value = null
    CookieUtil.unset('userId')
    router.push('/login')
  }

  const loadUser = async () => {
    if (CookieUtil.get('userId')) {
      try {
        const userId = CookieUtil.get('userId')
        const res = await fetch(`http://localhost:5000/users/${userId}`, {
          method: 'GET',
        })
        const data = await res.json()
        user.value = data;
      } catch (err) {
        console.log(err)
      }
    }
  }

  const isLoggedIn = computed(
    () => user.value != null || CookieUtil.get('userId') != null
  )

  console.log()
  return { user, login, logout, loadUser, isLoggedIn }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
}
