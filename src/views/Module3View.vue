<template>
  <div class="min-h-screen">
    <ModuleHeader
      title="Application, Tools, and Career Evolution"
      description="Explore practical integration, modern tools, ethical challenges, and the future of AI QA careers."
    />

    <div class="max-w-4xl mx-auto px-4 py-12">
      <!-- Section 1: Practical Integration -->
      <LessonContent
        title="Practical Integration: AI in Testing Workflows"
        description="How to leverage AI for real-world test automation and quality assurance."
      >
        <div class="space-y-4">
          <h4>1. Test Generation with AI</h4>
          <p>AI can generate comprehensive test cases from code, reducing manual effort:</p>
          <div class="bg-indigo-900 p-4 rounded-lg">
            <strong>Workflow:</strong> Analyze function → Generate test scenarios → AI writes test cases → Human review → Execute
          </div>

          <h4>2. Bug Detection & Analysis</h4>
          <p>AI helps identify potential bugs through code analysis and predictive modeling:</p>
          <ul>
            <li>Static code analysis powered by AI</li>
            <li>Predictive defect detection</li>
            <li>Anomaly detection in logs and traces</li>
            <li>Root cause analysis automation</li>
          </ul>

          <h4>3. Self-Healing Tests</h4>
          <p>AI can automatically fix failing tests when UI elements locators change:</p>
          <div class="bg-slate-900 p-4 rounded-lg">
            <strong>Example:</strong> Playwright + AI can detect element changes and regenerate selectors automatically
          </div>

          <h4>4. MLOps Integration</h4>
          <p>Testing AI/ML pipelines themselves:</p>
          <ul>
            <li>Model validation and performance monitoring</li>
            <li>Data quality testing</li>
            <li>Model drift detection</li>
            <li>Feature importance validation</li>
          </ul>

          <h4>5. Test Prioritization</h4>
          <p>AI intelligently prioritizes which tests to run based on code changes:</p>
          <ul>
            <li>Impact analysis on test suite</li>
            <li>Risk-based test ordering</li>
            <li>Reduced test execution time</li>
          </ul>
        </div>
      </LessonContent>

      <!-- Section 2: Tools & Frameworks -->
      <LessonContent
        title="Modern Tools & Frameworks"
        description="The expanding ecosystem of AI-powered testing tools."
      >
        <div class="space-y-4">
          <h4>Foundational Tools</h4>
          <div class="bg-slate-900 p-4 rounded-lg space-y-3">
            <div class="border-l-4 border-blue-500 pl-3">
              <strong>Playwright:</strong> Browser automation framework with growing AI agent capabilities
            </div>
            <div class="border-l-4 border-purple-500 pl-3">
              <strong>Cypress:</strong> UI testing with AI-powered selector repair coming soon
            </div>
            <div class="border-l-4 border-green-500 pl-3">
              <strong>Selenium:</strong> Legacy but still powerful, integrating with AI layer frameworks
            </div>
          </div>

          <h4>AI-Specific Testing Tools</h4>
          <ul>
            <li><strong>GitHub Copilot:</strong> Generates test cases, boilerplate code</li>
            <li><strong>Cursor:</strong> IDE with AI-first testing experience</li>
            <li><strong>Maestro:</strong> Mobile automation with AI element detection</li>
            <li><strong>TestZeus:</strong> AI-powered test automation</li>
            <li><strong>Hercules:</strong> Self-healing test framework</li>
          </ul>

          <h4>Playwright + AI Agents</h4>
          <p>The most promising combination for modern testing:</p>
          <ul>
            <li>Record actions in natural language</li>
            <li>AI understands intent and generates code</li>
            <li>Self-healing capabilities</li>
            <li>Intelligent error recovery</li>
            <li>Vision-based element detection</li>
          </ul>

          <h4 class="mt-6">Emerging Tools (The "Explosion")</h4>
          <p>The AI testing landscape is rapidly evolving. New tools emerge regularly:</p>
          <div class="bg-gradient-to-r from-yellow-900 to-orange-900 p-4 rounded-lg">
            <strong>Lesson:</strong> Stay curious! The tool landscape changes monthly. Focus on principles over specific tools.
          </div>
        </div>
      </LessonContent>

      <!-- Section 3: Challenges & Ethics -->
      <LessonContent
        title="Challenges: Data Issues and Ethics"
        description="Understanding the broader implications of AI in quality assurance."
      >
        <div class="space-y-4">
          <h4>1. Data Quality Issues</h4>
          <p>AI systems are only as good as their training data:</p>
          <ul>
            <li>Incomplete or biased datasets</li>
            <li>Data drift over time</li>
            <li>Privacy concerns with sensitive test data</li>
            <li>Data ownership and licensing</li>
          </ul>

          <h4>2. Ethical Considerations</h4>
          <div class="space-y-3">
            <div class="bg-red-900 border-l-4 border-red-500 p-3 rounded">
              <strong>Bias:</strong> Can AI testing amplify existing biases? Must actively test for fairness.
            </div>
            <div class="bg-red-900 border-l-4 border-red-500 p-3 rounded">
              <strong>Transparency:</strong> Can QA teams explain why an AI made a decision? (Explainability)
            </div>
            <div class="bg-red-900 border-l-4 border-red-500 p-3 rounded">
              <strong>Accountability:</strong> Who is responsible when AI-generated tests miss a bug?
            </div>
          </div>

          <h4>3. Security & Privacy</h4>
          <ul>
            <li>Don't expose sensitive data to external AI APIs</li>
            <li>Secure storage of AI-generated test cases</li>
            <li>Compliance with regulations (GDPR, HIPAA, etc.)</li>
          </ul>

          <h4>4. The Human Element</h4>
          <p>AI augments but doesn't replace human QA expertise:</p>
          <ul>
            <li>AI generates; humans validate</li>
            <li>Domain knowledge still critical</li>
            <li>Critical thinking remains essential</li>
            <li>Job evolution, not elimination</li>
          </ul>
        </div>
      </LessonContent>

      <!-- Section 4: Career Evolution -->
      <LessonContent
        title="Career Evolution: AI QA Skills for the Future"
        description="How to future-proof your QA career in the age of AI."
      >
        <div class="space-y-4">
          <h4>From Manual Tester → AI QA Engineer</h4>
          <p>The role of QA is evolving. High-value skills include:</p>
          <ul>
            <li>Prompt engineering and AI tool expertise</li>
            <li>Understanding AI/ML concepts fundamentally</li>
            <li>Data quality and validation</li>
            <li>Test architecture for AI systems</li>
            <li>Risk assessment and mitigation</li>
            <li>Ethical AI evaluation</li>
          </ul>

          <h4>Key Role Shifts</h4>
          <div class="space-y-3">
            <div class="bg-blue-900 p-3 rounded-lg">
              <strong>1. Automation Architect:</strong> Design test infrastructure, not just write tests
            </div>
            <div class="bg-blue-900 p-3 rounded-lg">
              <strong>2. AI Quality Strategist:</strong> Assess quality of AI-generated test cases
            </div>
            <div class="bg-blue-900 p-3 rounded-lg">
              <strong>3. Data Quality Expert:</strong> Ensure training/test data integrity
            </div>
            <div class="bg-blue-900 p-3 rounded-lg">
              <strong>4. Risk & Compliance Specialist:</strong> Navigate AI ethics and regulations
            </div>
          </div>

          <h4>Skills to Develop NOW</h4>
          <ul>
            <li>✓ Prompt engineering (be fluent with AI tools)</li>
            <li>✓ Python/JavaScript for test automation</li>
            <li>✓ Basic ML/AI concepts and limitations</li>
            <li>✓ Cloud platforms (AWS Bedrock, Azure AI, GCP)</li>
            <li>✓ Data analysis and visualization</li>
            <li>✓ Soft skills: Critical thinking, communication</li>
          </ul>

          <h4>The Future is NOT Jobless</h4>
          <div class="bg-gradient-to-r from-green-900 to-teal-900 p-4 rounded-lg">
            <strong>Insight:</strong> AI will eliminate repetitive tasks, but humans will do higher-value work:
            <ul class="mt-2">
              <li>Strategic test planning</li>
              <li>Quality judgment and oversight</li>
              <li>Handling edge cases AI misses</li>
              <li>Mentoring and knowledge transfer</li>
            </ul>
          </div>
        </div>
      </LessonContent>

      <!-- Summary -->
      <div class="card p-8 bg-gradient-to-r from-indigo-900 to-purple-900 border-2 border-indigo-400 mt-8">
        <h3 class="text-2xl font-bold mb-4">🎓 Key Takeaways</h3>
        <ul class="space-y-2">
          <li>✓ AI transforms testing through generation, prioritization, and self-healing</li>
          <li>✓ Playwright + AI agents represent the future of test automation</li>
          <li>✓ Ethical considerations and bias testing are critical</li>
          <li>✓ QA careers are evolving, not disappearing—they're getting more strategic</li>
          <li>✓ Future-proof yourself by mastering AI tools and fundamental concepts</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import ModuleHeader from '../components/ModuleHeader.vue'
import LessonContent from '../components/LessonContent.vue'
</script>
