import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CarouselComponent from './Carousel';

function Home() {
    return (
        <>
            <CarouselComponent />
            <Container className='mt-5'>
            <div className='d-flex flex-column align-items-center'>
            <h4><i>Récemment ajoutés</i></h4>
            <h1>NOUVEAUTÉS</h1>
            </div>
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
    );
}

export default Home;
