import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Filter from '../sections/Filter'
import ProductSectionCard from '../components/ProductSectionCard'
import ProductCard from '../components/ProductCard'
import { CiFilter, CiGrid2H, CiGrid41 } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/features/products/productAction'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { RxCross2 } from 'react-icons/rx'

function Products() {
  let [input, setInput] = useState("")
  let [grid, setGrid] = useState(true)
  let [open, setOpen] = useState(false)

  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const category = params.get("category") || "all"
  const minPrice = params.get("minPrice") || ""
  const maxPrice = params.get("maxPrice") || ""
  const sort = params.get("sort") || "newlyListed"
  const navigate = useNavigate()
  const dispatch = useDispatch()
  console.log(search)

  useEffect(() => {
    dispatch(getProducts(search))
  }, [search])

  let handleFilter = (key, value) => {
    if(value){
      params.set(key, value)
    }
    else{
      params.delete(key)
    }
    navigate(`?${params.toString()}`)
  }

  const { products, error, loading } = useSelector((state) => state.products)

  return loading ? (
    <p>loading...</p>
  ) :
    (
      <div className='w-full grid grid-cols-12 gap-5'>
        <h1 className='text-3xl text-brand-primary font-semibold col-span-10 col-start-2 py-5'>{category.toUpperCase()}</h1>
        <div className='col-span-10 col-start-2 grid grid-cols-10 gap-5'>

          <div className='hidden h-fit overflow-auto col-span-3 md:block'>
            <Filter handleFilter={handleFilter} minPrice={minPrice} maxPrice={maxPrice} />
          </div>

          <div className='md:hidden'>
            <Dialog open={open} onClose={setOpen} className="relative z-10">
              <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
              />

              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                    <DialogPanel
                      transition
                      className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
                    >
                      <TransitionChild>
                        <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                          <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="relative rounded-md text-gray-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            <span className="absolute -inset-2.5" />
                            <RxCross2 className='text-3xl' />
                          </button>
                        </div>
                      </TransitionChild>
                      <div className="relative flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                        <div className="relative px-4 sm:px-6" >
                          <Filter handleFilter={handleFilter} minPrice={minPrice} maxPrice={maxPrice} setOpen={setOpen} />
                        </div>
                      </div>
                    </DialogPanel>
                  </div>
                </div>
              </div>
            </Dialog>
          </div>

          <div className='col-span-10 h-fit md:col-span-7 grid gap-3.5'>
            <div className='w-full h-fit bg-brand-light grid grid-cols-4 px-5 py-2.5'>

              <div className='grid col-span-1 md:hidden'>
                <div className='hover:bg-brand-dark w-fit rounded-full'>
                  <CiFilter className='text-2xl text-brand-primary m-2.5' onClick={() => setOpen(true)} />
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
                  value={sort || input}
                  onChange={(e) => { setInput(e.target.value), handleFilter("sort", e.target.value) }}
                  className="px-2.5 outline-0 text-sm"
                >
                  <option value="newlyListed">Newly Listed</option>
                  <option value="lowestPrice">Lowest Price</option>
                  <option value="highestPrice">Highest Price</option>
                </select>
              </div>

            </div>
            <div className='grid grid-cols-3 gap-3.5'>
              {
                products?.data?.length === 0 ? (
                  <p className='text-2xl text-center text-brand-primary font-medium'>Product Not Found</p>
                ) :
                  products?.data?.map((v, i) => {
                    return (
                      grid ?
                        <div className={`col-span-3`} key={i}>
                          <ProductCard image={v.mainImage.secure_url} price={v.price} title={v.title} productId={v._id} createdBy={v.createdBy} />
                        </div> :
                        <div className={`col-span-1`} key={i}>
                          <ProductSectionCard image={v.mainImage.secure_url} price={v.price} title={v.title} productId={v._id} />
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