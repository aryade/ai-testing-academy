import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index.js'
import './style.css'

console.log("✅ Step 1: All imports complete")

try {
  console.log("✅ Step 2: Creating Pinia store...")
  const pinia = createPinia()

  console.log("✅ Step 3: Creating Vue app...")
  const app = createApp(App)

  console.log("✅ Step 4: Using Pinia...")
  app.use(pinia)

  console.log("✅ Step 5: Using Router...")
  app.use(router)

  console.log("✅ Step 6: Mounting app to #app...")
  app.mount('#app')

  console.log("✅✅✅ APP FULLY LOADED! ✅✅✅")
} catch (error) {
  console.error("❌ ERROR during app initialization:", error.message)
  console.error("Stack:", error.stack)
  document.getElementById('app').innerHTML = `<div style="padding: 20px; color: red; font-family: monospace;"><h2>ERROR: ${error.message}</h2><pre>${error.stack}</pre></div>`
}
