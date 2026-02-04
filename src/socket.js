import { io } from "socket.io-client";

// export const socket = io('https://bazarify-website-backend-production.up.railway.app', {
//     withCredentials: true,
// })

export const socket = io('https://bazarify-website-backend-production.up.railway.app', {
    withCredentials: true,
    transports: ['websocket']
})