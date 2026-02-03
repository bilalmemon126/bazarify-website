import { useEffect, useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { getCategory } from "../redux/features/category/categoryAction"
import { getLocation } from "../redux/features/location/locationAction"

function Filter({handleFilter, minPrice, maxPrice, setOpen}) {
  let [input, setInput] = useState({ minPrice: "" || minPrice, maxPrice: "" || maxPrice })
  let [categoryIsOpen, setCategoryIsOpen] = useState(false)
  let [locationIsOpen, setLocationIsOpen] = useState(false)

  const dispatch = useDispatch()
  const { loading, category, error } = useSelector((state) => state.categorySlice)
  const { location } = useSelector((state) => state.locationSlice)

  useEffect(() => {
    dispatch(getCategory())
    dispatch(getLocation())
  }, [])

  return loading ? (
    <p>loading...</p>
  ):
  (
    <div className='w-full py-2.5 border-r border-brand-light pr-2.5 grid gap-5'>
      <h2 className='text-2xl text-brand-primary font-medium py-2.5'>Filter</h2>

      <div className="border-b border-brand-light p-2.5 rounded grid gap-2.5">
        <div className="w-full grid grid-cols-2 items-center">
          <p className="text-lg font-medium">Category</p>
          <p className=" grid justify-end items-center" onClick={() => {setCategoryIsOpen(!categoryIsOpen)}}>{categoryIsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
        </div>
        <div className={`grid grid-cols-5 items-center pl-2.5 ${categoryIsOpen ? "h-auto" : "h-0 opacity-0 hidden"}`}>
          <ul className="list-none grid gap-2.5">
            {
              category?.data?.map((v, i) => {
                return (
                  <li className="cursor-pointer" key={i} onClick={() => {handleFilter("category", v.categoryName), setOpen(false)}}>{v.categoryName}</li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <div className="border-b border-brand-light p-2.5 rounded grid gap-2.5">
        <div className="w-full grid grid-cols-2 items-center">
          <p className="text-lg font-medium">Location</p>
          <p className=" grid justify-end items-center" onClick={() => {setLocationIsOpen(!locationIsOpen)}}>{locationIsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
        </div>
        <div className={`grid grid-cols-5 items-center pl-2.5 ${locationIsOpen ? "h-auto" : "h-0 opacity-0 hidden"}`}>
          <ul className="list-none grid gap-2.5">
            {
              location?.data?.map((v, i) => {
                return (
                  <li className="w-36 cursor-pointer" key={i} onClick={() => {handleFilter("location", v._id), setOpen(false)}}>{v.location}</li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <div className="border-b border-brand-light p-2.5 rounded grid gap-2.5">
        <p className="text-lg font-medium">Price</p>
        <div className="grid grid-cols-5 items-center">
          <input type="number" className="col-span-2 p-2 text-brand-primary border-brand-light border rounded focus:outline-brand-primary" onChange={(e) => { setInput((prev) => ({ ...prev, minPrice: e.target.value })) }} onBlur={(e) => {handleFilter("minPrice", e.target.value), setOpen(false)}} value={input.minPrice} placeholder="Min" />
          <p className="col-span-1 text-lg font-mono text-center">To</p>
          <input type="number" className="col-span-2 p-2 text-brand-primary border-brand-light border rounded focus:outline-brand-primary" onChange={(e) => { setInput((prev) => ({ ...prev, maxPrice: e.target.value })) }} onBlur={(e) => {handleFilter("maxPrice", e.target.value), setOpen(false)}} value={input.maxPrice} placeholder="Max" />
        </div>
      </div>
    </div>
  )
}

export default Filter