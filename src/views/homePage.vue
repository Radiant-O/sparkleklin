<template>
     <div class="relative h-screen">
        <!-- Background Carousel -->
        <div class="absolute inset-0 w-full h-full">
            <transition-group name="fade">
                <div 
                    v-for="(image, index) in backgroundImages" 
                    :key="image"
                    v-show="currentIndex === index"
                    class="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
                    :style="{ backgroundImage: `url(${image})` }"
                />
            </transition-group>
        </div>

        <!-- Overlay to make content readable -->
        <div class="absolute inset-0 bg-black/50"></div>

        <!-- Content Layer -->
        <div class="relative z-10 h-full">
            <MainHeader />
            <!-- Add your hero content here -->
        </div>
        <img src="../assets/imgs/her" alt="">
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import MainHeader from '@/components/MainHeader.vue';

const backgroundImages = [
    '../assets/imgs/hero 1.png',
    '../assets/imgs/hero 2.png',
    '../assets/imgs/hero 3.png',
    '../assets/imgs/hero 4.png',
]

const currentIndex = ref(0);
let intervalId;

const slideShow = () => {
    intervalId = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % backgroundImages.length;
    }, 5000)
};

onMounted(() => {
    slideShow();
});

onUnmounted(() => {
    clearInterval(intervalId);
});
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