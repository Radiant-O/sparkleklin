import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null,
    authError: null,
  }),

  actions: {
    async login(email, password) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) {
          console.error('Auth error:', error.message)
          throw error
        }

        if (!data?.user) {
          throw new Error('No user data returned')
        }

        this.isAuthenticated = true
        this.user = data.user
        this.authError = null

        return { user: data.user, error: null }
      } catch (error) {
        this.authError = error.message
        this.isAuthenticated = false
        this.user = null
        return { user: null, error: error.message }
      }
    },

    async logout() {
      try {
        const { error } = await supabase.auth.signOut()
        if (error) throw error

        this.isAuthenticated = false
        this.user = null
        this.authError = null
        return { error: null }
      } catch (error) {
        return { error: error.message }
      }
    },

    async checkAuth() {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession()

        if (error) throw error

        if (session?.user) {
          this.isAuthenticated = true
          this.user = session.user
        }

        return { user: session?.user || null, error: null }
      } catch (error) {
        return { user: null, error: error.message }
      }
    },
  },
})
