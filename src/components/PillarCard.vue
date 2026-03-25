<template>
  <RouterLink
    :to="link"
    class="card group p-8 cursor-pointer hover:scale-105 transform"
  >
    <div class="text-5xl mb-4">{{ icon }}</div>
    <h3 class="text-2xl font-bold mb-4 group-hover:text-indigo-400">
      {{ title }}
    </h3>
    <p class="text-gray-300 mb-6 leading-relaxed">
      {{ description }}
    </p>
    <div class="flex items-center text-indigo-400 group-hover:translate-x-2 transition-transform">
      <span>Explore</span>
      <span class="ml-2">→</span>
    </div>
  </RouterLink>
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
  },
  icon: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.card {
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.8));
}
</style>
