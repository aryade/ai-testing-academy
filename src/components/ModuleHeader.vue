<template>
  <div class="bg-gradient-to-r from-indigo-600 to-purple-600 py-8">
    <div class="max-w-6xl mx-auto px-4">
      <RouterLink to="/" class="text-indigo-200 hover:text-white mb-4 inline-flex items-center gap-2">
        <span>←</span> Back to Home
      </RouterLink>
      <h1 class="text-4xl font-bold mt-4">{{ title }}</h1>
      <p class="text-indigo-100 mt-2 text-lg">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
