import React from 'react';
import ProductCard from './ProductCard';
import { Row, Container } from 'reactstrap';

function Products({ products }) {
    // const productArr = products.map((item, index) => {
    //     return <div key={index}>{item.name}</div>
    // })

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