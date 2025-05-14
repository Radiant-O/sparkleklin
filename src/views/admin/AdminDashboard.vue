<template>
  <div class="p-6">
    <SearchLayout placeholder="Search across all submissions..." @search="handleGlobalSearch" />

    <!-- Header Section -->
    <div class="flex justify-between items-center mt-6 mb-8">
      <div>
        <h1 class="text-2xl font-syne font-bold">Dashboard Overview</h1>
        <p class="text-gray-600">Monitor submissions and applications</p>
      </div>
      <div class="flex gap-4 items-center">
        <input
          type="date"
          v-model="selectedDate"
          class="px-4 py-2 border rounded-lg"
          @change="filterByDate"
        />
      </div>
    </div>

    <!-- Metrics Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <MetricCard
        title="Job Applications"
        icon="material-symbols:work"
        :count="jobApplications.length"
        subtitle="Total applications"
      />

      <MetricCard
        title="Contact Forms"
        icon="material-symbols:contact-page"
        :count="contactForms.length"
        subtitle="Total enquiries"
      />
    </div>

    <!-- Recent Submissions Tabs -->
    <div class="bg-white rounded-xl shadow-sm p-6">
      <div class="flex gap-4 mb-6 font-syne text-gray-600">
        <p
          @click="activeTab = 'jobs'"
          :class="[
            'px-4 py-2 rounded-lg',
            activeTab === 'jobs' ? 'bg-brand-main text-white' : 'text-gray-600',
          ]"
        >
          Job Applications
        </p>
        <p
          @click="activeTab = 'contacts'"
          :class="[
            'px-4 py-2 rounded-lg',
            activeTab === 'contacts' ? 'bg-brand-main text-white' : 'text-gray-600',
          ]"
        >
          Contact Forms
        </p>
      </div>

      <!-- Job Applications Table -->
      <div v-if="activeTab === 'jobs'" class="overflow-x-auto">
        <div v-if="isLoading.fetch" class="flex justify-center py-8">
          <Icon icon="eos-icons:loading" class="w-8 h-8 text-brand-main animate-spin" />
        </div>
        <div v-else-if="!jobApplications.length" class="text-center py-8 text-gray-500">
          No applications found
        </div>
        <table v-else class="w-full">
          <thead class="bg-gray-50 font-syne text-gray-600">
            <tr>
              <th class="px-4 py-3 text-left">Name</th>
              <th class="px-4 py-3 text-left">Email</th>
              <th class="px-4 py-3 text-left">Date</th>
              <th class="px-4 py-3 text-left">Status</th>
              <th class="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody class="font-urbanist">
            <tr v-for="job in jobApplications" :key="job.id" class="border-t">
              <td class="px-4 py-3">
                <button @click="viewJobDetails(job)" class="hover:text-brand-main cursor-pointer">
                  {{ job.first_name }} {{ job.last_name }}
                </button>
              </td>
              <td class="px-4 py-3">{{ job.email }}</td>
              <td class="px-4 py-3">{{ formatDate(job.created_at) }}</td>
              <td class="px-4 py-3">
                <span :class="getStatusClass(job.status)">
      {{ job.status || 'Pending' }}
    </span>
              </td>
              <td class="px-4 flex gap-2 py-3">
                <p
                  @click="viewResume(job.resume_url)"
                  class="text-brand-main cursor-pointer hover:underline"
                >
                  View Resume
                </p>
                <p @click="updateStatus(job)" class="text-gray-600 cursor-pointer hover:underline">
                  Update Status
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Contact Forms Table -->
      <div v-if="activeTab === 'contacts'" class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 font-syne text-gray-600">
            <tr>
              <th class="px-4 py-3 text-left">Name</th>
              <th class="px-4 py-3 text-left">Email</th>
              <th class="px-4 py-3 text-left">Service</th>
              <th class="px-4 py-3 text-left">Date</th>
              <th class="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody class="font-urbanist">
            <tr v-for="contact in contactForms" :key="contact.id" class="border-t">
              <td class="px-4 py-3">{{ contact.first_name }} {{ contact.last_name }}</td>
              <td class="px-4 py-3">{{ contact.email }}</td>
              <td class="px-4 py-3">{{ contact.service }}</td>
              <td class="px-4 py-3">{{ formatDate(contact.created_at) }}</td>
              <td class="px-4 py-3">
                <button @click="viewDetails(contact)" class="text-brand-main hover:underline">
                  View Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Add modals at the end of the template -->
    <StatusUpdateModal
      :show="showStatusModal"
      :application-id="selectedApplication?.id"
      :current-status="selectedApplication?.status"
      :is-loading="isLoading.status"
      @close="showStatusModal = false"
      @update="handleStatusUpdate"
    />

    <ContactDetailsModal
      :show="showContactModal"
      :contact="selectedContact"
      @close="showContactModal = false"
    />

    <JobDetailsModal
      :show="showJobModal"
      :application="selectedJob"
      @close="showJobModal = false"
      @updateStatus="updateStatus"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'
import SearchLayout from '@/layouts/SearchLayout.vue'
import MetricCard from '@/components/MetricCard.vue'
import StatusUpdateModal from '@/components/StatusUpdateModal.vue'
import ContactDetailsModal from '@/components/ContactDetailsModal.vue'
import JobDetailsModal from '@/components/JobDetailsModal.vue'

const supabase = createClient(
  'https://qjhwzwiymibswvxonemf.supabase.co',
  import.meta.env.VITE_APP_SUPABASE_KEY,
)

const jobApplications = ref([])
const contactForms = ref([])
const activeTab = ref('jobs')
const selectedDate = ref('')

// Add new refs for modals
const showStatusModal = ref(false)
const showContactModal = ref(false)
const showJobModal = ref(false)
const selectedApplication = ref(null)
const selectedContact = ref(null)
const selectedJob = ref(null)
const isLoading = ref({
  fetch: false,
  status: false,
  search: false,
})

// Fetch data from Supabase
const fetchData = async () => {
  isLoading.value.fetch = true
  try {
    // Fetch job applications
    const { data: jobs } = await supabase
      .from('sparkleklinjobforms')
      .select('*')
      .order('created_at', { ascending: false })
      // console.log(jobs)
    jobApplications.value = jobs || []

    // Fetch contact forms
    const { data: contacts } = await supabase
      .from('sparkleklincontactform')
      .select('*')
      .order('created_at', { ascending: false })
      console.log(contacts)
    contactForms.value = contacts || []
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    isLoading.value.fetch = false
  }
}

// Filter by date
const filterByDate = async () => {
  if (!selectedDate.value) {
    await fetchData()
    return
  }

  const startDate = new Date(selectedDate.value)
  startDate.setHours(0, 0, 0, 0)
  const endDate = new Date(selectedDate.value)
  endDate.setHours(23, 59, 59, 999)

  const { data: jobs } = await supabase
    .from('sparkleklinjobforms')
    .select('*')
    .gte('created_at', startDate.toISOString())
    .lte('created_at', endDate.toISOString())

  const { data: contacts } = await supabase
    .from('sparkleklincontactform')
    .select('*')
    .gte('created_at', startDate.toISOString())
    .lte('created_at', endDate.toISOString())

  jobApplications.value = jobs || []
  contactForms.value = contacts || []
}

// Utility functions
const formatDate = (date) => {
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
  if (url) window.open(url, '_blank')
}

const viewDetails = (contact) => {
  selectedContact.value = contact
  showContactModal.value = true
}

const viewJobDetails = (job) => {
  selectedJob.value = job
  showJobModal.value = true
}

const updateStatus = (job) => {
  selectedApplication.value = job
  showStatusModal.value = true
}

// Update the handleStatusUpdate function
const handleStatusUpdate = async ({ id, status }) => {
  isLoading.value.status = true
  try {
    if (!id) {
      throw new Error('Invalid application ID')
    }

    // First update the status
    const { error: updateError } = await supabase
      .from('sparkleklinjobforms')
      .update({ status })
      .eq('id', id)

    if (updateError) throw updateError

    // Then fetch the updated record
    const { data: updatedJob, error: fetchError } = await supabase
      .from('sparkleklinjobforms')
      .select('*')
      .eq('id', id)
      .single()

    if (fetchError) throw fetchError

    // Update local state
    jobApplications.value = jobApplications.value.map(job => 
      job.id === id ? { ...job, status } : job
    )

    showStatusModal.value = false
    console.log('Status updated successfully:', updatedJob)

  } catch (error) {
    console.error('Error updating status:', error.message)
    alert('Failed to update status: ' + error.message)
  } finally {
    isLoading.value.status = false
  }
}

const handleGlobalSearch = async (query) => {
  isLoading.value.search = true
  try {
    if (!query) {
      await fetchData()
      return
    }

    const { data: jobs } = await supabase
      .from('sparkleklinjobforms')
      .select('*')
      .or(`first_name.ilike.%${query}%,last_name.ilike.%${query}%,email.ilike.%${query}%`)

    const { data: contacts } = await supabase
      .from('sparkleklincontactform')
      .select('*')
      .or(`first_name.ilike.%${query}%,last_name.ilike.%${query}%,email.ilike.%${query}%`)

    jobApplications.value = jobs || []
    contactForms.value = contacts || []
  } catch (error) {
    console.error('Error searching:', error)
  } finally {
    isLoading.value.search = false
  }
}

onMounted(() => {
  fetchData()
})
</script>
