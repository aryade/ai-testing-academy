import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const session = ref(null)
  const isLoading = ref(false)
  const userProgress = ref({
    module1: { completed: false, lessons: [] },
    module2: { completed: false, lessons: [] },
    module3: { completed: false, lessons: [] },
    project: { completed: false, submission: null },
  })

  const isAuthenticated = computed(() => !!user.value)

  const setUser = (newUser) => {
    user.value = newUser
  }

  const setSession = (newSession) => {
    session.value = newSession
  }

  const setLoading = (loading) => {
    isLoading.value = loading
  }

  const updateProgress = (moduleId, lessonId) => {
    if (userProgress.value[moduleId]) {
      if (!userProgress.value[moduleId].lessons.includes(lessonId)) {
        userProgress.value[moduleId].lessons.push(lessonId)
      }
    }
  }

  const markModuleComplete = (moduleId) => {
    if (userProgress.value[moduleId]) {
      userProgress.value[moduleId].completed = true
    }
  }

  const submitProject = (projectName, code) => {
    userProgress.value.project.submission = {
      name: projectName,
      code,
      submittedAt: new Date().toISOString()
    }
    userProgress.value.project.completed = true
  }

  const logout = () => {
    user.value = null
    session.value = null
  }

  return {
    user,
    session,
    isLoading,
    userProgress,
    isAuthenticated,
    setUser,
    setSession,
    setLoading,
    updateProgress,
    markModuleComplete,
    submitProject,
    logout
  }
})
