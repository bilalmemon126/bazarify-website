import { createAsyncThunk } from "@reduxjs/toolkit"

export const adminGetProducts = createAsyncThunk('adminGetProducts', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch('https://bazarify-backend.vercel.app/admin/product', {
            method: "GET",
            credentials: "include"
        })
        if(!response.ok){
            const error = await response.json()
            console.log(error.message)
            return rejectWithValue(error)
        }
        const result = await response.json()
        return result
    }
    catch(error){
        console.log("error", error)
        return rejectWithValue(error)
    }
})


export const adminEditProducts = createAsyncThunk('adminEditProducts', async (data, {rejectWithValue}) => {
    console.log(data)
    try{
        const response = await fetch(`https://bazarify-backend.vercel.app/admin/product/${data}/${localStorage.getItem("adminId")}`, {
            method: "PUT",
            credentials: "include"
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
    catch(error){
        console.log("error", error)
        return rejectWithValue(error)
    }
})