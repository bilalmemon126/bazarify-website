import { useParams } from 'react-router-dom';
import { getProductDetails, getProducts } from '../redux/features/products/productAction'
import CardImages from '../components/CardImages'
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ProfileImageCard from '../components/ProfileImageCard';
import ProductDetailsSkeleton from '../components/ProductDetailsSkeleton';
import ProductSectionCard from '../components/ProductSectionCard';
import ProductSectionCardSkeleton from '../components/ProductSectionCardSkeleton';

function ProductDetails(props) {
    const { id } = useParams()
    const dispatch = useDispatch()
    let userId = localStorage.getItem("userId")
    let [phoneNum, setPhoneNum] = useState("Call")

    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [id])

    const handleDelete = async (productId) => {
        let response = await dispatch(deleteProduct(productId))

        if (response.payload.status) {
            navigate('/')
        }
    }

    const { products, productDetails, productDetailsError, productDetailsLoading, loading } = useSelector((state) => state.products)
    console.log(productDetails)

    useEffect(() => {
        if (productDetails.data) {
            dispatch(getProducts({ search: { category: productDetails?.data?.category.categoryName, productId: productDetails?.data._id }, id: userId }))
        }
    }, [productDetails])

    const handleCallBtn = () => {
        setPhoneNum(phoneNum === "Call" ? productDetails?.data?.createdBy.phone : "Call")
    }

    return (
        <>
            {
                productDetailsLoading ? (
                    <ProductDetailsSkeleton />
                ) :
                    productDetails?.data ?
                        <>
                            <div className='grid grid-cols-12 my-5'>
                                <div className='col-span-10 col-start-2 grid grid-cols-12 gap-y-10 items-center md:gap-10'>
                                    <div className='col-span-12 md:col-span-7'>
                                        <CardImages images={productDetails?.data?.images} mainImage={productDetails?.data?.mainImage} />
                                    </div>
                                    <div className='col-span-12 grid grid-cols-1 gap-10 md:col-span-5'>
                                        <ProfileImageCard postedByUserId={productDetails?.data?.createdBy._id} userFirstName={productDetails?.data?.createdBy.firstName} userLastName={productDetails?.data?.createdBy.lastName} />
                                        <div className='grid gap-2.5'>
                                            <p className='text-2xl'>{productDetails?.data?.title}</p>
                                            <p className='text-3xl font-medium'>Rs. {productDetails?.data?.price}</p>
                                        </div>

                                        {
                                            localStorage.getItem("userId") !== productDetails?.data?.createdBy._id ?
                                                <div className='h-fit grid grid-cols-1 gap-2.5'>
                                                    <Button btnText={phoneNum} handleEvent={handleCallBtn} />
                                                    <Button btnText={"Chat"} btnPath={`/chat/${localStorage.getItem('userId')}/${id}`} />
                                                </div> :
                                                <div className='h-fit grid grid-cols-1 gap-2.5'>
                                                    <Button btnText={"Edit"} btnPath={`/editproduct/${productDetails?.data?.category}/${id}`} />
                                                    <Button btnText={"Delete"} handleEvent={() => { handleDelete(id) }} />
                                                </div>
                                        }
                                    </div>

                                    <div className='col-span-12'>
                                        <h1 className='text-3xl font-medium py-5 border-b border-brand-light'>Description</h1>
                                        <p className='my-5'>{productDetails?.data?.description}</p>
                                    </div>

                                    <div className='col-span-12 grid grid-cols-12'>
                                        <h1 className='text-3xl font-medium py-5 border-b col-span-12 border-brand-light'>Similar {productDetails?.data?.category.categoryName.charAt(0).toUpperCase() + productDetails?.data?.category.categoryName.slice(1)}</h1>
                                    </div>

                                    <div className='col-span-12 grid grid-cols-12 gap-3.5'>
                                        {
                                            loading ? (
                                                Array(4).fill(0).map((v, i) => (
                                                    <div className='col-span-3' key={i}>
                                                        <ProductSectionCardSkeleton />
                                                    </div>
                                                ))
                                            ) :
                                                products?.length === 0 ? (
                                                    <p className='col-span-12 text-2xl text-black font-medium'>Product Not Found</p>
                                                ) :
                                                    products?.data?.map((v, i) => {
                                                        return (
                                                            <div className='col-span-3' key={i}>
                                                                <ProductSectionCard image={v.mainImage.secure_url} price={v.price} title={v.title} productId={v._id} />
                                                            </div>
                                                        )
                                                    })
                                        }
                                    </div>
                                </div>
                            </div>
                        </> :
                        <ProductDetailsSkeleton />
            }
        </>
    )
}

export default ProductDetails