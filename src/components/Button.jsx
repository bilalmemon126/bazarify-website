import React from 'react'
import { NavLink } from 'react-router-dom'

function Button({btnIcon, btnText, btnPath, handleEvent, btnStyle}) {
  return (
    <NavLink to={btnPath}><button className={`w-full py-2.5 px-5 rounded-sm flex items-center justify-center gap-[5px] text-white text-[10px] sm:text-sm font-medium bg-brand-primary hover:bg-gray-700 ${btnStyle}`} onClick={handleEvent}>{btnIcon}{btnText}</button></NavLink>
  )
}

export default Button