<template>
     <div class="relative h-screen pt-3">
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
            
            <div class="mt-32">
                <div class="flex flex-col items-center justify-center h-full text-center text-white ">
                    
                <p class="font-bold text-6xl font-syne w-1/2 mx-auto">Sparkling Clean Homes, Every Time</p>

                <p class="font-urbanist text-lg tracking-wide w-[40%] mx-auto">Experience the ultimate in home cleaning services. Our team delivers exceptional results, ensuring your home is spotless and inviting. </p>
                </div>
                <div class="flex items-center justify-center mt-3">
                    <ButtonComponent 
                        buttonText="Get a Free Quote" 
                        width="auto" 
                        height="auto" 
                        fontSize="1.2em" 
                        showIcon
                        customClass="flex items-center justify-center rounded-3xl px-1 py-1 font-urbanist font-semibold text-brand-white gap-2 bg-brand-main cursor-pointer hover:bg-transparent"
                    />
                </div>  
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import MainHeader from '@/components/MainHeader.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

const backgroundImages = [
    'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329764/Sparkleklin/hero_3_cahozr.jpg',
    'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329773/Sparkleklin/hero_2_c3g96t.jpg',
    'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329763/Sparkleklin/hero_1_xzsa01.png',
    'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329777/Sparkleklin/hero_4_nui3vo.jpg',
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