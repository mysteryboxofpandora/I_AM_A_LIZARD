import { createClient } from "@supabase/supabase-js"


const SUPABASE_URL = ''
const SUPABASE_KEY = ''

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export default supabase
