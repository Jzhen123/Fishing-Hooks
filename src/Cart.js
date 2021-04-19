import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


function Cart({ cart, products, removeFromCart }) {
    return (
        <>
            { cart.length > 0 ?
                <h1>Cart</h1>
                :
                <h1>Nothing in Cart</h1>
            }

            {/* <ListGroup>
                {
                    cart.map((item, index) => {
                        return (
                            <ListGroupItem key={index}>
                                <ListGroupItemHeading>
                                    <Link to={`/product/${products[item - 1].id}`}>{products[item - 1].name}</Link>
                                    {' - $' + products[item - 1].price}
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                    {products[item - 1].description}
                                </ListGroupItemText>
                                <Button onClick={() => removeFromCart(index)}>Remove</Button>
                            </ListGroupItem>
                        )
                    })
                }
            </ListGroup> */}
        </>
    )
}

export default Cart;
