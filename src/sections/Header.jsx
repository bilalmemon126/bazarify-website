import React, { useState } from 'react'
import Logo from '../components/logo'
import Button from '../components/Button'
import profileVertor from '../assets/profile vector.jpg'
import { HiPlus } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'
import { IoChatbubbleEllipsesOutline, IoLocationOutline } from 'react-icons/io5'
import { CiMenuFries } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io'

function Header() {
  let [input, setInput] = useState({ search: "", city: "" })
  let [responsiveNav, setResponsiveNav] = useState(false)
  console.log(input)
  return (
    <header className='w-full grid bg-white'>
      <div id='topNavBar' className='w-full py-5 h-fit grid grid-cols-12 gap-5 bg-brand-light'>
        <div className='col-span-4 col-start-2 grid items-center justify-start md:col-span-3 md:col-start-2'>
          <Logo />
        </div>
        <div className='hidden grid-cols-2 gap-5 items-center justify-center sm:grid sm:col-span-4 sm:col-end-12 md:col-span-3 md:col-end-12'>
          <Button btnText={"Login"} btnPath={"/login"}/>
          {/* <div className='col-span-1 w-full flex items-center gap-5'>
            <IoChatbubbleEllipsesOutline  className='text-3xl text-brand-primary'/>
            <div className='flex items-center'>
              <div className='w-[40px] rounded-full overflow-hidden'>
                <img src={profileVertor} alt="" />
              </div>
              <IoMdArrowDropdown className='text-2xl text-brand-primary'/>
            </div>
          </div> */}
          <Button btnIcon={<HiPlus />} btnText={"Sell"} btnPath={"/addproduct/choosecategory"} />
        </div>
        <div className='col-span-4 col-end-12 grid items-center justify-end sm:hidden'>
          <CiMenuFries onClick={() => { setResponsiveNav(responsiveNav ? false : true) }} className='text-3xl text-white bg-brand-primary hover:bg-gray-700 p-2 rounded-full' />
        </div>
      </div>

      <div id="searchBar" className='w-full h-fit grid grid-cols-12 gap-5 border-b-1 border-brand-primary py-5'>
        <div className="p-1.5 grid gap-2.5 grid-cols-12 col-span-5 col-start-2 items-center rounded-md bg-white outline-1 outline-brand-primary focus-within:outline-2">
          <div className="w-full px-2.5 col-span-3 sm:col-span-2 md:col-span-1"><IoLocationOutline className='text-brand-primary text-lg' /></div>
          <select
            id="city"
            name="city"
            value={input.city}
            onChange={(e) => { setInput((prev) => ({ ...prev, city: e.target.value })) }}
            className="mr-2.5 py-1.5 pr-7 pl-3 col-span-9 text-base text-brand-primary placeholder:text-brand-light outline-none sm:col-span-10 md:col-span-11"
          >
            <option value="">Select City</option>
            <option value="karachi">Karachi</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="lahore">Lahore</option>
            <option value="islamabad">Islamabad</option>
          </select>
        </div>

        <div className="p-1.5 grid gap-2.5 grid-cols-12 col-span-5 col-end-12 items-center rounded-md bg-white outline-1 outline-brand-primary focus-within:outline-2">
          <div className="w-full px-2.5 col-span-3 sm:col-span-2 md:col-span-1"><FiSearch className='text-brand-primary text-lg' /></div>
          <input
            id="price"
            name="search"
            type="text"
            placeholder="Search"
            value={input.search}
            onChange={(e) => { setInput({ search: e.target.value }) }}
            className="py-1.5 pl-1  text-base col-span-9 text-brand-primary placeholder:text-brand-primary focus:outline-none sm:col-span-10 md:col-span-11"
          />
        </div>
      </div>

      <nav className={`${responsiveNav ? "max-h-[500px] opacity-100 py-5" : "max-h-0 opacity-0"} static top-0 w-full h-fit overflow-hidden transition-all duration-500 ease-in-out grid grid-cols-12 items-center justify-center gap-2.5 sm:max-h-none sm:opacity-100 sm:grid sm:py-5`}>
        <ul className='list-none col-span-10 col-start-2 justify-center items-center text-center gap-2.5 sm:flex sm:col-start-2 sm:gap-10 sm:justify-start'>
          <NavLink to={"/"}><li className={"border-b-2 border-transparent hover:border-brand-primary"}>All</li></NavLink>
          <NavLink to={"/product/mobile"}><li className={"border-b-2 border-transparent hover:border-brand-primary"}>Mobiles</li></NavLink>
          <NavLink to={"/product/car"}><li className={"border-b-2 border-transparent hover:border-brand-primary"}>Cars</li></NavLink>
          <NavLink to={"/product/bike"}><li className='border-b-2 border-transparent hover:border-brand-primary'>Bikes</li></NavLink>
          <NavLink to={"/product/house"}><li className={"border-b-2 border-transparent hover:border-brand-primary"}>House</li></NavLink>
          <NavLink to={"/product/tablet"}><li className={"border-b-2 border-transparent hover:border-brand-primary"}>Tablets</li></NavLink>
          <NavLink to={"/product/fashion"}><li className={"border-b-2 border-transparent hover:border-brand-primary"}>Fashion</li></NavLink>
        </ul>
        <div className='mt-3 col-span-10 col-start-2 grid grid-cols-2 gap-5 items-center justify-center sm:hidden'>
          <Button btnText={"Login"} />
          <Button btnIcon={<HiPlus />} btnText={"Sell"} />
        </div>
      </nav>
    </header>
  )
}

export default Header