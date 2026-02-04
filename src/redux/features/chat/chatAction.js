import { createAsyncThunk } from "@reduxjs/toolkit"


export const getChat = createAsyncThunk('getChat', async ({productId, userId}, {rejectWithValue}) => {
    try{
        const response = await fetch(`https://bazarify-website-backend-production.up.railway.app/chat/${productId}/${userId}`, {
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
        const response = await fetch(`https://bazarify-website-backend-production.up.railway.app/chat/${userId}`, {
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
        const response = await fetch(`https://bazarify-website-backend-production.up.railway.app/chat`, {
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