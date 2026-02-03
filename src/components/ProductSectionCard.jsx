import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addFavouriteProducts } from '../redux/features/favourite/favouriteAction'

function ProductSectionCard({ image, price, title, productId, isFavourite }) {

    const dispatch = useDispatch()

    const [favourite, setFavourite] = useState(isFavourite)

    useEffect(() => {
        setFavourite(isFavourite)
    }, [isFavourite])

    const handleFavourite = (data) => {
        setFavourite(!favourite)
        dispatch(addFavouriteProducts(data))
    }


    return (
        <div className='h-[350px] grid rounded overflow-hidden border-1 border-brand-light hover:shadow'>
            <div className='w-full h-auto max-h-[450px] overflow-hidden grid justify-center items-center bg-black sm:max-h-[250px]'>
                <NavLink to={`/productdetails/${productId}`}>
                    <img src={image} className='w-fit' alt="" />
                </NavLink>
            </div>
            <div className='p-2.5 grid grid-cols-3 items-center justify-between gap-2.5'>
                <p className='w-full text-2xl font-medium col-span-2'>{"Rs " + price}</p>
                {
                    favourite ? (
                        <p className='w-full col-span-1 grid items-center justify-end'><FaHeart className='text-red-500 text-lg' onClick={() => {setFavourite(false), handleFavourite(productId)}} /></p>
                    ) : (
                        <p className='w-full col-span-1 grid items-center justify-end'><FaRegHeart className='text-lg' onClick={() => {setFavourite(true) , handleFavourite(productId)}} /></p>

                    )
                }
                <p className='col-span-3'>{title.slice(0, 36) + "..."}</p>
            </div>
        </div>
    )
}

export default ProductSectionCard