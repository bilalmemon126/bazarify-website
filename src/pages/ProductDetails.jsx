import { useParams } from 'react-router-dom';
import CardImages from '../components/CardImages'
import Button from '../components/Button';
import { getProductDetails } from '../redux/features/products/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProfileImageCard from '../components/ProfileImageCard';

function ProductDetails(props) {
    const params = useParams()
    const { id } = params;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [])

    const handleDelete = async (productId) => {
        let response = await dispatch(deleteProduct(productId))

        if (response.payload.status) {
            navigate('/')
        }
    }

    const { productDetails, productDetailsError, productDetailsLoading } = useSelector((state) => state.products)

    return productDetailsLoading ? (
        <p>loading...</p>
    ) :
        (
            <>
                {
                    productDetails?.data ?
                        <>
                            <div className='grid grid-cols-12 my-5'>
                                <div className='col-span-10 col-start-2 grid grid-cols-12 gap-y-10 items-center md:gap-10'>
                                    <div className='col-span-12 md:col-span-7'>
                                        <CardImages images={productDetails?.data?.images} />
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
                                                    <Button btnText={"Call"} />
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
                                </div>
                            </div>
                        </> :
                        <p>loading...</p>
                }
            </>
        )
}

export default ProductDetails