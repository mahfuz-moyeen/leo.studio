import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../image/logo-dark.png'

const MenuBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        alt="leo studio logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link >Home</Nav.Link>
                        <Nav.Link >Blog</Nav.Link>
                        <Nav.Link >About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Register</Nav.Link>
                        <Nav.Link href="#memes">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuBar;