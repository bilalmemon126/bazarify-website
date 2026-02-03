import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFavouriteProducts } from '../redux/features/favourite/favouriteAction'
import ProductSectionCard from '../components/ProductSectionCard'

function MyFavourite() {

    const {favouriteProducts, favouriteProductsMessage, error, loading} = useSelector((state) => state.favouriteProducts)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getFavouriteProducts())
    },[favouriteProductsMessage])

    return loading ? (
        <p>loading...</p>
    ) :
    (
            <div className='grid grid-cols-12'>
                <div className='w-full col-span-10 col-start-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-4'>
                    <h1 className='text-brand-primary text-3xl font-semibold col-span-1 py-5 sm:col-span-2 md:col-span-4'>My Favourite Products</h1>
                    {
                        favouriteProducts?.data && favouriteProducts.data.map((v, i) => {
                            return (
                                <ProductSectionCard image={v.mainImage.secure_url} price={v.price} title={v.title} productId={v._id} userId={localStorage.getItem("userId")} isFavourite={true} key={i} />
                            )
                        })
                    }
                </div>
            </div>
        )
}

export default MyFavourite