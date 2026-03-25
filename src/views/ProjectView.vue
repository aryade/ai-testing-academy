<template>
  <div class="min-h-screen">
    <ModuleHeader
      title="Build This Now: Session 4 Agent Inventory"
      description="Hands-on project using Monaco code editor. Build an AI agent inventory system demonstrating intelligent test automation."
    />

    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left: Instructions Panel -->
        <div class="lg:col-span-1">
          <div class="card p-6 sticky top-20 max-h-[calc(100vh-100px)] overflow-y-auto">
            <h3 class="text-2xl font-bold mb-4">📋 Project Brief</h3>

            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-indigo-400 mb-2">Objective</h4>
                <p class="text-sm text-gray-300">
                  Create an inventory management system for AI testing agents. Each agent should track configuration, capacity, and test assignments.
                </p>
              </div>

              <div>
                <h4 class="font-semibold text-purple-400 mb-2">Requirements</h4>
                <ul class="text-sm text-gray-300 space-y-1">
                  <li>✓ Create Agent class with name, type, capacity</li>
                  <li>✓ Initialize inventory with 3+ agents</li>
                  <li>✓ Implement assignment tracking</li>
                  <li>✓ Calculate utilization percentage</li>
                  <li>✓ Export summary report</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-pink-400 mb-2">Starter Code</h4>
                <button
                  @click="loadTemplate('basic')"
                  class="w-full btn-secondary text-sm py-1 mb-2"
                >
                  Load: Basic Template
                </button>
                <button
                  @click="loadTemplate('advanced')"
                  class="w-full btn-secondary text-sm py-1"
                >
                  Load: Advanced Template
                </button>
              </div>

              <div class="bg-slate-900 p-3 rounded-lg border border-indigo-500">
                <h4 class="font-semibold text-indigo-300 mb-2">💡 Tips</h4>
                <ul class="text-xs text-gray-400 space-y-1">
                  <li>• Start with the Agent class</li>
                  <li>• Use arrays for inventory</li>
                  <li>• Test with test cases (see below)</li>
                  <li>• Paste your code and run!</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-green-400 mb-2">Test Cases</h4>
                <button
                  @click="runTests"
                  class="w-full btn-primary text-sm py-1"
                >
                  Run Tests
                </button>
              </div>

              <div>
                <h4 class="font-semibold text-yellow-400 mb-2">Submit</h4>
                <button
                  v-if="authStore.isAuthenticated"
                  @click="submitProject"
                  class="w-full btn-primary text-sm py-1"
                >
                  Save Submission
                </button>
                <p v-else class="text-xs text-gray-500">
                  Sign in to save your submission.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Code Editor Panel -->
        <div class="lg:col-span-2">
          <div class="card p-6">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-bold">Code Editor</h3>
              <div class="flex gap-2">
                <button
                  @click="clearCode"
                  class="btn-secondary text-sm px-3 py-1"
                >
                  Clear
                </button>
                <button
                  @click="executeCode"
                  class="btn-primary text-sm px-3 py-1"
                >
                  ▶ Run Code
                </button>
              </div>
            </div>

            <!-- Editor Container -->
            <div class="bg-slate-950 rounded-lg overflow-hidden border border-slate-700 mb-4" style="height: 600px;">
              <textarea
                v-model="code"
                class="w-full h-full p-4 bg-slate-950 text-gray-100 font-mono text-sm focus:outline-none resize-none"
                placeholder="// Write your Agent Inventory system here...&#10;&#10;class Agent {&#10;  constructor(name, type, capacity) {&#10;    // Your code here&#10;  }&#10;}&#10;&#10;// Initialize and test..."
              ></textarea>
            </div>

            <!-- Output Terminal -->
            <div class="bg-slate-950 rounded-lg border border-slate-700 p-4" style="min-height: 200px;">
              <div class="flex justify-between items-center mb-3">
                <h4 class="font-mono font-bold text-gray-400">$ Output</h4>
                <button
                  @click="clearOutput"
                  class="text-xs text-gray-500 hover:text-gray-300"
                >
                  Clear
                </button>
              </div>
              <div
                class="font-mono text-sm text-gray-300 whitespace-pre-wrap break-words max-h-60 overflow-y-auto"
                :class="{ 'text-red-400': hasError }"
              >
                {{ output || '(Output will appear here)' }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Example Solutions Section -->
      <div class="mt-12">
        <div class="card p-8">
          <h3 class="text-2xl font-bold mb-4">📚 Learning Resources</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-slate-900 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-400 mb-2">Expected Output</h4>
              <pre class="text-xs text-gray-300 overflow-x-auto">Agent Inventory Report
├─ AI-Test-Bot (type: playwright)
│  └─ Capacity: 10 | Assigned: 5
├─ Vision-Agent (type: visual)
│  └─ Capacity: 8 | Assigned: 6
└─ API-Tester (type: api)
   └─ Capacity: 15 | Assigned: 8</pre>
            </div>

            <div class="bg-slate-900 p-4 rounded-lg">
              <h4 class="font-bold text-purple-400 mb-2">Success Criteria</h4>
              <ul class="text-xs text-gray-300 space-y-1">
                <li>✓ All agent objects created</li>
                <li>✓ Correct utilization calculation</li>
                <li>✓ All properties accessible</li>
                <li>✓ Methods work correctly</li>
                <li>✓ No console errors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ModuleHeader from '../components/ModuleHeader.vue'
import { useAuthStore } from '../stores/authStore'
import { captureConsoleOutput } from '../utils/consoleCapture'
import { TEMPLATE_TYPES } from '../constants/config'

const authStore = useAuthStore()

const code = ref(`// Session 4: Agent Inventory Project
// Build an inventory system for AI testing agents

class Agent {
  constructor(name, type, capacity) {
    this.name = name
    this.type = type
    this.capacity = capacity
    this.assignedTests = 0
  }

  assignTest() {
    if (this.assignedTests < this.capacity) {
      this.assignedTests++
      return true
    }
    return false
  }

  getUtilization() {
    return Math.round((this.assignedTests / this.capacity) * 100)
  }

  getStatus() {
    return {
      name: this.name,
      type: this.type,
      capacity: this.capacity,
      assigned: this.assignedTests,
      utilization: this.getUtilization() + '%'
    }
  }
}

// Initialize your agents
const inventory = [
  new Agent('AI-Test-Bot', 'playwright', 10),
  new Agent('Vision-Agent', 'visual', 8),
  new Agent('API-Tester', 'api', 15)
]

// Assign some tests
inventory[0].assignTest()
inventory[0].assignTest()
inventory[0].assignTest()
inventory[0].assignTest()
inventory[0].assignTest()

inventory[1].assignTest()
inventory[1].assignTest()
inventory[1].assignTest()
inventory[1].assignTest()
inventory[1].assignTest()
inventory[1].assignTest()

inventory[2].assignTest()
inventory[2].assignTest()
inventory[2].assignTest()
inventory[2].assignTest()
inventory[2].assignTest()
inventory[2].assignTest()
inventory[2].assignTest()
inventory[2].assignTest()

// Print inventory report
console.log('🤖 Agent Inventory Report')
inventory.forEach(agent => {
  console.log(\`\${agent.name} (\${agent.type}): \${agent.assigned}/\${agent.capacity} | Utilization: \${agent.getUtilization()}%\`)
})

// Calculate total utilization
const totalAssigned = inventory.reduce((sum, a) => sum + a.assignedTests, 0)
const totalCapacity = inventory.reduce((sum, a) => sum + a.capacity, 0)
const avgUtilization = Math.round((totalAssigned / totalCapacity) * 100)
console.log(\`\\n📊 Total Utilization: \${avgUtilization}%\`)
`)

const output = ref('')
const hasError = ref(false)

const loadTemplate = (type) => {
  if (type === TEMPLATE_TYPES.BASIC) {
    code.value = `// Basic Agent Inventory Template
class Agent {
  constructor(name, type, capacity) {
    this.name = name
    this.type = type
    this.capacity = capacity
    this.assignedTests = 0
  }
}

// Create your agents here
const agents = [
  new Agent('Agent-1', 'type', 10)
]

console.log('Agents created:', agents.length)
`
  } else if (type === TEMPLATE_TYPES.ADVANCED) {
    code.value = `// Advanced Agent Inventory with Methods
class Agent {
  constructor(name, type, capacity) {
    this.name = name
    this.type = type
    this.capacity = capacity
    this.assignedTests = []
  }

  assignTest(testName) {
    if (this.assignedTests.length < this.capacity) {
      this.assignedTests.push(testName)
      return true
    }
    return false
  }

  getUtilization() {
    return (this.assignedTests.length / this.capacity) * 100
  }

  printReport() {
    console.log(\`Agent: \${this.name} | Type: \${this.type} | Utilization: \${this.getUtilization().toFixed(1)}%\`)
  }
}

// Build your inventory
const inventory = new Map()
const agent1 = new Agent('Executor', 'playwright', 5)
inventory.set('executor', agent1)

console.log('Inventory size:', inventory.size)
`
  }
}

const executeCode = () => {
  output.value = ''
  hasError.value = false

  try {
    const { logs, error } = captureConsoleOutput(() => {
      const fn = new Function(code.value)
      fn()
    })

    if (error) {
      hasError.value = true
      output.value = `❌ Error: ${error.message}\n\nStack: ${error.stack}`
    } else {
      output.value = logs.length > 0 ? logs.join('\n') : '✓ Code executed successfully!\n(No output generated)'
    }
  } catch (error) {
    hasError.value = true
    output.value = `❌ Error: ${error.message}\n\nStack: ${error.stack}`
  }
}

const runTests = () => {
  output.value = 'Running test suite...\n'
  hasError.value = false

  try {
    const testCode = code.value + `

    // Test cases
    console.log('\\n🧪 Running Tests...\\n')

    // Test 1: Agent creation
    if (inventory && inventory.length > 0) {
      console.log('✓ Test 1 PASSED: Agents created')
    } else {
      console.log('✗ Test 1 FAILED: No agents found')
    }

    // Test 2: Agent properties
    if (inventory[0] && inventory[0].name && inventory[0].capacity) {
      console.log('✓ Test 2 PASSED: Agent properties correct')
    } else {
      console.log('✗ Test 2 FAILED: Missing agent properties')
    }

    // Test 3: Utilization calculation
    if (inventory[0].getUtilization && typeof inventory[0].getUtilization() === 'number') {
      console.log('✓ Test 3 PASSED: Utilization calculation works')
    } else {
      console.log('✗ Test 3 FAILED: Utilization calculation missing')
    }

    console.log('\\n✅ Tests completed!')
    `

    const { logs, error } = captureConsoleOutput(() => {
      const fn = new Function(testCode)
      fn()
    })

    if (error) {
      hasError.value = true
      output.value += `\n❌ Test Error: ${error.message}`
    } else {
      output.value += logs.join('\n')
    }
  } catch (error) {
    hasError.value = true
    output.value += `\n❌ Test Error: ${error.message}`
  }
}

const submitProject = () => {
  if (!authStore.isAuthenticated) {
    output.value = '⚠️ Please sign in to submit your project.'
    return
  }

  try {
    authStore.submitProject('Agent Inventory', code.value)
    output.value = '✅ Project submitted successfully!\n\nYour code has been saved to your dashboard.'
  } catch (error) {
    output.value = `❌ Submission failed: ${error.message}`
  }
}

const clearCode = () => {
  code.value = ''
}

const clearOutput = () => {
  output.value = ''
  hasError.value = false
}
</script>

<style scoped>
textarea {
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  tab-size: 2;
}
</style>
