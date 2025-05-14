<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white font-urbanist rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-lg font-bold">Contact Details</h3>
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
                  {{ contact?.first_name || 'N/A' }} {{ contact?.last_name || '' }}
                </p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Email</p>
                <p class="font-medium">{{ contact?.email || 'N/A' }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Phone</p>
                <p class="font-medium">{{ contact?.phone || 'N/A' }}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 class="font-medium mb-2">Service Details</h4>
            <div class="space-y-2">
              <div>
                <p class="text-sm text-gray-500">Service Type</p>
                <p class="font-medium">{{ contact?.service || 'N/A' }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Cleaning Date</p>
                <p class="font-medium">{{ formatDate(contact?.cleaning_date) }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Frequency</p>
                <p class="font-medium">{{ contact?.frequency || 'N/A' }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Address Information -->
        <div>
          <h4 class="font-medium mb-2">Address</h4>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-sm text-gray-500">Street Address</p>
              <p class="font-medium">{{ contact?.str_add || 'N/A' }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-500">Address Line</p>
              <p class="font-medium">{{ contact?.address_line || 'N/A' }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-500">City</p>
              <p class="font-medium">{{ contact?.city || 'N/A' }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-500">State</p>
              <p class="font-medium">{{ contact?.state || 'N/A' }}</p>
            </div>
          </div>
        </div>

        <!-- Additional Information -->
        <div>
          <h4 class="font-medium mb-2">Additional Information</h4>
          <div>
            <p class="text-sm text-gray-500">Subject</p>
            <p class="font-medium">{{ contact?.subject || 'N/A' }}</p>
          </div>
          <div class="mt-2">
            <p class="text-sm text-gray-500">Submission Date</p>
            <p class="font-medium">{{ formatDate(contact?.created_at) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  show: Boolean,
  contact: Object,
})

defineEmits(['close'])

const formatDate = (date) => {
  if (!date) return 'N/A'
  return new Date(date).toLocaleDateString()
}
</script>
