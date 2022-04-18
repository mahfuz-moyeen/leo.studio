import React from 'react';
import profilePic from '../../../image/profile-pic.png'
const About = () => {
    return (
        <div className='container my-5'>
            <h1 className='text-center'>About<span className='text-primary'> Me</span></h1>
            <div className='w-25 mx-auto my-4'>
                <img className='img-fluid' src={profilePic} alt="profilePic" />
            </div>
            <div className='w-50 mx-auto'>
                    <h1><span className='text-primary'>Hi,</span> I am <br/>Mahfuz Zahan Moyeen</h1>
                    <p className='fs-5'>I'm an eee engineer. But now I'm learning Fontend Development at Programming Hero. Learning React-JS, Firebase, JavaScript, HTML, CSS etc. I am a fast learner, explorer and hard worker. I also want to achieve my goal. For this I am doing a lot of hard work in programming hero so that my goal is to become a successful fontend developer.</p>
            </div>
        </div>
    );
};

export default About;