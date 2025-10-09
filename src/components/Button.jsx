import React from 'react'
import { NavLink } from 'react-router-dom'

function Button({btnIcon, btnText, btnPath, handleEvent}) {
  return (
    <NavLink to={btnPath}><button className='w-full py-2.5 px-10 rounded-sm flex items-center justify-center gap-[5px] text-white text-sm font-medium bg-brand-primary hover:bg-gray-700' onClick={handleEvent}>{btnIcon}{btnText}</button></NavLink>
  )
}

export default Button