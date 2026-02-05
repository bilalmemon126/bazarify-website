import React, { useEffect } from 'react'
import ProductSectionCard from '../components/ProductSectionCard'
import { useDispatch, useSelector } from 'react-redux'
import { getHomeProducts } from '../redux/features/products/productAction'
import { useLocation, useNavigate } from 'react-router-dom'

function ProductSection() {

    const { search } = useLocation()
    const params = new URLSearchParams(search)
    const navigate = useNavigate()

    const { homeProducts, homeProductsError, homeProductsLoading } = useSelector((state) => state.products)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getHomeProducts(search))
    }, [search])

    let handleFilter = (key, value) => {
        if (value) {
            params.set(key, value)
        }
        else {
            params.delete(key)
        }
        navigate(`?${params.toString()}`)
    }

    return homeProductsLoading ? (
        <p>loading...</p>
    ) :
        (
            <div className='grid grid-cols-12'>
                <div className='col-span-10 col-start-2'>
                    {
                        homeProducts?.data?.map((v, i) => {
                            return (
                                <div key={i}>
                                    <h1 className='text-brand-primary text-3xl font-semibold col-span-1 py-5 sm:col-span-2 md:col-span-4' key={i}>{v.title}</h1>
                                    <div className='w-full grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-4' >
                                        {
                                            v.products.length > 0 ?
                                                v.products.map((v, i) => {
                                                    return (
                                                        <ProductSectionCard image={v.mainImage.secure_url} price={v.price} title={v.title} productId={v._id} key={i} />
                                                    )
                                                }) : ""
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
}

export default ProductSection