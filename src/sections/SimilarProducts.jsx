import React from 'react'
import { products } from '../data'
import ProductSectionCard from '../components/ProductSectionCard';

function SimilarProducts({productId}) {
    const base = "/products/"
    const productCategory = products[productId].category;
    return (
        <div className='col-span-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4'>
            {
                products.filter((v) => v.category == productCategory && v.id != productId)
                    .map((v, i) => {
                        return (
                            <ProductSectionCard image={base + v.mainImage} price={v.price} title={v.title} productId={v.id} key={i} />
                        )
                    })
            }
        </div>
    )
}

export default SimilarProducts