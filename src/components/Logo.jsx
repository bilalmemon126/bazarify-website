import React from 'react'
import logo from '../assets/bazarify logo.png'
import { NavLink } from 'react-router-dom'

function Logo({logoFile}) {
  return (
    <NavLink to={"/"}>
      <img src={logoFile || logo} className='min-w-full w-40' alt="logo" />
    </NavLink>
  )
}

export default Logo