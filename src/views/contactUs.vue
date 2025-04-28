<template>
  <div>
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section>
      <div class="mx-25 mt-25">
        <div class="flex justify-center w-full">
          <div class="w-[100%]">
            <p
              class="font-urbanist text-brand-main w-fit px-2 py-1 font-semibold text-lg bg-brand-main/20 rounded-2xl"
            >
              Reach Out to Us
            </p>
            <p class="font-syne font-semibold text-4xl w-[60%]">Need Support? Contact Us Now!</p>
            <div>
              <div>
                <Form @submit="onSubmit" class="mt-8">
                  <div class="grid grid-cols-2 gap-8">
                    <!-- First Name -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block">First Name <span class="text-red-700">*</span></label>
                      <Field
                        name="firstName"
                        type="text"
                        rules="required"
                        v-slot="{ field, errors }"
                      >
                        <input
                          v-bind="field"
                          class="w-full px-5 py-5 rounded-xl text-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500': errors.length }"
                        />
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- Last Name -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block">Last Name <span class="text-red-700">*</span></label>
                      <Field
                        name="lastName"
                        type="text"
                        rules="required"
                        v-slot="{ field, errors }"
                      >
                        <input
                          v-bind="field"
                          class="w-full px-5 py-5 text-xl rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500': errors.length }"
                        />
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- Phone -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block">Phone</label>
                      <Field
                        name="phone"
                        type="tel"
                        rules="required|phone"
                        v-slot="{ field, errors }"
                      >
                        <input
                          v-bind="field"
                          class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500': errors.length }"
                        />
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- Email -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block">Email</label>
                      <Field
                        name="email"
                        type="email"
                        rules="required|email"
                        v-slot="{ field, errors }"
                      >
                        <input
                          v-bind="field"
                          class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500': errors.length }"
                        />
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- Cleaning Date -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block">Cleaning Date</label>
                      <Field name="cleaningDate" v-slot="{ field, errors }">
                        <div class="relative">
                          <input
                            type="date"
                            v-bind="field"
                            class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                            :class="{ 'border-red-500': errors.length }"
                          />
                          <span class="absolute right-3 top-3">
                            <i class="fas fa-calendar"></i>
                          </span>
                        </div>
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- Service Required -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block">Service Required</label>
                      <Field name="service" rules="required" v-slot="{ field, errors }">
                        <select
                          v-bind="field"
                          class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500': errors.length }"
                        >
                          <option value="">Select a service</option>
                          <option value="commercial">Commercial Cleaning</option>
                          <option value="office">Office Cleaning</option>
                          <option value="domestic">Domestic Cleaning</option>
                          <option value="supermarket">Supermarket Cleaning</option>
                        </select>
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- Hours per Visit -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block">Hours per Visit</label>
                      <Field
                        name="hoursPerVisit"
                        type="number"
                        rules="required|min_value:1"
                        v-slot="{ field, errors }"
                      >
                        <input
                          v-bind="field"
                          min="1"
                          class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500': errors.length }"
                        />
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- Frequency -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block">How Often</label>
                      <Field name="frequency" rules="required" v-slot="{ field, errors }">
                        <select
                          v-bind="field"
                          class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500': errors.length }"
                        >
                          <option value="">Select frequency</option>
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                          <option value="biweekly">Bi-weekly</option>
                          <option value="monthly">Monthly</option>
                        </select>
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- Address -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block">Address</label>
                      <Field name="address" rules="required" v-slot="{ field, errors }">
                        <textarea
                          v-bind="field"
                          rows="3"
                          class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500': errors.length }"
                        ></textarea>
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- City -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block">City</label>
                      <Field name="city" rules="required" v-slot="{ field, errors }">
                        <input
                          v-bind="field"
                          class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-main focus:ring-1 focus:ring-brand-main"
                          :class="{ 'border-red-500': errors.length }"
                        />
                        <span class="text-red-500 text-sm">{{ errors[0] }}</span>
                      </Field>
                    </div>

                    <!-- Country -->
                    <div class="form-group">
                      <label class="font-urbanist mb-2 block">Country</label>
                      <Field name="country" rules="required" v-slot="{ field }">
                        <input
                          v-bind="field"
                          value="United Kingdom"
                          disabled
                          class="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50"
                        />
                      </Field>
                    </div>
                  </div>

                  <!-- Submit Button -->
                  <div class="mt-8">
                    <button
                      type="submit"
                      class="bg-brand-main text-white px-8 py-3 rounded-xl font-urbanist hover:bg-brand-main/90 transition-colors"
                    >
                      Submit Request
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329725/Sparkleklin/2577_ygmqnl.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Form, Field } from 'vee-validate'
import MainHeader from '@/components/MainHeader.vue'
import * as yup from 'yup'


const validationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  phone: yup.string()
    .matches(/^[\d\s+()-]+$/, 'Please enter a valid phone number')
    .required('Phone number is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  cleaningDate: yup.date().required('Cleaning date is required'),
  service: yup.string().required('Service selection is required'),
  hoursPerVisit: yup.number().min(1).required('Hours per visit is required'),
  frequency: yup.string().required('Frequency is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  country: yup.string().required('Country is required')
})

const { handleSubmit } = useForm({
  validationSchema
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
  // Handle form submission
})
</script>

<style scoped></style>
