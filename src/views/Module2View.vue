<template>
  <div class="min-h-screen">
    <ModuleHeader
      title="Quality, Reliability, and Risk Mitigation"
      description="Learn how to validate AI outputs, detect issues, implement best practices, and test non-deterministic systems reliably."
    />

    <div class="max-w-4xl mx-auto px-4 py-12">
      <!-- Section 1: Validation Challenges -->
      <LessonContent
        title="Validation Challenges: The Unique Problem with AI"
        description="Understand why testing AI systems is fundamentally different from traditional software testing."
      >
        <div class="space-y-4">
          <h4>The Testing Problem: Non-Determinism</h4>
          <p>Traditional software is deterministic—the same input always produces the same output. AI systems are non-deterministic, meaning identical inputs can produce different outputs due to:</p>
          <ul>
            <li>Temperature/randomness settings in generation</li>
            <li>Model version updates</li>
            <li>Training data variations</li>
            <li>Probabilistic nature of neural networks</li>
          </ul>

          <h4>Three Key Validation Challenges</h4>

          <div class="space-y-3">
            <div class="bg-red-900 border-l-4 border-red-500 p-4 rounded">
              <strong>1. Hallucinations:</strong> AI generates convincing but false information. You can't rely on standard assertions like "output == expected_value".
            </div>

            <div class="bg-orange-900 border-l-4 border-orange-500 p-4 rounded">
              <strong>2. Flaky Outputs:</strong> The same prompt produces different results. How do you write reliable tests? Do you test for presence of keywords? For semantic similarity?
            </div>

            <div class="bg-yellow-900 border-l-4 border-yellow-500 p-4 rounded">
              <strong>3. Bias in Responses:</strong> AI can amplify societal biases in training data, producing unfair or discriminatory outputs for certain inputs.
            </div>
          </div>

          <h4>Example: Testing a Summarization AI</h4>
          <div class="bg-slate-900 p-4 rounded-lg">
            <strong>❌ Bad Test:</strong> assert summary == "exact expected summary"
            <p class="text-red-400 mt-2">⚠️ Will fail due to natural variation in wording</p>

            <strong class="block mt-4">✅ Better Test:</strong> Check for key concepts, verify factual accuracy against source, measure semantic similarity
            <p class="text-green-400 mt-2">✓ Accounts for natural variation while ensuring quality</p>
          </div>
        </div>
      </LessonContent>

      <!-- Section 2: Best Practices -->
      <LessonContent
        title="Best Practices: Testing AI Systems"
        description="Implement practical strategies for reliable AI validation."
      >
        <div class="space-y-4">
          <h4>1. Prompt Engineering</h4>
          <p>Well-crafted prompts produce more consistent, accurate, and verifiable outputs.</p>
          <div class="bg-indigo-900 p-3 rounded-lg text-sm">
            <strong>Principle:</strong> Be explicit about expectations, provide context, use temperature controls
          </div>

          <h4>2. Human Oversight</h4>
          <p>Never rely 100% on AI output. Implement human review checkpoints, especially for high-stakes decisions.</p>
          <ul>
            <li>Automated AI → Human Review → Production</li>
            <li>Red-team testing with adversarial inputs</li>
            <li>Continuous monitoring of outputs</li>
          </ul>

          <h4>3. Continuous Monitoring</h4>
          <p>Track AI system behavior over time. Set up alerts for:</p>
          <ul>
            <li>Degradation in output quality</li>
            <li>Increased hallucination rates</li>
            <li>Shifts in bias patterns</li>
            <li>Performance regression</li>
          </ul>

          <h4>4. Semantic Testing (Not Exact Matching)</h4>
          <div class="bg-slate-900 p-4 rounded-lg space-y-2">
            <strong>Test for semantic similarity instead of exact matching:</strong>
            <div class="mt-3 font-mono text-sm">
              <div class="text-gray-400">// Use embeddings/similarity scores</div>
              <div class="text-green-400">similarity = embeddings.cosine(output, expected)</div>
              <div class="text-green-400">assert similarity > 0.85</div>
            </div>
          </div>

          <h4>5. Regression Test Suite</h4>
          <p>Maintain a curated set of test cases that cover edge cases and known issues. Re-run these whenever AI models are updated.</p>
        </div>
      </LessonContent>

      <!-- Section 3: Testing Non-Deterministic Systems -->
      <LessonContent
        title="Testing Non-Deterministic AI Systems"
        description="Strategies specific to systems with probabilistic outputs."
      >
        <div class="space-y-4">
          <h4>Statistical Testing Approach</h4>
          <p>Instead of testing individual outputs, test aggregate behavior:</p>

          <div class="bg-slate-900 p-4 rounded-lg">
            <strong>Example: Testing Code Generation Quality</strong>
            <ul class="mt-3 space-y-2">
              <li>Generate code 10 times from same prompt</li>
              <li>Run tests on all generated variants</li>
              <li>Measure: success rate, code quality score, edge case handling</li>
              <li>Assert: ≥80% success rate, ≥ 75% quality score</li>
            </ul>
          </div>

          <h4>Differential Testing</h4>
          <p>Compare AI outputs across different models, versions, or prompts:</p>
          <ul>
            <li>If Model A and Model B both generate similar output, be confident it's correct</li>
            <li>If they diverge significantly, investigate potential issues</li>
          </ul>

          <h4>Property-Based Testing</h4>
          <p>Test properties that should always hold true:</p>
          <div class="bg-slate-900 p-4 rounded-lg space-y-2">
            <div class="border-l-4 border-green-500 pl-3">
              Generated SQL should be valid syntax ✓
            </div>
            <div class="border-l-4 border-green-500 pl-3">
              Summarized text length should be &lt; original ✓
            </div>
            <div class="border-l-4 border-green-500 pl-3">
              Classification should belong to expected categories ✓
            </div>
          </div>
        </div>
      </LessonContent>

      <!-- Section 4: Risk Mitigation -->
      <LessonContent
        title="Risk Mitigation Strategies"
        description="Proactive approaches to minimize AI-related risks."
      >
        <div class="space-y-4">
          <h4>1. Staged Rollout</h4>
          <ul>
            <li>Test with limited user group first</li>
            <li>Monitor performance metrics</li>
            <li>Expand gradually to full audience</li>
          </ul>

          <h4>2. Fallback Mechanisms</h4>
          <p>If AI produces questionable output, have a fallback:</p>
          <ul>
            <li>Use previous version results</li>
            <li>Route to human review</li>
            <li>Use simpler rule-based approach</li>
          </ul>

          <h4>3. Circuit Breakers</h4>
          <p>Automatically disable AI features if quality drops:</p>
          <div class="bg-slate-900 p-3 rounded-lg font-mono text-sm">
            <div class="text-gray-400">if error_rate &gt; threshold:</div>
            <div class="text-gray-400 ml-4">disable_feature()</div>
            <div class="text-gray-400 ml-4">alert_team()</div>
          </div>

          <h4>4. Audit Trails</h4>
          <p>Log all AI decisions for compliance and debugging:</p>
          <ul>
            <li>Input, output, confidence score, timestamp</li>
            <li>Use for post-incident analysis</li>
            <li>Detect patterns in failures</li>
          </ul>
        </div>
      </LessonContent>

      <!-- Summary -->
      <div class="card p-8 bg-gradient-to-r from-indigo-900 to-purple-900 border-2 border-indigo-400 mt-8">
        <h3 class="text-2xl font-bold mb-4">🎓 Key Takeaways</h3>
        <ul class="space-y-2">
          <li>✓ AI testing is fundamentally different—non-deterministic, prone to hallucinations</li>
          <li>✓ Validate quality semantically, not through exact matching</li>
          <li>✓ Use statistical and property-based testing for aggregate behavior</li>
          <li>✓ Human oversight is critical for high-stakes decisions</li>
          <li>✓ Continuous monitoring and fallbacks reduce production risk</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import ModuleHeader from '../components/ModuleHeader.vue'
import LessonContent from '../components/LessonContent.vue'
</script>
