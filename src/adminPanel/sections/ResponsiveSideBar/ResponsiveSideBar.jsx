import { NavLink } from 'react-router-dom'
import './ResponsiveSideBar.css'
import { MdOutlineCategory, MdOutlineDashboard, MdOutlineShoppingCart } from 'react-icons/md'
import { RiUserSettingsLine } from 'react-icons/ri'
import { IoBagOutline, IoSettingsOutline } from 'react-icons/io5'

function ResponsiveSideBar() {
    return (
        <div id="responsiveSideBarBox">
            <div className="responsiveAdminLinksContainer">
                <NavLink to={"/"} className="navLinks">
                    <div className="responsiveIconBox">
                        <MdOutlineDashboard className='responsiveIcons'/>
                    </div>
                </NavLink>
                <NavLink to={"/usermanagement"} className="navLinks">
                    <div className="responsiveIconBox">
                        <RiUserSettingsLine className='responsiveIcons'/>
                    </div>
                </NavLink>
                <NavLink to={"/productManagement"} className="navLinks">
                    <div className="responsiveIconBox">
                        <IoBagOutline className='responsiveIcons'/>
                    </div>
                </NavLink>
                <NavLink to={"/ordermanagement"} className="navLinks">
                    <div className="responsiveIconBox">
                        <MdOutlineShoppingCart className='responsiveIcons'/>
                    </div>
                </NavLink>
                <NavLink to={"/category"} className="navLinks">
                    <div className="responsiveIconBox">
                        <MdOutlineCategory className='responsiveIcons'/>
                    </div>
                </NavLink>
            </div>
            <div className="responsiveSettingBox">
                <NavLink to={"/setting"} className="navLinks">
                    <div className="responsiveIconBox">
                        <IoSettingsOutline className='responsiveIcons'/>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default ResponsiveSideBar