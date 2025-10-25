import { createAsyncThunk } from "@reduxjs/toolkit"

export const adminGetUsers = createAsyncThunk('adminGetUsers', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch('http://localhost:3001/admin/user', {
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


export const adminEditUsers = createAsyncThunk('adminEditUsers', async (data, {rejectWithValue}) => {
    console.log(data)
    try{
        const response = await fetch(`http://localhost:3001/admin/user/${data}/${localStorage.getItem("adminId")}`, {
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