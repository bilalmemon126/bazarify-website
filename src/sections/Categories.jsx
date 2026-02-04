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
      <div className='col-span-10 col-start-2 grid grid-cols-4 gap-5'>
        <div className='grid items-center justify-center rounded-full overflow-hidden'>
          <CategoriesCard cardImage={mobiles} cardPath={"/product?category=mobile"} />
        </div>
        <div className='grid items-center justify-center rounded-md overflow-hidden'>
          <CategoriesCard cardImage={bikes} cardPath={"/product?category=bike"} />
        </div>
        <div className='grid items-center justify-center rounded-md overflow-hidden'>
          <CategoriesCard cardImage={cars} cardPath={"/product?category=car"} />
        </div>
        <div className='grid items-center justify-center rounded-md overflow-hidden'>
          <CategoriesCard cardImage={fashion} cardPath={"/product?category=fashion"} />
        </div>
        <div className='grid items-center justify-center rounded-md overflow-hidden'>
          <CategoriesCard cardImage={house} cardPath={"/product?category=house"} />
        </div>
        <div className='grid items-center justify-center rounded-md overflow-hidden'>
          <CategoriesCard cardImage={electronics} cardPath={"/product?category=electronics"} />
        </div>
        <div className='grid items-center justify-center rounded-md overflow-hidden'>
          <CategoriesCard cardImage={kids} cardPath={"/product?category=kids"} />
        </div>
        <div className='grid items-center justify-center rounded-md overflow-hidden'>
          <CategoriesCard cardImage={furniture} cardPath={"/product?category=furniture"} />
        </div>
      </div>
    </div>
  )
}

export default Categories