<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  routePath: {
    type: String,
    default: '',
  },
})

const handleClick = () => {
  if (props.routePath) {
    router.push(props.routePath)
  }
}
</script>

<template>
  <div class="card-wrapper group cursor-pointer" @click="handleClick">
    <div
      class="bg-brand-ash/10 px-5 pt-5 rounded-2xl transition-all duration-300 hover:shadow-lg"
    >
      <img
        :src="imageUrl"
        :alt="title"
        class="w-full h-92 object-cover rounded-xl mb-6 transition-transform duration-300 group-hover:scale-105"
      />
      <div class="flex items-center justify-between pt-2 pb-4">
        <div class="space-y-2">
          <h3 class="font-syne font-semibold text-xl text-brand-black">{{ title }}</h3>
          <p class="font-urbanist text-brand-ash">{{ description }}</p>
        </div>
        <ArrowUpRight
          class="text-brand-main bg-white w-9 h-9 rounded-full p-1.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </div>
  </div>
</template>
