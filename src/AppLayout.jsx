import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './sections/Header'
import Footer from './sections/Footer'
import { getFavouriteProducts } from './redux/features/favourite/favouriteAction'
import { useDispatch, useSelector } from 'react-redux'


function AppLayout() {

  const dispatch = useDispatch()
  const { favouriteProductsMessage } = useSelector((state) => state.favouriteProducts)

  useEffect(() => {
    dispatch(getFavouriteProducts())
  }, [favouriteProductsMessage])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout