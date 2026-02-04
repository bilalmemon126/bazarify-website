import { createAsyncThunk } from "@reduxjs/toolkit"

export const adminGetUsers = createAsyncThunk('adminGetUsers', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch('bazarify-website-backend-production.up.railway.app/admin/user', {
            method: "GET",
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


export const adminEditUsers = createAsyncThunk('adminEditUsers', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch(`bazarify-website-backend-production.up.railway.app/admin/user/${data}/${localStorage.getItem("adminId")}`, {
            method: "PUT",
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