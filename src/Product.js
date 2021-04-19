import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Fish from './fish.jpeg';
import { useParams } from 'react-router-dom';

function Product({ products }) {

    let { productID } = useParams();
    productID--; // So the item in arr[0] can be referenced as 1

    return (
        <>
            {productID < products.length ?
                <Jumbotron className="text-center">
                    <h1 className="display-3">{products[productID].name}</h1>
                    <img src={Fish} style={{ width: "400px" }}></img>
                    <hr className="my-2" />
                    <p>{products[productID].description}</p>
                    <p>{'$' + products[productID].price}</p>
                    <p className="lead">
                        How Many? [ ]
                <Button color="primary">Add to Cart</Button>
                    </p>
                </Jumbotron>
                :
                "This product does not exist!"
            }
        </>
    )
}

export default Product;