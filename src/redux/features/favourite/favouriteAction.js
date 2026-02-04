import { createAsyncThunk } from "@reduxjs/toolkit"

export const getFavouriteProducts = createAsyncThunk('getFavouriteProducts', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch(`https://bazarify-website-backend-production.up.railway.app/favourite/${localStorage.getItem("userId")}`, {
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


export const addFavouriteProducts = createAsyncThunk('addFavouriteProducts', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch(`https://bazarify-website-backend-production.up.railway.app/favourite/${data}/${localStorage.getItem("userId")}`, {
            method: "POST",
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