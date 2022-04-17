import { Carousel } from 'bootstrap';
import React from 'react';
import banner2 from '../../../../image/banner/banner-2.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div className='d-flex my-3 container gap-2'>
            <div className='col-md-6 banner-text-section text-center'>
                <h1 className='fs-1 text-primary'>Every moment of your life is beautiful.</h1>
                <p className='my-3 p-3'>Your each movement,your each emotion is nothing but a beautiful picture and I am just want to hold on those moments with my camera and make it a piece of art with  editing.</p>
                
            </div>
            <div className='col-md-6 banner-img-section'>
                <img className='img-fluid' src={banner2} alt="" />
            </div>
        </div>
    );
};

export default Banner;