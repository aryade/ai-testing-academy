import { createApp } from 'vue'
import AppTest from './App-test.vue'

console.log("main-test.js loaded!")
console.log("Creating Vue app...")

try {
  const app = createApp(AppTest)
  console.log("App created successfully!")
  app.mount('#app')
  console.log("App mounted to #app!")
} catch (error) {
  console.error("ERROR mounting app:", error)
  document.getElementById('app').innerHTML = '<h1 style="color:red;">ERROR: ' + error.message + '</h1>'
}
