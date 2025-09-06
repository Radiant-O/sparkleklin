<template>
  <section
    class="relative flex flex-col items-center justify-center min-h-screen bg-[#03194D] text-white overflow-hidden px-6 py-16"
  >
    <!-- Central content -->
    <div class="relative z-10 max-w-4xl text-center space-y-6">
      <div>
        <p class="uppercase tracking-wide font-semibold text-xs md:text-sm">About Us</p>
        <h1 class="text-2xl md:text-4xl font-bold mt-2">
          Trusted Home Cleaning Experts Since 2025
        </h1>
      </div>
      <p class="text-sm md:text-base leading-relaxed mx-auto max-w-2xl">
        At Sparklein, we are dedicated to delivering top-notch home cleaning services, ensuring your
        home is always spotless, comfortable, and inviting.
      </p>

      <button
        @click="onGetQuote"
        class="inline-block px-6 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors duration-300"
      >
        Get a Free Quote
      </button>
    </div>

    <!-- Large arc/circle in the background -->
    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-[#03194D] rounded-full -z-10"
    ></div>

    <!-- Arc of images (cleaners) above the headline -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 w-[650px] h-[350px] pointer-events-none"
    >
      <div class="relative w-full h-full">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="absolute w-24 h-36 md:w-28 md:h-40 overflow-hidden rounded-lg shadow-lg bg-white transform origin-bottom transition-transform duration-300 hover:scale-105 pointer-events-auto"
          :style="getImageStyle(index)"
        >
          <img :src="image.src" :alt="`Cleaner ${index + 1}`" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
/** * You can replace these placeholders with your real images.
 * * Make sure they have consistent aspect ratios. */
const images = ref([
  { src: 'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161864/educationall_rcxhfk.png' },
  { src: 'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161864/educationall_rcxhfk.png' },
  { src: 'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161864/educationall_rcxhfk.png' },
  { src: 'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161864/educationall_rcxhfk.png' },
  { src: 'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161864/educationall_rcxhfk.png' },
  { src: 'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161864/educationall_rcxhfk.png' },
  { src: 'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161864/educationall_rcxhfk.png' },
  { src: 'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161864/educationall_rcxhfk.png' },
])
/** * Dynamically computes the styles (translate coords) to place each image * on a smooth arc. You can tweak angleStart, angleEnd, and radius to * visually match your design more closely. */
function getImageStyle(index) {
  const total = images.value.length
  const angleStart = -70
  const angleEnd = 70
  const angleStep = (angleEnd - angleStart) / (total - 1)
  const radius = 270 // Current angle in degrees
  const angleDeg = angleStart + index * angleStep // Convert to radians
  const angleRad = (angleDeg * Math.PI) / 180
  // Compute displacement on the arc // We'll use the bottom of the container as the origin, so typical param:
  const x = radius * Math.sin(angleRad)
  const y = radius * (1 - Math.cos(angleRad))
  // Because our container is 650px wide, its horizontal center is ~325px
  // Also offset the items vertically so they appear above the text
  // The actual width of each card is ~96-112px, so adjust X offset accordingly
  const centerX = 325
  const offsetX = 50
  // half-ish of the width of the card
  const offsetY = 40
  // pulls items upward to look nicely placed return
  return { transform: `translate(${centerX + x - offsetX}px, ${y - offsetY}px)` }
} /** * You can implement your quote‐request functionality here. */

function onGetQuote() {
  alert('Requesting a free quote!')
}
</script>
<style scoped>
/* If needed, place component-specific CSS here. */ /* Tailwind is used for the main layout and styling. */
</style>
