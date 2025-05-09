<template>
  <header>
    <!-- Make header fixed to keep logo and hamburger visible -->
    <div
      class="fixed top-0 left-0 right-0 z-[60] flex justify-between items-center px-6 md:px-28 py-4 md:py-10 w-full h-16 bg-[#191919]"
    >
      <div class="logo cursor-pointer">
        <router-link to="/">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745614935/Sparkleklin/logo_white_mix_ftx0rf.png"
            alt="sparkleklin logo"
            class="w-28 md:w-40"
          />
        </router-link>
      </div>

      <!-- Desktop Navigation -->
      <nav
        class="hidden md:flex items-center font-urbanist font-semibold text-[16px] gap-8 text-brand-ash"
      >
        <div v-for="item in menuItems" :key="item.name" class="relative group cursor-pointer">
          <router-link
            v-if="!item.dropdown"
            :to="item.path"
            class="hover:text-brand-white transition-colors"
            :class="{ 'text-brand-main': isActive(item.path) }"
          >
            {{ item.name }}
          </router-link>

          <div v-else class="group cursor-pointer">
            <router-link
              :to="item.path"
              class="hover:text-brand-white flex items-center gap-1 pb-2"
              :class="{ 'text-brand-main': isActive(item.path) }"
            >
              {{ item.name }}
              <ChevronDown class="w-4 h-4" />
            </router-link>
            <!-- Dropdown Menu -->
            <!-- <div
              class="invisible group-hover:visible absolute top-full left-0 mt-2 w-48 bg-[#191919] rounded-lg shadow-lg py-2"
            >
              <router-link
                v-for="subItem in item.dropdown"
                :key="subItem.name"
                :to="subItem.path"
                class="block px-4 py-2 text-brand-ash hover:text-brand-white hover:bg-[#252525]"
                :class="{ 'text-brand-main': isActive(subItem.path) }"
              >
                {{ subItem.name }}
              </router-link>
            </div> -->
            <div
              class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute left-0 w-52 bg-[#191919] rounded-lg shadow-lg py-2 transition-all duration-300 ease-in-out"
              style="top: calc(100% - 8px)"
            >
              <div class="absolute -top-2 left-0 right-0 h-4 bg-transparent"></div>
              <router-link
                v-for="subItem in item.dropdown"
                :key="subItem.name"
                :to="subItem.path"
                class="block px-4 py-2 text-brand-ash hover:text-brand-white hover:bg-[#252525] transition-colors duration-200"
                :class="{ 'text-brand-main': isActive(subItem.path) }"
              >
                {{ subItem.name }}
              </router-link>
            </div>
          </div>
        </div>
      </nav>

      <!-- Desktop Contact Button -->
      <div class="hidden md:block">
        <router-link to="/contact-us">
          <button
            class="flex items-center justify-center rounded-3xl border border-brand-ash px-1 py-1 font-urbanist font-semibold text-[1.2em] text-brand-white gap-2 hover:bg-brand-main cursor-pointer"
          >
            <span>
              <ArrowUpRight class="text-brand-main bg-white w-9 h-9 rounded-full p-1.5" />
            </span>
            <span class="text-brand-white pr-2">Contact Us</span>
          </button>
        </router-link>
      </div>

      <!-- Update hamburger button color -->
      <button class="md:hidden text-white" @click="isMenuOpen = !isMenuOpen">
        <Icon :icon="isMenuOpen ? 'mdi:close' : 'mdi:menu'" class="w-8 h-8 text-white" />
      </button>
    </div>

    <!-- Update mobile menu to start below header -->
    <div v-show="isMenuOpen" class="fixed inset-0 z-50 bg-[#191919] md:hidden pt-16">
      <div class="flex flex-col h-full px-6 py-8 overflow-y-auto">
        <!-- Mobile Menu Items -->
        <div v-for="item in menuItems" :key="item.name" class="py-4 border-b border-brand-ash/20">
          <div v-if="!item.dropdown">
            <router-link
              :to="item.path"
              class="text-brand-ash text-xl font-urbanist hover:text-brand-white"
              :class="{ 'text-brand-main': isActive(item.path) }"
              @click="isMenuOpen = false"
            >
              {{ item.name }}
            </router-link>
          </div>

          <div v-else>
            <div
              class="flex justify-between items-center text-brand-ash text-xl font-urbanist"
              @click="toggleDropdown(item.name)"
            >
              {{ item.name }}
              <ChevronDown
                class="w-5 h-5 transition-transform duration-200"
                :class="{ 'rotate-180': openDropdowns.includes(item.name) }"
              />
            </div>

            <!-- Mobile Dropdown Items -->
            <div v-show="openDropdowns.includes(item.name)" class="pl-4 mt-2 space-y-2">
              <router-link
                v-for="subItem in item.dropdown"
                :key="subItem.name"
                :to="subItem.path"
                class="block py-2 text-brand-ash hover:text-brand-white text-lg"
                :class="{ 'text-brand-main': isActive(subItem.path) }"
                @click="isMenuOpen = false"
              >
                {{ subItem.name }}
              </router-link>
            </div>
          </div>
        </div>

        <!-- Mobile Contact Button -->
        <div class="mt-6">
          <router-link to="/contact-us">
            <button
              class="flex items-center w-fit justify-between rounded-3xl border border-brand-ash px-2 py-2 font-urbanist font-semibold text-[1.2em] text-brand-white gap-2 hover:bg-brand-main cursor-pointer"
            >
              <span>
                <ArrowUpRight class="text-brand-main bg-white w-9 h-9 rounded-full p-1.5" />
              </span>
              <span class="text-brand-white pr-2">Contact Us</span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { ArrowUpRight, ChevronDown } from 'lucide-vue-next'
import { Icon } from '@iconify/vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)
const openDropdowns = ref([])

const isActive = (path) => {
  return route.path === path
}

const toggleDropdown = (name) => {
  const index = openDropdowns.value.indexOf(name)
  if (index === -1) {
    openDropdowns.value.push(name)
  } else {
    openDropdowns.value.splice(index, 1)
  }
}

const menuItems = ref([
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/aboutus' },
  {
    name: 'Service',
    path: '/services',
    dropdown: [
      { name: 'Office Cleaning', path: '/services/offices' },
      { name: 'Commercial Cleaning', path: '/services/commercial' },
      { name: 'Domestic Cleaning', path: '/services/domestic' },
      { name: 'Supermarket & Shop Cleaning', path: '/services/shopping-mall' },
      { name: 'Education Centre Cleaning', path: '/services/education-centres' },
      { name: 'Car Showroom Cleaning', path: '/services/car-showroom' },
      { name: 'Pubs, Clubs & Resturant Cleaning', path: '/services/resturant' },
      { name: 'Sports / Leisure Centre Cleaning', path: '/services/sport' },
      { name: 'Hospital Cleaning', path: '/services/hospital' },
    ],
  },
  {
    name: 'Specialist Cleaning',
    path: '#',
    dropdown: [
      { name: 'Contract Cleaning', path: '/special-cleaning/contract' },
      { name: 'Deep Cleaning', path: '/special-cleaning/deep' },
      { name: 'After Builders Cleaning', path: '/special-cleaning/after-building' },
      { name: 'Spring Cleaning', path: '/special-cleaning/spring' },
      { name: 'Event Cleaning', path: '/special-cleaning/event-or-party' },
      { name: 'Post & Pre Tenancy Cleaning', path: '/special-cleaning/tenancycleaning' },
      { name: 'Clearance & Decluttering Cleaning', path: '/special-cleaning/decluttercleaning' },
    ],
  },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Jobs', path: '/jobs' },
  { name: 'FAQs', path: '/faqs' },
])

watch(route, () => {
  isMenuOpen.value = false
})
</script>

<style scoped>
:deep(body) {
  @apply overflow-hidden;
}
</style>
