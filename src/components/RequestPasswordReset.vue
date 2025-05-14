<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="max-w-md w-full space-y-8 p-6 bg-white rounded-xl shadow-md">
      <div class="text-center">
        <h1 class="text-3xl font-bold font-syne text-gray-900">Reset Password</h1>
        <p class="mt-2 text-gray-600 font-urbanist">Enter your email to receive a reset link</p>
      </div>

      <form class="mt-8 space-y-6 text-urbanist" @submit.prevent="handleResetRequest">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-main focus:border-brand-main"
          />
        </div>

        <div>
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-main hover:bg-brand-main/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-main disabled:opacity-50"
          >
            <Icon v-if="isLoading" icon="eos-icons:loading" class="w-5 h-5 mr-2 animate-spin" />
            <span class="font-urbanist text-white">{{ isLoading ? 'Sending...' : 'Send Reset Link' }}</span>
          </button>
        </div>

        <div v-if="message" :class="['text-center text-sm', messageClass]">
          {{ message }}
        </div>
      </form>

      <div class="text-center mt-4">
        <router-link to="/login" class="text-brand-main hover:underline">
          Back to Login
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_APP_SUPABASE_KEY,
)

const email = ref('')
const isLoading = ref(false)
const message = ref('')
const messageClass = ref('')

const handleResetRequest = async () => {
  isLoading.value = true
  message.value = ''

  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email.value, {
      redirectTo: `${window.location.origin}/reset-password`,
    })

    if (error) throw error

    message.value = 'Password reset link sent to your email!'
    messageClass.value = 'text-green-600'
    email.value = ''
  } catch (error) {
    console.error('Reset request error:', error)
    message.value = error.message
    messageClass.value = 'text-red-600'
  } finally {
    isLoading.value = false
  }
}
</script>
