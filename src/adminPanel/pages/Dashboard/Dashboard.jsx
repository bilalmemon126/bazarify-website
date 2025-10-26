import { FaBoxOpen, FaUser } from 'react-icons/fa'
import './Dashboard.css'
import { MdCategory } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { adminGetProducts } from '../../../redux/features/adminProduct/adminProductAction'
import { useEffect } from 'react'
import { adminGetUsers } from '../../../redux/features/adminUser/adminUserAction'

function Dashboard() {

  
  const { adminUsers } = useSelector((state) => state.adminUsers)
  const { products } = useSelector((state) => state.adminProducts)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(adminGetUsers())
    dispatch(adminGetProducts())
  }, [])

  return (
    <div id="dashboardContainer">
      <NavLink to={"/bazarify/adminpanel/admin/usermanagement"} className="navLinks">
        <div className="dashboardBox">
          <FaUser className='totalIcons' />
          <div className="totalText">
            <p>Total Users</p>
            <h1>{adminUsers.length}</h1>
          </div>
        </div>
      </NavLink>

      <NavLink to={"/bazarify/adminpanel/admin/productManagement"} className="navLinks">
        <div className="dashboardBox">
          <FaBoxOpen className='totalIcons' />
          <div className="totalText">
            <p>Total Products</p>
            <h1>{products.length}</h1>
          </div>
        </div>
      </NavLink>

      <NavLink to={"/bazarify/adminpanel/admin/category"} className="navLinks">
        <div className="dashboardBox">
          <MdCategory className='totalIcons' />
          <div className="totalText">
            <p>Total Category</p>
            <h1>10</h1>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default Dashboard