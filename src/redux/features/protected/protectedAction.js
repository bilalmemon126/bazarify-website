import { createAsyncThunk } from "@reduxjs/toolkit";

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3002'

export const protectedRoute = createAsyncThunk('protectedRoute', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch(`${backendUrl}/protected`, {
            method: "GET",
            credentials: "include"
        })

        if(!response.ok){
            const result = await response.json()
            return result
        }

        const result = await response.json()
        return result
    }
    catch(error){
        return rejectWithValue(error)
    }
})

export const adminProtectedRoute = createAsyncThunk('adminProtectedRoute', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch(`${backendUrl}/admin/protected`, {
            method: "GET",
            credentials: "include"
        })

        if(!response.ok){
            const result = await response.json()
            return result
        }

        const result = await response.json()
        return result
    }
    catch(error){
        return rejectWithValue(error)
    }
})