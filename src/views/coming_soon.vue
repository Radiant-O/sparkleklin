<script setup></script>

<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6"
  >
    <div
      class="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center border border-gray-200 transition-transform transform hover:scale-105"
    >
      <!-- Subtle top decoration -->
      <div class="absolute top-0 left-0 w-full h-2 bg-[#ff6e26]"></div>

      <!-- Logo Placeholder -->
      <div class="mx-auto mb-6 flex items-center">
        <img src="@/assets/logo.png" alt="Logo" class="w-38" />
      </div>

      <!-- Company Name -->
      <h1 class="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">Sparkleklin</h1>
      <p class="text-base text-gray-500 mb-8">Your Trusted Cleaning Partner in the UK</p>

      <!-- Coming Soon Message -->
      <h2 class="text-2xl sm:text-3xl font-semibold text-brand-orange mb-5 animate-pulse-slow">
        Website Sparkling Up Soon!
      </h2>

      <!-- Description -->
      <p class="text-gray-600 leading-relaxed mb-8">
        We're meticulously preparing our new online home to offer you seamless access to our
        top-tier cleaning services. Get ready for a fresh experience!
      </p>

      <!-- Contact Information -->
      <div class="contact-info border-t border-gray-200 pt-6">
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Need Cleaning Now? Get in Touch!</h3>
        <div class="space-y-3 text-gray-600">
          <p>
            <strong class="font-medium text-gray-800">Email:</strong>
            <a
              href="mailto:info@sparkleklin.co.uk"
              class="text-brand-orange hover:text-orange-700 transition-colors duration-300 ml-1"
            >
              contact@sparkleklin.co.uk
            </a>
          </p>
          <p>
            <strong class="font-medium text-gray-800">Phone:</strong>
            <a
              href="tel:+447351357925"
              class="text-brand-orange hover:text-orange-700 transition-colors duration-300 ml-1"
            >
              +447351357925
             
            </a>
          </p>
        </div>
      </div>

      <!-- Footer -->
      <footer class="mt-10 text-xs text-gray-400">
        © {{ new Date().getFullYear() }} Sparkleklin. All rights reserved.
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
