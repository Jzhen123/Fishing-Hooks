import React from 'react';
import ProductCard from './ProductCard';
import { Row, Container } from 'reactstrap';

function Products({ products }) {

    console.log(products)
    return (
        <Container>
            <Row>
                {
                    products.map((item, index) => {
                        return (
                            <ProductCard
                                key={index}
                                product={item}
                            />
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default Products;