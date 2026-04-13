import { createSlice } from "@reduxjs/toolkit";
import { addChatNotification, createChat, deleteChatNotification, getAllChats, getAllNotifications, getChat, getChatNotification } from "./chatAction";

export const chatSlice = createSlice({
    name: "chatSlice",
    initialState: {
        chatResponse: "",
        chatId: "",
        productChats: [],
        allChats: [],
        chatLoading: false,
        chatError: null,
        chatNotifications: [],
        chatNotificationsLoading: false,
        chatNotificationsError: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getChat.pending, (state) => {
            state.chatLoading = true
            state.productChats = []
            state.chatResponse = ""
        })
        .addCase(getChat.fulfilled, (state, action) => {
            state.productChats = action.payload.data
            state.chatResponse = action.payload.message
            state.chatLoading = false

        })
        .addCase(getChat.rejected, (state, action) => {
            state.chatError = action.payload
            state.chatResponse = action.payload.message
            state.chatLoading = false
        })

        .addCase(getAllChats.pending, (state) => {
            state.chatLoading = true
            state.allChats = []
            state.chatError = null
        })
        .addCase(getAllChats.fulfilled, (state, action) => {
            state.allChats = action.payload.data
            state.chatResponse = action.payload.message
            state.chatLoading = false

        })
        .addCase(getAllChats.rejected, (state, action) => {
            state.chatError = action.payload
            state.chatResponse = ""
            state.allChats = []
            state.chatLoading = false
        })

        .addCase(getAllNotifications.pending, (state) => {
            state.chatNotificationsLoading = true
            state.chatNotifications = []
            state.chatNotificationsError = null
        })
        .addCase(getAllNotifications.fulfilled, (state, action) => {
            state.chatNotifications = action.payload
            state.chatNotificationsError = null
            state.chatNotificationsLoading = false

        })
        .addCase(getAllNotifications.rejected, (state, action) => {
            state.chatNotifications = []
            state.chatNotificationsError = action.payload
            state.chatNotificationsLoading = false
        })

        .addCase(createChat.pending, (state) => {
            state.chatLoading = true
            state.chatResponse = ""
            state.chatId = ""
        })
        .addCase(createChat.fulfilled, (state, action) => {
            state.chatLoading = false
            state.chatResponse = action.payload.message
            state.chatId = action.payload.data

        })
        .addCase(createChat.rejected, (state, action) => {
            state.chatLoading = false
            state.chatError = action.payload
        })

        .addCase(addChatNotification.pending, (state) => {
            state.chatNotificationsLoading = true
            state.chatResponse = ""
        })
        .addCase(addChatNotification.fulfilled, (state, action) => {
            state.chatResponse = action.payload.message
            state.chatNotificationsLoading = false

        })
        .addCase(addChatNotification.rejected, (state, action) => {
            state.chatNotificationsError = action.payload
            state.chatNotificationsLoading = false
        })

        .addCase(getChatNotification.pending, (state) => {
            state.chatNotificationsLoading = true
            state.chatResponse = ""
            state.chatNotifications = []
            state.chatNotificationsError = null
        })
        .addCase(getChatNotification.fulfilled, (state, action) => {
            state.chatNotifications = action.payload.data
            state.chatResponse = action.payload.message
            state.chatNotificationsError = null
            state.chatNotificationsLoading = false
        })
        .addCase(getChatNotification.rejected, (state, action) => {
            state.chatNotificationsError = action.payload.message
            state.chatNotifications = []
            state.chatResponse = ""
            state.chatNotificationsLoading = false
        })

        .addCase(deleteChatNotification.pending, (state) => {
            state.chatNotificationsLoading = true
            state.chatResponse = ""
        })
        .addCase(deleteChatNotification.fulfilled, (state, action) => {
            state.chatResponse = action.payload.message
            state.chatNotificationsLoading = false
            state.chatNotifications = []

        })
        .addCase(deleteChatNotification.rejected, (state, action) => {
            state.chatNotificationsError = action.payload
            state.chatNotificationsLoading = false
        })
    }
})

export default chatSlice.reducer