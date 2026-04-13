import { createAsyncThunk } from "@reduxjs/toolkit";
import { createQueryParams } from "../../../utils/createQueryParams";


const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3002'
let userId = localStorage.getItem('userId')

export const addProduct = createAsyncThunk('addProduct', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch(`${backendUrl}/product/${userId}`, {
            method: "POST",
            body: data,
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


export const getProducts = createAsyncThunk('getProducts', async ({search={}, id}, {rejectWithValue}) => {
    try{
        let queryString = createQueryParams(search)
        const response = await fetch(`${backendUrl}/products/${id}?${queryString}`, {
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

export const getMyProducts = createAsyncThunk('getMyProducts', async ({search, myId}, {rejectWithValue}) => {
    try{
        const response = await fetch(`${backendUrl}/myproducts/${myId}?${search ? `search=${search}` : ''}`, {
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

export const getHomeProducts = createAsyncThunk('getHomeProducts', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch(`${backendUrl}/product/home?${data ? `userId=${data}` : ''}`, {
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


export const getProductDetails = createAsyncThunk('getProductDetails', async (data, {rejectWithValue}) => {
    try{
        console.log('data')
        const response = await fetch(`${backendUrl}/product/${data}`, {
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

export const editProduct = createAsyncThunk('editProduct', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch(`${backendUrl}/product/${localStorage.getItem('productId')}/${userId}`, {
            method: "PUT",
            body: data,
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


export const deleteProduct = createAsyncThunk('deleteProduct', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch(`${backendUrl}/product/${data}/${userId}`, {
            method: "DELETE",
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