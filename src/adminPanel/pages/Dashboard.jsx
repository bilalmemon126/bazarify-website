import { FaBoxOpen, FaUser } from 'react-icons/fa'
import { MdCategory } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { adminGetProducts } from '../../redux/features/adminProduct/adminProductAction'
import { useEffect } from 'react'
import { adminGetUsers } from '../../redux/features/adminUser/adminUserAction'
import { getCategory } from '../../redux/features/category/categoryAction'

function Dashboard() {

  
  const { adminUsers } = useSelector((state) => state.adminUsers)
  const { products } = useSelector((state) => state.adminProducts)
  const { category } = useSelector((state) => state.categorySlice)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(adminGetUsers())
    dispatch(adminGetProducts())
    dispatch(getCategory())
  }, [])

  return (
    <div id="dashboardContainer" className='w-full flex flex-wrap items-center justify-center gap-8'>
      <NavLink to={"/adminpanel/admin/usermanagement"} className="navLinks">
        <div className="w-[250px] sm:w-[350px] h-40 sm:h-44 bg-black flex items-center justify-center gap-5 rounded-2xl shadow-2xl border-b-[5px] border-b-inset border-[#616d88]">
          <FaUser className='text-5xl text-[#616d88]' />
          <div className="flex flex-col items-center justify-center gap-2.5">
            <p className='text-lg text-[#616d88]'>Total Users</p>
            <h1 className='text-[#616d88]'>{adminUsers?.length}</h1>
          </div>
        </div>
      </NavLink>

      <NavLink to={"/adminpanel/admin/productManagement"} className="navLinks">
        <div className="w-[250px] sm:w-[350px] h-40 sm:h-44 bg-black flex items-center justify-center gap-5 rounded-2xl shadow-2xl border-b-[5px] border-b-inset border-[#616d88]">
          <FaBoxOpen className='text-5xl text-[#616d88]' />
          <div className="flex flex-col items-center justify-center gap-2.5">
            <p className='text-lg text-[#616d88]'>Total Products</p>
            <h1 className='text-[#616d88]'>{products?.data?.length}</h1>
          </div>
        </div>
      </NavLink>

      <NavLink to={"/adminpanel/admin/category"} className="navLinks">
        <div className="w-[250px] sm:w-[350px] h-40 sm:h-44 bg-black flex items-center justify-center gap-5 rounded-2xl shadow-2xl border-b-[5px] border-b-inset border-[#616d88]">
          <MdCategory className='text-5xl text-[#616d88]' />
          <div className="flex flex-col items-center justify-center gap-2.5">
            <p className='text-lg text-[#616d88]'>Total Categories</p>
            <h1 className='text-[#616d88]'>{category?.data?.length}</h1>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default Dashboard