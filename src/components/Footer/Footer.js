import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logoDark from '../../image/logo-dark.png'
import facebook from '../../image/social/facebook-f-brands.svg'
import twitter from '../../image/social/twitter-brands.svg'
import instagram from '../../image/social/instagram-brands.svg'
import './Footer.css'

const Footer = () => {
    const { pathname } = useLocation()
    
    const pathCheck = () => {
        if(pathname==='/'){
            return true;
        }
        else if(pathname==='/home'){
            return true;
        }
        else if(pathname==='/services'){
            return true;
        }
        else if(pathname==='/blog'){
            return true;
        }
        else if(pathname==='/checkout'){
            return true;
        }
        else if(pathname==='/about'){
            return true;
        }
        else if(pathname==='/user'){
            return true;
        }
        else if(pathname==='/register'){
            return true;
        }
        else if(pathname==='/login'){
            return true;
        }
        else{
            return false;
        }
    }
    
    const isPathTrue = pathCheck()
    return (
        <footer className={`${isPathTrue ? 'd-block' : 'd-none'}`}>
            <div className='container p-4'>
                <Row className='align-items-center my-3'>
                    <Col md={6}>
                        <div className='footer-band-logo my-2'>
                            <img src={logoDark} alt="" />
                            <div>
                                <p className='d-flex footer-text'>
                                    <Link className='footer-text px-2 text-decoration-none' to='/'>Home</Link><span> | </span>
                                    <Link className='footer-text px-2 text-decoration-none' to='/'>Services</Link><span> | </span>
                                    <Link className='footer-text px-2 text-decoration-none' to='/'>Blog</Link><span> | </span>
                                    <Link className='footer-text px-2 text-decoration-none' to='/'>About</Link>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className='text-md-end'>
                        <div>Contact me</div>
                        <div className='footer-logo my-3 justify-content-md-end'>
                            <a href="https://www.facebook.com/mahfuz.moyeen.111" target='_blank'><img src={facebook} alt="" /></a>
                            <a href="https://twitter.com/?lang=en" target='_blank'><img src={twitter} alt="" /></a>
                            <a href="https://www.instagram.com/?hl=en" target='_blank'><img src={instagram} alt="" /></a>
                        </div>
                    </Col>
                </Row>
                <div>
                    <p className='fs-6 text-center my-3'>Copyrights &copy; All Rights Reserved by jeo_studio.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;