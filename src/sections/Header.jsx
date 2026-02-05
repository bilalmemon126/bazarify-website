import React, { useEffect, useState } from 'react'
import Logo from '../components/Logo'
import Button from '../components/Button'
import profileVertor from '../assets/profile vector.jpg'
import { HiPlus } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'
import { IoChatbubbleEllipsesOutline, IoLocationOutline } from 'react-icons/io5'
import { CiMenuFries } from 'react-icons/ci'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaRegHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../redux/features/user/userAction'
import profileVector from '../assets/profile vector.jpg'
import { AiOutlineProduct } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import { getLocation } from '../redux/features/location/locationAction'

function Header() {
  let [input, setInput] = useState({ productSearch: "", city: "" })
  let [responsiveNav, setResponsiveNav] = useState(false)
  let [isOpen, setIsOpen] = useState(false)

  const { search } = useLocation()
  const params = new URLSearchParams(search)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const { location } = useSelector((state) => state.locationSlice)
  useEffect(() => {
    dispatch(getLocation())
  }, [])

  const handleLogout = async () => {
    const response = await dispatch(logoutUser())

    if (response.payload.status) {
      navigate("/login")
    }
  }

  let handleFilter = (key, value) => {
    if(value){
      params.set(key, value)
    }
    else{
      params.delete(key)
    }
    navigate(`?${params.toString()}`)
  }
  const handleSearch = (e) => {
    e.preventDefault()
    handleFilter("search", input.productSearch)
  }

  return (
    <header className='w-full grid bg-white'>
      <div id='topNavBar' className='w-full py-5 h-fit grid grid-cols-12 gap-5 bg-brand-light'>
        <div className='col-span-4 col-start-2 grid items-center justify-start md:col-span-3 md:col-start-2'>
          <Logo />
        </div>
        <div className='hidden grid-cols-5 gap-5 items-center justify-center sm:grid sm:col-span-5 sm:col-end-12 md:col-span-4 md:col-end-12 lg:col-span-3 lg:col-end-12'>
          {
            localStorage.getItem("userId") ?
              <div className='col-span-3 w-full flex items-center gap-5'>
                <NavLink to={`/chat/${localStorage.getItem("userId")}`}><IoChatbubbleEllipsesOutline className='text-3xl text-brand-primary' /></NavLink>
                <NavLink to={`/myfavourite/${localStorage.getItem("userId")}`}>
                <FaRegHeart className='text-3xl' />
                </NavLink>
                <div className='flex items-center'>
                  <div className='w-[40px] rounded-full overflow-hidden'>
                    <img src={profileVertor} alt="" />
                  </div>
                  <IoMdArrowDropdown className='text-2xl text-brand-primary' onClick={() => { setIsOpen(!isOpen) }} />
                </div>

              </div> :

              <div className='col-span-2 col-start-2'>
                <Button btnText={"Login"} btnPath={"/login"} />
              </div>
          }
          <div className={`${isOpen ? "block" : "hidden"} w-[300px] bg-white shadow-md rounded h-[300px] absolute top-20`} onClick={() => { setIsOpen(false) }}>
            <div className='h-fit flex items-center gap-2.5 border-b p-2.5 border-brand-dark bg-white'>
              <div className='w-fit h-fit rounded-full overflow-hidden'>
                <img src={profileVector} className='w-[60px]' alt="" />
              </div>
              <div className='h-fit'>
                <h2 className='text-xl text-brand-primary font-medium'>{localStorage.getItem("firstName")}</h2>
                <p className='text-[12px] text-brand-primary font-medium'>View Public Profile</p>
              </div>
            </div>
            <div className='h-fit flex items-center gap-2.5 border-b p-2.5 border-brand-dark bg-white'>
              <NavLink to={`/myads/${localStorage.getItem("userId")}`}>
                <div className='h-fit flex gap-2.5 items-center'>
                  <AiOutlineProduct className='text-2xl' />
                  <p className='text-md text-brand-primary font-medium'>My Ads</p>
                </div>
              </NavLink>
            </div>
            <div className='h-fit flex items-center gap-2.5 border-b p-2.5 border-brand-dark bg-white'>
              <BiLogOut className='text-2xl' />
              <p className='text-md text-brand-primary font-medium cursor-pointer' onClick={handleLogout}>Logout</p>
            </div>
          </div>

          <div className='col-span-2'>
            <Button btnIcon={<HiPlus />} btnText={"Sell"} btnPath={"/addproduct/choosecategory"} />
          </div>
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
            onChange={(e) => { setInput((prev) => ({ ...prev, city: e.target.value })), handleFilter("location", e.target.value) }}
            className="mr-2.5 py-1.5 pr-7 pl-3 col-span-9 text-base text-brand-primary placeholder:text-brand-light outline-none sm:col-span-10 md:col-span-11"
          >
            <option value="">Select City</option>
            {
              location?.data?.map((v, i) => {
                return (
                  <option value={v._id} key={i}>{v.location}</option>
                )
              })
            }
          </select>
        </div>

        <div className="p-1.5 grid gap-2.5 grid-cols-12 col-span-5 col-end-12 items-center rounded-md bg-white outline-1 outline-brand-primary focus-within:outline-2">
          <div className="w-full px-2.5 col-span-3 sm:col-span-2 md:col-span-1"><FiSearch className='text-brand-primary text-lg' /></div>
          <form action="" onSubmit={(e) => {handleSearch(e)}}>
          <input
            name="search"
            type="text"
            placeholder="Search"
            value={input.productSearch}
            onChange={(e) => { setInput((prev) => ({ ...prev, productSearch: e.target.value })) }}
            className="py-1.5 pl-1  text-base col-span-9 text-brand-primary placeholder:text-brand-primary focus:outline-none sm:col-span-10 md:col-span-11"
          />
          </form>
        </div>
      </div>

      <nav className={`${responsiveNav ? "max-h-[500px] opacity-100 py-5" : "max-h-0 opacity-0"} static top-0 w-full h-fit overflow-hidden transition-all duration-500 ease-in-out grid grid-cols-12 items-center justify-center gap-2.5 sm:max-h-none sm:opacity-100 sm:grid sm:py-5`}>
        <ul className='list-none col-span-10 col-start-2 justify-center items-center text-center gap-2.5 sm:flex sm:col-start-2 sm:gap-10 sm:justify-start'>
          <NavLink to={"/product"} onClick={() => {setInput((prev) => ({ ...prev, productSearch: "", city: ""}))}}><li className={"border-b-2 border-transparent hover:border-brand-primary"}>All</li></NavLink>
          <NavLink to={"/product?category=mobile"} onClick={() => {setInput((prev) => ({ ...prev, productSearch: "", city: ""}))}}><li className={"border-b-2 border-transparent hover:border-brand-primary"}>Mobiles</li></NavLink>
          <NavLink to={"/product?category=car"} onClick={() => {setInput((prev) => ({ ...prev, productSearch: "", city: ""}))}}><li className={"border-b-2 border-transparent hover:border-brand-primary"}>Cars</li></NavLink>
          <NavLink to={"/product?category=bike"} onClick={() => {setInput((prev) => ({ ...prev, productSearch: "", city: ""}))}}><li className='border-b-2 border-transparent hover:border-brand-primary'>Bikes</li></NavLink>
          <NavLink to={"/product?category=house"} onClick={() => {setInput((prev) => ({ ...prev, productSearch: "", city: ""}))}}><li className={"border-b-2 border-transparent hover:border-brand-primary"}>House</li></NavLink>
          <NavLink to={"/product?category=tablet"} onClick={() => {setInput((prev) => ({ ...prev, productSearch: "", city: ""}))}}><li className={"border-b-2 border-transparent hover:border-brand-primary"}>Tablets</li></NavLink>
          <NavLink to={"/product?category=fashion"} onClick={() => {setInput((prev) => ({ ...prev, productSearch: "", city: ""}))}}><li className={"border-b-2 border-transparent hover:border-brand-primary"}>Fashion</li></NavLink>
        </ul>
        <div className='mt-3 col-span-10 col-start-2 grid grid-cols-2 gap-5 items-center justify-center sm:hidden'>
          {
            localStorage.getItem("userId") ?
              <Button btnText={"Logout"} handleEvent={handleLogout} /> :
              <Button btnText={"Login"} />
          }
          <Button btnIcon={<HiPlus />} btnText={"Sell"} />
        </div>
      </nav>
    </header>
  )
}

export default Header