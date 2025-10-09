import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

function MyAdsCard({ image, price, title, description, location, productId, createdBy, status }) {
    return (
        <div className='w-full h-auto md:max-h-[200px] grid grid-cols-12 gap-5'>
            <div className='h-auto max-h-[350px] col-span-12 overflow-hidden rounded-lg w-full flex items-center justify-center md:col-span-4 md:max-h-[200px]'>
                <NavLink to={`/productdetails/${productId}`}>
                    <img src={image} alt="" />
                </NavLink>
            </div>

            <div className='grid gap-5 col-span-12 py-1.5 md:col-span-8'>
                {/* <div className='h-fit grid grid-cols-6 gap-1.5 col-span-4'>
                    <div className='col-span-5'>
                        <p className='text-xl sm:text-3xl font-medium text-brand-primary'>Rs. {price}</p>
                        <p className='text-sm sm:text-lg text-gray-700'>{title.slice(0, 58)}...</p>
                    </div>
                </div>
                <div className='h-fit grid gap-1.5 col-span-2'>
                    <p className='col-span-2'>{location}</p>
                    <Button btnText={"Edit"} />
                    <Button btnText={"Delete"} btnPath={`/chat/${createdBy}/${productId}`} />
                </div> */}

                <table className='w-full text-sm text-left grid gap-2.5 rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead className='h-fit py-5 w-full rounded text-xs uppercase bg-brand-light text-brand-primary text-center'>
                        <tr className='grid grid-cols-14'>
                            <th className="px-1.5 col-span-4">Title</th>
                            <th className="border-l border-brand-dark px-1.5 col-span-4">Description</th>
                            <th className="border-l border-brand-dark px-1.5 col-span-3">Price</th>
                            <th className="border-l border-brand-dark px-1.5 col-span-3">Status</th>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                        <tr className='bg-white grid grid-cols-14 text-gray-600 text-center'>
                            <td className="overflow-auto px-1.5 col-span-4">{title}</td>
                            <td className="border-l border-brand-dark overflow-auto px-1.5 col-span-4">{description}</td>
                            <td className="border-l border-brand-dark overflow-auto px-1.5 col-span-3">Rs {price}</td>
                            <td className="border-l border-brand-dark overflow-auto px-1.5 col-span-3">{status}</td>
                        </tr>
                    </tbody>
                </table>

                <div className='w-full grid grid-cols-2 gap-2.5'>
                <Button btnText={"Edit"} btnPath={"/addproduct/bike"} />
                <Button btnText={"Delete"} btnPath={`/chat/${createdBy}/${productId}`} />
                </div>
            </div>

        </div>
    )
}

export default MyAdsCard