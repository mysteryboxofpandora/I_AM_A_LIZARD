import { createClient } from "@supabase/supabase-js"

//y7C0AciDx7vtzdqu      database pass for new project
const SUPABASE_URL = 'https://eiiyykltshihgfqobmqc.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpaXl5a2x0c2hpaGdmcW9ibXFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1MDY4NDksImV4cCI6MjA0OTA4Mjg0OX0.X3daVnrgWzbKOSiXwUxAHUbSVFNKKFvS4afZVGTGTlg'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export default supabase
