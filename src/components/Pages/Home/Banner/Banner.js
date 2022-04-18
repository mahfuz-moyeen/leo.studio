import React from 'react';
import { Col, Row } from 'react-bootstrap';
import banner2 from '../../../../image/banner/banner-2.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div className='container my-5'>
            <Row xs={1} md={2} className="g-4">
                <Col className='text-center order-2 order-md-1'>
                    <h1 className='fs-2 text-primary'>Every moment of your life is beautiful.</h1>
                    <p className='my-3 p-3'>Your each movement,your each emotion is nothing but a beautiful picture and I am just want to hold on those moments with my camera and make it a piece of art with  editing.</p>
                </Col>

                <Col className='banner-img-section order-1 order-md-2'>
                    <img className='img-fluid' src={banner2} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Banner;