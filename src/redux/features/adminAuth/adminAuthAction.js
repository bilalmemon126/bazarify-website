import { createAsyncThunk } from "@reduxjs/toolkit"

export const adminAuthLogin = createAsyncThunk('adminAuthLogin', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch('http://localhost:3002/admin/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data),
            credentials: 'include',
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


export const adminAuthLogout = createAsyncThunk('adminAuthLogout', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch('http://localhost:3002/admin/logout', {
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