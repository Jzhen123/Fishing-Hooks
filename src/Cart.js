import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button, Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';


function Cart({ cart, products, removeFromCart, changeAmount }) {
    return (
        <>
            { cart.length > 0 ?
                <h1>Cart</h1>
                :
                <h1>Nothing in Cart</h1>
            }

            <ListGroup>
                {
                    cart.map((item, index) => {
                        return (
                            <ListGroupItem key={index}>
                                <ListGroupItemHeading>
                                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                                <Button style={{position:"absolute", left: "95vw"}} onClick={() => removeFromCart(index)}>X</Button>
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                    {products[item.id - 1].description}
                                    <p>Quanitity: {item.quantity} &nbsp;&nbsp;&nbsp; Total: {'$' + item.total}</p>
                                </ListGroupItemText>
                                <Form onSubmit={event => {
                                    changeAmount(item.id, event.target.elements.number.value)
                                    event.preventDefault();
                                }}>
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
