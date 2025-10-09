import { createAsyncThunk } from "@reduxjs/toolkit";

export const addProduct = createAsyncThunk('addProduct', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch(`http://localhost:3001/product/${localStorage.getItem('category')}/${localStorage.getItem('userId')}`, {
            method: "POST",
            body: data
        })
        console.log(data)
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


export const getProducts = createAsyncThunk('getProducts', async (data, {rejectWithValue}) => {
    try{
        const response = await fetch('http://localhost:3001/product', {
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