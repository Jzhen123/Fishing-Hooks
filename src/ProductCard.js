import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Form, FormGroup, Input } from 'reactstrap';
import Fish from './fish.jpeg';
import { Link } from 'react-router-dom';

function ProductCard({ product, addToCart }) {
    return (
        <Col className="mt-4 mb-4">
            <Card body outline color="danger">
                <CardImg top width="100%" src={Fish} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{'$' + product.price}</CardSubtitle>
                    <CardText>{product.description}</CardText>
                    <Form onSubmit={event => {
                        addToCart(product.id, event.target.elements.number.value)
                        event.preventDefault();
                    }}>
                        <FormGroup>
                            <Input
                                style={{ width: "100px" }}
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