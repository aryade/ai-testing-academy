<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="hero-gradient py-20">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-6">Welcome to AI Testing Academy</h1>
        <p class="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Master the intersection of AI/ML and quality assurance. Learn how to test, validate, and build reliable AI systems.
        </p>
        <div class="flex justify-center gap-4">
          <RouterLink to="/module/1" class="btn-primary text-lg px-6 py-3">
            Start Learning →
          </RouterLink>
          <RouterLink v-if="authStore.isAuthenticated" to="/dashboard" class="btn-secondary text-lg px-6 py-3">
            View Progress
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- 3 Pillars Section -->
    <section class="py-16 max-w-6xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">Three Core Pillars</h2>
      <p class="text-center text-gray-400 mb-12 text-lg">
        Learn AI testing through three comprehensive pillars. Click on any pillar to explore.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PillarCard
          icon="🎓"
          title="Fundamentals & Learning"
          description="Master AI/ML basics, explore tool ecosystems (ChatGPT, Claude, Bedrock), understand hallucinations, and learn RAG vs CoT prompting techniques."
          link="/module/1"
        />
        <PillarCard
          icon="🛡️"
          title="Quality & Reliability"
          description="Validate AI outputs, detect hallucinations, manage bias, implement best practices for human oversight, and test non-deterministic AI systems."
          link="/module/2"
        />
        <PillarCard
          icon="🚀"
          title="Application & Evolution"
          description="Integrate AI into testing workflows, explore Playwright + AI, understand MLOps, discuss ethics, and future-proof your AI QA career."
          link="/module/3"
        />
      </div>
    </section>

    <!-- Featured Project Section -->
    <section class="bg-slate-800 py-16 mt-16">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold mb-8">Build This Now</h2>
        <div class="card p-8 border-l-4 border-indigo-500">
          <h3 class="text-2xl font-bold mb-3">🔧 Session 4: Agent Inventory Project</h3>
          <p class="text-gray-300 mb-6">
            Get hands-on with a real-world project! Build an AI agent inventory system that demonstrates intelligent testing automation.
            Learn how to structure agents, manage workflows, and validate AI-driven test decisions in real-time.
          </p>
          <RouterLink to="/project/agent-inventory" class="btn-primary inline-block">
            Open Interactive Project →
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="text-5xl font-bold text-indigo-400 mb-2">3</div>
          <p class="text-gray-400">Learning Pillars</p>
        </div>
        <div class="text-center">
          <div class="text-5xl font-bold text-purple-400 mb-2">∞</div>
          <p class="text-gray-400">Hands-On Projects</p>
        </div>
        <div class="text-center">
          <div class="text-5xl font-bold text-pink-400 mb-2">🎯</div>
          <p class="text-gray-400">Career Growth</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PillarCard from '../components/PillarCard.vue'
import { useAuthStore } from '../stores/authStore'

const authStore = useAuthStore()
</script>
