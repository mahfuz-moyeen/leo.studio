import React from 'react';
import Rating from 'react-rating';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col } from 'react-bootstrap';


const Review = ({ review }) => {
    const { name, img, reviews, rate, published } = review
    return (
        <Col>
            <Card className='bg-white'>
                <Card.Body className='text-center'>
                    <div>
                        <img
                            src={img}
                            alt={name}
                            className='rounded-circle w-25'
                        />
                        <h2 className='fs-5 my-3'>{name}</h2>
                        <Rating
                        initialRating={rate}
                        emptySymbol={<FontAwesomeIcon style={{ color: 'rgb(192, 192, 192)' }} icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'rgb(251 146 60)' }} icon={faStar} />}
                        readonly
                    ></Rating>
                    </div>
                </Card.Body>
                <Card.Body className='text-center'>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <p>{reviews}</p>
                </Card.Body>

                <Card.Footer>
                    <p className=''>Published: {published}</p>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Review;