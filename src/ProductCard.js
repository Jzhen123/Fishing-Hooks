import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Form, FormGroup, Input } from 'reactstrap';
import Fish from './fish.jpeg';
import { Link } from 'react-router-dom';

function ProductCard({ product, addToCart }) {
    return (
        <Col className="mt-4 mb-4">
            <Card outline color="danger" style={{ height: '55vh', position: 'relative' }}>

                {/* Image of Product. Just a fish because Ian didn't add any :( */}
                <CardImg top src={Fish} style={{ height: '15vh', width: '10vw', position: 'relative', left: '3vw' }} alt="Card image cap" />
                <CardBody>

                    {/* Name of Product added to card title*/}
                    <CardTitle tag="h5">
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </CardTitle>

                    {/* Price of Product added to card subtitle */}
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{'$' + product.price}</CardSubtitle>

                    {/* Description of Product added to card body */}
                    <CardText>{product.description}</CardText>

                    {/* Form surrounding Quantity Input and Add to Cart button. Uses addToCart function from props on submit */}
                    <Form
                        style={{ position: 'absolute', bottom: '7vh', width: '14vw', height: '5vh' }}
                        onSubmit={event => {
                            addToCart(product.id, event.target.elements.number.value)
                            event.preventDefault();
                        }}
                    >
                        <FormGroup>
                            <label>Quanitity:</label>
                            <Input
                                type="number"
                                name="number"
                                id="exampleNumber"
                                placeholder="1"
                            />
                            <Button className="ps-2 pe-2">Add to Cart</Button>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
export default ProductCard;