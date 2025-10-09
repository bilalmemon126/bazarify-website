import React from 'react'
import { useNavigate } from 'react-router-dom'

function ChooseCategory() {

  let navigate = useNavigate()
  return (
    <div className='w-full grid grid-cols-12 items-center justify-center py-10'>
      <div className='col-span-10 col-start-2 grid grid-cols-3 gap-10 sm:grid-cols-4'>
        <h1 className='col-span-3 w-full text-3xl text-center font-semibold pb-3 text-brand-primary border-b border-brand-light sm:col-span-4'>Post Your Add</h1>
        <h2 className='col-span-3 w-full text-2xl font-semibold pb-3 text-brand-primary sm:col-span-4'>Choose a Category</h2>
        <div className="w-full col-span-3 sm:col-span-4">
          <select
            name="category"
            value=""
            onChange={(e) => { localStorage.setItem('category', e.target.value), navigate(`/addproduct/${e.target.value}`) } }
            className="w-full p-2.5 text-brand-primary border border-brand-dark rounded outline-none"
          >
            <option value="">Select Category</option>
            <option value="mobile">Mobile</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="house">House</option>
            <option value="electronics">Electronics</option>
            <option value="tablet">Tablet</option>
            <option value="fashion">Fashion</option>
            <option value="furniture">Furniture</option>
            <option value="kids">Kids</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ChooseCategory