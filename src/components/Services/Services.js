import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = ({ item }) => {
    const { id, img, name, price, duration, takePhoto, editedPhoto, print, description } = item;

    return (
        <Col>
            <Card className='bg-white'>
                <Card.Img variant="top" src={img} />
                <Card.Body className='text-center'>
                    <Card.Title className='fs-3'>{name}</Card.Title>
                    <p className='fw-bold'>Price: ${price}</p>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        <FontAwesomeIcon icon={faCheck} /> Event Duration: {duration}
                    </ListGroupItem>
                    <ListGroupItem>
                        <FontAwesomeIcon icon={faCheck} /> Number of Pictures: {takePhoto}
                    </ListGroupItem>
                    <ListGroupItem>
                        <FontAwesomeIcon icon={faCheck} /> Specially Edited Photos: {editedPhoto}
                    </ListGroupItem>
                    <ListGroupItem>
                        <FontAwesomeIcon icon={faCheck} /> Print: {print}
                    </ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Text >{description}</Card.Text>
                    <Link
                        className='btn btn-primary d-block mx-auto fw-bold'
                        to='/checkout'>Booking</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Services;