import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../image/logo-dark.png';
// import CustomLink from '../CustomLink/CustomLink';

const MenuBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
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

                        {/* <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/blog'>Blog</CustomLink>
                        <CustomLink to='/about'>About</CustomLink> */}
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        {/* <CustomLink to="/register">Register</CustomLink>
                        <CustomLink to="/login">Login</CustomLink> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuBar;