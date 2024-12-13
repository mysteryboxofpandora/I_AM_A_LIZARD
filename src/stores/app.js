import { getOrCreateUser } from '@/api/app'
import { defineStore } from 'pinia'
import { useScoreStore } from './score'
import { useTelegram } from '@/services/telegram'

const { user } = useTelegram()

export const useAppStore = defineStore('app', {
    state: () => ({
        user: {},
        tasks: [],
    }),
    actions: {
        async init() {
            this.user = await getOrCreateUser()

            const score = useScoreStore()
            score.setScore(this.user.score)
        }
    }
})