<script setup>
import FooterComponent from '@/components/FooterComponent.vue'
import MainHeader from '@/components/MainHeader.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useScrollAnimation()
</script>

<template>
  <div class="reveal">
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section class="mx-5 md:mx-25 mt-25 space-y-20">
      <div class="w-full">
        <div class="md:mx-auto md:w-full">
          <p
            class="font-urbanist md:mx-auto text-brand-main w-fit px-2 py-1 font-semibold text-lg bg-brand-main/20 rounded-2xl"
          >
            OUR GALLERY
          </p>
          <p class="font-syne md:mx-auto md:text-center font-bold text-xl md:text-4xl md:w-[45%]">
            Enjoying Exploring Our Diverse Range of Work.
          </p>
        </div>
        <div class="md:-mt-7 -mt-4">
          <p
            class="font-urbanist md:mx-auto md:text-center md:w-[50%] text-lg font-normal text-brand-ash"
          >
            Explore our galery to see a curated selection of projects that showcase our creatiity
            and expertise. Each piece tells a unique story and reflects our commitment to innovative
            design.
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-10 g1">
        <div class="md:w-2/3 relative h-[25rem] md:h-[500px] group">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161863/commerciall_kow4as.png"
            alt="img1"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>

        <div class="md:w-1/3 relative h-[25rem] md:h-[500px] group">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178708/445-NEW_zzlkpn.png"
            alt="img2"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div class="grid md:grid-flow-col md:grid-rows-2 md:grid-cols-3 gap-10 g2">
        <div class="group">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161863/supermarket_clea_kmmvhs.png"
            alt="img1"
            class="w-full h-[25rem] md:h-full object-cover rounded-3xl"
          />
        </div>

        <div class="group">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161863/office_cle_jpedsv.png"
            alt="img2"
            class="w-full h-[25rem] md:h-full object-cover rounded-3xl"
          />
        </div>
        <div class="md:row-span-2 md:col-span-2 group">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178781/professional-cleaning-service-person-using-vacuum-cleaner-office-2_smdr4u.jpg"
            alt="img2"
            class="w-full h-[25rem] md:h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-10 g3">
        <div class="md:w-2/3 relative h-[25rem] md:h-[500px] group">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161863/showroom_woylrb.png"
            alt="img1"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>

        <div class="md:w-1/3 relative h-[25rem] md:h-[500px] group">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178800/woman-cleaning-ophthalmologist-s-office_gpmwwc.jpg"
            alt="img2"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div class="grid md:grid-flow-col md:grid-rows-2 md:grid-cols-3 gap-10 g4">
        <div class="group md:h-[30rem]">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178757/home3_m0e0cl.png"
            alt="img1"
            class="w-full h-[25rem] md:h-full object-cover rounded-3xl"
          />
        </div>

        <div class="group md:h-[30rem]">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178681/11368_ulgjll.jpg"
            alt="img2"
            class="w-full h-[25rem] md:h-full object-cover rounded-3xl"
          />
        </div>
        <div class="md:row-span-2 md:h-[63rem] md:col-span-2 group">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178760/newwww_wpyaom.jpg"
            alt="img2"
            class="w-full h-[25rem] md:h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<style scoped></style>
