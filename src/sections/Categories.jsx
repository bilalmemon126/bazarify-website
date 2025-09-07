import React from 'react'
import CategoriesCard from '../components/CategoriesCard'
import mobiles from '../assets/categories/mobiles.png'
import cars from '../assets/categories/cars.png'
import electronics from '../assets/categories/electronics.png'
import fashion from '../assets/categories/fashion.png'
import house from '../assets/categories/house.png'
import bikes from '../assets/categories/bikes.png'
import furniture from '../assets/categories/furniture.png'
import kids from '../assets/categories/kids.png'

function Categories() {
  return (
    <div className='w-full grid grid-cols-12 py-5'>
      <div className='col-span-10 col-start-2 grid grid-cols-8 grid-rows-2 justify-between gap-1'>
        <div className='col-span-1 row-span-2 bg-brand-categoryIcon grid items-center justify-center rounded-md overflow-hidden'>
          <CategoriesCard cardImage={mobiles} cardPath={"/product/mobile"} />
        </div>
        <div className='col-span-2 row-span-1 bg-brand-categoryIcon grid items-center justify-center rounded-md overflow-hidden'>
          <CategoriesCard cardImage={bikes} cardPath={"/product/bike"} />
        </div>
        <div className='col-span-2 row-span-2 bg-brand-categoryIcon grid items-center justify-center rounded-md overflow-hidden'>
          <CategoriesCard cardImage={cars} cardPath={"/product/car"} />
        </div>
        <div className='col-span-1 row-span-2 bg-brand-categoryIcon grid items-center justify-center rounded-md overflow-hidden'>
          <CategoriesCard cardImage={fashion} cardPath={"/product/fashion"} />
        </div>
        <div className='col-span-2 row-span-1 bg-brand-categoryIcon grid items-center justify-center rounded-md overflow-hidden'>
          <CategoriesCard cardImage={house} cardPath={"/product/house"} />
        </div>
        <div className='col-span-1 row-span-1 bg-brand-categoryIcon grid items-center justify-center rounded-md overflow-hidden'>
          <CategoriesCard cardImage={electronics} cardPath={"/product/electronics"} />
        </div>
        <div className='col-span-1 row-span-1 bg-brand-categoryIcon grid items-center justify-center rounded-md overflow-hidden'>
          <CategoriesCard cardImage={kids} cardPath={"/product/kids"} />
        </div>
        <div className='col-span-2 row-span-1 bg-brand-categoryIcon grid items-center justify-center rounded-md overflow-hidden'>
          <CategoriesCard cardImage={furniture} cardPath={"/product/furniture"} />
        </div>
      </div>
    </div>
  )
}

export default Categories