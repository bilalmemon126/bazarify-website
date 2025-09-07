import React from 'react'
import { NavLink } from 'react-router-dom'

function CategoriesCard({ cardImage, cardPath}) {
  return (
    <NavLink to={cardPath}>
    <div className='w-full rounded-full overflow-hidden sm:w-[100px]'>
      <img src={cardImage} alt="" />
    </div>
    </NavLink>
  )
}

export default CategoriesCard