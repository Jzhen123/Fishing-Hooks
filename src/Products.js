import React from 'react';
import ProductCard from './ProductCard';
import { Row, Container } from 'reactstrap';

function Products({ products, addToCart }) {

    console.log(products)
    return (
        <Container>
            <Row sm="3">
                {
                    products.map((item, index) => {
                        return (
                            <ProductCard
                                key={index}
                                product={item}
                                addToCart={addToCart}
                            />
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default Products;