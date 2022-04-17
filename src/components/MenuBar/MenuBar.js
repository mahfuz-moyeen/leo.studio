import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../image/logo-dark.png';
import {signOut } from 'firebase/auth';
// import CustomLink from '../CustomLink/CustomLink';

const MenuBar = () => {
    const navigate = useNavigate();
    const handleLogout = ()=>{
        signOut(auth);
        navigate('/')
    }
    const [user] = useAuthState(auth);
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
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                    </Nav>
                    {user?.uid ?
                        <Nav>
                            <Nav.Link as={Link} to='/user'>{user.email}</Nav.Link>
                            <button className='btn text-white' onClick={() => handleLogout()}>logout</button>
                        </Nav>
                        :
                        <Nav>
                            <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>

                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuBar;