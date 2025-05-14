<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white rounded-xl p-6 w-full max-w-md">
      <h3 class="text-lg font-bold mb-4">Update Application Status</h3>

      <div class="space-y-4">
        <div class="flex gap-2">
          <button
            v-for="status in ['Approved', 'Pending', 'Declined']"
            :key="status"
            @click="selectedStatus = status"
            :class="[
              'px-4 py-2 rounded-lg flex-1 transition-colors',
              selectedStatus === status
                ? 'bg-brand-main text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
            ]"
          >
            {{ status }}
          </button>
        </div>

        <div class="flex justify-end gap-2">
          <button
            @click="$emit('close')"
            class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            :disabled="isLoading"
          >
            Cancel
          </button>
          <button
            @click="updateStatus"
            class="px-4 py-2 bg-brand-main text-white rounded-lg flex items-center gap-2 hover:bg-brand-main/90 disabled:opacity-50"
            :disabled="isLoading"
          >
            <span>Save Changes</span>
            <Icon v-if="isLoading" icon="eos-icons:loading" class="w-4 h-4 animate-spin" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  show: Boolean,
  applicationId: String,
  currentStatus: {
    type: String,
    default: 'Pending',
  },
  isLoading: Boolean,
})

const emit = defineEmits(['close', 'update'])
const selectedStatus = ref(props.currentStatus)

// Reset selected status when modal opens
watch(
  () => props.currentStatus,
  (newStatus) => {
    selectedStatus.value = newStatus || 'Pending'
  },
)

const updateStatus = () => {
  if (!props.applicationId) {
    console.error('No application ID provided')
    return
  }

  emit('update', {
    id: props.applicationId,
    status: selectedStatus.value,
  })
}
</script>
