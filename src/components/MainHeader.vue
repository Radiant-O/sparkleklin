<template>
  <header>
    <div
      class="flex justify-between items-center px-8 py-8 w-[90%] h-16 bg-[#191919] rounded-3xl mx-auto mt-5 mb-5"
    >
      <div class="logo">
        <img src="../assets/imgs/logo-white (1).png" alt="sparkleklin logo" class="w-32" />
      </div>
      <div class="flex items-center font-urbanist font-semibold text-[16px] gap-8 text-brand-ash">
        <div>Home</div>
        <div>About Us</div>
        <div>Service</div>
        <div>Specialist Cleaning</div>
        <div>Gallery</div>
        <div>Jobs</div>
        <div>FAQs</div>
        
      </div>
      <div>
         
        <button class="flex item-center gap-3 border-2 border-brand-ash rounded-3xl px-2 py-2"> <ArrowUpRight class="text-brand-main font-bold border rounded-full w-[2.5rem] h-[2.5rem] bg-white" /> <p>Contact Us</p></button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ArrowUpRight } from 'lucide-vue-next';
</script>

<style lang="scss" scoped></style>
