import React from 'react';
import { useSelector } from 'react-redux';
import ProductListItem from './ProductListItem';


export default function ProductList() {
    const { products } = useSelector(state => state.product);

    return (
        <div>
            {
                products.map(product => <ProductListItem key={product._id}
                    product={product} />)
            }
        </div>
    )
}