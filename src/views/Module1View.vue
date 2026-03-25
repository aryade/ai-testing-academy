<template>
  <div class="min-h-screen">
    <ModuleHeader
      title="Fundamentals and Learning AI Concepts"
      description="Master the foundations of AI/ML basics, explore powerful tools, understand core differences, and learn essential prompting techniques."
    />

    <div class="max-w-4xl mx-auto px-4 py-12">
      <!-- Section 1: AI/ML Basics -->
      <LessonContent
        title="AI vs ML: Understanding the Difference"
        description="Learn the fundamental concepts that form the foundation of modern AI systems."
      >
        <div class="space-y-4">
          <h4>What is Artificial Intelligence (AI)?</h4>
          <p>Artificial Intelligence is a broad field that focuses on creating intelligent machines that can perform tasks typically requiring human intelligence. This includes learning, reasoning, problem-solving, and language understanding.</p>

          <h4>What is Machine Learning (ML)?</h4>
          <p>Machine Learning is a subset of AI where systems learn from data without being explicitly programmed. Instead of hard-coding rules, ML algorithms identify patterns in data and improve with experience.</p>

          <h4>Key Difference</h4>
          <ul>
            <li><strong>AI:</strong> The entire field of creating intelligent systems</li>
            <li><strong>ML:</strong> A specific technique where systems learn from data</li>
          </ul>

          <div class="bg-slate-900 p-4 rounded-lg border border-indigo-500">
            <strong>Real-World Example:</strong> ChatGPT is an AI system powered by ML (specifically, a Large Language Model trained on massive amounts of text data).
          </div>
        </div>
      </LessonContent>

      <!-- Section 2: Tool Familiarity -->
      <LessonContent
        title="Popular AI Tools and Platforms"
        description="Explore the ecosystem of AI tools you'll encounter in modern QA workflows."
      >
        <div class="space-y-4">
          <h4>Major AI Platforms</h4>
          <ul>
            <li><strong>ChatGPT (OpenAI):</strong> Versatile conversational AI for writing, coding, analysis</li>
            <li><strong>Claude (Anthropic):</strong> Advanced reasoning, code generation, safety-focused</li>
            <li><strong>Copilot (GitHub/Microsoft):</strong> IDE integration for code suggestions and generation</li>
            <li><strong>Bedrock (AWS):</strong> Enterprise AI service with multiple foundation models</li>
            <li><strong>Cursor:</strong> AI-first code editor for developers</li>
          </ul>

          <div class="bg-slate-900 p-4 rounded-lg border border-purple-500">
            <strong>Testing Consideration:</strong> Each tool produces slightly different outputs for the same prompt. This non-determinism is a key testing challenge!
          </div>
        </div>
      </LessonContent>

      <!-- Section 3: Supervised Learning -->
      <LessonContent
        title="Supervised Learning: A Practical Example"
        description="Understanding how AI systems learn from labeled data."
      >
        <div class="space-y-4">
          <h4>What is Supervised Learning?</h4>
          <p>Supervised learning is a machine learning paradigm where the model learns from labeled data. Each input has a corresponding correct output (label), and the model learns to map inputs to outputs.</p>

          <h4>Practical Example: Email Spam Classification</h4>
          <div class="bg-slate-900 p-4 rounded-lg">
            <strong>Training Data:</strong>
            <ul class="mt-2">
              <li>Email 1: "Limited-time offer! Click now!" → Label: <span class="text-red-400">Spam</span></li>
              <li>Email 2: "Project update for Q1" → Label: <span class="text-green-400">Not Spam</span></li>
              <li>Email 3: "Congratulations! You've won!" → Label: <span class="text-red-400">Spam</span></li>
            </ul>
            <p class="mt-3">The model learns patterns (common spam words, sender reputation) and predicts whether new emails are spam.</p>
          </div>

          <h4>Why This Matters for Testing</h4>
          <p>When testing AI systems trained with supervised learning, validate that they correctly identify patterns learned during training.</p>
        </div>
      </LessonContent>

      <!-- Section 4: Hallucinations vs Accuracy -->
      <LessonContent
        title="Hallucinations: AI's Greatest Challenge"
        description="Understand one of the most critical concepts in AI testing."
      >
        <div class="space-y-4">
          <h4>What is an AI Hallucination?</h4>
          <p>A hallucination occurs when an AI generates plausible-sounding but incorrect or fabricated information. The AI isn't being malicious—it's following patterns in its training data to produce coherent text, even when factually wrong.</p>

          <h4>Real-World Examples</h4>
          <div class="bg-slate-900 p-4 rounded-lg space-y-2">
            <div class="border-l-4 border-red-500 pl-3">
              <strong>Hallucination Example 1:</strong> "Albert Einstein won the Nobel Prize for relativity." (False—he won it for the photoelectric effect)
            </div>
            <div class="border-l-4 border-red-500 pl-3">
              <strong>Hallucination Example 2:</strong> AI generating fake citations or made-up statistics
            </div>
          </div>

          <h4>Testing Strategy</h4>
          <p>Never blindly trust AI outputs. Validate AI-generated content against authoritative sources, especially for critical information.</p>
        </div>
      </LessonContent>

      <!-- Section 5: RAG vs CoT -->
      <LessonContent
        title="Prompting Techniques: RAG vs Chain-of-Thought"
        description="Master two fundamental prompt engineering approaches."
      >
        <div class="space-y-4">
          <h4>Retrieval-Augmented Generation (RAG)</h4>
          <p><strong>What it is:</strong> Feeding external data or documents to the AI so it generates answers based on those specific sources.</p>
          <div class="bg-indigo-900 p-4 rounded-lg">
            <strong>Example Prompt:</strong> "Using only these files (auth.py, requirements.txt), generate comprehensive test cases."
          </div>
          <p class="mt-2"><strong>Benefits:</strong> Reduces hallucinations, grounds responses in facts, ensures consistency with your data</p>

          <h4 class="mt-6">Chain-of-Thought (CoT) Prompting</h4>
          <p><strong>What it is:</strong> Asking the AI to explain its reasoning step-by-step before arriving at the final answer.</p>
          <div class="bg-purple-900 p-4 rounded-lg">
            <strong>Example Prompt:</strong> "Step 1: List inputs. Step 2: Map branches. Step 3: Define assertions. Now generate test cases."
          </div>
          <p class="mt-2"><strong>Benefits:</strong> Improves accuracy, provides transparency, helps catch errors in reasoning</p>

          <h4 class="mt-6">Comparison Table</h4>
          <div class="overflow-x-auto">
            <table class="w-full border border-slate-600 text-sm">
              <thead>
                <tr class="bg-slate-700">
                  <td class="border border-slate-600 p-2"><strong>Aspect</strong></td>
                  <td class="border border-slate-600 p-2"><strong>RAG</strong></td>
                  <td class="border border-slate-600 p-2"><strong>CoT</strong></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-slate-600 p-2">Focus</td>
                  <td class="border border-slate-600 p-2">Grounding in data</td>
                  <td class="border border-slate-600 p-2">Reasoning clarity</td>
                </tr>
                <tr class="bg-slate-800">
                  <td class="border border-slate-600 p-2">Reduces</td>
                  <td class="border border-slate-600 p-2">Hallucinations</td>
                  <td class="border border-slate-600 p-2">Reasoning errors</td>
                </tr>
                <tr>
                  <td class="border border-slate-600 p-2">Best for</td>
                  <td class="border border-slate-600 p-2">Factual queries</td>
                  <td class="border border-slate-600 p-2">Complex problems</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </LessonContent>

      <!-- Summary -->
      <div class="card p-8 bg-gradient-to-r from-indigo-900 to-purple-900 border-2 border-indigo-400 mt-8">
        <h3 class="text-2xl font-bold mb-4">🎓 Key Takeaways</h3>
        <ul class="space-y-2">
          <li>✓ AI is broad; ML is a specific subset using data-driven learning</li>
          <li>✓ The AI ecosystem is diverse—each tool has strengths and weaknesses</li>
          <li>✓ Supervised learning requires labeled data to learn patterns</li>
          <li>✓ Hallucinations are a fundamental challenge requiring human oversight</li>
          <li>✓ RAG grounds AI in facts; CoT improves reasoning transparency</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import ModuleHeader from '../components/ModuleHeader.vue'
import LessonContent from '../components/LessonContent.vue'
</script>
