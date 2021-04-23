import React from 'react';
import ProductCard from './ProductCard';
import { Row, Container } from 'reactstrap';

function Products({ products, addToCart }) {

    return (
        <Container> {/* Used reactstrap container specfically for styling */}
            <Row sm="4"> {/* Every row on products page will have 4 items */}
                {
                    products.map((item, index) => { {/* Making a card for every product in the products array and passing its respective details and a addToCart function  */}
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