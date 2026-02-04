import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk('registerUser', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch('https://bazarify-website-backend-production.up.railway.app/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body:JSON.stringify(data),
        })
        if(!response.ok){
            const error = await response.json()
            return rejectWithValue(error)
        }
        const result = await response.json()
        return result
    }
    catch(err){
        return rejectWithValue(err)
    }
})

export const otpVerification = createAsyncThunk('otpVerification', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch(`https://bazarify-website-backend-production.up.railway.app/user-otpverification/${localStorage.getItem('userId')}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body:JSON.stringify(data),
        })
        if(!response.ok){
            const error = await response.json()
            return rejectWithValue(error)
        }
        const result = await response.json()
        return result
    }
    catch(err){
        return rejectWithValue(err)
    }
})


export const loginUser = createAsyncThunk('loginUser', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch('https://bazarify-website-backend-production.up.railway.app/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body:JSON.stringify(data),
        })
        if(!response.ok){
            const error = await response.json()
            return rejectWithValue(error)
        }
        const result = await response.json()
        return result
    }
    catch(err){
        return rejectWithValue(err)
    }
})


export const logoutUser = createAsyncThunk('logoutUser', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch('https://bazarify-website-backend-production.up.railway.app/logout', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include'
        })
        if(!response.ok){
            const error = await response.json()
            return rejectWithValue(error)
        }
        const result = await response.json()
        return result
    }
    catch(err){
        return rejectWithValue(err)
    }
})