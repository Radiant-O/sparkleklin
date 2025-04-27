<template>
  <div class="relative flex items-center justify-center">
    <svg
      width="200"
      height="200"
      class="absolute inset-0"
      viewBox="0 0 200 200"
    >
      <g transform="translate(100, 100)">
        <g v-for="(image, index) in images" :key="index">
          <image
            :href="image"
            width="40" 
            height="40"
            :transform="'rotate(' + ((index / images.length) * 360) + ') translate(70, 0) rotate(-' + ((index / images.length) * 360) + ')'"
            clip-path="url(#clip)"
          />
        </g>
      </g>
    </svg>
    <div class="bg-white rounded-full p-4 text-center z-10">
      <span class="font-bold text-lg">{{ centeredText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CircleArc',
  props: {
    images: {
      type: Array,
      required: true,
    },
    centeredText: {
      type: String,
      default: 'Centered Text',
    },
  },
};
</script>

<style scoped>
svg {
  transform: rotate(-90deg); /* Rotate to start from the top */
}
</style>