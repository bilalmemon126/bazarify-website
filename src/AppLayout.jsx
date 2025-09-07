import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './sections/Header'
import Footer from './sections/Footer'

function AppLayout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default AppLayout