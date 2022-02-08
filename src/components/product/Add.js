import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import SideMenu from '../SideMenu';

function Add() {
    return (
        <div>
            <Row>
                <Col xs={2} className='p-5'>
                    <SideMenu />
                </Col>
                <Col xs={2} className='p-5'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>price</Form.Label>
                            <Form.Control type="number" placeholder="Enter price" />
                        </Form.Group>
                        <Form.Select size="sm">
                            <option>Small select</option>
                        </Form.Select>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Add;
