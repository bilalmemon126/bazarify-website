import { useParams } from 'react-router-dom';
import CardImages from '../components/CardImages'
import Button from '../components/Button';
import profileVector from '../assets/profile vector.jpg'
import SimilarProducts from '../sections/SimilarProducts';
import { getProductDetails } from '../redux/features/products/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function ProductDetails(props) {
    const params = useParams()
    const { id } = params;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [])

    const handleDelete = async(productId) => {
        let response =await dispatch(deleteProduct(productId))
  
      if (response.payload.status) {
          navigate('/')
      }
    }

    const { productDetails, productDetailsError, productDetailsLoading } = useSelector((state) => state.products)

    // let productDetails = Array.isArray(products) && products.filter((v, i) => { return v._id === id })

    return productDetailsLoading ? (
        <p>loading...</p>
    ) :
        (
            <>
                {
                    // productDetails[0] ?
                    productDetails?.data ?
                        <>
                            <div className='grid grid-cols-12 my-5'>
                                <div className='col-span-10 col-start-2 grid grid-cols-12 gap-y-10 items-center md:gap-10'>
                                    <div className='col-span-12 md:col-span-7'>
                                        {/* <CardImages images={productDetails[0].images} /> */}
                                        <CardImages images={productDetails?.data?.images} />
                                    </div>
                                    <div className='col-span-12 grid grid-cols-1 gap-10 md:col-span-5'>
                                        <div className='flex flex-wrap gap-5 items-center'>
                                            <div className='col-span-1 w-fit h-fit rounded-full overflow-hidden'>
                                                <img src={profileVector} className='w-[80px]' alt="" />
                                            </div>
                                            <div className='h-fit col-span-2'>
                                                <p className='text-xl text-brand-primary font-medium'>Posted By</p>
                                                {/* <h2 className='text-3xl text-brand-primary font-medium'>{productDetails[0].createdBy.firstName.charAt(0).toUpperCase() + productDetails[0].createdBy.firstName.slice(1)} {productDetails[0].createdBy.lastName.charAt(0).toUpperCase() + productDetails[0].createdBy.lastName.slice(1)}</h2> */}
                                                <h2 className='text-3xl text-brand-primary font-medium'>{productDetails?.data?.createdBy.firstName.charAt(0).toUpperCase() + productDetails?.data?.createdBy.firstName.slice(1)} {productDetails?.data?.createdBy.lastName.charAt(0).toUpperCase() + productDetails?.data?.createdBy.lastName.slice(1)}</h2>
                                            </div>
                                        </div>
                                        <div className='grid gap-2.5'>
                                            {/* <p className='text-2xl'>{productDetails[0].title}</p> */}
                                            <p className='text-2xl'>{productDetails?.data?.title}</p>
                                            {/* <p className='text-3xl font-medium'>Rs. {productDetails[0].price}</p> */}
                                            <p className='text-3xl font-medium'>Rs. {productDetails?.data?.price}</p>
                                        </div>

                                        {
                                            // localStorage.getItem("userId") !== productDetails[0].createdBy._id ?
                                            localStorage.getItem("userId") !== productDetails?.data?.createdBy._id ?
                                                <div className='h-fit grid grid-cols-1 gap-2.5'>
                                                    <Button btnText={"Call"} />
                                                    <Button btnText={"Chat"} btnPath={`/chat/${localStorage.getItem('userId')}/${id}`} />
                                                </div> :
                                                <div className='h-fit grid grid-cols-1 gap-2.5'>
                                                    {/* <Button btnText={"Edit"} btnPath={`/editproduct/${productDetails[0].category}/${id}`} /> */}
                                                    <Button btnText={"Edit"} btnPath={`/editproduct/${productDetails?.data?.category}/${id}`} />
                                                    <Button btnText={"Delete"} handleEvent={() => {handleDelete(id)}}/>
                                                </div>
                                        }
                                    </div>

                                    <div className='col-span-12'>
                                        <h1 className='text-3xl font-medium py-5 border-b border-brand-light'>Description</h1>
                                        {/* <p className='my-5'>{productDetails[0].description}</p> */}
                                        <p className='my-5'>{productDetails?.data?.description}</p>
                                    </div>

                                    <div className='col-span-12 grid grid-cols-12'>
                                        {/* <h1 className='text-3xl font-medium py-5 border-b col-span-12 border-brand-light'>Similar {productDetails[0].category.categoryName.charAt(0).toUpperCase() + productDetails[0].category.categoryName.slice(1)}</h1> */}
                                        <h1 className='text-3xl font-medium py-5 border-b col-span-12 border-brand-light'>Similar {productDetails?.data?.category.categoryName.charAt(0).toUpperCase() + productDetails?.data?.category.categoryName.slice(1)}</h1>
                                        {/* <SimilarProducts productId={id} products={products} productCategory={productDetails[0].category} /> */}
                                        {/* <SimilarProducts productId={id} products={productDetails?.data} productCategory={productDetails?.data?.category.categoryName} /> */}
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