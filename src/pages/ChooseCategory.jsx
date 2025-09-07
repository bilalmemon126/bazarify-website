import React from 'react'
import { category } from '../data'
import CategoriesCard from '../components/CategoriesCard'

function ChooseCategory() {
  const base = "./src/assets/categories/"
  return (
    <div className='w-full grid grid-cols-12 items-center justify-center py-10'>
      <div className='col-span-10 col-start-2 grid grid-cols-3 gap-10 sm:grid-cols-4'>
        <h1 className='col-span-3 w-full text-3xl text-center font-semibold pb-3 text-brand-primary border-b border-brand-light sm:col-span-4'>Post Your Add</h1>
        <h2 className='col-span-3 w-full text-2xl font-semibold pb-3 text-brand-primary sm:col-span-4'>Choose a Category</h2>
        {
          category.map((v, i) => {
            return (
              <div className='grid items-center justify-center'>
                <CategoriesCard cardImage={base + v.categoryImage} cardPath={`/addproduct/${v.categoryName}`} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ChooseCategory