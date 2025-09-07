import React from 'react'
import logo from '../assets/bazarify logo.png'
import { NavLink } from 'react-router-dom'

function Logo() {
  return (
    <NavLink to={"/"}>
      <img src={logo} className='min-w-full w-40' alt="logo" />
    </NavLink>
  )
}

export default Logo