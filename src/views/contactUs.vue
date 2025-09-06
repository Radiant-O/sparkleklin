<template>
  <div class="reveal">
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section>
      <div class="mx-5 md:mx-25 mt-20 md:mt-25">
        <div class="flex flex-col md:flex-row gap-15 justify-center w-full">
          <div class="w-[100%] md:border border-brand-ash/20 md:px-10 py-8 rounded-xl">
            <p
              class="font-urbanist text-brand-main w-fit px-3 py-1.5 font-semibold text-lg md:text-xl bg-brand-main/20 rounded-2xl"
            >
              Reach Out to Us
            </p>
            <p class="font-syne font-semibold text-3xl md:w-[60%]">Need Support? Contact Us Now!</p>
            <div>
              <div>
                <form @submit="handleSubmit" class="mt-10">
                  <div class="grid md:grid-cols-2 gap-5 md:gap-8">
                    <!-- First Name -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >First Name <span class="text-red-700">*</span></label
                      >

                      <input
                        v-model="form.firstName"
                        type="text"
                        class="w-full px-5 py-5 rounded-xl text-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500 bg-red-50': errors.firstName }"
                      />
                      <span class="text-red-500 text-sm">{{ errors.firstName }}</span>
                    </div>

                    <!-- Last Name -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Last Name <span class="text-red-700">*</span></label
                      >
                      <input
                        v-model="form.lastName"
                        class="w-full px-5 py-5 rounded-xl text-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500 bg-red-50': errors.lastName }"
                      />
                      <span class="text-red-500 text-sm">{{ errors.lastName }}</span>
                    </div>

                    <!-- Phone -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Phone <span class="text-red-700">*</span></label
                      >
                      <input
                        v-model="form.phone"
                        class="w-full px-5 py-5 rounded-xl text-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500 bg-red-50': errors.phone }"
                      />
                      <span class="text-red-500 text-sm">{{ errors.phone }}</span>
                    </div>

                    <!-- Email -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Email address <span class="text-red-700">*</span></label
                      >
                      <input
                        v-model="form.email"
                        class="w-full px-5 py-5 rounded-xl text-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500 bg-red-50': errors.email }"
                      />
                      <span class="text-red-500 text-sm">{{ errors.email }}</span>
                    </div>

                    <!-- Cleaning Date -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Cleaning require date <span class="text-red-700">*</span></label
                      >
                      <div class="relative">
                        <input
                          type="date"
                          v-model="form.cleaningDate"
                          class="w-full px-5 py-5 rounded-xl text-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500 bg-red-50': errors.cleaningDate }"
                        />
                        <span class="absolute right-3 top-3">
                          <i class="fas fa-calendar"></i>
                        </span>
                      </div>
                      <span class="text-red-500 text-sm">{{ errors.cleaningDate }}</span>
                    </div>

                    <!-- Service Required -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Service you require <span class="text-red-700">*</span></label
                      >
                      <select
                        v-model="form.service"
                        class="w-full px-5 py-5 text-md rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500': errors.service }"
                      >
                        <option value="">Select a service</option>
                        <option value="commercial">Commercial Cleaning</option>
                        <option value="office">Office Cleaning</option>
                        <option value="domestic">Domestic Cleaning</option>
                        <option value="supermarket">Supermarket Cleaning</option>
                      </select>
                      <span class="text-red-500 text-sm">{{ errors.service }}</span>
                    </div>

                    <!-- Hours per Visit -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Hours per visit <span class="text-red-700">*</span></label
                      >
                      <input
                        v-model="form.hoursPerVisit"
                        min="1"
                        class="w-full px-5 py-5 rounded-xl text-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500 bg-red-50': errors.hoursPerVisit }"
                      />
                      <span class="text-red-500 text-sm">{{ errors.hoursPerVisit }}</span>
                    </div>

                    <!-- Frequency -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >How often per visit <span class="text-red-700">*</span></label
                      >
                      <select
                        v-model="form.frequency"
                        class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500': errors.frequency }"
                      >
                        <option value="">Select frequency</option>
                        <option value="daily">Daily</option>
                        <option value="twice a weeks">Twice a week</option>
                        <option value="Once a week">Once a week</option>
                        <option value="Once a fortnight">Once a fortnight</option>
                        <option value="Once a month">Once a month</option>
                        <option value="Others">Other</option>
                      </select>
                      <span class="text-red-500 text-sm">{{ errors.frequency }}</span>
                    </div>
                    <!-- Days Frequency -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Days of the week cleaning required
                        <span class="text-red-700">*</span></label
                      >
                      <select
                        v-model="form.daysfrequency"
                        class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500': errors.daysfrequency }"
                      >
                        <option value="">Select Days</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                      </select>
                      <span class="text-red-500 text-sm">{{ errors.daysfrequency }}</span>
                    </div>
                    <!-- Frequency -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >How often is cleaning required <span class="text-red-700">*</span></label
                      >
                      <select
                        v-model="form.oftenfrequency"
                        class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500': errors.oftenfrequency }"
                      >
                        <option value="">Select period of the day</option>
                        <option value="Morning">Morning</option>
                        <option value="Midday">Midday</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                      </select>
                      <span class="text-red-500 text-sm">{{ errors.oftenfrequency }}</span>
                    </div>

                    <!-- Address -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Address <span class="text-red-700">*</span></label
                      >
                      <input
                        v-model="form.address"
                        class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500 bg-red-50': errors.address }"
                      />
                      <span class="text-red-500 text-sm">{{ errors.address }}</span>
                    </div>

                    <!-- Street Address -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Street Address <span class="text-red-700">*</span></label
                      >
                      <input
                        v-model="form.streetaddress"
                        class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500 bg-red-50': errors.streetaddress }"
                      />
                      <span class="text-red-500 text-sm">{{ errors.streetaddress }}</span>
                    </div>

                    <!-- Address Line 2 -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block">Address Line 2</label>
                      <input
                        v-model="form.addressline"
                        class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                      />
                    </div>

                    <!-- City -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >City <span class="text-red-700">*</span></label
                      >
                      <input
                        v-model="form.city"
                        class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500 bg-red-50': errors.city }"
                      />
                      <span class="text-red-500 text-sm">{{ errors.city }}</span>
                    </div>

                    <!-- State-->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >State / Province / Region <span class="text-red-700">*</span></label
                      >
                      <input
                        v-model="form.state"
                        class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500 bg-red-50': errors.state }"
                      />
                      <span class="text-red-500 text-sm">{{ errors.state }}</span>
                    </div>

                    <!-- Country -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Country <span class="text-red-700">*</span></label
                      >
                      <input
                        v-model="form.country"
                        value="United Kingdom"
                        disabled
                        class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 bg-gray-50"
                      />
                    </div>
                  </div>
                  <div class="form-group mt-6">
                    <label class="font-urbanist mb-2 block"
                      >Subject / Details<span class="text-red-700">*</span></label
                    >
                    <textarea
                      v-model="form.subject"
                      rows="6"
                      class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                      :class="{ 'border-red-500 bg-red-200': errors.subject }"
                    ></textarea>
                    <span class="text-red-500 text-sm">{{ errors.subject }}</span>
                  </div>
                  <!-- Submit Button -->
                  <div class="mt-8">
                    <button
                      type="submit"
                      :disabled="isSubmitting"
                      class="flex items-center justify-center rounded-4xl border border-brand-ash/15 px-1.5 py-1.5 font-urbanist font-semibold text-[1.2em] text-brand-white gap-2 bg-brand-main cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span v-if="isSubmitting" class="animate-spin mr-2">
                        <svg
                          class="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                          ></circle>
                          <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </span>
                      <span v-else>
                        <ArrowUpRight
                          class="text-brand-main bg-white w-12 h-12 rounded-full p-[0.7rem]"
                        />
                      </span>
                      <span class="text-brand-white text-xl font-urbanist pr-4">
                        {{ isSubmitting ? 'Submitting...' : 'Get in touch!' }}
                      </span>
                    </button>
                  </div>
                  <div
                    v-if="showSuccess"
                    class="fixed top-5 right-5 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl shadow-lg z-50 flex items-center gap-2"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Contact Form submitted successfully!</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="md:w-[70%]">
            <img
              src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178760/newwww_wpyaom.jpg"
              alt=""
              class="w-full h-[30rem] md:h-[50rem] object-cover rounded-4xl"
            />
          </div>
        </div>
      </div>
      <div
        class="bg-black w-[100%] mx-auto rounded-3xl mt-25 px-5 md:px-20 pt-10 md:pt-20 pb-20 text-white"
      >
        <div class="flex md:flex-row flex-col justify-between items-start">
          <!-- Logo and Description -->
          <div class="md:w-[35%]">
            <img
              src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757160964/logo_white_mix_ehbdku.png"
              alt="Sparkleklin Logo"
              class="w-38 pb-5"
            />
            <p class="font-urbanist text-md text-justify font-normal text-brand-ash leading-5">
              Experience the difference with Sparkleklin's professional home cleaning services. From
              top to bottom, we ensure every corner of your home/office sparkles with cleanliness
              and care.
            </p>
          </div>

          <!-- Links Section -->
          <div class="md:w-[60%]">
            <div class="flex flex-col md:flex-row justify-center gap-20">
              <!-- Services -->
              <div class="flex flex-col gap-3 text-brand-ash font-urbanist">
                <p class="text-white text-lg font-semibold font-syne">Services</p>
                <router-link
                  v-for="service in services"
                  :key="service.path"
                  :to="service.path"
                  class="hover:text-brand-main transition-colors duration-300"
                >
                  {{ service.name }}
                </router-link>
              </div>

              <!-- Useful Links -->
              <div class="flex flex-col gap-3 text-brand-ash font-urbanist">
                <p class="text-white text-lg font-semibold font-syne">Useful Links</p>
                <router-link
                  v-for="link in usefulLinks"
                  :key="link.path"
                  :to="link.path"
                  class="hover:text-brand-main transition-colors duration-300"
                >
                  {{ link.name }}
                </router-link>
              </div>

              <!-- Contact Info -->
              <div class="flex flex-col gap-3 text-brand-ash font-urbanist">
                <p class="text-white text-lg font-semibold font-syne">Contact</p>
                <a
                  v-for="contact in contactInfo"
                  :key="contact.value"
                  :href="contact.link"
                  class="hover:text-brand-main transition-colors duration-300"
                >
                  {{ contact.value }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Media and Copyright -->
        <div class="md:-mt-5 mt-10">
          <div class="flex gap-5">
            <a
              v-for="social in socialMedia"
              :key="social.name"
              :href="social.link"
              target="_blank"
              rel="noopener noreferrer"
              class="border rounded-full p-2 text-brand-ash border-brand-ash hover:text-brand-main hover:border-brand-main transition-colors duration-300"
            >
              <Icon :icon="social.icon" width="24" height="24" />
            </a>
          </div>
          <div class="text-brand-ash font-urbanist mt-10 md:mt-15">
            © {{ new Date().getFullYear() }} Copyright by Sparkleklin Inc.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import { ref, reactive } from 'vue'
import MainHeader from '@/components/MainHeader.vue'
import { Icon } from '@iconify/vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://qjhwzwiymibswvxonemf.supabase.co',
  import.meta.env.VITE_APP_SUPABASE_KEY,
)

useScrollAnimation()

const isSubmitting = ref(false)
const showSuccess = ref(false)
const form = reactive({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  cleaningDate: '',
  service: '',
  hoursPerVisit: '',
  frequency: '',
  daysfrequency: '',
  oftenfrequency: '',
  address: '',
  addressline: '',
  streetaddress: '',
  city: '',
  state: '',
  country: 'United Kingdom',
  subject: '',
  headersubject: 'New Request Form Submitted!',
})

const errors = reactive({})
const hasFormErrors = ref(false)

const validateForm = () => {
  const newErrors = {}

  // Required field validation
  if (!form.firstName) newErrors.firstName = 'First name is required'
  if (!form.lastName) newErrors.lastName = 'Last name is required'
  if (!form.phone) newErrors.phone = 'Phone number is required'
  if (!form.email) newErrors.email = 'Email is required'
  if (!form.cleaningDate) newErrors.cleaningDate = 'Cleaning date is required'
  if (!form.service) newErrors.service = 'Service selection is required'
  if (!form.hoursPerVisit) newErrors.hoursPerVisit = 'Hours per visit is required'
  if (!form.frequency) newErrors.frequency = 'Frequency is required'
  if (!form.daysfrequency) newErrors.daysfrequency = 'Days selection is required'
  if (!form.oftenfrequency) newErrors.oftenfrequency = 'Time of day is required'
  if (!form.address) newErrors.address = 'Address is required'
  if (!form.streetaddress) newErrors.streetaddress = 'Street address is required'
  if (!form.city) newErrors.city = 'City is required'
  if (!form.state) newErrors.state = 'State is required'
  if (!form.subject) newErrors.subject = 'Details are required'

  // Email validation
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    newErrors.email = 'Please enter a valid email address'
  }

  // Phone validation
  if (form.phone && !/^[\d\s+()-]+$/.test(form.phone)) {
    newErrors.phone = 'Please enter a valid phone number'
  }

  // Hours validation
  if (form.hoursPerVisit && Number(form.hoursPerVisit) < 1) {
    newErrors.hoursPerVisit = 'Minimum 1 hour required'
  }

  Object.assign(errors, newErrors)
  return Object.keys(newErrors).length === 0
}

const handleSubmit = async (event) => {
  event.preventDefault()
  hasFormErrors.value = false

  if (validateForm()) {
    isSubmitting.value = true
    try {
      const { error: dbError } = await supabase.from('sparkleklincontactform').insert({
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        phone: form.phone,
        cleaning_date: form.cleaningDate,
        service: form.service,
        hours_per_visit: form.hoursPerVisit,
        frequency: form.frequency,
        daysfrequency: form.daysfrequency,
        oftenfrequency: form.oftenfrequency,
        address: form.address,
        address_line: form.addressline,
        str_add: form.streetaddress,
        city: form.city,
        state: form.state,
        country: form.country,
        subject: form.subject,
        created_at: new Date().toISOString(),
      })

      if (dbError) throw new Error('Failed to save to database: ' + dbError.message)

      const response = await fetch('https://hook.eu2.make.com/dcvbne4wixk9oufemwi1naqy7f7cobm4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        // Reset form
        Object.keys(form).forEach((key) => {
          if (key !== 'country') form[key] = ''
        })
        // Show success message
        showSuccess.value = true
        // Hide success message after 5 seconds
        setTimeout(() => {
          showSuccess.value = false
        }, 5000)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('Failed to submit form. Please try again.')
    } finally {
      isSubmitting.value = false
    }
  } else {
    hasFormErrors.value = true
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const services = [
  { name: 'Commercial Cleaning', path: '/services/commercial' },
  { name: 'Domestic Cleaning', path: '/services/domestic' },
  { name: 'Clearance Cleaning', path: '/special-cleaning/decluttercleaning' },
  { name: 'Spring Cleaning', path: '/special-cleaning/spring' },
  { name: 'Pre & Post Tenancy Cleaning', path: '/special-cleaning/tenancycleaning' },
]

const usefulLinks = [
  { name: 'About Us', path: '/aboutus' },
  { name: 'Career', path: '/jobs' },
  { name: 'Why Choose Us?', path: '/faqs' },
  { name: 'Terms & Conditions', path: '#' },
  { name: 'Privacy Policy', path: '#' },
]

const contactInfo = [
  { value: '+447351357925', link: 'tel:+447351357925' },
  { value: 'admin@sparkleklin.co.uk', link: 'mailto:admin@sparkleklin.co.uk' },
  { value: 'contact@sparkleklin.co.uk', link: 'mailto:contact@sparkleklin.co.uk' },
]

const socialMedia = [
  { name: 'Twitter', icon: 'proicons:x-twitter', link: 'https://x.com/sparklekli57710?s=21' },
  {
    name: 'Instagram',
    icon: 'mdi:instagram',
    link: 'https://www.instagram.com/sparkleklin?igsh=OThwcjl1dG0zazFr&utm_source=qr',
  },
  {
    name: 'Tiktok',
    icon: 'ic:outline-tiktok',
    link: 'https://www.tiktok.com/@sparkleklin?_t=ZN-8vff1WNWVUc&_r=1',
  },
]
</script>

<style scoped></style>
