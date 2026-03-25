<template>
  <div class="card p-6 mb-6">
    <div class="flex items-start justify-between">
      <div class="flex-1">
        <h3 class="text-2xl font-bold mb-2">{{ title }}</h3>
        <p class="text-gray-400 mb-4">{{ description }}</p>
      </div>
      <div v-if="isCompleted" class="ml-4 text-3xl">✅</div>
    </div>
    <div class="mt-4 prose prose-invert max-w-none">
      <slot />
    </div>
    <div v-if="onComplete" class="mt-6">
      <button
        @click="handleComplete"
        class="btn-primary"
        :disabled="isCompleted"
      >
        {{ isCompleted ? 'Completed ✓' : 'Mark as Complete' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  onComplete: {
    type: Function,
    default: null
  }
})

const isCompleted = ref(false)

const handleComplete = () => {
  isCompleted.value = true
  if (props.onComplete) {
    props.onComplete()
  }
}
</script>

<style scoped>
.prose-invert :deep(p) {
  @apply text-gray-300 mb-2;
}

.prose-invert :deep(code) {
  @apply bg-slate-900 px-2 py-1 rounded text-indigo-400;
}

.prose-invert :deep(pre) {
  @apply bg-slate-900 p-4 rounded-lg overflow-x-auto;
}

.prose-invert :deep(h4) {
  @apply text-xl font-semibold mt-4 mb-2;
}

.prose-invert :deep(ul) {
  @apply list-disc list-inside text-gray-300 ml-4;
}

.prose-invert :deep(li) {
  @apply mb-1;
}
</style>
