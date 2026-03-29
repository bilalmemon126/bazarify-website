import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './sections/Header'
import Footer from './sections/Footer'
import { getFavouriteProducts } from './redux/features/favourite/favouriteAction'
import { useDispatch, useSelector } from 'react-redux'
import { socket } from './socket.js'


function AppLayout() {

  const dispatch = useDispatch()
  const { favouriteProductsMessage } = useSelector((state) => state.favouriteProducts)
  
  // useEffect(() => {
  //   dispatch(getFavouriteProducts())
  // }, [favouriteProductsMessage])
  
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
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout