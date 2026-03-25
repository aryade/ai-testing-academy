<template>
  <div style="padding: 20px; color: white;">
    <h1>🎓 AI Testing Academy</h1>
    <p>If you see this, Vue is working!</p>
    <button @click="count++">Count: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
console.log("App-test.vue loaded!")
</script>
