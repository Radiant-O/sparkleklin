<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="max-w-md w-full space-y-8 p-6 bg-white rounded-xl shadow-md">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-gray-900">Set New Password</h2>
          <p class="mt-2 text-gray-600">Enter your new password below</p>
        </div>
  
        <form class="mt-8 space-y-6" @submit.prevent="handlePasswordReset">
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">New Password</label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              minlength="6"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-main focus:border-brand-main"
            />
          </div>
  
          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              required
              minlength="6"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-main focus:border-brand-main"
            />
          </div>
  
          <div>
            <button
              type="submit"
              :disabled="isLoading || password !== confirmPassword"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-main hover:bg-brand-main/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-main disabled:opacity-50"
            >
              <Icon v-if="isLoading" icon="eos-icons:loading" class="w-5 h-5 mr-2 animate-spin" />
              {{ isLoading ? 'Updating...' : 'Update Password' }}
            </button>
          </div>
  
          <div v-if="message" :class="['text-center text-sm', messageClass]">
            {{ message }}
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Icon } from '@iconify/vue'
  import { useRouter } from 'vue-router'
  import { createClient } from '@supabase/supabase-js'
  
  const router = useRouter()
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_APP_SUPABASE_KEY
  )
  
  const password = ref('')
  const confirmPassword = ref('')
  const isLoading = ref(false)
  const message = ref('')
  const messageClass = ref('')
  
  const handlePasswordReset = async () => {
    if (password.value !== confirmPassword.value) {
      message.value = 'Passwords do not match'
      messageClass.value = 'text-red-600'
      return
    }
  
    isLoading.value = true
    message.value = ''
  
    try {
      const { error } = await supabase.auth.updateUser({
        password: password.value
      })
  
      if (error) throw error
  
      message.value = 'Password updated successfully!'
      messageClass.value = 'text-green-600'
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push('/login')
      }, 2000)
    } catch (error) {
      console.error('Password reset error:', error)
      message.value = error.message
      messageClass.value = 'text-red-600'
    } finally {
      isLoading.value = false
    }
  }
  </script>