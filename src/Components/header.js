import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

class Header extends React.Component {
    render(){
        return (
            <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src="logo192.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
              Kontribute.app
              </Navbar.Brand>
            </Container>
          </Navbar>
        )
    }
}

export default Header;