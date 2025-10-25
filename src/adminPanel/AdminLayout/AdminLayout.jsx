import './AdminLayout.css'
import Header from '../sections/Header/Header'
import { Outlet } from 'react-router-dom'
import SideBar from '../sections/SideBar/SideBar'
import ResponsiveSideBar from '../sections/ResponsiveSideBar/ResponsiveSideBar'

function AdminLayout() {
    return (
        <div id="layoutContainer" className='w-full flex flex-row-reverse'>
            <div id="AdminMainContainer" className='w-[85%] min-h-screen h-auto bg-brand-adminDark sm:w-[90%] md:w-[75%]'>
                <Header />
                <div id="mainPagesContainer" className='w-full min-h-[90vh] h-auto flex items-center justify-center'>
                    <Outlet />
                </div>
            </div>
            <div id="sideBarContainer" className='w-[15%] h-screen bg-black shadow shadow-black flex items-center justify-center fixed left-0 sm:w-[10%] md:w-[25%]'>
                <SideBar />
                <ResponsiveSideBar />
            </div>
        </div>
    )
}

export default AdminLayout