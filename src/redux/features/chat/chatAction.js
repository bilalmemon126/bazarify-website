import { createAsyncThunk } from "@reduxjs/toolkit"

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3002'


export const getChat = createAsyncThunk('getChat', async ({productId, userId}, {rejectWithValue}) => {
    try{
        const response = await fetch(`${backendUrl}/chat/${productId}/${userId}`, {
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

export const createChat = createAsyncThunk('createChat', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch(`${backendUrl}/chat`, {
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