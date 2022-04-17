import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const Services = ({ item }) => {
    const { img, name, price, duration, takePhoto, editedPhoto, print, description } = item;
    return (
        <Col>
            <Card className='bg-white'>
                <Card.Img variant="top" src={img} />
                <Card.Body className='text-center'>
                    <Card.Title className='fs-3'>{name}</Card.Title>
                    <p className='fw-bold'>Price: ${price}</p>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><FontAwesomeIcon icon={faCoffee} /> Event Duration: {duration}</ListGroupItem>
                    <ListGroupItem>Number of Pictures: {takePhoto}</ListGroupItem>
                    <ListGroupItem>Specially Edited Photos: {editedPhoto}</ListGroupItem>
                    <ListGroupItem>Print: {print}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Text >{description}</Card.Text>
                    <button className='btn btn-primary d-block mx-auto fw-bold'>Booking</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Services;