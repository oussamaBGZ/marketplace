import React from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SideMenu from '../SideMenu';

function index() {
  return (
    <div>
      <Row>
        <Col xs={2} className='p-5'>
          <SideMenu />
        </Col>
        <Col xs={10} className='p-5'>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                <Link to="/admin/product/id">Edit</Link>
                <Link to="/admin/product/add">Add</Link>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion></Col>
      </Row>
    </div>
  )
}

export default index;
