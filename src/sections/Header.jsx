import React, { useEffect, useState } from 'react'
import Logo from '../components/Logo'
import Button from '../components/Button'
import { FiMenu, FiSearch } from 'react-icons/fi'
import { IoChatbubbleEllipsesOutline, IoLocationOutline } from 'react-icons/io5'
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import { IoIosAddCircleOutline, IoMdArrowDropdown } from 'react-icons/io'
import { FaCircle, FaRegHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../redux/features/user/userAction'
import { AiOutlineProduct } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import { getLocation } from '../redux/features/location/locationAction'
import profileVector from '../assets/profile vector.jpg'
import ProfileImageCard from '../components/ProfileImageCard'
import { socket } from '../socket'
import { getChatNotification } from '../redux/features/chat/chatAction'

function Header() {
  let [input, setInput] = useState({ productSearch: "", city: "" })
  let [responsiveNav, setResponsiveNav] = useState(false)
  let [chatNotificationsCount, setChatNotificationsCount] = useState(0)
  let [isOpen, setIsOpen] = useState(false)
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const getPathName = useLocation()
  const isOnChatPage = getPathName.pathname.startsWith("/chat/")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userId = localStorage.getItem("userId")

  const { favouriteProducts } = useSelector((state) => state.favouriteProducts)
  const { chatNotifications } = useSelector((state) => state.chat)

  const { location } = useSelector((state) => state.locationSlice)
  useEffect(() => {
    dispatch(getLocation())
    dispatch(getChatNotification(userId))
  }, [])

  let handleChatNotificationsCount = (messageRoomId) => {
    console.log("heeh")
    if(isOnChatPage) return setChatNotificationsCount(0)
    setChatNotificationsCount((prev) => prev + 1);
  }

  useEffect(() => {
    if (!userId) return

    socket.emit("joinNotification", userId)

    if (!isOnChatPage) {
      socket.on("receiveNotification", handleChatNotificationsCount)
    }

    return () => {
      socket.off("receiveNotification", handleChatNotificationsCount);
    }
  }, [dispatch])

  useEffect(() => {
    if(isOnChatPage) return setChatNotificationsCount(0)
  },[isOnChatPage])

  useEffect(() => {
    if (!isOnChatPage) {
      setChatNotificationsCount(chatNotifications.length)
    }
  }, [chatNotifications])
  console.log(chatNotifications.length)

  const handleLogout = async () => {
    const response = await dispatch(logoutUser())

    if (response.payload.status) {
      localStorage.clear()
      navigate("/login")
    }
  }

  let handleFilter = (key, value) => {
    if (value) {
      params.set(key, value)
    }
    else {
      params.delete(key)
    }
    navigate(`/product?${params.toString()}`)
  }
  const handleSearch = (e) => {
    e.preventDefault()
    handleFilter("search", input.productSearch)
  }

  return (
    <header className='w-full grid bg-white'>
      <div id='topNavBar' className='w-full py-5 h-fit bg-brand-light grid grid-cols-12'>
        <div className=' grid items-center justify-start col-span-3 col-start-2 sm:col-span-4 sm:col-start-2'>
          <Logo />
        </div>
        <div className=' col-span-5 col-end-12 sm:col-span-4 sm:col-end-12 flex justify-end'>
          {
            localStorage.getItem("userId") ?
              <div className='w-fit flex items-center gap-2.5 sm:gap-5'>
                <NavLink to={`/chat/${localStorage.getItem("userId")}`} >
                  <div className='flex'>
                    <IoChatbubbleEllipsesOutline className='text-2xl sm:text-3xl text-brand-primary' />
                    {
                      chatNotificationsCount > 0 ?
                        <div className='w-[15px] h-[15px] rounded-full bg-red-500 flex items-center justify-center absolute ml-5.5'>
                          <p className='text-[8px] font-bold text-white'>{chatNotificationsCount}</p>
                        </div>
                        :
                        ""
                    }
                  </div>
                </NavLink>
                <NavLink to={`/myfavourite/${localStorage.getItem("userId")}`} onClick={() => { setCount((prev) => ({ ...prev, favouriteCount: favouriteProducts?.data?.length })) }}>
                  <div className='flex'>
                    <FaRegHeart className='text-2xl sm:text-3xl m-0.5' />
                    {
                      favouriteProducts?.data?.length > 0 &&
                      <div className='w-[15px] h-[15px] rounded-full bg-red-500 flex items-center justify-center absolute ml-5.5'>
                        <p className='text-[8px] font-bold text-white'>
                          {favouriteProducts?.data?.length}
                        </p>
                      </div>
                    }
                  </div>
                </NavLink>
                <div className='flex items-center '>
                  <div className='w-[30px] sm:w-[40px] rounded-full overflow-hidden'>
                    <img src={profileVector} alt="" />
                  </div>
                  <IoMdArrowDropdown className='text-lg sm:text-2xl text-brand-primary' onClick={() => { setIsOpen(!isOpen) }} />
                </div>
                <div className='grid items-center justify-end bg-brand-primary rounded-full sm:hidden'>
                  <FiMenu onClick={() => { setResponsiveNav(responsiveNav ? false : true) }} className='text-lg text-white m-2' />
                </div>

              </div> :

              <div className='flex gap-5 items-center justify-center'>
                <Button btnText={"Login"} btnPath={"/login"} />
                <Button btnText={"Signup"} btnPath={"/register"} />
              </div>
          }
          <div className={`${isOpen ? "block" : "hidden"} w-[300px] bg-white shadow-md rounded h-[300px] absolute top-20`} onClick={() => { setIsOpen(false) }}>
            <ProfileImageCard />
            <div className='h-fit flex items-center gap-2.5 border-b p-2.5 border-brand-dark bg-white'>
              <NavLink to={`/myads/${localStorage.getItem("userId")}`}>
                <div className='h-fit flex gap-2.5 items-center'>
                  <AiOutlineProduct className='text-2xl' />
                  <p className='text-md text-brand-primary font-medium'>My Ads</p>
                </div>
              </NavLink>
            </div>
            <div className='h-fit flex items-center gap-2.5 border-b p-2.5 border-brand-dark bg-white'>
              <NavLink to={`/addproduct/choosecategory`}>
                <div className='h-fit flex gap-2.5 items-center'>
                  <IoIosAddCircleOutline className='text-2xl' />
                  <p className='text-md text-brand-primary font-medium'>Sell Product</p>
                </div>
              </NavLink>
            </div>
            <div className='h-fit flex items-center gap-2.5 border-b p-2.5 border-brand-dark bg-white'>
              <BiLogOut className='text-2xl' />
              <p className='text-md text-brand-primary font-medium cursor-pointer' onClick={handleLogout}>Logout</p>
            </div>
          </div>
        </div>
      </div>

      <div id="searchBar" className='w-full h-fit grid grid-cols-12 gap-5 border-b-1 border-brand-primary py-5'>
        <div className="p-2.5 flex gap-2.5 col-span-5 col-start-2 items-center rounded-md bg-white outline-1 outline-brand-primary focus-within:outline-2">
          <div className="w-fit py-1.5"><IoLocationOutline className='text-brand-primary text-[22px]' /></div>
          <select
            id="city"
            name="city"
            value={input.city}
            onChange={(e) => { setInput((prev) => ({ ...prev, city: e.target.value })), handleFilter("location", e.target.value) }}
            className="w-full py-1.5 text-base text-brand-primary placeholder:text-brand-light outline-none"
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

        <div className="p-1.5 flex gap-2.5 col-span-5 col-end-12 items-center rounded-md bg-white outline-1 outline-brand-primary focus-within:outline-2">
          <div className="w-fit py-1.5"><FiSearch className='text-brand-primary text-[22px]' /></div>
          <form action="" onSubmit={(e) => { handleSearch(e) }}>
            <input
              name="search"
              type="text"
              placeholder="Search"
              value={input.productSearch}
              onChange={(e) => { setInput((prev) => ({ ...prev, productSearch: e.target.value })) }}
              className="w-full py-1.5 text-base text-brand-primary placeholder:text-brand-primary focus:outline-none"
            />
          </form>
        </div>
      </div>

      <nav className={`${responsiveNav ? "max-h-[500px] opacity-100 py-5" : "max-h-0 opacity-0"} static top-0 w-full h-fit overflow-hidden transition-all duration-500 ease-in-out grid grid-cols-12 items-center justify-center gap-2.5 sm:max-h-none sm:opacity-100 sm:grid sm:py-5`}>
        <ul className='list-none col-span-10 col-start-2 justify-center items-center text-center gap-2.5 sm:flex sm:col-start-2 sm:gap-10 sm:justify-start'>
          <NavLink to={"/product"} onClick={() => { setInput((prev) => ({ ...prev, productSearch: "", city: "" })) }}><li className={"border-b-2 border-transparent hover:border-brand-primary"}>All</li></NavLink>
          <NavLink to={"/product?category=mobile"} onClick={() => { setInput((prev) => ({ ...prev, productSearch: "", city: "" })) }}><li className={"border-b-2 border-transparent hover:border-brand-primary"}>Mobiles</li></NavLink>
          <NavLink to={"/product?category=car"} onClick={() => { setInput((prev) => ({ ...prev, productSearch: "", city: "" })) }}><li className={"border-b-2 border-transparent hover:border-brand-primary"}>Cars</li></NavLink>
          <NavLink to={"/product?category=bike"} onClick={() => { setInput((prev) => ({ ...prev, productSearch: "", city: "" })) }}><li className='border-b-2 border-transparent hover:border-brand-primary'>Bikes</li></NavLink>
          <NavLink to={"/product?category=house"} onClick={() => { setInput((prev) => ({ ...prev, productSearch: "", city: "" })) }}><li className={"border-b-2 border-transparent hover:border-brand-primary"}>House</li></NavLink>
          <NavLink to={"/product?category=tablet"} onClick={() => { setInput((prev) => ({ ...prev, productSearch: "", city: "" })) }}><li className={"border-b-2 border-transparent hover:border-brand-primary"}>Tablets</li></NavLink>
          <NavLink to={"/product?category=fashion"} onClick={() => { setInput((prev) => ({ ...prev, productSearch: "", city: "" })) }}><li className={"border-b-2 border-transparent hover:border-brand-primary"}>Fashion</li></NavLink>
        </ul>
        {/* <div className='mt-3 col-span-10 col-start-2 grid grid-cols-2 gap-5 items-center justify-center sm:hidden'>
          {
            localStorage.getItem("userId") ?
              <>
                <Button btnText={"Logout"} handleEvent={handleLogout} />
                <Button btnIcon={<HiPlus />} btnText={"Sell"} />
              </> :
              <>
                <Button btnText={"Login"} />
                <Button btnText={"Signup"} />
              </>
          }
        </div> */}
      </nav>
    </header>
  )
}

export default Header