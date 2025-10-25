import { GoPlus } from 'react-icons/go'
import './ProductManagement.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminEditProducts, adminGetProducts } from '../../../redux/features/adminProduct/adminProductAction'

function ProductManagement() {

  const { products, error, loading } = useSelector((state) => state.adminProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(adminGetProducts())
  }, [])

  const handleBlock = async (productId) => {
    let response = await dispatch(adminEditProducts(productId))
    if (response.payload.status) {
      dispatch(adminGetProducts())
    }
    if (!response.payload.status) {
      dispatch(adminGetProducts())
    }
  }

  return loading ?
    <p>Loading...</p> :
    (
      <div id="productManagementContainer">
        <div id="productManagementBox">
          {
            products.length > 0 && products.map((v, i) => {
              return (
                <ProductCard
                  productId={v._id}
                  mainImage={v.mainImage.secure_url}
                  title={v.title.slice(0, 100) + "..."}
                  price={v.price} key={i}
                  editAndDeleteBtn={
                    <>
                      <button className='text-red-500 font-bold' onClick={() => { handleBlock(v._id) }} >{v.isBlocked ? "UnBlock" : "Block"}</button>
                    </>
                  }
                />
              )
            })
          }
        </div>
      </div>
    )
}

export default ProductManagement