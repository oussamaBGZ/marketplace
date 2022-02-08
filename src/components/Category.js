import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Category() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{
                    background: "#f6f6f6",
                    height:200
            }}>
                <h3><i>Category name</i></h3>
            </div>
            <Container className='mt-5'>
                <Row>
                    {[, 1, 1, 1, 1, 1, 1].map(el => <Col>
                        <Card className='mt-4' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://pixabay.com/get/ge330b502525abb9eceb4f45c1f350830e1b560a4ca3320cdc4cf26ba94daab51390631119163577f09b109c61f06d7b8ca4228481319137e86d727431564e97a138bbd674faff1f6c58c556370e432a1_640.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Link to="/product/:id"><Button variant="primary">Go somewhere</Button></Link>

                            </Card.Body>
                        </Card>
                    </Col>)}
                </Row>
            </Container>
        </>
    )
}

export default Category;
