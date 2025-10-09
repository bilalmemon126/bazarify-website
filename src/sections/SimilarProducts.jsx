import React from 'react'
import ProductSectionCard from '../components/ProductSectionCard';

function SimilarProducts({ productId, products, productCategory }) {
    const base = "../../../public/uploads/"

    let similarProducts = products.filter((v, i) => { return v.category === productCategory })
    let filteredProducts = similarProducts.filter((v, i) => { return v._id !== productId })
    return (
        <div className='col-span-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4'>
            {
                filteredProducts.map((v, i) => {
                    return (
                        <ProductSectionCard image={base + v.mainImage[0].filename} price={v.price} title={v.title} productId={v._id} key={i} />
                    )
                })
            }
        </div>
    )
}

export default SimilarProducts