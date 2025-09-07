import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data'
import { NavLink } from 'react-router-dom'

function ProductSection() {
    const base = "/src/assets/products/"
    return (
        <div className='grid grid-cols-12'>
            <div className='w-full col-span-10 col-start-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-4'>
                <h1 className='text-brand-primary text-3xl font-semibold col-span-1 py-5 sm:col-span-2 md:col-span-4'>Mobile Phones</h1>
                {
                    products.filter((v, i) => {
                        return v.category === "mobile"
                    }).map((v, i) => {
                        return (
                            <ProductCard image={base + v.mainImage} price={v.price} title={v.title} key={i} />
                        )
                    })
                }

                <h1 className='text-brand-primary text-3xl font-semibold col-span-1 py-5 sm:col-span-2 md:col-span-4'>Cars</h1>
                {
                    products.filter((v, i) => {
                        return v.category === "car"
                    }).map((v, i) => {
                        return (
                            <ProductCard image={base + v.mainImage} price={v.price} title={v.title} key={i} />
                        )
                    })
                }

                <h1 className='text-brand-primary text-3xl font-semibold col-span-1 py-5 sm:col-span-2 md:col-span-4'>Bikes</h1>
                {
                    products.filter((v, i) => {
                        return v.category === "bike"
                    }).map((v, i) => {
                        return (
                            <ProductCard image={base + v.mainImage} price={v.price} title={v.title} key={i} />
                        )
                    })
                }

                <h1 className='text-brand-primary text-3xl font-semibold col-span-1 py-5 sm:col-span-2 md:col-span-4'>Electronics</h1>
                {
                    products.filter((v, i) => {
                        return v.category === "electronic"
                    }).map((v, i) => {
                        return (
                            <ProductCard image={base + v.mainImage} price={v.price} title={v.title} key={i} />
                        )
                    })
                }

                <h1 className='text-brand-primary text-3xl font-semibold col-span-1 py-5 sm:col-span-2 md:col-span-4'>Fashion</h1>
                {
                    products.filter((v, i) => {
                        return v.category === "fashion"
                    }).map((v, i) => {
                        return (
                            <ProductCard image={base + v.mainImage} price={v.price} title={v.title} key={i} />
                        )
                    })
                }

                <h1 className='text-brand-primary text-3xl font-semibold col-span-1 py-5 sm:col-span-2 md:col-span-4'>House</h1>
                {
                    products.filter((v, i) => {
                        return v.category === "house"
                    }).map((v, i) => {
                        return (
                            <ProductCard image={base + v.mainImage} price={v.price} title={v.title} key={i} />
                        )
                    })
                }

                <h1 className='text-brand-primary text-3xl font-semibold col-span-1 py-5 sm:col-span-2 md:col-span-4'>Tablet</h1>
                {
                    products.filter((v, i) => {
                        return v.category === "tablet"
                    }).map((v, i) => {
                        return (
                            <ProductCard image={base + v.mainImage} price={v.price} title={v.title} key={i} />
                        )
                    })
                }

                <h1 className='text-brand-primary text-3xl font-semibold col-span-1 py-5 sm:col-span-2 md:col-span-4'>Furniture</h1>
                {
                    products.filter((v, i) => {
                        return v.category === "furniture"
                    }).map((v, i) => {
                        return (
                            <ProductCard image={base + v.mainImage} price={v.price} title={v.title} key={i} />
                        )
                    })
                }

                <h1 className='text-brand-primary text-3xl font-semibold col-span-1 py-5 sm:col-span-2 md:col-span-4'>Kids</h1>
                {
                    products.filter((v, i) => {
                        return v.category === "kids"
                    }).map((v, i) => {
                        return (
                            <ProductCard image={base + v.mainImage} price={v.price} title={v.title} key={i} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductSection