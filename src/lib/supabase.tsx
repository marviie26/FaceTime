import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xnyjbkatxpetycqxrvbq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhueWpia2F0eHBldHljcXhydmJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3MjI1NzUsImV4cCI6MjAxNTI5ODU3NX0.yCezfynPt8gu1dGO6LtbxRExLiOFIKJWq-fvWaaOgqE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})