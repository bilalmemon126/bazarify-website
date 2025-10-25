import { createAsyncThunk } from "@reduxjs/toolkit"

export const adminAuthLogin = createAsyncThunk('adminAuthLogin', async (data, {rejectWithValue}) => {
    try{
        console.log(data)
        const response = await fetch('http://localhost:3001/admin/login', {
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


export const adminAuthLogout = createAsyncThunk('adminAuthLogout', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch('http://localhost:3001/admin/logout', {
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