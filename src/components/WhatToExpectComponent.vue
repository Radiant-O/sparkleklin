<template>
  <section class="whattoexpect">
    <div class="mx-25 pt-20 pb-20">
      <!-- Header Section -->
      <div class="mx-auto w-full text-center mb-16">
        <p class="font-syne text-4xl w-[35%] mx-auto font-bold">
          {{ title }}
        </p>
        <div class="font-urbanist text-lg font-normal -mt-5 text-brand-ash w-[35%] mx-auto">
          {{ description }}
        </div>
      </div>

      <!-- Content Grid -->
      <div class="space-y-10">
        <!-- First Row -->
        <div class="flex gap-10">
          <div class="w-2/3 relative h-[500px] group">
            <img
              :src="features[0].image"
              :alt="features[0].title"
              class="w-full h-full object-cover rounded-3xl"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-3xl"
            >
              <div class="absolute bottom-0 p-10 w-full">
                <h3 class="text-white font-syne text-3xl font-semibold mb-4">
                  {{ features[0].title }}
                </h3>
                <p
                  class="text-white/90 font-urbanist text-lg line-clamp-3 group-hover:line-clamp-none transition-all duration-300"
                >
                  {{ features[0].description }}
                </p>
              </div>
            </div>
          </div>

          <div class="w-1/3 relative h-[500px] group">
            <img
              :src="features[1].image"
              :alt="features[1].title"
              class="w-full h-full object-cover rounded-3xl"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-3xl"
            >
              <div class="absolute bottom-0 p-8 w-full">
                <h3 class="text-white font-syne text-2xl font-semibold mb-3">
                  {{ features[1].title }}
                </h3>
                <p
                  class="text-white/90 font-urbanist text-base line-clamp-3 group-hover:line-clamp-none transition-all duration-300"
                >
                  {{ features[1].description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Row -->
        <div class="flex gap-10">
          <div class="w-1/3 relative h-[500px] group">
            <img
              :src="features[2].image"
              :alt="features[2].title"
              class="w-full h-full object-cover rounded-3xl"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-3xl"
            >
              <div class="absolute bottom-0 p-8 w-full">
                <h3 class="text-white font-syne text-2xl font-semibold mb-3">
                  {{ features[2].title }}
                </h3>
                <p
                  class="text-white/90 font-urbanist text-base line-clamp-3 group-hover:line-clamp-none transition-all duration-300"
                >
                  {{ features[2].description }}
                </p>
              </div>
            </div>
          </div>

          <div class="w-2/3 relative h-[500px] group">
            <img
              :src="features[3].image"
              :alt="features[3].title"
              class="w-full h-full object-cover rounded-3xl"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-3xl"
            >
              <div class="absolute bottom-0 p-10 w-full">
                <h3 class="text-white font-syne text-3xl font-semibold mb-4">
                  {{ features[3].title }}
                </h3>
                <p
                  class="text-white/90 font-urbanist text-lg line-clamp-3 group-hover:line-clamp-none transition-all duration-300"
                >
                  {{ features[3].description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'What You Can Expect From Us?',
  },
  description: {
    type: String,
    default:
      'Here are few of the things to expect from us which makes us standout and best in the game in the UK',
  },
  features: {
    type: Array,
    required: true,
    validator: (features) =>
      features.length === 4 &&
      features.every((feature) => feature.image && feature.title && feature.description),
  },
})
</script>
