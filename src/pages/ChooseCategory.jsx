import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCategory } from '../redux/features/category/categoryAction'

function ChooseCategory() {

  let navigate = useNavigate()

  const dispatch = useDispatch()
  const { loading, category, error } = useSelector((state) => state.categorySlice)

  useEffect(() => {
    dispatch(getCategory())
  }, [])
  return loading ? (
    <p>loading...</p>
  ) :
    (
      <div className='w-full grid grid-cols-12 items-center justify-center py-10'>
        <div className='col-span-10 col-start-2 grid grid-cols-3 gap-10 sm:grid-cols-4'>
          <h1 className='col-span-3 w-full text-3xl text-center font-semibold pb-3 text-brand-primary border-b border-brand-light sm:col-span-4'>Post Your Add</h1>
          <h2 className='col-span-3 w-full text-2xl font-semibold pb-3 text-brand-primary sm:col-span-4'>Choose a Category</h2>
          <div className="w-full col-span-3 sm:col-span-4">
            <select
              name="category"
              value=""
              onChange={(e) => { localStorage.setItem('category', e.target.value), navigate(`/addproduct/${e.target.value}`) }}
              className="w-full p-2.5 text-brand-primary border border-brand-dark rounded outline-none"
            >
              <option value="">Select Category</option>
              {
                category?.data?.map((v, i) => {
                  return (
                    <option value={v.categoryName} key={i}>{v.categoryName}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
      </div>
    )
}

export default ChooseCategory