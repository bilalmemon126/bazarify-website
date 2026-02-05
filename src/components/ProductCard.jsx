import React from 'react'
import Button from './Button'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addFavouriteProducts } from '../redux/features/favourite/favouriteAction'

function ProductCard({ image, price, title, location, productId }) {
    const dispatch = useDispatch()

    const { favouriteProducts } = useSelector((state) => state.favouriteProducts)

    const handleFavourite = (data) => {
        dispatch(addFavouriteProducts(data))
    }


    const isFavorited = favouriteProducts?.data?.some(v => v.productId._id === productId);

    return (
        <div className='w-full h-auto sm:max-h-[200px] grid grid-cols-12 gap-5'>
            <div className='h-auto max-h-[350px] col-span-12 overflow-hidden w-full flex items-center justify-center sm:col-span-4 sm:max-h-[200px]'>
                <NavLink to={`/productdetails/${productId}`}>
                    <img src={image} alt="" />
                </NavLink>
            </div>

            <div className='col-span-12 grid grid-cols-1 items-center py-1.5 sm:col-span-8'>
                <div className='h-fit grid grid-cols-6 gap-1.5'>
                    <div className='col-span-5'>
                        <p className='text-xl sm:text-3xl font-medium text-brand-primary'>Rs. {price}</p>
                        <p className='text-sm sm:text-lg text-gray-700'>{title.slice(0, 58)}...</p>
                    </div>
                    <div className='col-span-1 grid py-5'>
                        {/* <p className='w-full h-fit grid items-center justify-center'>{favourite ? <FaHeart className='text-red-500 text-2xl' onClick={() => setFavourite(!favourite)} /> : <FaRegHeart className='text-2xl' onClick={() => setFavourite(!favourite)} />}</p> */}

                        <p className='w-full h-fit grid items-center justify-center'>
                            {
                                isFavorited ?
                                    <FaHeart className='text-red-500 text-2xl' onClick={() => { handleFavourite(productId) }} />
                                    :
                                    <FaRegHeart className='text-2xl' onClick={() => { handleFavourite(productId) }} />
                            }
                        </p>
                    </div>
                </div>
                <div className='h-fit grid grid-cols-2 gap-1.5'>
                    <p className='col-span-2'>{location}</p>
                    <Button btnText={"Call"} />
                    <Button btnText={"Chat"} btnPath={`/chat/hello/${productId}`} />
                </div>
            </div>

        </div>
    )
}

export default ProductCard