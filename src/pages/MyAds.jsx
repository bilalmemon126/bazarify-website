import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { getHomeProducts, getProducts } from '../redux/features/products/productAction'
import { useParams } from 'react-router-dom'
import MyAdsCard from '../components/MyAdsCard'

function MyAds() {
    const { myid } = useParams()
    let [input, setInput] = useState("")
    let [checkAds, setCheckAds] = useState({ viewAll: true, activeAds: false, inactiveAds: false })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts({userId: myid}))
    }, [])

    const { products, error, loading } = useSelector((state) => state.products)

    let activeProducts = products?.data?.filter((v, i) => { return v.status === "active" })
    let inactiveProducts = products?.data?.filter((v, i) => { return v.status === "inactive" })

    if(!checkAds.activeAds && !checkAds.inactiveAds && !checkAds.viewAll){
        setCheckAds((prev) => ({ ...prev, viewAll: true}))
    }

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
                            <div className={`w-fit py-2 px-3.5 text-[10px] cursor-pointer border border-brand-dark rounded-full sm:text-sm ${checkAds.viewAll ? "bg-brand-dark" : ""}`} onClick={() => { setCheckAds((prev) => ({ ...prev, viewAll: true, activeAds: false, inactiveAds: false })) }}>View all [{products?.data?.length}]</div>
                            <div className={`w-fit py-2 px-3.5 text-[10px] cursor-pointer border border-brand-dark rounded-full sm:text-sm ${checkAds.activeAds ? "bg-brand-dark" : ""}`} onClick={() => { setCheckAds((prev) => ({ ...prev, activeAds: !checkAds.activeAds, viewAll: false, inactiveAds: false })) }}>Active Ads [{activeProducts?.length}]</div>
                            <div className={`w-fit py-2 px-3.5 text-[10px] cursor-pointer border border-brand-dark rounded-full sm:text-sm ${checkAds.inactiveAds ? "bg-brand-dark" : ""}`} onClick={() => { setCheckAds((prev) => ({ ...prev, inactiveAds: !checkAds.inactiveAds, viewAll: false, activeAds: false })) }}>Inactive Ads [{inactiveProducts?.length}]</div>
                        </div>

                        <div className='grid gap-5 bg-brand-light p-5 rounded-xl'>
                            {
                                checkAds.viewAll && products?.data?.length === 0 ? (
                                    <p className='text-2xl text-center text-brand-primary font-medium'>Product Not Found</p>
                                ) :
                                    checkAds.viewAll && products?.data?.map((v, i) => {
                                        return (
                                            <div className='bg-white p-2.5 rounded-xl overflow-hidden' key={i}>
                                                <MyAdsCard image={v.mainImage.secure_url} price={v.price} title={v.title} description={v.description} productId={v._id} category={v.category.categoryName} createdBy={v.createdBy._id} status={v.status} />
                                            </div>
                                        )
                                    })
                            }

                            {
                                checkAds.activeAds && activeProducts && activeProducts.length === 0 ? (
                                    <p className='text-2xl text-center text-brand-primary font-medium'>Product Not Found</p>
                                ) :
                                    checkAds.activeAds && activeProducts && activeProducts.length > 0 && activeProducts.map((v, i) => {
                                        return (
                                            <div className='bg-white p-2.5 rounded-xl overflow-hidden' key={i}>
                                                <MyAdsCard image={v.mainImage.secure_url} price={v.price} title={v.title} description={v.description} productId={v._id} category={v.category.categoryName} createdBy={v.createdBy._id} status={v.status} />
                                            </div>
                                        )
                                    })
                            }

                            {
                                checkAds.inactiveAds && inactiveProducts && inactiveProducts.length === 0 ? (
                                    <p className='text-2xl text-center text-brand-primary font-medium'>Product Not Found</p>
                                ) :
                                    checkAds.inactiveAds && inactiveProducts && inactiveProducts.length > 0 && inactiveProducts.map((v, i) => {
                                        return (
                                            <div className='bg-white p-2.5 rounded-xl overflow-hidden' key={i}>
                                                <MyAdsCard image={v.mainImage.secure_url} price={v.price} title={v.title} description={v.description} productId={v._id} category={v.category.categoryName} createdBy={v.createdBy._id} status={v.status} />
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