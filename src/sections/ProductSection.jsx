import React, { useEffect } from 'react'
import ProductSectionCard from '../components/ProductSectionCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/features/products/productAction'

function ProductSection() {
    const base = "../../../public/uploads/"

    const {products, error, loading} = useSelector((state) => state.products)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getProducts())
    },[])
    

    return loading ? (
        <p>loading...</p>
    ):
    (
        <div className='grid grid-cols-12'>
            <div className='w-full col-span-10 col-start-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-4'>
                <h1 className='text-brand-primary text-3xl font-semibold col-span-1 py-5 sm:col-span-2 md:col-span-4'>Mobile Phones</h1>
                {
                    Array.isArray(products) && products.filter((v, i) => {
                        return v.category === "mobile"
                    }).map((v, i) => {
                        return (
                            <ProductSectionCard image={base+v.mainImage[0].filename} price={v.price} title={v.title} productId={v._id} key={i} />
                        )
                    })
                }

                <h1 className='text-brand-primary text-3xl font-semibold col-span-1 py-5 sm:col-span-2 md:col-span-4'>Cars</h1>
                {
                    Array.isArray(products) && products.filter((v, i) => {
                        return v.category === "car"
                    }).map((v, i) => {
                        return (
                            <ProductSectionCard image={base+v.mainImage[0].filename} price={v.price} title={v.title} productId={v._id} key={i} />
                        )
                    })
                }

                <h1 className='text-brand-primary text-3xl font-semibold col-span-1 py-5 sm:col-span-2 md:col-span-4'>Bikes</h1>
                {
                    Array.isArray(products) && products.filter((v, i) => {
                        return v.category === "bike"
                    }).map((v, i) => {
                        return (
                            <ProductSectionCard image={base+v.mainImage[0].filename} price={v.price} title={v.title} productId={v._id} key={i} />
                        )
                    })
                }

                <h1 className='text-brand-primary text-3xl font-semibold col-span-1 py-5 sm:col-span-2 md:col-span-4'>Electronics</h1>
                {
                    Array.isArray(products) && products.filter((v, i) => {
                        return v.category === "electronics"
                    }).map((v, i) => {
                        return (
                            <ProductSectionCard image={base+v.mainImage[0].filename} price={v.price} title={v.title} productId={v._id} key={i} />
                        )
                    })
                }

                <h1 className='text-brand-primary text-3xl font-semibold col-span-1 py-5 sm:col-span-2 md:col-span-4'>Fashion</h1>
                {
                    Array.isArray(products) && products.filter((v, i) => {
                        return v.category === "fashion"
                    }).map((v, i) => {
                        return (
                            <ProductSectionCard image={base+v.mainImage[0].filename} price={v.price} title={v.title} productId={v._id} key={i} />
                        )
                    })
                }

                <h1 className='text-brand-primary text-3xl font-semibold col-span-1 py-5 sm:col-span-2 md:col-span-4'>House</h1>
                {
                    Array.isArray(products) && products.filter((v, i) => {
                        return v.category === "house"
                    }).map((v, i) => {
                        return (
                            <ProductSectionCard image={base+v.mainImage[0].filename} price={v.price} title={v.title} productId={v._id} key={i} />
                        )
                    })
                }

                <h1 className='text-brand-primary text-3xl font-semibold col-span-1 py-5 sm:col-span-2 md:col-span-4'>Furniture</h1>
                {
                    Array.isArray(products) && products.filter((v, i) => {
                        return v.category === "furniture"
                    }).map((v, i) => {
                        return (
                            <ProductSectionCard image={base+v.mainImage[0].filename} price={v.price} title={v.title} productId={v._id} key={i} />
                        )
                    })
                }

                <h1 className='text-brand-primary text-3xl font-semibold col-span-1 py-5 sm:col-span-2 md:col-span-4'>Kids</h1>
                {
                    Array.isArray(products) && products.filter((v, i) => {
                        return v.category === "kids"
                    }).map((v, i) => {
                        return (
                            <ProductSectionCard image={base+v.mainImage[0].filename} price={v.price} title={v.title} productId={v._id} key={i} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductSection