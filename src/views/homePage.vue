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
    <AboutComponent />
    <section class="whychoose">
      <!-- <div class="mx-25 pt-20 pb-20">
        <div class="flex justify-center gap-10">
          <div class="relative">
            <img
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745512033/Sparkleklin/clearnerchoose_ibnkwe.png"
              alt="Why Choose Us"
              class="w-[28em] h-[41em] rounded-3xl"
            />
           
            <div
              class="absolute w-[28em] bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl"
            >
              <p class="text-white font-urbanist text-sm p-8">
                Discover the standout features and exceptional benefits of choosing our home
                cleaning services, designed to meet all your needs and exceed your expectations.
              </p>
            </div>
          </div>

          
          <div class="bg-brand-ash/5 rounded-3xl p-10 w-[55%]">
            <div class="">
              <p class="font-syne text-5xl font-bold pb-0 mb-0">Why Choose Sparkleklin?</p>
              <div class="font-urbanist text-brand-ash text-lg -mt-8 w-[70%]">
                Sparkleklin is based in London and provides a variety of cleaning services at
                affordable prices.
              </div>
            </div>

           
            <div class="mt-10">
              <div class="flex items-start gap-4">
                <img src="../assets/imgs/vector.png" alt="" class="w-9 h-9 bg-white p-1 rounded-xl" />

                <div>
                  <p class="font-syne font-semibold text-xl">Experienced Cleaners</p>
                  <p class="font-urbanist text-brand-ash">
                    We keep your home sparkling clean and germ free. Our disinfecting process kills
                    99% of common bacteria and viruses.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <img src="../assets/imgs/vector.png" alt="" class="w-8 h-8" />
                <div>
                  <p class="font-syne font-semibold text-xl ">Satisfaction Guaranteed</p>
                  <p class="font-urbanist text-brand-ash">
                    We keep your home sparkling clean and germ free. Our disinfecting process kills
                    99% of common bacteria and viruses.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <img src="../assets/imgs/vector.png" alt="" class="w-8 h-8" />
                <div>
                  <p class="font-syne font-bold text-xl ">Flexible Scheduling</p>
                  <p class="font-urbanist text-brand-ash">
                    We keep your home sparkling clean and germ free. Our disinfecting process kills
                    99% of common bacteria and viruses.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <img src="../assets/imgs/vector.png" alt="" class="w-8 h-8" />
                <div>
                  <p class="font-syne font-semibold text-xl">Affordable Rates</p>
                  <p class="font-urbanist text-brand-ash">
                    We keep your home sparkling clean and germ free. Our disinfecting process kills
                    99% of common bacteria and viruses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <WhyUsComponent
        imageUrl="https://res.cloudinary.com/din5vdwsr/image/upload/v1745512033/Sparkleklin/clearnerchoose_ibnkwe.png"
        overlayText="Discover the standout features and exceptional benefits of choosing our home cleaning services, designed to meet all your needs and exceed your expectations."
        title="Why Choose Sparkleklin?"
        description="Sparkleklin is based in London and provides a variety of cleaning services at affordable prices."
        :features="whyChooseFeatures"
      />
    </section>
    <section>
      <div class="mx-25 pt-20 pb-20">
        <div>
          <p>What You Can Expect From Us?</p>
          <p>
            Here are few of the things to expect from us which makes us standout and best in the
            game in the UK
          </p>
        </div>
        <div>
          <div class="flex gap-10">
            <div class="relative w-[67%] h-[25em]">
              <img
                src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329766/Sparkleklin/car%20showroom.jpg"
                alt="Why Choose Us"
                class="h-[25em] w-full rounded-3xl object-cover"
              />

              <div
                class="absolute h-full pt-[25%] bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl"
              >
                <p class="text-white font-syne font-semibold text-3xl px-10">
                  Trusted & Experienced
                </p>
                <div class="text-white font-urbanist text-lg px-10 font-light -mt-[1.6em] w-[95%]">
                  We are trusted and Experienced company working for many years both in domestic and
                  commercial sector. Our quality control programmes ensures top quality cleaning
                  service every time.
                </div>
              </div>
            </div>
            <div class="relative w-1/4 h-[25em]">
              <img
                src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329734/Sparkleklin/445-NEW_fsjpvn.png"
                alt="Why Choose Us"
                class="h-[25em] w-[100%] rounded-3xl object-cover"
              />

              <div
                class="absolute h-full pt-[70%] bottom-0 left-0 right-0 bg-gradient- from-black/80 to-transparent rounded-b-3xl"
              >
                <p class="text-white font-syne font-semibold text-[1.3em] px-10">
                  Available on Short Notice
                </p>
                <div class="text-white font-urbanist leading-5 text-md px-10 font-light -mt-[0.9em] ">
                  We are available 24/7 and can work on short notices. We have good number of staffs, through which we can carry any size job.
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-10 mt-10">
            <div class="relative w-1/4 h-[25em]">
              <img
                src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329734/Sparkleklin/445-NEW_fsjpvn.png"
                alt="Why Choose Us"
                class="h-[25em] w-[100%] rounded-3xl object-cover"
              />

              <div
                class="absolute h-full pt-[25%] bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl"
              >
                <p class="text-white font-urbanist text-sm p-8">
                  Discover the standout features and exceptional benefits of choosing our home
                  cleaning services, designed to meet all your needs and exceed your expectations.
                </p>
              </div>
            </div>
            <div class="relative w-[67%] h-[25em]">
              <img
                src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329745/Sparkleklin/supermarket.png"
                alt="Why Choose Us"
                class="h-[25em] w-[100%] rounded-3xl object-cover"
              />

              <div
                class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl"
              >
                <p class="text-white font-urbanist text-sm p-8">
                  Discover the standout features and exceptional benefits of choosing our home
                  cleaning services, designed to meet all your needs and exceed your expectations.
                </p>
              </div>
            </div>
          </div>
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
import AboutComponent from '@/components/AboutComponent.vue'
import WhyUsComponent from '@/components/WhyUsComponent.vue'

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

const whyChooseFeatures = [
  {
    title: 'Experienced Cleaners',
    description:
      'We keep your home sparkling clean and germ free. Our disinfecting process kills 99% of common bacteria and viruses.',
    icon: 'https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png',
  },
  {
    title: 'Satisfaction Guaranteed',
    description:
      'We stand by the quality of our work with a satisfaction guarantee, ensuring you are delight with the results every time.',
    icon: 'https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png',
  },
  {
    title: 'Flexible Scheduling',
    description:
      'We offer flexible scheduling options to fit your busy lifestyle, making it easy to book a cleaning service at your convenience.',
    icon: 'https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png',
  },
  {
    title: 'Affordable Rates',
    description:
      'Our competitive pricing ensures that you receive top-quality cleaning services at a price that fits your budget.',
    icon: 'https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png',
  },
]
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
