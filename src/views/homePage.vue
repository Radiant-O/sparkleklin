<template>
  <div class="reveal">
    <!-- Sticky Header -->
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>

    <!-- Main Content with Background -->
    <div class="relative h-screen lg:mx-10 rounded-b-3xl">
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
      <!-- <div class="relative z-10 h-full">
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
      </div> -->
      <div class="relative z-10 flex flex-col justify-center h-full">
        <div class="text-center text-white">
          <p class="font-bold text-4xl md:text-6xl md:w-1/2 md:mx-auto font-syne ">
            Sparkling Clean Homes, Every Time
          </p>
          <div class="font-urbanist text-lg text-white/90 md:w-[40%] px-2 md:px-0 -mt-8 mx-auto mb-6">
            Experience the ultimate in home cleaning services. Our team delivers exceptional
            results, ensuring your home is spotless and inviting.
          </div>
          <ButtonComponent
            buttonText="Get a Free Quote"
            width="auto"
            height="auto"
            fontSize="1.2em"
            showIcon
            textCustomClass="text-brand-white"
            customClass="inline-flex items-center justify-center rounded-3xl px-1 py-1 font-urbanist font-semibold text-brand-white gap-2 bg-brand-main cursor-pointer hover:bg-transparent hover:border-white border-2 transition-all text-urbanist duration-300"
          />
        </div>
      </div>
    </div>
    <section class=" mx-5 md:mx-25 mt-20">
      <div class="flex flex-col md:flex-row justify-center w-full">
        <div class="w-[100%]">
          <p
            class="font-urbanist text-brand-main w-fit px-2 py-1 font-semibold text-lg bg-brand-main/20 rounded-2xl"
          >
            OUR SERVICES
          </p>
          <p class="font-syne font-semibold text-2xl md:text-4xl  md:w-[60%]">
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
      <div class="grid md:grid-cols-3 justify-between gap-14">
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
      <div class="mx-5 md:mx-25 pt-20 pb-40">
        <div class="flex flex-col md:flex-row justify-center w-full">
          <div class="w-[100%]">
            <p class="font-syne font-semibold text-2xl md:text-4xl w-[80%]">
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
            class="rounded-4xl w-full object-cover h-[25rem] md:h-[45rem]"
          />
        </div>
      </div>
    </section>
    <!-- <AboutComponent /> -->
    <!-- <TestingComponent /> -->

    <section class="whychoose">
      <WhyUsComponent
        imageUrl="https://res.cloudinary.com/din5vdwsr/image/upload/v1745512033/Sparkleklin/clearnerchoose_ibnkwe.png"
        overlayText="Discover the standout features and exceptional benefits of choosing our home cleaning services, designed to meet all your needs and exceed your expectations."
        title="Why Choose Sparkleklin?"
        description="Sparkleklin is based in London and provides a variety of cleaning services at affordable prices."
        :features="whyChooseFeatures"
      />
    </section>
    <section class="whattoexpect">
      <WhatToExpectComponent :features="expectFeatures" />
    </section>
    <section class="impacts">
      <ImpactsComponent :stats="impactStats" />
    </section>
    <section class="testimonial">
      <TestimonialComponent :testimonials="testimonials" />
    </section>
    <section class="footer">
      <FooterComponent />
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import MainHeader from '@/components/MainHeader.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
// import AboutComponent from '@/components/AboutComponent.vue'
import WhyUsComponent from '@/components/WhyUsComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import TestimonialComponent from '@/components/TestimonialComponent.vue'
import ImpactsComponent from '@/components/ImpactsComponent.vue'
import WhatToExpectComponent from '@/components/WhatToExpectComponent.vue'
// import TestingComponent from '@/components/TestingComponent.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useScrollAnimation()

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

const testimonials = [
  {
    id: 1,
    name: 'Joshua Turner',
    position: 'IT Specialist',
    comment:
      "Sparkleklin transformed my home from cluttered to spotless in no time. The team are professional, friendly, and thorough. I couldn't be happier with their service!",
    image:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745618885/Sparkleklin/img1_b1eixi.png',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    position: 'Business Owner',
    comment:
      'Outstanding service! Their attention to detail and professional approach has made our office space immaculate. Highly recommended!',
    image:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745618885/Sparkleklin/img2_qrwu2u.png',
  },
  {
    id: 3,
    name: 'Michael Brown',
    position: 'Restaurant Manager',
    comment:
      "Reliable, thorough, and always on time. Sparkleklin has been instrumental in maintaining our restaurant's cleanliness standards.",
    image:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745618885/Sparkleklin/img3_hyo11d.png',
  },
  {
    id: 4,
    name: 'Emily Davis',
    position: 'Homeowner',
    comment:
      'I love coming home to a clean house! The team at Sparkleklin is friendly and does an amazing job every time.',
    image:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745618885/Sparkleklin/img2_qrwu2u.png',
  },
  {
    id: 5,
    name: 'David Wilson',
    position: 'Office Manager',
    comment:
      'Sparkleklin has transformed our office cleaning routine. Their team is efficient and the results are always impressive.',
    image:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745618885/Sparkleklin/img3_hyo11d.png',
  },
]

const impactStats = [
  {
    value: 100,
    suffix: '%',
    label: 'Free Estimate',
  },
  {
    value: 2000,
    suffix: '+',
    label: 'Homes Cleaned',
  },
  {
    value: 3000,
    suffix: '+',
    label: 'Satisfied Clients',
  },
  {
    value: 95,
    suffix: '%',
    label: 'Customer Retention Rate',
  },
]

const expectFeatures = [
  {
    title: 'Trusted & Experienced',
    description:
      'We are trusted and Experienced company working for many years both in domestic and commercial sector. Our quality control programmes ensures top quality cleaning service every time.',
    image:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329766/Sparkleklin/car%20showroom.jpg',
  },
  {
    title: 'Available on Short Notice',
    description:
      'We are available 24/7 and can work on short notices. We have good number of staffs, through which we can carry any size job.',
    image:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329734/Sparkleklin/445-NEW_fsjpvn.png',
  },
  {
    title: 'Satisfaction Guaranteed',
    description: 'We are competitively priced, 100% guaranteed services at guaranteed prices.',
    image:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329734/Sparkleklin/445-NEW_fsjpvn.png',
  },
  {
    title: 'Reliable & Fully Insured',
    description:
      'Our motivated Staffs are courteous, hardworking, efficient, and have keen eye for details. Staffs are carefully selected and vetted for your security at all times.',
    image:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329745/Sparkleklin/supermarket.png',
  },
]
</script>

<style scoped>
/* .fade-enter-active,
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
} */
</style>
