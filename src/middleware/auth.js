import { useAuthStore } from '@/stores/auth'

export async function requireAuth(to, from, next) {
  const authStore = useAuthStore()

  try {
    const { user, error } = await authStore.checkAuth()

    if (error || !user) {
      next({
        name: 'login',
        query: { redirect: to.fullPath },
      })
      return
    }

    next()
  } catch {
    next({
      name: 'login',
      query: { redirect: to.fullPath },
    })
  }
}
