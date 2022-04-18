import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import useReviews from '../../../../Hooks/useReviews'
import Review from '../Review/Review';
import { Row } from 'react-bootstrap';


const Home = () => {
    const [reviews] = useReviews()
    return (
        <div>
            {/* banner section  */}
            <Banner />

            {/* services section  */}
            <Services />

            {/* review  */}
            <div className='container my-5'>
            <h1 className='text-center my-5'><span className='text-primary'>Re</span>views</h1>
                <Row xs={1} md={3} className="g-4">
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        />)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;