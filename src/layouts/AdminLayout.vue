<template>
  <div class="h-screen flex overflow-hidden">
    <div class="bg-[#191919] fixed left-0 h-screen w-[17%]">
      <nav class="flex flex-col font-urbanist text-[15px] pt-6 gap-8 text-brand-ash h-full">
        <div class="logo cursor-pointer mx-auto pb-[10%]">
          <router-link to="/admin">
            <img
              src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757160964/logo_white_mix_ehbdku.png"
              alt="sparkleklin logo"
              class="w-28 md:w-40"
            />
          </router-link>
        </div>

        <div v-for="item in menuItems" :key="item.name" class="group cursor-pointer pl-[20%]">
          <router-link
            v-if="!item.dropdown"
            :to="item.path"
            class="hover:text-brand-white font-md flex items-center gap-2 pb-2 transition-colors"
            :class="{ 'text-brand-main': isActive(item.path) }"
          >
            <Icon v-if="item.icon" :icon="item.icon" class="w-6 h-6" />
            <span>{{ item.name }}</span>
          </router-link>
        </div>

        <div class="pl-[20%] group cursor-pointer text-red-500">
          <p
            @click="handleLogout"
            :disabled="isLoading"
            class="hover:text-brand-white font-md flex items-center gap-2 pb-2 transition-colors"
          >
            <Icon
              :icon="isLoading ? 'eos-icons:loading' : 'solar:logout-2-outline'"
              class="w-6 h-6"
              :class="{ 'animate-spin': isLoading }"
            />
            <span>{{ isLoading ? 'Logging out...' : 'Logout' }}</span>
          </p>
        </div>
      </nav>
    </div>
    <!-- <h1>Hello world!!!!</h1> -->
    <div class="flex-1 ml-[17%] overflow-y-auto">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { useRoute, useRouter } from 'vue-router'
import { createClient } from '@supabase/supabase-js'

const router = useRouter()
const route = useRoute()
const isMenuOpen = ref(false)
const isLoading = ref(false)

const supabase = createClient(
  'https://qjhwzwiymibswvxonemf.supabase.co',
  import.meta.env.VITE_APP_SUPABASE_KEY,
)

const isActive = (path) => {
  return route.path === path
}

const handleLogout = async () => {
  try {
    isLoading.value = true
    const { error } = await supabase.auth.signOut()
    if (error) throw error

    // Clear any stored auth data
    localStorage.removeItem('user')

    // Redirect to login page
    router.push('/login')
  } catch (error) {
    console.error('Error logging out:', error.message)
  } finally {
    isLoading.value = false
  }
}

const menuItems = ref([
  { name: 'Dashboard', path: '/admin', icon: 'mage:dashboard' },
  // { name: 'Quotes', path: '/aboutus', icon: 'iconamoon:invoice' },
  // { name: 'Job Application', path: '/gallery', icon: 'basil:bag-outline' },
  // { name: 'Staffs', path: '/jobs', icon: 'gravity-ui:person-worker' },
  // { name: 'Customers', path: '/faqs', icon: 'ix:customer' },
])

watch(route, () => {
  isMenuOpen.value = false
})
</script>
