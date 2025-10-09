import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './sections/Header'
import Footer from './sections/Footer'
import ProtectedRoute from './ProtectedRoute'

function AppLayout() {
  return (
    <ProtectedRoute children={
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    } />
  )
}

export default AppLayout