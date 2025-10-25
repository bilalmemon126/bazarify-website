import { MdOutlineCategory, MdOutlineDashboard, MdOutlineShoppingCart } from 'react-icons/md'
import AdminLinks from '../../components/AdminLinks/AdminLinks'
import './SideBar.css'
import { RiUserSettingsLine } from 'react-icons/ri'
import { IoBagOutline, IoSettingsOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

function SideBar() {
    return (
        <div id="sideBarBox">
            <div className="adminLinksContainer">
                <div className="topHeadingBox">
                    <h3>Dashboard</h3>
                </div>
                <NavLink to={"/bazarify/adminpanel"} className="navLinks">
                    <AdminLinks icon={<MdOutlineDashboard className='adminLinksIcon' />} text="Dasboard" />
                </NavLink>
                <NavLink to={"admin/usermanagement"} className="navLinks">
                    <AdminLinks icon={<RiUserSettingsLine className='adminLinksIcon' />} text="User Management" />
                </NavLink>
                <NavLink to={"admin/productManagement"} className="navLinks">
                    <AdminLinks icon={<IoBagOutline className='adminLinksIcon' />} text="Product Management" />
                </NavLink>
                <NavLink to={"admin/ordermanagement"} className="navLinks">
                    <AdminLinks icon={<MdOutlineShoppingCart className='adminLinksIcon' />} text="Order Management" />
                </NavLink>
                <NavLink to={"admin/category"} className="navLinks">
                    <AdminLinks icon={<MdOutlineCategory className='adminLinksIcon' />} text="Category" />
                </NavLink>
            </div>
            <div className="settingBox">
            <NavLink to={"admin/setting"} className="navLinks">
                <AdminLinks icon={<IoSettingsOutline className='adminLinksIcon' />} text="Setting" />
            </NavLink>
            </div>
        </div>
    )
}

export default SideBar