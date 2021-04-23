import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button, Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';


function Cart({ cart, products, removeFromCart, changeAmount }) {
    return (
        <>
            { cart.length > 0 ? // Checks if cart array passed from props has any items and displays a header based on it
                <h1>Cart</h1>
                :
                <h1>Nothing in Cart</h1>
            }

            <ListGroup> {/* List styling from reactstrap */}
                {
                    cart.map((item, index) => {
                        {/* Displays each cart item in a row */ }
                        return (
                            <ListGroupItem key={index}>

                                {/* Name of Product */}
                                <ListGroupItemHeading>
                                    <Link to={`/product/${item.id}`}>{item.name}</Link>

                                    {/* Button in the top right to delete item from cart entirely */}
                                    <Button style={{ position: "absolute", left: "95vw" }} onClick={() => removeFromCart(index)}>X</Button>
                                </ListGroupItemHeading>

                                {/* Product description and how many have been added to the cart */}
                                <ListGroupItemText>
                                    {products[item.id - 1].description}
                                    <p>Quanitity: {item.quantity} &nbsp;&nbsp;&nbsp; Total: {'$' + item.total}</p>
                                </ListGroupItemText>

                                {/* Form for changing the amount of a product using changeAmount function on submit */}
                                <Form
                                    onSubmit={event => {
                                        changeAmount(item.id, event.target.elements.number.value)
                                        event.preventDefault();
                                    }}
                                >
                                    <FormGroup>
                                        <Input
                                            style={{ width: "135px" }}
                                            type="number"
                                            name="number"
                                            id="exampleNumber"
                                            placeholder="1"
                                        />
                                        <Button className="ps-2 pe-2">Change Amount</Button>
                                    </FormGroup>
                                </Form>
                            </ListGroupItem>
                        )
                    })
                }
            </ListGroup>
        </>
    )
}

export default Cart;
