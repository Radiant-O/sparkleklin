<template>
  <div>
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
                <Form @submit="onSubmit" class="mt-10">
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
                      <Field name="firstName" type="text" v-slot="{ field, errors }">
                        <input
                          v-bind="field"
                          class="w-full px-5 py-5 rounded-xl text-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500 bg-red-50': errors.length }"
                        />
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- Last Name -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Last Name <span class="text-red-700">*</span></label
                      >
                      <Field name="lastName" type="text" v-slot="{ field, errors }">
                        <input
                          v-bind="field"
                          class="w-full px-5 py-5 rounded-xl text-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500 bg-red-50': errors.length }"
                        />
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- Phone -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Phone <span class="text-red-700">*</span></label
                      >
                      <Field name="phone" type="tel" v-slot="{ field, errors }">
                        <input
                          v-bind="field"
                          class="w-full px-5 py-5 rounded-xl text-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500 bg-red-50': errors.length }"
                        />
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- DOB -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Date of Birth <span class="text-red-700">*</span></label
                      >
                      <Field name="cleaningDate" v-slot="{ field, errors }">
                        <div class="relative">
                          <input
                            type="date"
                            v-bind="field"
                            class="w-full px-5 py-5 rounded-xl text-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                            :class="{ 'border-red-500 bg-red-50': errors.length }"
                          />
                          <span class="absolute right-3 top-3">
                            <i class="fas fa-calendar"></i>
                          </span>
                        </div>
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- Email -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Email address <span class="text-red-700">*</span></label
                      >
                      <Field name="email" type="email" v-slot="{ field, errors }">
                        <input
                          v-bind="field"
                          class="w-full px-5 py-5 rounded-xl text-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500 bg-red-50': errors.length }"
                        />
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- Address -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Address <span class="text-red-700">*</span></label
                      >
                      <Field name="address" type="text" v-slot="{ field, errors }">
                        <input
                          v-bind="field"
                          class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500 bg-red-50': errors.length }"
                        />
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- Street Address -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Street Address <span class="text-red-700">*</span></label
                      >
                      <Field name="streetaddress" type="text" v-slot="{ field, errors }">
                        <input
                          v-bind="field"
                          class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500 bg-red-50': errors.length }"
                        />
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- Address Line 2 -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Address Line 2 <span class="text-red-700">*</span></label
                      >
                      <Field name="addressline" type="text" v-slot="{ field, errors }">
                        <input
                          v-bind="field"
                          class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500 bg-red-50': errors.length }"
                        />
                      </Field>
                    </div>

                    <!-- Apartment, building, etc.(optional) -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block">Apartment, building, etc. </label>
                      <Field name="apartment" type="text" v-slot="{ field, errors }">
                        <input
                          v-bind="field"
                          class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500 bg-red-50': errors.length }"
                        />
                      </Field>
                    </div>

                    <!-- Zip Code -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Zip / Postal Code<span class="text-red-700">*</span></label
                      >
                      <Field name="zipcode" type="text" v-slot="{ field, errors }">
                        <input
                          v-bind="field"
                          class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500 bg-red-50': errors.length }"
                        />
                      </Field>
                    </div>

                    <!-- City -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >City <span class="text-red-700">*</span></label
                      >
                      <Field name="city" type="text" v-slot="{ field, errors }">
                        <input
                          v-bind="field"
                          class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500 bg-red-50': errors.length }"
                        />
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- State-->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >State / Province / Region <span class="text-red-700">*</span></label
                      >
                      <Field name="state" type="text" v-slot="{ field, errors }">
                        <input
                          v-bind="field"
                          class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500 bg-red-50': errors.length }"
                        />
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- DBS Cert -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Do you hold a DBS (Disclosure and Barring Service) Certificate
                        <span class="text-red-700">*</span></label
                      >
                      <Field name="dbscertificate" v-slot="{ field, errors }">
                        <select
                          v-bind="field"
                          class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500': errors.length }"
                        >
                          <option value="">Select an option</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- Cleaning Experience -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Do you have any commercial cleaning experience?<span class="text-red-700"
                          >*</span
                        ></label
                      >
                      <Field name="cleaningexperience" v-slot="{ field, errors }">
                        <select
                          v-bind="field"
                          class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500': errors.length }"
                        >
                          <option value="">Select an option</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- Authorised to work -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Are you authorised to work in the UK?<span class="text-red-700"
                          >*</span
                        ></label
                      >
                      <Field name="workauthorised" v-slot="{ field, errors }">
                        <select
                          v-bind="field"
                          class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500': errors.length }"
                        >
                          <option value="">Select an option</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- Driving License -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Do you hold a Full UK Driving License?<span class="text-red-700"
                          >*</span
                        ></label
                      >
                      <Field name="cleaningexperience" v-slot="{ field, errors }">
                        <select
                          v-bind="field"
                          class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500': errors.length }"
                        >
                          <option value="">Select an option</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- Date-->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block"
                        >Best time to call you back <span class="text-red-700">*</span></label
                      >
                      <div class="flex gap-2">
                        <Field name="hh" type="text" v-slot="{ field, errors }">
                          <input
                            v-bind="field"
                            placeholder="HH"
                            class="px-5 py-5 w-1/3 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                            :class="{ 'border-red-500 bg-red-50': errors.length }"
                          />
                          <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                        </Field>
                        <Field name="mm" type="text" v-slot="{ field, errors }">
                          <input
                            v-bind="field"
                            placeholder="MM"
                            class="px-5 py-5 w-1/3 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                            :class="{ 'border-red-500 bg-red-50': errors.length }"
                          />
                          <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                        </Field>
                        <Field name="am-pm" v-slot="{ field, errors }">
                          <select
                            v-bind="field"
                            class="md:w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                            :class="{ 'border-red-500': errors.length }"
                          >
                            <option value="AM" selected>AM</option>
                            <option value="PM">PM</option>
                          </select>
                          <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                        </Field>
                      </div>
                    </div>
                  </div>
                  <div class="form-group mt-6">
                    <label class="font-urbanist mb-2 block"
                      >Any Other thing we should know about you / Message<span class="text-red-700"
                        >*</span
                      ></label
                    >
                    <Field name="message" v-slot="{ field, errors }">
                      <textarea
                        v-bind="field"
                        rows="6"
                        class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                        :class="{ 'border-red-500 bg-red-200': errors.length }"
                      ></textarea>
                      <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                    </Field>
                  </div>
                  <div class="form-group mt-6">
                    <label class="font-urbanist mb-2 block font-semibold"
                      >Please Accept Our Terms & Conditions:<span class="text-red-700"
                        >*</span
                      ></label
                    >
                    <Field name="t&c" v-slot="{ field, errors }">
                      <input
                        type="checkbox"
                        v-bind="field"
                        class="rounded-xl border border-gray-300"
                        :class="{ 'border-red-500 bg-red-50': errors.length }"
                      />
                      <label class="font-urbanist mb-2 pl-3 text-lg">T&C accepted</label>
                      <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                    </Field>
                  </div>
                  <!-- Submit Button -->
                  <div class="mt-8">
                    <button
                      class="flex items-center justify-center rounded-4xl border border-brand-ash/15 px-1.5 py-1.5 font-urbanist font-semibold text-[1.2em] text-brand-white gap-2 bg-brand-main cursor-pointer"
                    >
                      <span
                        ><ArrowUpRight
                          class="text-brand-main bg-white w-12 h-12 rounded-full p-[0.7rem]"
                        />
                      </span>
                      <span class="text-brand-white text-xl font-urbanist pr-4"
                        >Submit your info</span
                      >
                    </button>
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
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745614935/Sparkleklin/logo_white_mix_ftx0rf.png"
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
import { Form, Field } from 'vee-validate'
import { ref } from 'vue'
import MainHeader from '@/components/MainHeader.vue'
import * as yup from 'yup'
import { useForm } from 'vee-validate'
import { Icon } from '@iconify/vue'

const hasFormErrors = ref(false)

const validationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  phone: yup
    .string()
    .matches(/^[\d\s+()-]+$/, 'Please enter a valid phone number')
    .required('Phone number is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  cleaningDate: yup.string().required('Cleaning date is required'), // Changed from date() to string()
  service: yup.string().required('Service selection is required'),
  hoursPerVisit: yup.number().min(1).required('Hours per visit is required'),
  frequency: yup.string().required('Frequency is required'),
  daysfrequency: yup.string().required('Days selection is required'),
  oftenfrequency: yup.string().required('How often cleaning required selection is required'),
  address: yup.string().required('Address is required'),
  streetaddress: yup.string().required('Street Address is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  country: yup.string().default('United Kingdom'),
  subject: yup.string().required('Give us few details'),
})

const initialValues = {
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
  streetaddress: '',
  city: '',
  state: '',
  country: 'United Kingdom',
  subject: '',
}

const { handleSubmit, resetForm } = useForm({
  validationSchema,
  initialValues,
})

const onSubmit = handleSubmit(
  (values) => {
    console.log('Form submitted:', values)
    hasFormErrors.value = false
    alert('Form submitted successfully!')
    resetForm()
  },
  (errors) => {
    console.log('Validation errors:', errors)
    hasFormErrors.value = true
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
)

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
  { value: 'info@sparklelin.co.uk', link: 'mailto:info@sparklelin.co.uk' },
  { value: 'contact@sparkleklin.co.uk', link: 'mailto:contact@sparkleklin.co.uk' },
]

const socialMedia = [
  { name: 'Twitter', icon: 'proicons:x-twitter', link: 'https://x.com/sparklekli57710?s=21' },
  { name: 'Instagram', icon: 'mdi:instagram', link: 'https://www.instagram.com/sparkleklin?igsh=OThwcjl1dG0zazFr&utm_source=qr' },
  { name: 'Tiktok', icon: 'ic:outline-tiktok', link: 'https://www.tiktok.com/@sparkleklin?_t=ZN-8vff1WNWVUc&_r=1' },
]
</script>

<style scoped></style>
