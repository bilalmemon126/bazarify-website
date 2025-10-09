import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/features/products/productAction'
import { useParams } from 'react-router-dom'
import MyAdsCard from '../components/MyAdsCard'

function MyAds() {
    const { myid } = useParams()
    let [input, setInput] = useState("")
    let [checkAds, setCheckAds] = useState({ viewAll: true, activeAds: false, inactiveAds: false })

    const base = "../../../public/uploads/"

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const { products, error, loading } = useSelector((state) => state.products)

    let allProducts = Array.isArray(products) && products.filter((v, i) => { return v.createdBy === myid })

    let activeProducts = allProducts.filter((v, i) => { return v.status === "active" })
    let inactiveProducts = allProducts.filter((v, i) => { return v.status === "inactive" })

    return loading ? (
        <p>loading...</p>
    ) :
        (
            <div className='w-full grid grid-cols-12'>
                <div className='col-span-10 col-start-2'>
                    <h1 className='col-span-3 w-full text-3xl text-center font-semibold my-5 pb-3 text-brand-primary border-b border-brand-light sm:col-span-4'>Manage and View Ads</h1>

                    <div className='w-full grid gap-5'>
                        <div className="p-1.5 flex gap-2.5 items-center rounded-md bg-white outline-1 outline-brand-primary focus-within:outline-2">
                            <div className="w-fit p-2.5"><FiSearch className='text-brand-primary text-lg' /></div>
                            <input
                                name="search"
                                type="text"
                                placeholder="Search"
                                value={input}
                                onChange={(e) => { setInput(e.target.value) }}
                                className="text-brand-primary placeholder:text-brand-primary focus:outline-none"
                            />
                        </div>

                        <div className='flex gap-2.5'>
                            <div className={`w-fit py-2 px-3.5 text-[10px] cursor-pointer border border-brand-dark rounded-full sm:text-sm ${checkAds.viewAll ? "bg-brand-dark" : ""}`} onClick={() => { setCheckAds((prev) => ({ ...prev, viewAll: !checkAds.viewAll, activeAds: false, inactiveAds: false })) }}>View all [{allProducts.length}]</div>
                            <div className={`w-fit py-2 px-3.5 text-[10px] cursor-pointer border border-brand-dark rounded-full sm:text-sm ${checkAds.activeAds ? "bg-brand-dark" : ""}`} onClick={() => { setCheckAds((prev) => ({ ...prev, activeAds: !checkAds.activeAds, viewAll: false, inactiveAds: false })) }}>Active Ads [{activeProducts.length}]</div>
                            <div className={`w-fit py-2 px-3.5 text-[10px] cursor-pointer border border-brand-dark rounded-full sm:text-sm ${checkAds.inactiveAds ? "bg-brand-dark" : ""}`} onClick={() => { setCheckAds((prev) => ({ ...prev, inactiveAds: !checkAds.inactiveAds, viewAll: false, activeAds: false })) }}>Inactive Ads [{inactiveProducts.length}]</div>
                        </div>

                        <div className='grid gap-5 bg-brand-light p-5 rounded-xl'>
                            {
                                allProducts.length === 0 ? (
                                    <p className='text-2xl text-center text-brand-primary font-medium'>Product Not Found</p>
                                ) :
                                    checkAds.viewAll && allProducts.map((v, i) => {
                                        return (
                                            <div className='bg-white p-2.5 rounded-xl overflow-hidden' key={i}>
                                                <MyAdsCard image={base + v.mainImage[0].filename} price={v.price} title={v.title} description={v.description} productId={v._id} createdBy={v.createdBy} status={v.status} />
                                            </div>
                                        )
                                    })
                            }

                            {
                                activeProducts.length === 0 ? (
                                    <p className='text-2xl text-center text-brand-primary font-medium'>Product Not Found</p>
                                ) :
                                    checkAds.activeAds && activeProducts.map((v, i) => {
                                        return (
                                            <div className='bg-white p-2.5 rounded-xl overflow-hidden' key={i}>
                                                <MyAdsCard image={base + v.mainImage[0].filename} price={v.price} title={v.title} description={v.description} productId={v._id} createdBy={v.createdBy} status={v.status} />
                                            </div>
                                        )
                                    })
                            }

                            {
                                inactiveProducts.length === 0 ? (
                                    <p className='text-2xl text-center text-brand-primary font-medium'>Product Not Found</p>
                                ) :
                                    checkAds.inactiveAds && inactiveProducts.map((v, i) => {
                                        return (
                                            <div className='bg-white p-2.5 rounded-xl overflow-hidden' key={i}>
                                                <MyAdsCard image={base + v.mainImage[0].filename} price={v.price} title={v.title} description={v.description} productId={v._id} createdBy={v.createdBy} status={v.status} />
                                            </div>
                                        )
                                    })
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
}

export default MyAds