import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import localService from './localService';

function NavBar() {
  const history= useHistory()
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              localService.getItem('auth') ?
                <>
                
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>

                </> :
                <>
                  <Link to="/login" className='nav-link'>Login</Link>
                  <Link to="/signup"className='nav-link'>Register</Link>
                </>
            }
          </Nav>
        </Navbar.Collapse>
        {
              localService.getItem('auth') &&
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text onClick={()=> {
            localService.removeItem('auth')
            window.location.href='/login'
            }}>
            Signed out
          </Navbar.Text>
          <Navbar.Text>
            <Link to="/panier">
              <img src={require('../img/shopping-cart.png')} style={{ width: 20, marginLeft: 30 }} />
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
}
      </Container>
    </Navbar>
  )
}

export default NavBar;
