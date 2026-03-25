<template>
  <div id="app" class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
    <!-- Navigation -->
    <nav class="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center gap-8">
            <RouterLink to="/" class="font-bold text-2xl hero-gradient bg-clip-text text-transparent">
              🎓 AI Testing Academy
            </RouterLink>
            <div class="hidden md:flex gap-6">
              <RouterLink
                to="/"
                class="hover:text-indigo-400 transition-colors"
                :class="{ 'text-indigo-400': route.name === 'Home' }"
              >
                Home
              </RouterLink>
              <RouterLink
                to="/dashboard"
                class="hover:text-indigo-400 transition-colors"
                :class="{ 'text-indigo-400': route.name === 'Dashboard' }"
              >
                Dashboard
              </RouterLink>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <span v-if="authStore.isAuthenticated" class="text-sm text-gray-400">
              {{ authStore.user?.email }}
            </span>
            <RouterLink
              v-if="!authStore.isAuthenticated"
              to="/login"
              class="btn-primary"
            >
              Sign In
            </RouterLink>
            <button
              v-else
              @click="logout"
              class="btn-secondary"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <RouterView />
  </div>
</template>

<script setup>
import { useAuthStore } from './stores/authStore'
import { useRoute } from 'vue-router'
import { signOut } from './services/supabase'

const authStore = useAuthStore()
const route = useRoute()

const logout = async () => {
  await signOut()
  authStore.logout()
}
</script>

<style scoped>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}
</style>
