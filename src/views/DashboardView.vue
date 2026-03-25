<template>
  <div class="min-h-screen">
    <div class="bg-gradient-to-r from-indigo-600 to-purple-600 py-12">
      <div class="max-w-6xl mx-auto px-4">
        <h1 class="text-4xl font-bold mb-2">Your Learning Dashboard</h1>
        <p class="text-indigo-100">Track your progress across all modules and projects</p>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 py-12">
      <!-- Welcome Card -->
      <div v-if="authStore.isAuthenticated" class="card p-8 mb-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <h2 class="text-2xl font-bold mb-2">Welcome, {{ userEmail }}</h2>
        <p class="text-gray-300">You can download your code submissions and track your learning goals here.</p>
      </div>

      <!-- Module Progress Cards -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Module Progress</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Module 1 -->
          <div class="card p-6">
            <div class="flex items-start justify-between mb-4">
              <div>
                <div class="text-3xl mb-2">🎓</div>
                <h3 class="text-xl font-bold">Fundamentals</h3>
              </div>
              <div v-if="authStore.userProgress.module1.completed" class="text-2xl">✅</div>
            </div>
            <div class="mb-4">
              <div class="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>{{ authStore.userProgress.module1.lessons.length }}/{{ LESSONS_PER_MODULE }}</span>
              </div>
              <div class="w-full bg-slate-700 rounded-full h-2">
                <div
                  class="bg-indigo-500 h-2 rounded-full"
                  :style="{ width: (authStore.userProgress.module1.lessons.length / LESSONS_PER_MODULE) * 100 + '%' }"
                ></div>
              </div>
            </div>
            <RouterLink to="/module/1" class="text-indigo-400 hover:text-indigo-300 text-sm font-semibold">
              Continue Learning →
            </RouterLink>
          </div>

          <!-- Module 2 -->
          <div class="card p-6">
            <div class="flex items-start justify-between mb-4">
              <div>
                <div class="text-3xl mb-2">🛡️</div>
                <h3 class="text-xl font-bold">Quality & Reliability</h3>
              </div>
              <div v-if="authStore.userProgress.module2.completed" class="text-2xl">✅</div>
            </div>
            <div class="mb-4">
              <div class="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>{{ authStore.userProgress.module2.lessons.length }}/{{ LESSONS_PER_MODULE }}</span>
              </div>
              <div class="w-full bg-slate-700 rounded-full h-2">
                <div
                  class="bg-purple-500 h-2 rounded-full"
                  :style="{ width: (authStore.userProgress.module2.lessons.length / LESSONS_PER_MODULE) * 100 + '%' }"
                ></div>
              </div>
            </div>
            <RouterLink to="/module/2" class="text-purple-400 hover:text-purple-300 text-sm font-semibold">
              Continue Learning →
            </RouterLink>
          </div>

          <!-- Module 3 -->
          <div class="card p-6">
            <div class="flex items-start justify-between mb-4">
              <div>
                <div class="text-3xl mb-2">🚀</div>
                <h3 class="text-xl font-bold">Application & Evolution</h3>
              </div>
              <div v-if="authStore.userProgress.module3.completed" class="text-2xl">✅</div>
            </div>
            <div class="mb-4">
              <div class="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>{{ authStore.userProgress.module3.lessons.length }}/{{ LESSONS_PER_MODULE }}</span>
              </div>
              <div class="w-full bg-slate-700 rounded-full h-2">
                <div
                  class="bg-pink-500 h-2 rounded-full"
                  :style="{ width: (authStore.userProgress.module3.lessons.length / LESSONS_PER_MODULE) * 100 + '%' }"
                ></div>
              </div>
            </div>
            <RouterLink to="/module/3" class="text-pink-400 hover:text-pink-300 text-sm font-semibold">
              Continue Learning →
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Projects Section -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold mb-6">Projects</h2>
        <div class="card p-8">
          <div class="flex items-start justify-between">
            <div>
              <h3 class="text-2xl font-bold mb-2">🔧 Session 4: Agent Inventory</h3>
              <p class="text-gray-300 mb-4">Build an AI agent inventory system with hands-on coding experience.</p>
              <div v-if="authStore.userProgress.project.completed" class="text-green-400 font-semibold mb-4">
                ✅ Project Completed
              </div>
              <div v-if="authStore.userProgress.project.submission" class="bg-slate-900 p-4 rounded-lg mb-4">
                <p class="text-sm text-gray-400">Submitted: {{ submissionDate }}</p>
              </div>
            </div>
          </div>
          <RouterLink to="/project/agent-inventory" class="btn-primary inline-block">
            Open Project →
          </RouterLink>
        </div>
      </div>

      <!-- Overall Statistics -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card p-8 text-center">
          <div class="text-5xl font-bold hero-gradient bg-clip-text text-transparent mb-2">
            {{ overallProgress }}%
          </div>
          <p class="text-gray-400">Overall Progress</p>
        </div>

        <div class="card p-8 text-center">
          <div class="text-5xl font-bold text-purple-400 mb-2">
            {{ authStore.userProgress.module1.lessons.length + authStore.userProgress.module2.lessons.length + authStore.userProgress.module3.lessons.length }}
          </div>
          <p class="text-gray-400">Lessons Completed</p>
        </div>

        <div class="card p-8 text-center">
          <div class="text-5xl font-bold text-pink-400 mb-2">
            {{ authStore.userProgress.project.completed ? 1 : 0 }}/1
          </div>
          <p class="text-gray-400">Projects Submitted</p>
        </div>
      </div>

      <!-- Logout Section -->
      <div class="mt-12 text-center">
        <button
          @click="logout"
          class="btn-secondary px-6 py-2"
        >
          Sign Out
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'
import { signOut } from '../services/supabase'
import { LESSONS_PER_MODULE, TOTAL_MODULES, PROJECTS_COUNT } from '../constants/config'

const router = useRouter()
const authStore = useAuthStore()

const userEmail = computed(() => authStore.user?.email || 'Student')

const totalProgressItems = computed(() => authStore.userProgress.module1.lessons.length
    + authStore.userProgress.module2.lessons.length
    + authStore.userProgress.module3.lessons.length)

const overallProgress = computed(() => {
  const total = totalProgressItems.value + (authStore.userProgress.project.completed ? 1 : 0)
  const max = (LESSONS_PER_MODULE * TOTAL_MODULES) + PROJECTS_COUNT
  return Math.round((total / max) * 100)
})

const submissionDate = computed(() => {
  if (!authStore.userProgress.project.submission?.submittedAt) return ''
  return new Date(authStore.userProgress.project.submission.submittedAt).toLocaleDateString()
})

const logout = async () => {
  await signOut()
  authStore.logout()
  router.push('/')
}
</script>
