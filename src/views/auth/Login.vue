<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const error = ref('')
const isLoading = ref(false)

onMounted(async () => {
  const { user } = await authStore.checkAuth()
  if (user) {
    router.push(route.query.redirect || '/admin')
  }
})

const handleLogin = async () => {
  if (!email.value || !password.value) {
    error.value = 'Please enter both email and password'
    return
  }

  isLoading.value = true
  error.value = ''

  try {
    const { error: loginError } = await authStore.login(email.value, password.value)
    if (loginError) throw new Error(loginError)

    const redirectPath = route.query.redirect || '/admin'
    router.push(redirectPath)
  } catch (err) {
    error.value = err.message || 'Invalid email or password'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="max-w-md w-full p-6 bg-white rounded-xl shadow-md">
      <h2 class="text-3xl font-syne font-bold text-center mb-6">Sparkleklin Admin Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="space-y-4 font-urbanist">
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input
              v-model="email"
              type="email"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Password</label>
            <input
              v-model="password"
              type="password"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-brand-main text-white text-center py-2 px-4 rounded-md hover:bg-brand-main/90"
          >
            <span class="text-white">{{ isLoading ? 'Logging in...' : 'Login' }}</span>
          </button>
        </div>
      </form>
      <div class="text-center mt-4">
        <router-link to="/forgot-password" class="text-brand-main hover:underline">
          Forgot Password?
        </router-link>
      </div>
    </div>
  </div>
</template>
