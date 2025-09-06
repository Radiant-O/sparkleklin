<template>
  <div class="reveal">
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section>
      <div class="mx-5 md:mx-25 mt-25">
        <div>
          <p
            class="font-urbanist text-center text-brand-main w-fit mx-auto px-3 py-1.5 font-semibold text-xl bg-brand-main/20 rounded-2xl"
          >
            Jobs
          </p>
          <p class="font-syne font-semibold text-center text-3xl md:text-5xl">Work With Us</p>
          <div class="font-urbanist text-center text-normal text-black/60 md:w-[50%] mx-auto -mt-6">
            As a fast growing company, we have a lot of vacancies available for cleaning operatives,
            if you wish to apply please complete the form and we will get back to you as soon as
            possible.
          </div>
        </div>
        <div class="justify-center md:w-full mt-5 md:mt-10">
          <div class="md:w-[100%] md:border border-brand-ash/20 md:px-5 md:px-10 py-2 rounded-xl">
            <div>
              <div>
                <Form @submit="handleSubmit" class="mt-10">
                  <div class="grid md:grid-cols-2 space-y-5 md:space-x-8">
                    <div class="form-group">
                      <p class="font-syne text-xl font-semibold">Location and Hours: Various</p>
                    </div>
                    <div class="form-group">
                      <p class="font-syne text-xl">Salary: Competitive</p>
                    </div>

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

                    <!-- DOB -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Date of Birth <span class="text-red-700">*</span></label
                      >
                      <div class="relative">
                        <input
                          type="date"
                          v-model="form.dob"
                          class="w-full px-5 py-5 rounded-xl text-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500 bg-red-50': errors.dob }"
                        />
                        <span class="absolute right-3 top-3">
                          <i class="fas fa-calendar"></i>
                        </span>
                      </div>
                      <span class="text-red-500 text-sm">{{ errors.dob }}</span>
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
                      <label class="font-urbanist mb-2 block">Address Line 2 </label>
                      <input
                        v-model="form.addressline"
                        class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                      />
                    </div>

                    <!-- Apartment, building, etc.(optional) -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block">Apartment, building, etc. </label>
                      <input
                        v-model="form.apartment"
                        class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500 bg-red-50': errors.apartment }"
                      />
                      <span class="text-red-500 text-sm">{{ errors.apartment }}</span>
                    </div>

                    <!-- Zip Code -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Zip / Postal Code<span class="text-red-700">*</span></label
                      >
                      <input
                        v-model="form.zipcode"
                        class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500 bg-red-50': errors.zipcode }"
                      />
                      <span class="text-red-500 text-sm">{{ errors.zipcode }}</span>
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

                    <!-- DBS Cert -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Do you hold a DBS (Disclosure and Barring Service) Certificate
                        <span class="text-red-700">*</span></label
                      >
                      <select
                        v-model="form.dbscert"
                        class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500': errors.dbscert }"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      <span class="text-red-500 text-sm">{{ errors.dbscert }}</span>
                    </div>

                    <!-- Cleaning Experience -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Do you have any commercial cleaning experience?<span class="text-red-700"
                          >*</span
                        ></label
                      >
                      <select
                        v-model="form.cleaningexp"
                        class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500': errors.cleaningexp }"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      <span class="text-red-500 text-sm">{{ errors.cleaningexp }}</span>
                    </div>

                    <!-- Authorised to work -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Are you authorised to work in the UK?<span class="text-red-700"
                          >*</span
                        ></label
                      >
                      <select
                        v-model="form.workauthorised"
                        class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500': errors.workauthorised }"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      <span class="text-red-500 text-sm">{{ errors.workauthorised }}</span>
                    </div>

                    <!-- Visa -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Type of Visa<span class="text-red-700">*</span></label
                      >
                      <select
                        v-model="form.visatype"
                        class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500': errors.visatype }"
                      >
                        <option value="">Select an option</option>
                        <option value="work_visa">Work Visa</option>
                        <option value="study_visa">Study Visa</option>
                        <option value="family_visa">Family Visa</option>
                        <option value="visitor_visa">Visitor Visa</option>
                        <option value="asylum_visa">Asylum & Humaniterian Visa</option>
                        <option value="ilr_visa">
                          Settlement and Indefinite Leave to Remain (ILR)
                        </option>
                      </select>
                      <span class="text-red-500 text-sm">{{ errors.visatype }}</span>
                    </div>

                    <!-- Driving License -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Do you hold a Full UK Driving License?<span class="text-red-700"
                          >*</span
                        ></label
                      >
                      <select
                        v-model="form.drivinglicense"
                        class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500': errors.drivinglicense }"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      <span class="text-red-500 text-sm">{{ errors.drivinglicense }}</span>
                    </div>
                    <!-- Availability -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >How many hours would you be available to work?
                        <span class="text-red-700">*</span></label
                      >
                      <input
                        v-model="form.availability"
                        class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500 bg-red-50': errors.availability }"
                      />
                      <span class="text-red-500 text-sm">{{ errors.availability }}</span>
                    </div>

                    <!-- Date-->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Best time to call you back <span class="text-red-700">*</span></label
                      >

                      <div class="flex gap-5">
                        <div class="">
                          <input
                            v-model="form.hh"
                            type="number"
                            min="1"
                            max="12"
                            placeholder="HH"
                            class="px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                            :class="{ 'border-red-500 bg-red-50': errors.hh }"
                          />
                          <span class="text-red-500 text-sm">{{ errors.hh }}</span>
                        </div>
                        <div class="">
                          <input
                            v-model="form.mm"
                            type="number"
                            min="0"
                            max="59"
                            placeholder="MM"
                            class="px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                            :class="{ 'border-red-500 bg-red-50': errors.mm }"
                          />
                          <span class="text-red-500 text-sm">{{ errors.mm }}</span>
                        </div>
                        <div class="">
                          <select
                            v-model="form.am_pm"
                            class="px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                            :class="{ 'border-red-500': errors.am_pm }"
                          >
                            <option value="">Select</option>
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                          </select>
                          <span class="text-red-500 text-sm">{{ errors.am_pm }}</span>
                        </div>
                      </div>
                    </div>

                    <!-- Resume Upload -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block">
                        Upload your CV/Resume <span class="text-red-700">*</span>
                      </label>
                      <div class="relative">
                        <input
                          type="file"
                          @change="handleFileUpload"
                          accept=".pdf,.doc,.docx"
                          class="hidden"
                          ref="fileInput"
                        />
                        <button
                          type="button"
                          @click="$refs.fileInput.click()"
                          class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main flex items-center gap-2"
                          :class="{ 'border-red-500 bg-red-50': errors.resume }"
                        >
                          <span v-if="form.resume">
                            {{ form.resume.name }}
                          </span>
                          <span v-else> Click to upload CV/Resume </span>
                        </button>
                        <span
                          v-if="form.resume"
                          @click="removeFile"
                          class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-red-500"
                        >
                          ✕
                        </span>
                      </div>
                      <p class="text-sm text-gray-500 mt-1">
                        Accepted formats: PDF, DOC, DOCX (Max 5MB)
                      </p>
                      <span class="text-red-500 text-sm">{{ errors.resume }}</span>
                    </div>
                  </div>
                  <div class="form-group mt-6">
                    <label class="font-urbanist mb-2 block"
                      >Any Other thing we should know about you / Message<span class="text-red-700"
                        >*</span
                      ></label
                    >
                    <textarea
                      v-model="form.message"
                      rows="6"
                      class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                      :class="{ 'border-red-500 bg-red-200': errors.message }"
                    ></textarea>
                    <span class="text-red-500 text-sm">{{ errors.message }}</span>
                  </div>
                  <div class="form-group mt-6">
                    <label class="font-urbanist mb-2 block font-semibold">
                      Please Accept Our Terms & Conditions:<span class="text-red-700">*</span>
                    </label>
                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        v-model="form.tc"
                        class="w-5 h-5 rounded-xl border border-gray-300 text-brand-main focus:ring-brand-main"
                        :class="{ 'border-red-500': errors.tc }"
                      />
                      <label class="font-urbanist mb-0 pl-3 text-lg"
                        >I accept the Terms & Conditions</label
                      >
                    </div>
                    <span class="text-red-500 text-sm block mt-1">{{ errors.tc }}</span>
                  </div>
                  <!-- <div class="form-group mt-6">
                    <label class="font-urbanist mb-2 block font-semibold"
                      >Please Accept Our Terms & Conditions:<span class="text-red-700"
                        >*</span
                      ></label
                    >
                    <input
                      type="checkbox"
                      v-model="form.tc"
                      class="rounded-xl border border-gray-300"
                      :class="{ 'border-red-500 bg-red-50': errors.tc }"
                    />
                    <label class="font-urbanist mb-2 pl-3 text-lg">T&C accepted</label>
                    <span class="text-red-500 text-sm">{{ errors.tc }}</span>
                  </div> -->
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
                        {{ isSubmitting ? 'Submitting...' : 'Submit Your Info!' }}
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
                    <span>Application Form submitted successfully!</span>
                  </div>
                </Form>
              </div>
            </div>
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

useScrollAnimation()

const supabase = createClient(
  'https://qjhwzwiymibswvxonemf.supabase.co',
  import.meta.env.VITE_APP_SUPABASE_KEY,
)

const hasFormErrors = ref(false)
const errors = reactive({})
const isSubmitting = ref(false)
const showSuccess = ref(false)
const form = reactive({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  dob: '',
  address: '',
  addressline: '',
  streetaddress: '',
  zipcode: '',
  apartment: '',
  city: '',
  state: '',
  dbscert: '',
  cleaningexp: '',
  workauthorised: '',
  drivinglicense: '',
  visatype: '',
  availability: '',
  resume: null,
  time: '',
  message: '',
  headersubject: 'New Job Application Form Submitted',
})

const validateForm = () => {
  const newErrors = {}

  // Required field validation
  if (!form.firstName) newErrors.firstName = 'First name is required'
  if (!form.lastName) newErrors.lastName = 'Last name is required'
  if (!form.phone) newErrors.phone = 'Phone number is required'
  if (!form.email) newErrors.email = 'Email is required'
  if (!form.dob) newErrors.dob = 'Date of Birth is required'
  if (!form.address) newErrors.address = 'Address is required'
  if (!form.streetaddress) newErrors.streetaddress = 'Street address is required'
  if (!form.city) newErrors.city = 'City is required'
  if (!form.state) newErrors.state = 'State is required'
  if (!form.zipcode) newErrors.zipcode = 'Please Enter Zipcode'
  if (!form.apartment) newErrors.apartment = 'Please Enter apartment'
  if (!form.dbscert) newErrors.dbscert = 'Please select if you have a dbs certificate or not'
  if (!form.cleaningexp) newErrors.cleaningexp = 'Let us know if you have work experience'
  if (!form.workauthorised)
    newErrors.workauthorised = 'Please select if you have work authorization or not'
  if (!form.visatype) newErrors.visatype = 'Please select your visa type'
  if (!form.availability) newErrors.availability = 'Please specify your available hours'
  if (!form.resume) newErrors.resume = 'Please upload your CV/Resume'
  if (!form.drivinglicense) newErrors.drivinglicense = 'Please select if you have a driver license'
  if (!form.message) newErrors.message = 'Message are required'

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

  if (!form.tc) {
    newErrors.tc = 'You must accept the Terms & Conditions to proceed'
  }

  if (!form.hh) newErrors.hh = 'Hours required'
  if (!form.mm) newErrors.mm = 'Minutes required'
  if (!form.am_pm) newErrors.am_pm = 'AM/PM required'

  if (form.hh && form.mm && form.am_pm) {
    const hours = parseInt(form.hh)
    const minutes = parseInt(form.mm)

    if (hours < 1 || hours > 12) {
      newErrors.hh = 'Hours must be between 1-12'
    }
    if (minutes < 0 || minutes > 59) {
      newErrors.mm = 'Minutes must be between 0-59'
    }

    if (!newErrors.hh && !newErrors.mm && !newErrors.am_pm) {
      const paddedHours = hours.toString().padStart(2, '0')
      const paddedMinutes = minutes.toString().padStart(2, '0')
      form.time = `${paddedHours}:${paddedMinutes} ${form.am_pm}`
    }
  }
  if (form.resume) {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]
    if (!allowedTypes.includes(form.resume.type)) {
      newErrors.resume = 'Please upload PDF or Word document only'
    }
    // Check if file is larger than 5MB
    if (form.resume.size > 5 * 1024 * 1024) {
      newErrors.resume = 'File size should be less than 5MB'
    }
  }

  Object.assign(errors, newErrors)
  return Object.keys(newErrors).length === 0
}

const updateTime = () => {
  if (form.hh && form.mm && form.am_pm) {
    const hours = parseInt(form.hh)
    const minutes = parseInt(form.mm)

    if (hours >= 1 && hours <= 12 && minutes >= 0 && minutes <= 59) {
      const paddedHours = hours.toString().padStart(2, '0')
      const paddedMinutes = minutes.toString().padStart(2, '0')
      form.time = `${paddedHours}:${paddedMinutes} ${form.am_pm}`
    }
  }
}

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    form.resume = file
    // Clear any previous error
    if (errors.resume) {
      delete errors.resume
    }
  }
}

const removeFile = () => {
  form.resume = null
  if (errors.resume) {
    delete errors.resume
  }
}

const uploadToSupabase = async (formData, file) => {
  try {
    const fileExt = file.name.split('.').pop()
    const fileName = `${formData.firstName.trim()}-${formData.lastName.trim()}-${Date.now()}.${fileExt}`
    const filePath = `${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('sparkleklinform') // this is the bucket name
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true,
        contentType: file.type,
      })

    if (uploadError) {
      throw new Error('File upload failed: ' + uploadError.message)
    }

    // Get public URL
    const { data: publicUrlData } = supabase.storage.from('sparkleklinform').getPublicUrl(filePath)

    const fileUrl = publicUrlData.publicUrl

    // Continue to insert application data
    const applicationData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      dob: formData.dob,
      address: formData.address,
      str_add: formData.streetaddress,
      address2: formData.addressline,
      apartment: formData.apartment,
      city: formData.city,
      state: formData.state,
      zipcode: formData.zipcode,
      dbs_cert: formData.dbscert,
      clean_exp: formData.cleaningexp,
      work_auth: formData.workauthorised,
      visa_type: formData.visatype,
      driving_license: formData.drivinglicense,
      availability: formData.availability,
      callback_time: formData.time,
      message: formData.message,
      resume_url: fileUrl,
      created_at: new Date().toISOString(),
    }

    const { error: dbError } = await supabase.from('sparkleklinjobforms').insert(applicationData)

    if (dbError) {
      throw new Error('Failed to save application data: ' + dbError.message)
    }

    return true
  } catch (error) {
    console.error('Supabase error:', error)
    throw error
  }
}

const handleSubmit = async (event) => {
  event.preventDefault()
  hasFormErrors.value = false

  updateTime()
  if (validateForm()) {
    isSubmitting.value = true
    try {
      // Upload to Supabase first
      await uploadToSupabase(form, form.resume)

      const formData = new FormData()

      // Add all form fields
      Object.keys(form).forEach((key) => {
        formData.append(key, form[key])
      })

      await fetch('https://hook.eu2.make.com/dcvbne4wixk9oufemwi1naqy7f7cobm4', {
        method: 'POST',
        body: formData, // Send as FormData instead of JSON
      })

      Object.keys(form).forEach((key) => {
        form[key] = key === 'country' ? 'United Kingdom' : key === 'resume' ? null : ''
      })
      // Show success message
      showSuccess.value = true
      // Hide success message after 5 seconds
      setTimeout(() => {
        showSuccess.value = false
      }, 5000)
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
