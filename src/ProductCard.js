import React from 'react';

function ProductCard({product}) {
    return (
        <div className="row">
                <h1>{product.name}</h1>
        </div>
    )
}

export default ProductCard;