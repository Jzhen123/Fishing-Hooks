import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Fish from './fish.jpeg';
import { useParams } from 'react-router-dom';
import { Form, FormGroup, Input } from 'reactstrap';


function Product({ products, addToCart }) {

    let { productID } = useParams(); // Sets productID to value in url
    productID--; // So the item in arr[0] can be referenced as 1

    return (
        <>
            {productID < products.length ? // Ternary to check if productID could even exist in the array based on length. Not very dynamic.
                <>
                    <Jumbotron className="text-center"> {/* Used for styling */}
                        <h1 className="display-3">{products[productID].name}</h1> {/* Name */}
                        <img src={Fish} alt={"Fish"} style={{ width: "400px" }}></img> {/* Fish picture */}
                        <hr className="my-2" />
                        <p>{products[productID].description}</p> {/* Description */}
                        <p>{'$' + products[productID].price}</p> {/* Price */}
                    </Jumbotron>

                    {/* Form for Quanitity Input and Add to Cart Button that uses addToCard function from props */}
                    <Form
                        style={{ position: "relative", left: "47.5vw" }} 
                        onSubmit={event => {
                            addToCart(productID + 1, event.target.elements.number.value)
                            event.preventDefault();
                        }}
                    >
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