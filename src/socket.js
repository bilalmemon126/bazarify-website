import { io } from "socket.io-client";

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3002'
// export const socket = io('${backendUrl}', {
//     withCredentials: true,
// })

export const socket = io(`${backendUrl}`, {
    withCredentials: true,
    transports: ['websocket']
})