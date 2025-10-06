import { createClient } from '@supabase/supabase-js'

// Essas variáveis devem vir do Supabase (API Keys)
const supabaseUrl = 'https://nzmfdugmjzxrkorkkkqf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56bWZkdWdtanp4cmtvcmtra3FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MDU3MjgsImV4cCI6MjA3NDQ4MTcyOH0.LpHiTkojypeQtHMvXU0GkbkRecjhaHQbycaie6xnwt0' // nunca use a service_role aqui

export const supabase = createClient(supabaseUrl, supabaseKey)
