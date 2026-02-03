import { NavLink } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({mainImage, title, price, editAndDeleteBtn, productId}) {
  return (
    <div id="productCardContainer">
      <NavLink to={`/productdetails/${productId}`} className={"navLinks"}>
      <div className='productMainImageBox'>
        <img src={mainImage} alt="" className='productMainImage'/>
      </div>
        <div className="titleAndPrice">
            <p>{title}</p>
            <p>Rs. {price}</p>
        </div>
      </NavLink>
        <div className="editAndDeleteBtn">
          {
            editAndDeleteBtn
          }
        </div>
    </div>
  )
}

export default ProductCard