import React from 'react';
import ProductCard from './ProductCard';

function Products ({products}) {
    // const productArr = products.map((item, index) => {
    //     return <p key={index}>{item.name}</p>
    // })
    const stuff = products;
    console.log(stuff)
    return (
        // <div>Hi</div>
        stuff.map((item, index) => {
            return (
                <ProductCard 
                    key={index}
                    product={item}
                />
            )
        })
    )
}

export default Products;