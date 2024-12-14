import supabase from "@/services/supabase"
import { useTelegram } from "@/services/telegram"

const { user } = useTelegram()

const MY_ID = user?.id ?? 4252

export async function getOrCreateUser () {
    //await client.connect()
    const potentialUser = await supabase.from('users').select().eq('telegram', MY_ID)
    
    if (potentialUser.data.length != 0) {
        return potentialUser.data[0]
    }

    const newUser = {
        telegram: MY_ID,        
        score: 0,
    }

    await supabase.from('users').insert(newUser)
    //await client.close()
    return newUser
}

export async function updateScore (score) {
    //await client.connect()
    await supabase.from('users').update({ score }).eq('telegram', MY_ID)
   //await client.close()
}

