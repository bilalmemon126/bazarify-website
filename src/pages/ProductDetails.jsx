import { useParams } from 'react-router-dom';
import CardImages from '../components/CardImages'
import Button from '../components/Button';
import profileVector from '../assets/profile vector.jpg'
import SimilarProducts from '../sections/SimilarProducts';
import { getProducts } from '../redux/features/products/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function ProductDetails(props) {
    const params = useParams()
    const { id } = params;
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getProducts())
    },[])

    const {products, error, loading} = useSelector((state) => state.products)

    let productDetails = Array.isArray(products) && products.filter((v, i) => { return v._id === id })

    return loading ? (
        <p>loading...</p>
    ) :
    (
        <>
        {
            productDetails[0] ?
            <>
            <div className='grid grid-cols-12 my-5'>
                <div className='col-span-10 col-start-2 grid grid-cols-12 gap-y-10 items-center md:gap-10'>
                    <div className='col-span-12 md:col-span-7'>
                        <CardImages images={productDetails[0].images} />
                    </div>
                    <div className='col-span-12 grid grid-cols-1 gap-10 md:col-span-5'>
                        <div className='flex flex-wrap gap-5 items-center'>
                            <div className='col-span-1 w-fit h-fit rounded-full overflow-hidden'>
                                <img src={profileVector} className='w-[80px]' alt="" />
                            </div>
                            <div className='h-fit col-span-2'>
                                <p className='text-xl text-brand-primary font-medium'>Posted By</p>
                                <h2 className='text-3xl text-brand-primary font-medium'>Bilal Memon</h2>
                            </div>
                        </div>
                        <div className='grid gap-2.5'>
                            <p className='text-2xl'>{productDetails[0].title}</p>
                            <p className='text-3xl font-medium'>Rs. {productDetails[0].price}</p>
                        </div>

                        <div className='h-fit grid grid-cols-1 gap-2.5'>
                            <Button btnText={"Call"} />
                            <Button btnText={"Chat"} btnPath={`/chat/${productDetails[0].createdBy}/${id}`} />
                        </div>
                    </div>

                    <div className='col-span-12'>
                        <h1 className='text-3xl font-medium py-5 border-b border-brand-light'>Description</h1>
                        <p className='my-5'>{productDetails[0].description}</p>
                    </div>

                    <div className='col-span-12 grid grid-cols-12'>
                        <h1 className='text-3xl font-medium py-5 border-b col-span-12 border-brand-light'>Similar {productDetails[0].category.charAt(0).toUpperCase() + productDetails[0].category.slice(1)}</h1>
                        <SimilarProducts productId={id} products={products} productCategory={productDetails[0].category} />
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