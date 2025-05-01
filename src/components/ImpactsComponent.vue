<template>
  <div class="w-full opacity-85 bg-gradient-to-t from-orange-600 to-black relative md:py-30 pt-20 pb-30">
    <div class=" mx-5 md:mx-25 md:text-center text-white">
      <div class="max-w-3xl mx-auto">
        <h2 class="font-syne text-4xl font-bold">{{ title }}</h2>
        <p class="font-urbanist text-lg text-brand-ash md:w-[85%] mx-auto">
          {{ description }}
        </p>
      </div>

      <div class="flex md:flex-row flex-col justify-center gap-8 w-full mx-auto mt-10">
        <div
          v-for="stat in animatedStats"
          :key="stat.label"
          class="py-4 px-8 bg-white/5 rounded-2xl shadow"
        >
          <p class="font-syne text-5xl font-bold text-brand-main">
            <span ref="numberElements">{{ stat.currentValue }}</span
            >{{ stat.suffix }}
          </p>
          <div class="font-urbanist text-lg -mt-12">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
  title: {
    type: String,
    default: 'Our Impact by the Numbers',
  },
  description: {
    type: String,
    default:
      'Our commitment to excellence is evident in the numbers. Discover the impressive stats showcasing the quality and reliability of our home cleaning services.',
  },
  stats: {
    type: Array,
    required: true,
    validator: (stats) =>
      stats.every((stat) => 'value' in stat && 'label' in stat && 'suffix' in stat),
  },
})

const numberElements = ref([])
const hasAnimated = ref(false)

const animateNumber = (element, targetValue, duration = 2000) => {
  const startValue = 0
  const increment = targetValue / (duration / 16) // 60fps
  let currentValue = startValue

  const updateNumber = () => {
    currentValue += increment
    if (currentValue < targetValue) {
      element.currentValue = Math.round(currentValue)
      requestAnimationFrame(updateNumber)
    } else {
      element.currentValue = targetValue
    }
  }

  updateNumber()
}

// Initialize current values
const statsWithCurrent = props.stats.map((stat) => ({
  ...stat,
  currentValue: 0,
}))

const animatedStats = ref(statsWithCurrent)

// Intersection Observer callback
const onIntersect = ([{ isIntersecting }]) => {
  if (isIntersecting && !hasAnimated.value) {
    animatedStats.value.forEach((stat) => {
      animateNumber(stat, stat.value)
    })
    hasAnimated.value = true
  }
}

onMounted(() => {
  const el = numberElements.value[0]
  if (el) {
    useIntersectionObserver(el, onIntersect, {
      threshold: 0.5,
    })
  }
})
</script>
