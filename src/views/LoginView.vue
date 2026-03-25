<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="card p-8 w-full max-w-md">
      <h2 class="text-3xl font-bold mb-2">Welcome Back</h2>
      <p class="text-gray-400 mb-6">Sign in to save your progress and submit projects.</p>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-semibold mb-2">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full bg-slate-950 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2">Password</label>
          <input
            v-model="password"
            type="password"
            class="w-full bg-slate-950 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
            placeholder="••••••••"
            required
          />
        </div>

        <div v-if="error" class="bg-red-900 border border-red-700 px-4 py-3 rounded-lg text-sm">
          {{ error }}
        </div>

        <div v-if="success" class="bg-green-900 border border-green-700 px-4 py-3 rounded-lg text-sm text-green-200">
          {{ success }}
        </div>

        <button
          type="submit"
          :disabled="isLoading"
          class="w-full btn-primary py-2 font-semibold"
        >
          {{ isLoading ? 'Signing in...' : 'Sign In' }}
        </button>
      </form>

      <div class="mt-6 text-center">
        <p class="text-gray-400 text-sm mb-4">Don't have an account?</p>
        <button
          @click="toggleAuthMode"
          class="btn-secondary w-full py-2 font-semibold"
        >
          Create Account
        </button>
      </div>

      <div class="mt-6 pt-6 border-t border-slate-700">
        <div class="bg-slate-900 p-4 rounded-lg">
          <h4 class="font-semibold text-indigo-400 mb-2">Demo Credentials</h4>
          <p class="text-xs text-gray-400 mb-2">For testing, you can use:</p>
          <code class="text-xs text-gray-300 block">demo@example.com / password123</code>
          <p class="text-xs text-gray-500 mt-3">(Set up your Supabase project to use these)</p>
        </div>
      </div>

      <div class="mt-6 text-center">
        <RouterLink to="/" class="text-indigo-400 hover:text-indigo-300 text-sm">
          ← Back to Home
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'
import { signIn, signUp } from '../services/supabase'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const error = ref('')
const success = ref('')
const isLoading = ref(false)
const isSignUp = ref(false)

const toggleAuthMode = () => {
  isSignUp.value = !isSignUp.value
  error.value = ''
  success.value = ''
}

const handleLogin = async () => {
  error.value = ''
  success.value = ''
  isLoading.value = true

  try {
    if (isSignUp.value) {
      const { data, error: e } = await signUp(email.value, password.value)
      if (e) throw new Error(e.message)
      success.value = 'Check your email to confirm your account!'
    } else {
      const { data, error: e } = await signIn(email.value, password.value)
      if (e) throw new Error(e.message)

      authStore.setUser(data.user)
      authStore.setSession(data.session)

      router.push('/dashboard')
    }
  } catch (err) {
    error.value = err.message || 'Authentication failed. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>
