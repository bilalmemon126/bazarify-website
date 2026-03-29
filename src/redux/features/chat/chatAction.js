import { createAsyncThunk } from "@reduxjs/toolkit"

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3002'


export const getChat = createAsyncThunk('getChat', async ({productId, userId, roomId}, {rejectWithValue}) => {
    try{
        console.log("userId "+userId, "productId "+productId, "roomId "+roomId )
        const response = await fetch(`${backendUrl}/chat/${productId}/${userId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({roomId: roomId}),
            credentials: "include"
        })
        if(!response.ok){
            const error = await response.json()
            return rejectWithValue(error.message)
        }
        const result = await response.json()
        return result
    }
    catch(error){
        return rejectWithValue(error)
    }
})

export const getAllChats = createAsyncThunk('getAllChats', async ({userId}, {rejectWithValue}) => {
    console.log("userId ", userId)
    try{
        const response = await fetch(`${backendUrl}/chat/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        })
        if(!response.ok){
            const error = await response.json()
            return rejectWithValue(error.message)
        }
        const result = await response.json()
        return result
    }
    catch(error){
        return rejectWithValue(error)
    }
})

export const getAllNotifications = createAsyncThunk('getAllNotifications', async ({userId}, {rejectWithValue}) => {
    console.log("userId ", userId)
    try{
        const response = await fetch(`${backendUrl}/chat/notifications/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        })
        if(!response.ok){
            const error = await response.json()
            return rejectWithValue(error.message)
        }
        const result = await response.json()
        return result
    }
    catch(error){
        return rejectWithValue(error)
    }
})

export const createChat = createAsyncThunk('createChat', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch(`${backendUrl}/chat/send`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data),
            credentials: "include"
        })
        if(!response.ok){
            const error = await response.json()
            return rejectWithValue(error.message)
        }
        const result = await response.json()
        return result
    }
    catch(error){
        return rejectWithValue(error)
    }
})

export const addChatNotification = createAsyncThunk('addChatNotification', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch(`${backendUrl}/chat/notifications/${data.receiverId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data),
            credentials: "include"
        })
        if(!response.ok){
            const error = await response.json()
            return rejectWithValue(error.message)
        }
        const result = await response.json()
        return result
    }
    catch(error){
        return rejectWithValue(error)
    }
})

export const getChatNotification = createAsyncThunk('getChatNotification', async (userId, {rejectWithValue}) => {
    try{
        const response = await fetch(`${backendUrl}/chat/notifications/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        })
        if(!response.ok){
            const error = await response.json()
            return rejectWithValue(error.message)
        }
        const result = await response.json()
        return result
    }
    catch(error){
        return rejectWithValue(error)
    }
})

export const deleteChatNotification = createAsyncThunk('deleteChatNotification', async (data, {rejectWithValue}) => {
    try{
        console.log(data)
        const response = await fetch(`${backendUrl}/chat/notifications/${data.userId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data),
            credentials: "include"
        })
        if(!response.ok){
            const error = await response.json()
            return rejectWithValue(error.message)
        }
        const result = await response.json()
        return result
    }
    catch(error){
        return rejectWithValue(error)
    }
})