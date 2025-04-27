<template>
  <header>
    <div
      class="flex justify-between items-center px-28 py-10 w-full h-16 bg-[#191919]"
    >
      <div class="logo cursor-pointer">
        <img src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745614935/Sparkleklin/logo_white_mix_ftx0rf.png" alt="sparkleklin logo" class="w-36" />
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
             class="relative group cursor-pointer">
          <router-link 
            v-if="!item.dropdown"
            :to="item.path"
            class="hover:text-brand-white transition-colors"
            :class="{ 'text-brand-main': isActive(item.path) }"
          >
            {{ item.name }}
          </router-link>

          <div v-else class="group cursor-pointer">
            <div class="hover:text-brand-white flex items-center gap-1">
              {{ item.name }}
              <ChevronDown class="w-4 h-4" />
            </div>
            <!-- Dropdown Menu -->
            <div class="invisible group-hover:visible absolute top-full left-0 mt-2 w-48 bg-[#191919] rounded-lg shadow-lg py-2">
              <router-link
                v-for="subItem in item.dropdown"
                :key="subItem.name"
                :to="subItem.path"
                class="block px-4 py-2 text-brand-ash hover:text-brand-white hover:bg-[#252525]"
                :class="{ 'text-brand-main': isActive(subItem.path) }"
              >
                {{ subItem.name }}
              </router-link>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <button class=" flex items-center justify-center rounded-3xl border border-brand-ash px-1 py-1 font-urbanist font-semibold text-[1.2em] text-brand-white gap-2 hover:bg-brand-main cursor-pointer">
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
      { name: 'Office Cleaning', path: '/services/regular' },
      { name: 'Commercial Cleaning', path: '/services/deep' },
      { name: 'Domestic Cleaning', path: '/services/deep' },
      { name: 'Supermarket & Shop Cleaning', path: '/services/deep' },
      { name: 'Education Centre Cleaning', path: '/services/deep' },
      { name: 'Car Showroom Cleaning', path: '/services/deep' },
      { name: 'Pubs, Clubs & Resturant Cleaning', path: '/services/deep' },
      { name: 'Sports / Leisure Centre Cleaning', path: '/services/deep' },
      { name: 'Hospital Cleaning', path: '/services/deep' },
      
    ]
  },
  {
    name: 'Specialist Cleaning',
    path: '#',
    dropdown: [
      { name: 'Contract Cleaning', path: '/specialist/commercial' },
      { name: 'Deep Cleaning', path: '/specialist/residential' },
      { name: 'After Builders Cleaning', path: '/specialist/residential' },
      { name: 'Spring Cleaning', path: '/specialist/residential' },
      { name: 'Event Cleaning', path: '/specialist/residential' },
      { name: 'Post & Pre Tenancy Cleaning', path: '/specialist/residential' },
      { name: 'Clearance & Decluttering Cleaning', path: '/specialist/residential' },
      
    ]
  },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Jobs', path: '/jobs' },
  { name: 'FAQs', path: '/faqs' },
])
</script>

<style lang="scss" scoped></style>
