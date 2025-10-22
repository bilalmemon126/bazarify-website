import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../redux/features/products/productAction'

function MyAdsCard({ image, price, title, description, location, productId, category, createdBy, status }) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const handleDelete = async(productId) => {
      let response =await dispatch(deleteProduct(productId))

    if (response.payload.status) {
        navigate('/')
    }
  }

    return (
        <div className='w-full h-auto md:max-h-[200px] grid grid-cols-12 gap-5'>
            <div className='h-auto max-h-[350px] col-span-12 overflow-hidden rounded-lg w-full flex items-center justify-center md:col-span-4 md:max-h-[200px]'>
                <NavLink to={`/productdetails/${productId}`}>
                    <img src={image} alt="" />
                </NavLink>
            </div>

            <div className='grid gap-5 col-span-12 py-1.5 md:col-span-8'>
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
                <Button btnText={"Edit"} btnPath={`/editproduct/${category}/${productId}`} />
                <Button btnText={"Delete"} handleEvent={() => {handleDelete(productId)}}/>
                </div>
            </div>

        </div>
    )
}

export default MyAdsCard