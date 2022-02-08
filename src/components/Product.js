import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

function Product() {

  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{
        background: "#f6f6f6",
        height: 200
      }}>
        <h3><i>product name</i></h3>
      </div>
      <Container className='mt-5'>
        <Row>
          <Col xs={5}>
            <img src={require('../img/product.jpg')} style={{width:"100%"}}/>
          </Col>
          <Col xs={7}>
            <h3>Hoodie One Piece</h3>
            <h4>54,90 TND</h4>
            <p>Get you a  high-quality sweatshirt with a special design ! </p>
            <div>
              <input type="number" style={{ width: 100, marginRight: 20 }} placeholder='quantity' defaultValue={1} min={1}/>
              <Button variant="primary">Ajouter aux panier</Button>
            </div>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Product;
