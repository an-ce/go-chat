import { Message, User } from '@/types'
import { create } from 'zustand'
import { useUserStore } from './user'

const BASE_WS = import.meta.env.VITE_APP_WS

type WsStore = {
    ws: WebSocket | null
    init: () => void
    sendMessage: (msg:Message) => void
}


export const useWsStore = create<WsStore>((set, get) => ({
    ws: null,
    
    init: () => {
        if (get().ws) return

        const user = useUserStore.getState().user

        if (!user) return
        
        if (user === null) return
        const ws = new WebSocket(`${BASE_WS}/connect?Token=${user.token}`)
        ws.onopen = evt => {
            console.log('[ws:open]', evt)
        }
        ws.onmessage = evt => {
            const data = JSON.parse(evt.data)
            console.log('[ws:onmessage]', data)
        }

        set(() => ({ ws }))
    },

    sendMessage: (msg: Message) => {
        const ws = get().ws
        if (ws === null) return
        ws.send(JSON.stringify(msg))
    }

}))