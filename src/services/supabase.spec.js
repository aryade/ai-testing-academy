import { describe, it, expect, vi, beforeEach } from 'vitest'
import * as supabaseModule from '../src/services/supabase'

// Mock the supabase client
vi.mock('@supabase/supabase-js', () => {
  const mockAuth = {
    signUp: vi.fn(),
    signInWithPassword: vi.fn(),
    signOut: vi.fn(),
    getUser: vi.fn(),
    onAuthStateChange: vi.fn()
  }

  const mockFrom = vi.fn().mockReturnValue({
    upsert: vi.fn().mockResolvedValue({ data: {}, error: null }),
    select: vi.fn().mockReturnValue({
      eq: vi.fn().mockResolvedValue({ data: [], error: null })
    })
  })

  return {
    createClient: vi.fn(() => ({
      auth: mockAuth,
      from: mockFrom
    }))
  }
})

describe('supabase service', () => {
  describe('supabase client', () => {
    it('should provide isSupabaseConfigured function', () => {
      expect(typeof supabaseModule.isSupabaseConfigured).toBe('function')
    })

    it('should have auth property when configured', () => {
      if (supabaseModule.supabase) {
        expect(supabaseModule.supabase.auth).toBeDefined()
      }
    })
  })

  describe('signUp', () => {
    it('should call supabase auth signUp', async () => {
      if (!supabaseModule.supabase) return
      const signUpMock = vi.spyOn(supabaseModule.supabase.auth, 'signUp')
      signUpMock.mockResolvedValue({ data: { user: { id: 'user123' } }, error: null })

      await supabaseModule.signUp('test@example.com', 'password123')
      expect(signUpMock).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123'
      })
    })

    it('should return sign up result', async () => {
      if (!supabaseModule.supabase) return
      const mockResult = { data: { user: { id: 'user123' } }, error: null }
      const signUpMock = vi.spyOn(supabaseModule.supabase.auth, 'signUp')
      signUpMock.mockResolvedValue(mockResult)

      const result = await supabaseModule.signUp('test@example.com', 'password123')
      expect(result).toEqual(mockResult)
    })
  })

  describe('signIn', () => {
    it('should call supabase auth signInWithPassword', async () => {
      const signInMock = vi.spyOn(supabaseModule.supabase.auth, 'signInWithPassword')
      signInMock.mockResolvedValue({ data: { session: { access_token: 'token' } }, error: null })

      await supabaseModule.signIn('test@example.com', 'password123')
      expect(signInMock).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123'
      })
    })

    it('should return sign in result', async () => {
      const mockResult = { data: { session: { access_token: 'token' } }, error: null }
      const signInMock = vi.spyOn(supabaseModule.supabase.auth, 'signInWithPassword')
      signInMock.mockResolvedValue(mockResult)

      const result = await supabaseModule.signIn('test@example.com', 'password123')
      expect(result).toEqual(mockResult)
    })
  })

  describe('signOut', () => {
    it('should call supabase auth signOut', async () => {
      const signOutMock = vi.spyOn(supabaseModule.supabase.auth, 'signOut')
      signOutMock.mockResolvedValue({ error: null })

      await supabaseModule.signOut()
      expect(signOutMock).toHaveBeenCalled()
    })
  })

  describe('getCurrentUser', () => {
    it('should call supabase auth getUser', async () => {
      const getUserMock = vi.spyOn(supabaseModule.supabase.auth, 'getUser')
      getUserMock.mockResolvedValue({ data: { user: { id: 'user123', email: 'test@example.com' } } })

      await supabaseModule.getCurrentUser()
      expect(getUserMock).toHaveBeenCalled()
    })

    it('should return current user', async () => {
      const mockUser = { id: 'user123', email: 'test@example.com' }
      const getUserMock = vi.spyOn(supabaseModule.supabase.auth, 'getUser')
      getUserMock.mockResolvedValue({ data: { user: mockUser } })

      const result = await supabaseModule.getCurrentUser()
      expect(result).toEqual(mockUser)
    })

    it('should return null if no user is logged in', async () => {
      const getUserMock = vi.spyOn(supabaseModule.supabase.auth, 'getUser')
      getUserMock.mockResolvedValue({ data: { user: null } })

      const result = await supabaseModule.getCurrentUser()
      expect(result).toBeNull()
    })
  })

  describe('onAuthStateChange', () => {
    it('should call supabase auth onAuthStateChange', () => {
      const onAuthMock = vi.spyOn(supabaseModule.supabase.auth, 'onAuthStateChange')
      const callback = vi.fn()

      supabaseModule.onAuthStateChange(callback)
      expect(onAuthMock).toHaveBeenCalledWith(callback)
    })
  })

  describe('updateUserProgress', () => {
    it('should call upsert with correct parameters', async () => {
      const upsertMock = vi.spyOn(supabaseModule.supabase.from('user_progress'), 'upsert')
      upsertMock.mockResolvedValue({ data: {}, error: null })

      await supabaseModule.updateUserProgress('user123', 'module1', 50)

      expect(upsertMock).toHaveBeenCalledWith(
        expect.objectContaining({
          user_id: 'user123',
          module_id: 'module1',
          progress: 50
        })
      )
    })

    it('should return data and error', async () => {
      const mockResult = { data: { id: 'progress123' }, error: null }
      const upsertMock = vi.spyOn(supabaseModule.supabase.from('user_progress'), 'upsert')
      upsertMock.mockResolvedValue(mockResult)

      const result = await supabaseModule.updateUserProgress('user123', 'module1', 50)
      expect(result).toEqual(mockResult)
    })

    it('should include updated_at timestamp', async () => {
      const upsertMock = vi.spyOn(supabaseModule.supabase.from('user_progress'), 'upsert')
      upsertMock.mockResolvedValue({ data: {}, error: null })

      await supabaseModule.updateUserProgress('user123', 'module1', 50)

      const callArg = upsertMock.mock.calls[0][0]
      expect(callArg).toHaveProperty('updated_at')
      expect(callArg.updated_at).toBeInstanceOf(Date)
    })
  })

  describe('getUserProgress', () => {
    it('should call select and eq with correct parameters', async () => {
      const fromMock = vi.spyOn(supabaseModule.supabase, 'from')
      fromMock.mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockResolvedValue({ data: [], error: null })
        })
      })

      await supabaseModule.getUserProgress('user123')

      expect(fromMock).toHaveBeenCalledWith('user_progress')
    })

    it('should return progress data', async () => {
      const mockData = [
        { user_id: 'user123', module_id: 'module1', progress: 50 }
      ]
      const eqMock = vi.fn().mockResolvedValue({ data: mockData, error: null })
      const selectMock = vi.fn().mockReturnValue({ eq: eqMock })
      const fromMock = vi.spyOn(supabaseModule.supabase, 'from')
      fromMock.mockReturnValue({ select: selectMock })

      const result = await supabaseModule.getUserProgress('user123')
      expect(result.data).toEqual(mockData)
    })

    it('should handle query error', async () => {
      const mockError = new Error('Query failed')
      const eqMock = vi.fn().mockResolvedValue({ data: null, error: mockError })
      const selectMock = vi.fn().mockReturnValue({ eq: eqMock })
      const fromMock = vi.spyOn(supabaseModule.supabase, 'from')
      fromMock.mockReturnValue({ select: selectMock })

      const result = await supabaseModule.getUserProgress('user123')
      expect(result.error).toEqual(mockError)
    })
  })
})
