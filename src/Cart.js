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

            <ListGroup> 
                {
                    cart.map((item, index) => {
                        return (
                            <ListGroupItem key={index}>
                                <ListGroupItemHeading>
                                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                    {products[item.id - 1].description}
                                    <p>Quanitity: {item.quantity} &nbsp;&nbsp;&nbsp; Total: {'$' + item.total}</p>
                                </ListGroupItemText>
                                How Many? [ ] <Button onClick={() => removeFromCart(index)}>Remove</Button>
                            </ListGroupItem>
                        )
                    })
                }
            </ListGroup> 
        </>
    )
}

export default Cart;
