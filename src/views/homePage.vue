<template>
  <div class="relative h-screen">
    <!-- Sticky Header -->
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>

    <!-- Main Content with Background -->
    <div class="relative h-[calc(100vh-64px)] mx-10 rounded-b-3xl">
      <!-- Background Carousel -->
      <div class="absolute inset-0 w-full h-full rounded-b-3xl">
        <transition-group name="fade">
          <div
            v-for="(image, index) in backgroundImages"
            :key="image"
            v-show="currentIndex === index"
            class="absolute inset-0 w-full h-full bg-cover bg-center rounded-b-3xl bg-no-repeat transition-opacity duration-1000"
            :style="{ backgroundImage: `url(${image})` }"
          />
        </transition-group>
      </div>

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50 rounded-b-3xl"></div>

      <!-- Content Layer -->
      <div class="relative z-10 h-full">
        <div class="pt-[11%]">
          <div class="flex flex-col items-center justify-center h-full text-center text-white">
            <p class="font-bold text-6xl font-syne w-1/2 mx-auto">
              Sparkling Clean Homes, Every Time
            </p>
            <span class="block font-urbanist text-lg tracking-wide w-[45%] mx-auto -mt-8">
              Experience the ultimate in home cleaning services. Our team delivers exceptional
              results, ensuring your home is spotless and inviting.
            </span>
          </div>
          <div class="flex items-center justify-center mt-16">
            <ButtonComponent
              buttonText="Get a Free Quote"
              width="auto"
              height="auto"
              fontSize="1.2em"
              showIcon
              textCustomClass="text-brand-white"
              customClass="flex items-center justify-center rounded-3xl px-1 py-1 font-urbanist font-semibold text-brand-white gap-2 bg-brand-main cursor-pointer hover:bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Rest of the content -->
    <section class="mx-25 mt-20">
      <div class="flex justify-center w-full">
        <div class="w-[100%]">
          <p
            class="font-urbanist text-brand-main w-fit px-2 py-1 font-semibold text-lg bg-brand-main/20 rounded-2xl"
          >
            OUR SERVICES
          </p>
          <p class="font-syne font-semibold text-4xl w-[60%]">
            Professional Cleaning Services for Every Home
          </p>
        </div>
        <div>
          <p class="font-urbanist text-lg font-normal text-brand-ash">
            Discover our range of comprehensive cleaning services designed to meet your unique
            needs.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-3 justify-between gap-14">
        <CardComponent
          v-for="service in services"
          :key="service.title"
          :image-url="service.imageUrl"
          :title="service.title"
          :route-path="`/services/${service.slug}`"
        />
      </div>

      <div class="flex items-center justify-center mt-10">
        <ButtonComponent
          buttonText="See All"
          width="auto"
          height="auto"
          fontSize="1.2em"
          showIcon
          customClass="flex items-center justify-center rounded-3xl px-1 py-1 font-urbanist font-semibold gap-2 bg-brand-main cursor-pointer hover:bg-white hover:text-brand-main text-brand-white"
          textCustomClass="text-brand-white hover:text-brand-main"
        />
      </div>
    </section>
    <section class="bg-brand-ash/10 mt-10">
      <div class="mx-25 pt-20 pb-20">
        <div class="flex justify-center w-full">
          <div class="w-[100%]">
            <p class="font-syne font-semibold text-4xl w-[80%]">
              Complete Residential & Commercial Cleaning Services
            </p>
          </div>
          <div class="w-[100%]">
            <p class="font-urbanist text-lg font-normal text-brand-ash">
              Sparklekling cleaning will provide you with a reliable, value for money professional,
              residential and Commercial cleaning service for your business at times to suit you for
              a free, no obligation and quotation, cost effective cleaning services tailored to your
              precise needs.
            </p>
          </div>
        </div>
        <div class="w-full">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329795/Sparkleklin/office.jpg"
            alt=""
            class="rounded-4xl w-full h-[45em]"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import MainHeader from '@/components/MainHeader.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import CardComponent from '@/components/CardComponent.vue'

const backgroundImages = [
  'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329764/Sparkleklin/hero_3_cahozr.jpg',
  'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329773/Sparkleklin/hero_2_c3g96t.jpg',
  'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329763/Sparkleklin/hero_1_xzsa01.png',
  'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329777/Sparkleklin/hero_4_nui3vo.jpg',
]

const services = [
  {
    title: 'Commercial',
    slug: 'commercial',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445013/Sparkleklin/commerciall_woasfw.png',
  },
  {
    title: 'Office',
    slug: 'office',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445012/Sparkleklin/officee_bzjpqq.png',
  },
  {
    title: 'Domestic',
    slug: 'domestic',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445011/Sparkleklin/office_cle_o2maz1.png',
  },
  {
    title: 'Supermarket',
    slug: 'supermarket',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445011/Sparkleklin/supermarket_clea_hnjwfq.png',
  },
  {
    title: 'Educational Center',
    slug: 'educational-center',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445012/Sparkleklin/educationall_vlppma.png',
  },
  {
    title: 'Hospitals',
    slug: 'hospitals',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445011/Sparkleklin/showroom_mgns43.png',
  },
]

const currentIndex = ref(0)
let intervalId

const slideShow = () => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % backgroundImages.length
  }, 5000)
}

onMounted(() => {
  slideShow()
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
