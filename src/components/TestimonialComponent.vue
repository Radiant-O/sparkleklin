<template>
  <section class="testimonial">
    <div class="px-20 pt-[7%] pb-20 bg-brand-ash/5">
      <!-- Header -->
      <div class="flex justify-center w-full gap-20 mb-12">
        <h2 class="font-syne font-semibold text-4xl w-[30%]">
          {{ title }}
        </h2>
        <p class="font-urbanist text-lg font-normal text-brand-ash w-[40%] text-justify">
          {{ description }}
        </p>
      </div>

      <!-- Testimonials Slider -->
      <div class="overflow-hidden">
        <div
          ref="scrollContainer"
          class="flex gap-8 transition-transform duration-500 ease-linear"
          :style="{ transform: `translateX(-${scrollPosition}px)` }"
        >
          <div
            v-for="testimonial in duplicatedTestimonials"
            :key="`${testimonial.id}-${testimonial.name}`"
            class="min-w-[500px]"
          >
            <div class="bg-white rounded-2xl shadow-lg p-8 h-full">
              <img
                :src="testimonial.image"
                :alt="testimonial.name"
                class="w-16 h-16 rounded-full object-cover mb-4"
              />

              <!-- Rating Stars -->
              <div class="flex items-center mb-4">
                <Icon
                  v-for="star in 5"
                  :key="star"
                  icon="material-symbols:star"
                  width="28"
                  height="28"
                  class="text-brand-main"
                />
              </div>

              <!-- Testimonial Text -->
              <p class="text-justify font-urbanist text-md text-brand-ash mb-6">
                "{{ testimonial.comment }}"
              </p>

              <!-- Author Info -->
              <div>
                <p class="font-semibold font-urbanist text-lg">{{ testimonial.name }}</p>
                <p class="font-urbanist text-md text-brand-ash -mt-1">{{ testimonial.position }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Trusted by Brands, Loved by Clients',
  },
  description: {
    type: String,
    default:
      'Sparkleklin cleaning will provide you with a reliable, value for money professional cleaning service for your business.',
  },
  testimonials: {
    type: Array,
    required: true,
  },
})

const scrollContainer = ref(null)
const scrollPosition = ref(0)
let animationId = null

// Duplicate testimonials to create infinite scroll effect
const duplicatedTestimonials = computed(() => [
  ...props.testimonials,
  ...props.testimonials,
  ...props.testimonials,
  ...props.testimonials,
  ...props.testimonials
 
])

const animate = () => {
  scrollPosition.value += 0.8 // Adjust speed by changing this value

  // Reset position when reaching the end of first set
  if (scrollPosition.value >= props.testimonials.length * 408) {
    // 400px width + 8px gap
    scrollPosition.value = 0
  }

  animationId = requestAnimationFrame(animate)
}

// Pause animation on hover
const handleMouseEnter = () => {
  if (animationId) {
    cancelAnimationFrame(animationId)
    animationId = null
  }
}

// Resume animation on mouse leave
const handleMouseLeave = () => {
  if (!animationId) {
    animationId = requestAnimationFrame(animate)
  }
}

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.value.addEventListener('mouseleave', handleMouseLeave)
    animationId = requestAnimationFrame(animate)
  }
})

onUnmounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('mouseenter', handleMouseEnter)
    scrollContainer.value.removeEventListener('mouseleave', handleMouseLeave)
  }
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>

<style scoped>
.testimonial {
  overflow-x: hidden;
}
</style>
