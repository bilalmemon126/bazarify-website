import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Filter from '../sections/Filter'
import { products } from '../data'
import ProductCard from '../components/ProductCard'
import Button from '../components/Button'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'

function Products() {
  const { category } = useParams()
  const base = "/src/assets/products/"

  let [favourite, setFavourite] = useState(false)
  return (
    <div className='w-full grid grid-cols-12 gap-5'>
      <h1 className='text-3xl text-brand-primary font-semibold col-span-10 col-start-2 py-5'>{category.toUpperCase()}</h1>
      <div className='col-span-10 col-start-2 grid grid-cols-10'>
        <div className='h-[500px] overflow-auto col-span-3'>
          <Filter />
        </div>
        <div className='col-span-7 grid gap-3.5'>
          {
            products.filter((v, i) => {
              return v.category === category
            }).map((v, i) => {
              return (
                <div className='w-full max-h-[200px] grid grid-cols-12 gap-5' key={i}>
                  <div className='col-span-4 overflow-hidden w-full flex items-center justify-center'>
                    <img src={base + v.mainImage} alt="" />
                  </div>

                  <div className='col-span-7 grid grid-cols-1 items-center py-1.5'>
                    <div className='h-fit grid gap-1.5'>
                      <p className='text-3xl font-medium text-brand-primary'>Rs. {v.price}</p>
                      <p className='text-gray-700'>{v.title.slice(0, 58)}...</p>
                    </div>
                    <div className='h-fit grid grid-cols-2 gap-1.5'>
                      <p className='col-span-2'>{v.location}</p>
                      <Button btnText={"Call"} />
                      <Button btnText={"Chat"} />
                    </div>
                  </div>

                  <div className='col-span-1 grid py-5'>
                    <p className='w-full h-fit grid items-center justify-center'>{favourite ? <FaHeart className='text-red-500 text-2xl' onClick={() => setFavourite(!favourite)} /> : <FaRegHeart className='text-2xl' onClick={() => setFavourite(!favourite)} />}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Products