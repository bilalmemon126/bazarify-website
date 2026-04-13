import React from 'react'
import { useSelector } from 'react-redux'
import ProductSectionCard from '../components/ProductSectionCard'
import ProductSectionCardSkeleton from '../components/ProductSectionCardSkeleton'

function MyFavourite() {

    const { favouriteProducts, loading } = useSelector((state) => state.favouriteProducts)

    return (
        <div className='grid grid-cols-12'>
            <div className='w-full col-span-10 col-start-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-4'>
                <h1 className='text-brand-primary text-3xl font-semibold col-span-1 py-5 sm:col-span-2 md:col-span-4'>My Favourite Products</h1>
                {
                    loading ? (
                        Array(4).fill(0).map((v, j) => (
                            <ProductSectionCardSkeleton key={j}/>
                        ))
                    ) :
                    favouriteProducts?.data?.map((v, i) => {
                        return (
                            <ProductSectionCard image={v.productId.mainImage.secure_url} price={v.productId.price} title={v.productId.title} productId={v.productId._id} userId={v.userId} isFavourite={true} key={i} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MyFavourite