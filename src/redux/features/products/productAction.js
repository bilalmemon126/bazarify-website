import { createAsyncThunk } from "@reduxjs/toolkit";
import { createQueryParams } from "../../../utils/createQueryParams";

export const addProduct = createAsyncThunk('addProduct', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch(`https://bazarify-website-backend-production.up.railway.app/product/${localStorage.getItem('userId')}`, {
            method: "POST",
            body: data,
            credentials: "include"
        })
        if(!response.ok){
            const error = await response.json()
            return rejectWithValue(error)
        }
        const result = await response.json()
        console.log(result)
        return result
    }
    catch(error){
        return rejectWithValue(error)
    }
})


export const getProducts = createAsyncThunk('getProducts', async (data={}, {rejectWithValue}) => {
    try{
        let queryString = createQueryParams(data)
        const response = await fetch(`https://bazarify-website-backend-production.up.railway.app/product?${queryString}`, {
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


export const getHomeProducts = createAsyncThunk('getHomeProducts', async (data={}, {rejectWithValue}) => {
    try{
        let queryString = createQueryParams(data)
        const response = await fetch(`https://bazarify-website-backend-production.up.railway.app/product/home?${queryString}`, {
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
        const response = await fetch(`https://bazarify-website-backend-production.up.railway.app/product/${data}`, {
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
        const response = await fetch(`https://bazarify-website-backend-production.up.railway.app/product/${localStorage.getItem('productId')}/${localStorage.getItem('userId')}`, {
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
        const response = await fetch(`https://bazarify-website-backend-production.up.railway.app/product/${data}/${localStorage.getItem('userId')}`, {
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