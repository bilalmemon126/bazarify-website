import { createAsyncThunk } from "@reduxjs/toolkit"

export const getLocation = createAsyncThunk('getLocation', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch(`http://localhost:3002/location`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        })
        if(!response.ok){
            const error = await response.json()
            return rejectWithValue(error)
        }
        const result = await response.json()
        return result
    }
    catch(error){
        return rejectWithValue(error)
    }
})