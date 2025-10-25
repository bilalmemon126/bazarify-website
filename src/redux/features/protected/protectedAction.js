import { createAsyncThunk } from "@reduxjs/toolkit";

export const protectedRoute = createAsyncThunk('protectedRoute', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch('http://localhost:3001/protected', {
            method: "GET",
            credentials: "include"
        })

        if(!response.ok){
            const result = await response.json()
            console.log(result)
            return result
        }

        const result = await response.json()
        console.log(result)
        return result
    }
    catch(error){
        console.log("error")
        return rejectWithValue(error)
    }
})