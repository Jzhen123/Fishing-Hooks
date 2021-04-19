import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
import Fish from './fish.jpeg';
function ProductCard({ product }) {
    return (
            <Col className="mt-4 mb-4">
                <Card body outline color="danger">
                    <CardImg top width="100%" src={Fish} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">{product.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{'$' + product.price}</CardSubtitle>
                        <CardText>{product.description}</CardText>
                        <Button>Add to Cart</Button>
                    </CardBody>
                </Card>
             </Col>
    )
}

export default ProductCard;