import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../image/logo-dark.png';
import CustomLink from '../CustomLink/CustomLink';

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
                        <Nav.Link><CustomLink to='/'>Home</CustomLink></Nav.Link>
                        <Nav.Link><CustomLink to='/blog'>Blog</CustomLink></Nav.Link>
                        <Nav.Link><CustomLink to='/about'>About</CustomLink></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><CustomLink to="/register">Register</CustomLink></Nav.Link>
                        <Nav.Link><CustomLink to="/login">Login</CustomLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuBar;