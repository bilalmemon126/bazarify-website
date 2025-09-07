import { useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { NavLink } from "react-router-dom"

function Filter() {
  let [input, setInput] = useState({ minPrice: "", maxPrice: "" })
  let [categoryIsOpen, setCategoryIsOpen] = useState(false)
  let [locationIsOpen, setLocationIsOpen] = useState(false)
  return (
    <div className='w-full py-2.5 border-r border-brand-light pr-2.5 grid gap-5'>
      <h2 className='text-2xl text-brand-primary font-medium py-2.5'>Filter</h2>

      <div className="border-b border-brand-light p-2.5 rounded grid gap-2.5">
        <div className="w-full grid grid-cols-2 items-center">
          <p className="text-lg font-medium">Category</p>
          <p className=" grid justify-end items-center" onClick={() => {setCategoryIsOpen(!categoryIsOpen)}}>{categoryIsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</p>
        </div>
        <div className={`grid grid-cols-5 items-center pl-2.5 ${categoryIsOpen ? "h-auto" : "h-0 opacity-0 hidden"}`}>
          <ul className="list-none grid gap-2.5">
            <NavLink to={"/product/mobile"} className={({ isActive }) => isActive ? 'text-brand-primary font-medium' : 'text-brand-primary'}><li>Mobiles</li></NavLink>
            <NavLink to={"/product/car"} className={({ isActive }) => isActive ? 'text-brand-primary font-medium' : 'text-brand-primary'}><li>Cars</li></NavLink>
            <NavLink to={"/product/bike"} className={({ isActive }) => isActive ? 'text-brand-primary font-medium' : 'text-brand-primary'}><li>Bikes</li></NavLink>
            <NavLink to={"/product/house"} className={({ isActive }) => isActive ? 'text-brand-primary font-medium' : 'text-brand-primary'}><li>House</li></NavLink>
            <NavLink to={"/product/tablet"} className={({ isActive }) => isActive ? 'text-brand-primary font-medium' : 'text-brand-primary'}><li>Tablets</li></NavLink>
            <NavLink to={"/product/fashion"} className={({ isActive }) => isActive ? 'text-brand-primary font-medium' : 'text-brand-primary'}><li>Fashion</li></NavLink>
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
            <NavLink to={"/product/mobile"} className={({ isActive }) => isActive ? 'text-brand-primary font-medium' : 'text-brand-primary'}><li>Mobiles</li></NavLink>
            <NavLink to={"/product/car"} className={({ isActive }) => isActive ? 'text-brand-primary font-medium' : 'text-brand-primary'}><li>Cars</li></NavLink>
            <NavLink to={"/product/bike"} className={({ isActive }) => isActive ? 'text-brand-primary font-medium' : 'text-brand-primary'}><li>Bikes</li></NavLink>
            <NavLink to={"/product/house"} className={({ isActive }) => isActive ? 'text-brand-primary font-medium' : 'text-brand-primary'}><li>House</li></NavLink>
            <NavLink to={"/product/tablet"} className={({ isActive }) => isActive ? 'text-brand-primary font-medium' : 'text-brand-primary'}><li>Tablets</li></NavLink>
            <NavLink to={"/product/fashion"} className={({ isActive }) => isActive ? 'text-brand-primary font-medium' : 'text-brand-primary'}><li>Fashion</li></NavLink>
          </ul>
        </div>
      </div>

      <div className="border-b border-brand-light p-2.5 rounded grid gap-2.5">
        <p className="text-lg font-medium">Price</p>
        <div className="grid grid-cols-5 items-center">
          <input type="number" className="col-span-2 p-2 text-brand-primary border-brand-light border rounded focus:outline-brand-primary" onChange={(e) => { setInput((prev) => ({ ...prev, minPrice: e.target.value })) }} value={input.minPrice} placeholder="Min" />
          <p className="col-span-1 text-lg font-mono text-center">To</p>
          <input type="number" className="col-span-2 p-2 text-brand-primary border-brand-light border rounded focus:outline-brand-primary" onChange={(e) => { setInput((prev) => ({ ...prev, maxPrice: e.target.value })) }} value={input.maxPrice} placeholder="Max" />
        </div>
      </div>
    </div>
  )
}

export default Filter