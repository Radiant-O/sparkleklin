<template>
  <section class="about relative min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 py-20">
    <!-- Content Container -->
    <div class="max-w-4xl mx-auto text-center text-white relative z-20 px-4 mb-16">
      <span class="bg-white/10 text-brand-main px-4 py-1 rounded-full text-sm font-urbanist">
        ABOUT US
      </span>
      <h2 class="font-syne text-5xl font-bold mt-6 mb-4">
        Trusted Home Cleaning<br />Experts Since 2025
      </h2>
      <p class="font-urbanist text-lg text-gray-200 max-w-2xl mx-auto">
        At Sparkleklin, we are dedicated to delivering top-notch home cleaning services, 
        ensuring your home is always spotless, comfortable, and inviting.
      </p>
    </div>

    <!-- Rotating Image Circle -->
    <div class="absolute inset-0 overflow-hidden">
      <div 
        class="relative w-full h-full"
        ref="circleContainer"
      >
        <div 
          v-for="(image, index) in rotatingImages" 
          :key="index"
          class="absolute rounded-xl overflow-hidden shadow-lg"
          :style="calculatePosition(index)"
        >
          <img 
            :src="image.src" 
            :alt="image.alt"
            class="w-62 h-86 object-cover transform hover:scale-110 opacity-100 transition-opacity duration-500"
            :style="imageOpacity(index)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const rotatingImages = ref([])
const circleContainer = ref(null)
// let animationFrame = null
let rotation = 0

// Image URLs array
const imageUrls = [
  'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161863/showroom_woylrb.png',
  'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161863/commerciall_kow4as.png',
  'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161864/officee_uqslu6.png',
  'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161863/office_cle_jpedsv.png',
  'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161863/supermarket_clea_kmmvhs.png',
  'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161864/educationall_rcxhfk.png',
  'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161864/officee_uqslu6.png',
  'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178800/woman-cleaning-ophthalmologist-s-office_gpmwwc.jpg',
]

// Initialize images
rotatingImages.value = imageUrls.map((url, index) => ({
  src: url,
  alt: `Cleaning Service ${index + 1}`
}))

const calculatePosition = (index) => {
  const totalImages = rotatingImages.value.length
  const radius = window.innerWidth < 768 ? 200 : 360 // Responsive radius
  const angle = (index / (totalImages - 1)) * Math.PI  + Math.PI / 2  + (rotation * Math.PI / 360)

  const x = Math.cos(angle) * radius + window.innerWidth / 2 - 360
  const y = Math.sin(angle) * radius + window.innerHeight / 2 - 360

  return {
    transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
    transition: 'transform 0.5s ease-out'
  }
}

const imageOpacity = (index) => {
  const totalImages = rotatingImages.value.length
  const mid = totalImages / 2
  // Fade out images that are farther from the center (midpoint)
  const diff = Math.abs(mid - index)
  const opacity = 1 - (diff / (mid * 1.5))
  return { opacity: opacity.toFixed(2) }
}

</script>

<style scoped>
.about {
  perspective: 1000px;
}

</style>
