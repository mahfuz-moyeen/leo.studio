import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../image/notfound.jpg'

const NotFound = () => {
    return (
        <div className='bg-white'>

            <div className='container p-5'>
                <div className='w-50 mx-auto'>
                    <img className='img-fluid' src={notFound} alt="" />
                </div>
                <div>
                    <Link to='/' className='btn btn-primary text-white d-block w-25 mx-auto'>
                    <FontAwesomeIcon icon={faAnglesLeft}  className='mx-2'/>
                        Go Back to Home page</Link>
                </div>
            </div>

        </div>
    );
};

export default NotFound;