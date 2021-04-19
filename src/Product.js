import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Fish from './fish.jpeg';
import { useParams } from 'react-router-dom';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';


function Product({ products, addToCart }) {

    let { productID } = useParams();
    productID--; // So the item in arr[0] can be referenced as 1

    return (
        <>
            {productID < products.length ?
                <>
                    <Jumbotron className="text-center">
                        <h1 className="display-3">{products[productID].name}</h1>
                        <img src={Fish} alt={"Fish"} style={{ width: "400px" }}></img>
                        <hr className="my-2" />
                        <p>{products[productID].description}</p>
                        <p>{'$' + products[productID].price}</p>
                    </Jumbotron>

                    <Form style={{position: "relative", left: "47.5vw"}} onSubmit={event => {
                        addToCart(productID + 1, event.target.elements.number.value)
                        event.preventDefault();
                    }}>

                        <FormGroup>
                            <Input
                                style={{ width: "133px" }}
                                type="number"
                                name="number"
                                id="exampleNumber"
                                placeholder="1"
                            />
                            <Button className="ps-4 pe-4">Add to Cart</Button>
                        </FormGroup>
                    </Form>

                </>
                :
                "This product does not exist!"
            }
        </>
    )
}

export default Product;