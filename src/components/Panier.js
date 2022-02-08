import React from 'react';
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap';

function Panier() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{
                background: "#f6f6f6",
                height: 200
            }}>
                <h3><i>panier</i></h3>
            </div>
            <Container className='mt-5'>
                <Row>
                    <Col xs={8}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Hoodie One Piece</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col xs={5}>
                                            <img src={require('../img/product.jpg')} style={{ width: "100%" }} />
                                        </Col>
                                        <Col xs={7}>
                                            <h3>Hoodie One Piece</h3>
                                            <h4>54,90 TND</h4>
                                            <p>Get you a  high-quality sweatshirt with a special design ! </p>
                                            <div>
                                                <input type="number" style={{ width: 100, marginRight: 20 }} placeholder='quantity' defaultValue={1} min={1} />
                                            </div>

                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col xs={4}>
                        <Button variant="primary" size="lg">
                            Commander
                        </Button>{' '}
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Panier;
