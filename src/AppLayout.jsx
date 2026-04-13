import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './sections/Header'
import Footer from './sections/Footer'
import { socket } from './socket.js'
import { ToastContainer } from 'react-toastify'


function AppLayout() {

  useEffect(() => {
    const userId = localStorage.getItem("userId")

    if (userId) {
      socket.emit("userOnline", userId)
      socket.emit("joinNotification", userId)
    }

    socket.on("receiveNotification", (messageRoomId) => {
      console.log(messageRoomId)
    })
  }, [])

  return (
    <>
      <Header />
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout