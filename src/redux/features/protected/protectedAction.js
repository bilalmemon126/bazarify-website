import { createAsyncThunk } from "@reduxjs/toolkit";

export const protectedRoute = createAsyncThunk('protectedRoute', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch('https://bazarify-website-backend-production.up.railway.app/protected', {
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
        const response = await fetch('https://bazarify-website-backend-production.up.railway.app/admin/protected', {
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