import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Initialize supabase client only if credentials are provided
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export const isSupabaseConfigured = () => !!(supabase && supabaseUrl && supabaseAnonKey)

export const signUp = async (email, password) => {
  if (!supabase) throw new Error('Supabase not configured')
  return await supabase.auth.signUp({ email, password })
}

export const signIn = async (email, password) => {
  if (!supabase) throw new Error('Supabase not configured')
  return await supabase.auth.signInWithPassword({ email, password })
}

export const signOut = async () => {
  if (!supabase) throw new Error('Supabase not configured')
  return await supabase.auth.signOut()
}

export const getCurrentUser = async () => {
  if (!supabase) return null
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export const onAuthStateChange = (callback) => {
  if (!supabase) return () => {}
  return supabase.auth.onAuthStateChange(callback)
}

export const updateUserProgress = async (userId, moduleId, progress) => {
  if (!supabase) throw new Error('Supabase not configured')
  const { data, error } = await supabase
    .from('user_progress')
    .upsert({
      user_id: userId,
      module_id: moduleId,
      progress,
      updated_at: new Date()
    })
  return { data, error }
}

export const getUserProgress = async (userId) => {
  if (!supabase) throw new Error('Supabase not configured')
  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)
  return { data, error }
}

