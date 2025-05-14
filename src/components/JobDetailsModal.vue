<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div
      class="bg-white rounded-xl font-urbanist p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
    >
      <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-lg font-bold">Application Details</h3>
        <button @click="$emit('close')" class="text-gray-500">
          <Icon icon="mdi:close" class="w-6 h-6" />
        </button>
      </div>

      <div class="space-y-6">
        <!-- Personal Information -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h4 class="font-medium mb-2">Personal Information</h4>
            <div class="space-y-2">
              <div>
                <p class="text-sm text-gray-500">Full Name</p>
                <p class="font-medium">
                  {{ application?.first_name || 'N/A' }} {{ application?.last_name || '' }}
                </p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Email</p>
                <p class="font-medium">{{ application?.email || 'N/A' }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Phone</p>
                <p class="font-medium">{{ application?.phone || 'N/A' }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Date of Birth</p>
                <p class="font-medium">{{ formatDate(application?.dob) }}</p>
              </div>
            </div>
          </div>

          <!-- Address Information -->
          <div>
            <h4 class="font-medium mb-2">Address</h4>
            <div class="space-y-2">
              <div>
                <p class="text-sm text-gray-500">Street Address</p>
                <p class="font-medium">{{ application?.streetaddress || 'N/A' }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Apartment/Unit</p>
                <p class="font-medium">{{ application?.apartment || 'N/A' }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">City, State</p>
                <p class="font-medium">
                  {{ application?.city || 'N/A'
                  }}{{ application?.city && application?.state ? ',' : '' }}
                  {{ application?.state || '' }}
                </p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Zip Code</p>
                <p class="font-medium">{{ application?.zipcode || 'N/A' }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Work Information -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h4 class="font-medium mb-2">Work Details</h4>
            <div class="space-y-2">
              <div>
                <p class="text-sm text-gray-500">DBS Certificate</p>
                <p class="font-medium">{{ application?.dbscert || 'N/A' }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Cleaning Experience</p>
                <p class="font-medium">{{ application?.cleaningexp || 'N/A' }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Work Authorization</p>
                <p class="font-medium">{{ application?.workauthorised || 'N/A' }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Visa Type</p>
                <p class="font-medium">{{ application?.visatype || 'N/A' }}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 class="font-medium mb-2">Additional Information</h4>
            <div class="space-y-2">
              <div>
                <p class="text-sm text-gray-500">Driving License</p>
                <p class="font-medium">{{ application?.drivinglicense || 'N/A' }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Availability</p>
                <p class="font-medium">{{ application?.availability || 'N/A' }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Callback Time</p>
                <p class="font-medium">{{ application?.time || 'N/A' }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Resume</p>
                <button
                  @click="viewResume(application?.resume_url)"
                  :disabled="isLoading || !application?.resume_url"
                  class="text-brand-main hover:underline flex items-center gap-1 disabled:opacity-50"
                >
                  <span>{{ application?.resume_url ? 'View Resume' : 'No Resume' }}</span>
                  <Icon v-if="isLoading" icon="eos-icons:loading" class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Message -->
        <div>
          <h4 class="font-medium mb-2">Additional Message</h4>
          <p class="whitespace-pre-wrap text-gray-600">
            {{ application?.message || 'No message provided' }}
          </p>
        </div>

        <!-- Status Update -->
        <div class="border-t pt-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500">Current Status</p>
              <span :class="getStatusClass(application?.status)">
                {{ application?.status || 'Pending' }}
              </span>
            </div>
            <!-- <button
              @click="$emit('updateStatus', application)"
              :disabled="isLoading"
              class="px-4 py-2 bg-brand-main text-white rounded-lg flex items-center gap-2 disabled:opacity-50"
            >
              <span>Update Status</span>
              <Icon v-if="isLoading" icon="eos-icons:loading" class="w-4 h-4" />
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

defineProps({
  show: Boolean,
  application: Object,
})

defineEmits(['close', 'updateStatus'])

const isLoading = ref(false)

const formatDate = (date) => {
  if (!date) return 'N/A'
  return new Date(date).toLocaleDateString()
}

const getStatusClass = (status) => {
  const classes = {
    Approved: 'text-green-600 bg-green-100 px-2 py-1 rounded-full text-sm',
    Declined: 'text-red-600 bg-red-100 px-2 py-1 rounded-full text-sm',
    Pending: 'text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full text-sm',
  }
  return classes[status] || classes['Pending']
}

const viewResume = (url) => {
  if (url) {
    isLoading.value = true
    window.open(url, '_blank')
    setTimeout(() => {
      isLoading.value = false
    }, 1000)
  }
}
</script>
