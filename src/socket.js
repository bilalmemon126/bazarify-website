import { io } from "socket.io-client";

export const socket = io('bazarify-website-backend-production.up.railway.app', {
    transports: ["websocket"],
    withCredentials: true,
})