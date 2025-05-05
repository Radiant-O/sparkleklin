<template>
  <section class="reveal">
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <div class="bg-black/90 text-white flex flex-col md:flex-row justify-center gap-20 px-5 md:px-28 py-20">
      <div class="bg-[#29292E] bg-opacity-90 p-10 rounded-3xl shadow-lg">
        <Icon
          icon="mynaui:flag-solid"
          width="40"
          height="40"
          class="text-brand-main bg-brand-ash rounded-lg p-2.5 mb-8"
        />
        <div>
          <p class="font-syne font-semibold text-2xl">Our Mission</p>
          <p class="font-urbanist text-lg font-light text-gray-200 max-w-2xl mx-auto">
            To deliver top-notch home cleaning services with a focus on quality, reliability, and
            customer satisfaction.
          </p>
        </div>
      </div>
      <div class="bg-[#29292E] bg-opacity-90 p-10 rounded-3xl shadow-lg">
        <Icon
          icon="fa6-solid:award"
          width="40"
          height="40"
          class="text-brand-main bg-brand-ash rounded-lg p-2.5 mb-8"
        />
        <div>
          <p class="font-syne font-semibold text-2xl">Our Values</p>
          <p class="font-urbanist text-lg font-light text-gray-200 max-w-2xl mx-auto">
            Commitment to providing top-tier quality, earning your trust, and demostrating
            excellence in every detail of our cleaning services.
          </p>
        </div>
      </div>
      <div class="bg-[#29292E] bg-opacity-90 p-10 rounded-3xl shadow-lg">
        <Icon
          icon="tabler:device-vision-pro"
          width="40"
          height="40"
          class="text-brand-main bg-brand-ash rounded-lg p-2.5 mb-8"
        />
        <div>
          <p class="font-syne font-semibold text-2xl">Our Mission</p>
          <p class="font-urbanist text-lg font-light text-gray-200 max-w-2xl mx-auto">
            To deliver top-notch home cleaning services with a focus on quality, reliability, and
            customer satisfaction.
          </p>
        </div>
      </div>
    </div>
    <section>
      <div class="bg-brand-ash/5 bg-opacity-90 rounded-3xl flex flex-col md:flex-row py-20 px-5 md:px-25 justify-center gap-20 items-center mt-15 md:mx-10">
        <div class="w-[100%]">
          <p
            class="font-urbanist text-brand-main w-fit px-2 py-1 font-semibold text-lg bg-brand-main/20 rounded-2xl"
          >
            OUR STORY
          </p>
          <p class="font-syne text-4xl font-semibold">
            From <br />
            Humble Beginning <br />
            to Excellence.
          </p>
          <div class="font-urbanist text-md leading-6 md:text-lg -mt-5 font-light text-gray-500">
            Our Journey: Sparkleklin started as a small scale business with a passion for
            cleanliness, Over the years we've grown into a trusted name in home cleaning, known for
            quality and reliability.
            <br />
            Our Growth: Through dedication and hardwork, Sparkleklin has expanded its servicec and
            built a loyal client base. We continue toinnovate and improve, always striving to exceed
            our customer's expections.
          </div>
        </div>
        <div class="w-[100%]">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329795/Sparkleklin/office.jpg"
            alt=""
            class="md:w-[80%] h-[30rem] object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
    <section class="whattoexpect">
      <WhatToExpectComponent :features="expectFeatures" />
    </section>
    <section>
      <WhatToOfferComponent />
    </section>
    <section class="whychoose">
      <WhyUsComponent
        imageUrl="https://res.cloudinary.com/din5vdwsr/image/upload/v1745512033/Sparkleklin/clearnerchoose_ibnkwe.png"
        overlayText="Discover the standout features and exceptional benefits of choosing our home cleaning services, designed to meet all your needs and exceed your expectations."
        title="Why Choose Sparkleklin?"
        description="Sparkleklin is based in London and provides a variety of cleaning services at affordable prices."
        :features="whyChooseFeatures"
      />
    </section>
    <section class="footer">
      <FooterComponent />
    </section>
  </section>
</template>
<script setup>
import { Icon } from '@iconify/vue'
import MainHeader from '@/components/MainHeader.vue'
import WhatToExpectComponent from '@/components/WhatToExpectComponent.vue'
import WhatToOfferComponent from '@/components/WhatToOfferComponent.vue'
import WhyUsComponent from '@/components/WhyUsComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useScrollAnimation()

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
<style scoped></style>
