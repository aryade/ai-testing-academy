import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from '../src/stores/authStore'

describe('authStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('initial state', () => {
    it('should have null user on initialization', () => {
      const store = useAuthStore()
      expect(store.user).toBeNull()
    })

    it('should have null session on initialization', () => {
      const store = useAuthStore()
      expect(store.session).toBeNull()
    })

    it('should have false loading state on initialization', () => {
      const store = useAuthStore()
      expect(store.isLoading).toBe(false)
    })

    it('should have initialized userProgress structure', () => {
      const store = useAuthStore()
      expect(store.userProgress).toHaveProperty('module1')
      expect(store.userProgress).toHaveProperty('module2')
      expect(store.userProgress).toHaveProperty('module3')
      expect(store.userProgress).toHaveProperty('project')
    })
  })

  describe('isAuthenticated computed', () => {
    it('should return false when user is null', () => {
      const store = useAuthStore()
      expect(store.isAuthenticated).toBe(false)
    })

    it('should return true when user is set', () => {
      const store = useAuthStore()
      store.setUser({ id: 'user123', email: 'test@example.com' })
      expect(store.isAuthenticated).toBe(true)
    })
  })

  describe('setUser', () => {
    it('should set user correctly', () => {
      const store = useAuthStore()
      const testUser = { id: 'user123', email: 'test@example.com' }
      store.setUser(testUser)
      expect(store.user).toEqual(testUser)
    })
  })

  describe('setSession', () => {
    it('should set session correctly', () => {
      const store = useAuthStore()
      const testSession = { access_token: 'token123' }
      store.setSession(testSession)
      expect(store.session).toEqual(testSession)
    })
  })

  describe('setLoading', () => {
    it('should set loading state to true', () => {
      const store = useAuthStore()
      store.setLoading(true)
      expect(store.isLoading).toBe(true)
    })

    it('should set loading state to false', () => {
      const store = useAuthStore()
      store.setLoading(true)
      store.setLoading(false)
      expect(store.isLoading).toBe(false)
    })
  })

  describe('updateProgress', () => {
    it('should add lesson to module progress', () => {
      const store = useAuthStore()
      store.updateProgress('module1', 'lesson1')
      expect(store.userProgress.module1.lessons).toContain('lesson1')
    })

    it('should not add duplicate lessons', () => {
      const store = useAuthStore()
      store.updateProgress('module1', 'lesson1')
      store.updateProgress('module1', 'lesson1')
      expect(store.userProgress.module1.lessons.filter(l => l === 'lesson1')).toHaveLength(1)
    })

    it('should handle multiple lessons in one module', () => {
      const store = useAuthStore()
      store.updateProgress('module1', 'lesson1')
      store.updateProgress('module1', 'lesson2')
      store.updateProgress('module1', 'lesson3')
      expect(store.userProgress.module1.lessons).toHaveLength(3)
    })

    it('should track progress for different modules', () => {
      const store = useAuthStore()
      store.updateProgress('module1', 'lesson1')
      store.updateProgress('module2', 'lesson1')
      store.updateProgress('module3', 'lesson1')
      expect(store.userProgress.module1.lessons).toContain('lesson1')
      expect(store.userProgress.module2.lessons).toContain('lesson1')
      expect(store.userProgress.module3.lessons).toContain('lesson1')
    })

    it('should ignore invalid module ids', () => {
      const store = useAuthStore()
      const initialProgress = JSON.stringify(store.userProgress)
      store.updateProgress('invalidModule', 'lesson1')
      expect(JSON.stringify(store.userProgress)).toBe(initialProgress)
    })
  })

  describe('markModuleComplete', () => {
    it('should mark module as completed', () => {
      const store = useAuthStore()
      store.markModuleComplete('module1')
      expect(store.userProgress.module1.completed).toBe(true)
    })

    it('should mark multiple modules as completed', () => {
      const store = useAuthStore()
      store.markModuleComplete('module1')
      store.markModuleComplete('module2')
      store.markModuleComplete('module3')
      expect(store.userProgress.module1.completed).toBe(true)
      expect(store.userProgress.module2.completed).toBe(true)
      expect(store.userProgress.module3.completed).toBe(true)
    })

    it('should ignore invalid module ids', () => {
      const store = useAuthStore()
      store.markModuleComplete('invalidModule')
      expect(store.userProgress.module1.completed).toBe(false)
    })
  })

  describe('submitProject', () => {
    it('should store project submission with all fields', () => {
      const store = useAuthStore()
      const testCode = 'console.log("test")'
      store.submitProject('MyProject', testCode)
      expect(store.userProgress.project.submission.name).toBe('MyProject')
      expect(store.userProgress.project.submission.code).toBe(testCode)
      expect(store.userProgress.project.submission.submittedAt).toBeDefined()
    })

    it('should mark project as completed', () => {
      const store = useAuthStore()
      store.submitProject('MyProject', 'code')
      expect(store.userProgress.project.completed).toBe(true)
    })

    it('should store valid ISO timestamp for submission', () => {
      const store = useAuthStore()
      store.submitProject('MyProject', 'code')
      const submittedAt = store.userProgress.project.submission.submittedAt
      expect(new Date(submittedAt)).toBeInstanceOf(Date)
      expect(submittedAt).toMatch(/^\d{4}-\d{2}-\d{2}T/)
    })
  })

  describe('logout', () => {
    it('should clear user on logout', () => {
      const store = useAuthStore()
      store.setUser({ id: 'user123' })
      store.logout()
      expect(store.user).toBeNull()
    })

    it('should clear session on logout', () => {
      const store = useAuthStore()
      store.setSession({ access_token: 'token' })
      store.logout()
      expect(store.session).toBeNull()
    })

    it('should clear both user and session', () => {
      const store = useAuthStore()
      store.setUser({ id: 'user123' })
      store.setSession({ access_token: 'token' })
      store.logout()
      expect(store.user).toBeNull()
      expect(store.session).toBeNull()
    })
  })
})
