import { createAsyncThunk } from "@reduxjs/toolkit"

export const getCategory = createAsyncThunk('getCategory', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch(`https://bazarify-website-backend.vercel.app/category`, {
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

export const addCategory = createAsyncThunk('addCategory', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch(`https://bazarify-website-backend.vercel.app/admin/category/${localStorage.getItem("adminId")}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
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

export const editCategory = createAsyncThunk('editCategory', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch(`https://bazarify-website-backend.vercel.app/admin/category/${data.categoryId}/${localStorage.getItem("adminId")}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
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

export const deleteCategory = createAsyncThunk('deleteCategory', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch(`https://bazarify-website-backend.vercel.app/admin/category/${data.categoryId}/${localStorage.getItem("adminId")}`, {
            method: "DELETE",
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