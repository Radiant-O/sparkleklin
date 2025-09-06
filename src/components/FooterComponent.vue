<template>
  <div class="md:mx-20 pt-20 bg-white">
    <!-- CTA Section -->
    <div class="bg-brand-main w-[90%] mx-auto rounded-3xl py-10 md:py-25 text-center">
      <p class="text-white font-syne font-bold text-2xl md:text-5xl w-[90%] md:w-[60%] mx-auto">
        {{ ctaTitle }}
      </p>
      <div
        class="text-white/80 font-urbanist px-3 md:px-0 text-md md:text-lg font-light -mt-4 md:-mt-8"
      >
        {{ ctaDescription }}
      </div>
      <p class="text-white/80 font-urbanist px-3 md:px-0 text-md md:text-lg pt-2 font-light">
        {{ ctaSubtext }}
      </p>
      <div class="flex items-center justify-center mt-10">
        <ButtonComponentBlack
          buttonText="Get a Free Quote"
          width="auto"
          height="auto"
          fontSize="1.2em"
          showIcon
          customClass="flex items-center justify-center rounded-3xl px-1 py-1 font-urbanist font-semibold gap-2 bg-white cursor-pointer text-brand-white"
          textCustomClass="text-black"
        />
      </div>
    </div>

    <!-- Footer Content -->
    <div
      class="bg-black w-[100%] mx-auto rounded-3xl mt-25 px-5 md:px-20 pt-10 md:pt-20 pb-20 text-white"
    >
      <div class="flex md:flex-row flex-col justify-between items-start">
        <!-- Logo and Description -->
        <div class="md:w-[35%]">
          <img :src="logo" alt="Sparkleklin Logo" class="w-38 pb-5" />
          <p class="font-urbanist text-md text-justify font-normal text-brand-ash leading-5">
            {{ description }}
          </p>
        </div>

        <!-- Links Section -->
        <div class="md:w-[60%]">
          <div class="flex flex-col md:flex-row justify-center gap-20">
            <!-- Services -->
            <div class="flex flex-col gap-3 text-brand-ash font-urbanist">
              <p class="text-white text-lg font-semibold font-syne">Services</p>
              <router-link
                v-for="service in services"
                :key="service.path"
                :to="service.path"
                class="hover:text-brand-main transition-colors duration-300"
              >
                {{ service.name }}
              </router-link>
            </div>

            <!-- Useful Links -->
            <div class="flex flex-col gap-3 text-brand-ash font-urbanist">
              <p class="text-white text-lg font-semibold font-syne">Useful Links</p>
              <router-link
                v-for="link in usefulLinks"
                :key="link.path"
                :to="link.path"
                class="hover:text-brand-main transition-colors duration-300"
              >
                {{ link.name }}
              </router-link>
            </div>

            <!-- Contact Info -->
            <div class="flex flex-col gap-3 text-brand-ash font-urbanist">
              <p class="text-white text-lg font-semibold font-syne">Contact</p>
              <a
                v-for="contact in contactInfo"
                :key="contact.value"
                :href="contact.link"
                class="hover:text-brand-main transition-colors duration-300"
              >
                {{ contact.value }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Social Media and Copyright -->
      <div class="md:-mt-5 mt-10">
        <div class="flex gap-5">
          <a
            v-for="social in socialMedia"
            :key="social.name"
            :href="social.link"
            target="_blank"
            rel="noopener noreferrer"
            class="border rounded-full p-2 text-brand-ash border-brand-ash hover:text-brand-main hover:border-brand-main transition-colors duration-300"
          >
            <Icon :icon="social.icon" width="24" height="24" />
          </a>
        </div>
        <div class="text-brand-ash font-urbanist mt-10 md:mt-15">
          © {{ new Date().getFullYear() }} Copyright by Sparkleklin Inc.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import ButtonComponentBlack from './ButtonComponentBlack.vue'

// Define props for component customization
defineProps({
  logo: {
    type: String,
    default:
      'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757160964/logo_white_mix_ehbdku.png',
  },
  description: {
    type: String,
    default:
      "Experience the difference with Sparkleklin's professional home cleaning services. From top to bottom, we ensure every corner of your home/office sparkles with cleanliness and care.",
  },
  ctaTitle: {
    type: String,
    default: 'Book Our Professional Home Cleaning Services Today',
  },
  ctaDescription: {
    type: String,
    default: 'Experience the Sparkleklin difference with our top-notch home cleaning services',
  },
  ctaSubtext: {
    type: String,
    default: 'Schedule your first cleaning appointment now and enjoy a spotless home.',
  },
})

// Navigation and contact data
const services = [
  { name: 'Commercial Cleaning', path: '/services/commercial' },
  { name: 'Domestic Cleaning', path: '/services/domestic' },
  { name: 'Clearance Cleaning', path: '/special-cleaning/decluttercleaning' },
  { name: 'Spring Cleaning', path: '/special-cleaning/spring' },
  { name: 'Pre & Post Tenancy Cleaning', path: '/special-cleaning/tenancycleaning' },
]

const usefulLinks = [
  { name: 'About Us', path: '/aboutus' },
  { name: 'Career', path: '/jobs' },
  { name: 'Why Choose Us?', path: '/faqs' },
  { name: 'Terms & Conditions', path: '/terms' },
  { name: 'Privacy Policy', path: '/privacy' },
]

const contactInfo = [
  { value: '+447351357925', link: 'tel:+447351357925' },
  { value: 'admin@sparkleklin.co.uk', link: 'mailto:admin@sparkleklin.co.uk' },
  { value: 'contact@sparkleklin.co.uk', link: 'mailto:contact@sparkleklin.co.uk' },
]

const socialMedia = [
  { name: 'Twitter', icon: 'proicons:x-twitter', link: 'https://x.com/sparklekli57710?s=21' },
  {
    name: 'Instagram',
    icon: 'mdi:instagram',
    link: 'https://www.instagram.com/sparkleklin?igsh=OThwcjl1dG0zazFr&utm_source=qr',
  },
  {
    name: 'Tiktok',
    icon: 'ic:outline-tiktok',
    link: 'https://www.tiktok.com/@sparkleklin?_t=ZN-8vff1WNWVUc&_r=1',
  },
]
</script>

<style scoped>
.footer a {
  @apply transition-all duration-300;
}
</style>
