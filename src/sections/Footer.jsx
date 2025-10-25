import React from 'react'
import Logo from '../components/Logo'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { CiFacebook } from 'react-icons/ci'

function Footer() {
    return (
        <>
            <footer className='w-full bg-brand-light grid grid-cols-12 mt-10 pt-5 gap-5'>
                <div className='col-span-10 col-start-2 grid justify-center items-center'>
                    <Logo />
                </div>
                <div className='col-span-10 col-start-2 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4'>
                    <div>
                        <h3 className='text-lg font-medium text-brand-primary mb-2.5'>Top Categories</h3>
                        <ul className='list-none grid gap-2.5'>
                            <NavLink to={"/product/car"} className='w-fit border-b-2 border-transparent hover:border-brand-primary pb-0.5'><li className='text-brand-primary'>Cars</li></NavLink>
                            <NavLink to={"/product/bike"} className='w-fit border-b-2 border-transparent hover:border-brand-primary pb-0.5'><li className='text-brand-primary'>Bikes</li></NavLink>
                            <NavLink to={"/product/mobile"} className='w-fit border-b-2 border-transparent hover:border-brand-primary pb-0.5'><li className='text-brand-primary'>Mobiles</li></NavLink>
                            <NavLink to={"/product/house"} className='w-fit border-b-2 border-transparent hover:border-brand-primary pb-0.5'><li className='text-brand-primary'>House</li></NavLink>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-lg font-medium text-brand-primary mb-2.5'>Top Searches</h3>
                        <ul className='list-none grid gap-2.5'>
                            <NavLink to={"/product/bike"} className='w-fit border-b-2 border-transparent hover:border-brand-primary pb-0.5'><li className='text-brand-primary'>Bikes</li></NavLink>
                            <NavLink to={"/product/mobile"} className='w-fit border-b-2 border-transparent hover:border-brand-primary pb-0.5'><li className='text-brand-primary'>Mobiles</li></NavLink>
                            <NavLink to={"/product/fashion"} className='w-fit border-b-2 border-transparent hover:border-brand-primary pb-0.5'><li className='text-brand-primary'>Fashion</li></NavLink>
                            <NavLink to={"/product/tablet"} className='w-fit border-b-2 border-transparent hover:border-brand-primary pb-0.5'><li className='text-brand-primary'>Tablets</li></NavLink>
                        </ul>
                    </div>

                    <div className='h-fit grid items-center pr-5'>
                        <h3 className='text-lg font-medium text-brand-primary mb-2.5'>About Us</h3>
                        <p className='text-brand-primary'>Bazarify is a trusted platform to buy and sell pre-owned products with ease and security.</p>
                    </div>

                    <div className='grid grid-cols-1 gap-2.5 pl-5 sm:grid-cols-3 sm:col-span-3 sm:pl-0 md:col-span-1'>
                        <h3 className='text-lg font-medium text-brand-primary mb-2.5 sm:col-span-3'>Follow Us</h3>
                        <div className='w-fit h-fit rounded-full p-2.5 bg-brand-primary hover:bg-gray-700'><FaFacebook className='text-white' /></div>
                        <div className='w-fit h-fit rounded-full p-2.5 bg-brand-primary hover:bg-gray-700'><FaXTwitter className='text-white' /></div>
                        <div className='w-fit h-fit rounded-full p-2.5 bg-brand-primary hover:bg-gray-700'><FaInstagram className='text-white' /></div>

                    </div>
                </div>

                <div className='bg-brand-primary col-span-12'>
                    <p className='text-center py-2.5 text-white font-medium'>&copy; All Rights Reserved Bazarify</p>
                </div>
            </footer>
        </>
    )
}

export default Footer