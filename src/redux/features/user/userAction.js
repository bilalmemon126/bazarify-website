import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk('registerUser', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch('http://localhost:3001/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body:JSON.stringify(data),
        })
        if(!response.ok){
            const error = await response.json()
            console.log(error.message)
            return rejectWithValue(error)
        }
        const result = await response.json()
        console.log(result)
        return result
    }
    catch(err){
        console.log("error", err)
        return rejectWithValue(err)
    }
})

export const otpVerification = createAsyncThunk('otpVerification', async (data, {rejectWithValue}) => {
    try{
        console.log(data)
        const response = await fetch(`http://localhost:3001/user-otpverification/${localStorage.getItem('userId')}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body:JSON.stringify(data),
        })
        if(!response.ok){
            const error = await response.json()
            console.log(error.message)
            return rejectWithValue(error)
        }
        const result = await response.json()
        console.log(result)
        return result
    }
    catch(err){
        console.log("error", err)
        return rejectWithValue(err)
    }
})


export const loginUser = createAsyncThunk('loginUser', async (data, {rejectWithValue}) => {
    try{
        console.log(data)
        const response = await fetch('http://localhost:3001/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body:JSON.stringify(data),
        })
        if(!response.ok){
            const error = await response.json()
            console.log(error.message)
            return rejectWithValue(error)
        }
        const result = await response.json()
        console.log(result)
        return result
    }
    catch(err){
        console.log("error", err)
        return rejectWithValue(err)
    }
})


export const logoutUser = createAsyncThunk('logoutUser', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch('http://localhost:3001/logout', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include'
        })
        if(!response.ok){
            const error = await response.json()
            console.log(error.message)
            return rejectWithValue(error)
        }
        const result = await response.json()
        console.log(result)
        return result
    }
    catch(err){
        console.log("error", err)
        return rejectWithValue(err)
    }
})