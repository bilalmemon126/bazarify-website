// import { useParams } from 'react-router-dom';
// import CardImages from '../../components/CardImages/CardImages'
// import data from '../../Data/Data';
// import Quantity from '../../components/Quantity/Quantity';
// import { useState } from 'react';

// function ProductDetails(props) {
    
//     const base = './src/assets/stock/';

//     const params = useParams()
//     const { id } = params;

//     const [quantity, setQuantity] = useState(1)

//     let price = data[id].Price;
//     let discount = data[id].Discount;

//     let discountedPrice = Math.round(price - (price * (discount / 100)))
//     let finalPrice = discountedPrice * quantity;

//   return (
//     <>
//             <div id="cardDetailsContainer">
//                 <div id="cardDetailsBox">
//                     <div id="imageBox">
//                         <CardImages images={data[id].Images} />
//                     </div>
//                     <div id="productDetailsBox">
//                         <p id='productTitle'>{data[id].Title}</p>
//                         <p id='productRating'>{data[id].Rating} <span>({data[id].Reviews})</span></p>
//                         <Quantity productId={id} quantity={quantity} setQuantity={setQuantity}/>
//                         <p id='productPrice'>Rs. {finalPrice} <span>-{discount}%</span></p>

//                         <button id='addToCartBtn' className='orderBtn'>ADD TO CART</button>
//                         <button id='buyItNowBtn' className='orderBtn'>BUY IT NOW</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//   )
// }

// export default ProductDetails