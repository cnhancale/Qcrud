import {createClient} from '@supabase/supabase-js'
import useAuthUser from "src/composables/UseAuthUser";

const supabaseUrl = process.env.SUPABASE_URL  // Url do projecto criado no supabase
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// console.log('inicializacao supabase', supabase) // Serve para testar na console

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()

  user.value = session?.user || null
})

export  default function useSupabase () {
  return { supabase }
}
