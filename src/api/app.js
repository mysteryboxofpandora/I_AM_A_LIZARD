import client from "@/services/mongo"
import { useTelegram } from "@/services/telegram"

const { user } = useTelegram()

const MY_ID = user?.id ?? 4252

export async function getOrCreateUser () {
    const potentialUser = await client.db('crypto_cat').collection('users').select().eq('telegram', MY_ID)
    
    if (potentialUser.data.length != 0) {
        return potentialUser.data[0]
    }

    const newUser = {
        telegram: MY_ID,        
        score: 0,
    }

    await client.db('crypto_cat').collection('users').insert(newUser)
    return newUser
}

export async function updateScore (score) {
    await client.db('crypto_cat').collection('users').update({ score }).eq('telegram', MY_ID)
}

