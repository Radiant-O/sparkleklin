<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import MainHeader from '@/components/MainHeader.vue'
</script>

<template>
  <div>
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
          <p class="font-urbanist md:mx-auto md:text-center md:w-[50%] text-lg font-normal text-brand-ash">
            Explore our galery to see a curated selection of projects that showcase our creatiity
            and expertise. Each piece tells a unique story and reflects our commitment to innovative
            design
          </p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-10 g1">
        <div class="md:w-2/3 relative h-[25rem] md:h-[500px] group">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329780/Sparkleklin/commercial.jpg"
            alt="img1"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>

        <div class="md:w-1/3 relative h-[25rem] md:h-[500px] group">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329734/Sparkleklin/445-NEW_fsjpvn.png"
            alt="img2"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div class="grid md:grid-flow-col md:grid-rows-2 md:grid-cols-3 gap-10 g2">
        <div class="group">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329745/Sparkleklin/supermarket.png"
            alt="img1"
            class="w-full h-[25rem] md:h-full object-cover rounded-3xl"
          />
        </div>

        <div class="group">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745445011/Sparkleklin/office_cle_o2maz1.png"
            alt="img2"
            class="w-full h-[25rem] md:h-full object-cover rounded-3xl"
          />
        </div>
        <div class="md:row-span-2 md:col-span-2 group">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329795/Sparkleklin/office.jpg"
            alt="img2"
            class="w-full h-[25rem] md:h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-10 g3">
        <div class="md:w-2/3 relative h-[25rem] md:h-[500px] group">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329766/Sparkleklin/car%20showroom.jpg"
            alt="img1"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>

        <div class="md:w-1/3 relative h-[25rem] md:h-[500px] group">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329784/Sparkleklin/woman-cleaning-ophthalmologist-s-office_i3o3h2.jpg"
            alt="img2"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div class="grid md:grid-flow-col md:grid-rows-2 md:grid-cols-3 gap-10 g4">
        <div class="group md:h-[30rem]">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329773/Sparkleklin/home3_gsuwcz.png"
            alt="img1"
            class="w-full h-[25rem] md:h-full object-cover rounded-3xl"
          />
        </div>

        <div class="group md:h-[30rem]">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329730/Sparkleklin/11368_lwj7dt.jpg"
            alt="img2"
            class="w-full h-[25rem] md:h-full object-cover rounded-3xl"
          />
        </div>
        <div class="md:row-span-2 md:h-[63rem] md:col-span-2 group">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329773/Sparkleklin/newwww_r43pyt.jpg"
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
