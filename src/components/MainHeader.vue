<template>
  <header>
    <div
      class="flex justify-between items-center px-8 py-8 w-[90%] h-16 bg-[#191919] rounded-3xl mx-auto mt-5 mb-5"
    >
      <div class="logo">
        <img src="../assets/imgs/logo-white (1).png" alt="sparkleklin logo" class="w-32" />
      </div>
      <!-- <div class="flex items-center font-urbanist font-semibold text-[16px] gap-8 text-brand-ash ">
        <div class="hover:text-brand-main">Home</div>
        <div class="hover:text-brand-main">About Us</div>
        <div class="hover:text-brand-main">Service</div>
        <div class="hover:text-brand-main">Specialist Cleaning</div>
        <div class="hover:text-brand-main">Gallery</div>
        <div class="hover:text-brand-main">Jobs</div>
        <div class="hover:text-brand-main">FAQs</div>
      </div> -->
      <nav class="flex items-center font-urbanist font-semibold text-[16px] gap-8 text-brand-ash">
        <div v-for="item in menuItems" 
             :key="item.name" 
             class="relative group">
          <router-link 
            v-if="!item.dropdown"
            :to="item.path"
            class="hover:text-brand-main transition-colors"
            :class="{ 'text-brand-main': isActive(item.path) }"
          >
            {{ item.name }}
          </router-link>

          <div v-else class="group cursor-default">
            <div class="hover:text-brand-main flex items-center gap-1">
              {{ item.name }}
              <ChevronDown class="w-4 h-4" />
            </div>
            <!-- Dropdown Menu -->
            <div class="invisible group-hover:visible absolute top-full left-0 mt-2 w-48 bg-[#191919] rounded-lg shadow-lg py-2">
              <router-link
                v-for="subItem in item.dropdown"
                :key="subItem.name"
                :to="subItem.path"
                class="block px-4 py-2 text-brand-ash hover:text-brand-main hover:bg-[#252525]"
                :class="{ 'text-brand-main': isActive(subItem.path) }"
              >
                {{ subItem.name }}
              </router-link>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <button class=" flex items-center justify-center rounded-3xl border border-brand-ash px-1 py-1 font-urbanist font-semibold text-[1.2em] text-brand-white gap-2">
          <span><ArrowUpRight
            class="text-brand-main bg-white w-9 h-9 rounded-full p-1.5"
          /> </span>
          <span class="text-brand-white pr-2">Contact Us</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowUpRight, ChevronDown } from 'lucide-vue-next'
import { useRoute } from 'vue-router'

const route = useRoute()
const isActive = (path) => {
  return route.path === path
}

const menuItems = ref([
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  {
    name: 'Service',
    path: '#',
    dropdown: [
      { name: 'Regular Cleaning', path: '/services/regular' },
      { name: 'Deep Cleaning', path: '/services/deep' },
      // Add more services
    ]
  },
  {
    name: 'Specialist Cleaning',
    path: '#',
    dropdown: [
      { name: 'Commercial', path: '/specialist/commercial' },
      { name: 'Residential', path: '/specialist/residential' },
      // Add more specialist services
    ]
  },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Jobs', path: '/jobs' },
  { name: 'FAQs', path: '/faqs' },
])
</script>

<style lang="scss" scoped></style>
