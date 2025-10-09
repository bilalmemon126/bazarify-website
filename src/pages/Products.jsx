import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Filter from '../sections/Filter'
import ProductSectionCard from '../components/ProductSectionCard'
import ProductCard from '../components/ProductCard'
import { CiFilter, CiGrid2H, CiGrid41 } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/features/products/productAction'

function Products() {
  const { category } = useParams()
  const base = "../../../public/uploads/"

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const { products, error, loading } = useSelector((state) => state.products)

  let allProducts = Array.isArray(products) && products.filter((v, i) => { return v.category === category })

  let [input, setInput] = useState("")
  let [grid, setGrid] = useState(true)

  return loading ? (
    <p>loading...</p>
  ) :
  (
    <div className='w-full grid grid-cols-12 gap-5'>
      <h1 className='text-3xl text-brand-primary font-semibold col-span-10 col-start-2 py-5'>{category.toUpperCase()}</h1>
      <div className='col-span-10 col-start-2 grid grid-cols-10 gap-5'>

        <div className='hidden overflow-auto col-span-3 md:block'>
          <Filter />
        </div>

        <div className='col-span-10 md:col-span-7 grid gap-3.5'>
          <div className='w-full h-fit bg-brand-light grid grid-cols-4 px-5 py-2.5'>

            <div className='grid col-span-1 md:hidden'>
              <div className='hover:bg-brand-dark w-fit rounded-full'>
                <CiFilter className='text-2xl text-brand-primary m-2.5' />
              </div>
            </div>

            <div className='hidden col-span-1 md:flex items-center gap-2'>
              <p className='text-brand-primary font-medium text-sm md:text-lg'>View</p>
              <div className={`w-fit hover:bg-brand-dark rounded-full ${!grid ? "bg-brand-dark" : "bg-transparent"}`}>
                <CiGrid41 className={`text-2xl m-2.5`} onClick={() => setGrid(false)} />
              </div>
              <div className={`w-fit hover:bg-brand-dark rounded-full ${grid ? "bg-brand-dark" : "bg-transparent"}`}>
                <CiGrid2H className='text-2xl m-2.5' onClick={() => setGrid(true)} />
              </div>
            </div>

            <div className='col-span-3 md:col-span-2 md:col-end-5 flex justify-end items-center'>
              <p className='text-brand-primary text-sm font-medium col-span-1 md:text-lg'>Sort By:</p>
              <select
                name="sort"
                value={input}
                onChange={(e) => { setInput(e.target.value) }}
                className="px-2.5 outline-0 text-sm"
              >
                <option value="newly listed">Newly Listed</option>
                <option value="most relevant">Most Relevant</option>
                <option value="lowest price">Lowest Price</option>
                <option value="highest price">Highest Price</option>
              </select>
            </div>

          </div>
          <div className='grid grid-cols-3 gap-3.5'>
            {
              allProducts.length === 0 ? (
                <p className='text-2xl text-center text-brand-primary font-medium'>Product Not Found</p>
              ) :
                allProducts.map((v, i) => {
                  return (
                    grid ?
                      <div className={`col-span-3`} key={i}>
                        <ProductCard image={base + v.mainImage[0].filename} price={v.price} title={v.title} productId={v._id} createdBy={v.createdBy} />
                      </div> :
                      <div className={`col-span-1`} key={i}>
                        <ProductSectionCard image={base + v.mainImage[0].filename} price={v.price} title={v.title} productId={v._id} />
                      </div>
                  )
                })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products