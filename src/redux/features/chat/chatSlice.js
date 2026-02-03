import { createSlice } from "@reduxjs/toolkit";
import { createChat, getAllChats, getChat } from "./chatAction";

export const chatSlice = createSlice({
    name: "chatSlice",
    initialState: {
        chatResponse: "",
        chatId: "",
        productChats: [],
        allChats: [],
        chatLoading: false,
        chatError: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getChat.pending, (state) => {
            state.chatLoading = true,
            state.productChats = []
        })
        .addCase(getChat.fulfilled, (state, action) => {
            state.chatLoading = false
            state.chatResponse = action.payload.message
            state.productChats = action.payload.chats

        })
        .addCase(getChat.rejected, (state, action) => {
            state.chatLoading = false
            state.chatError = action.payload
        })

        .addCase(getAllChats.pending, (state) => {
            state.chatLoading = true,
            state.allChats = []
        })
        .addCase(getAllChats.fulfilled, (state, action) => {
            state.chatLoading = false
            state.chatResponse = action.payload.message
            state.allChats = action.payload.allChats

        })
        .addCase(getAllChats.rejected, (state, action) => {
            state.chatLoading = false
            state.chatError = action.payload
        })

        .addCase(createChat.pending, (state) => {
            state.chatLoading = true
            state.chatResponse = ""
            state.chatId = ""
        })
        .addCase(createChat.fulfilled, (state, action) => {
            state.chatLoading = false
            state.chatResponse = action.payload.message
            state.chatId = action.payload.chatId

        })
        .addCase(createChat.rejected, (state, action) => {
            state.chatLoading = false
            state.chatError = action.payload
        })
    }
})

export default chatSlice.reducer