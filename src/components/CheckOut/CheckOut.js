import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
    const [user] = useAuthState(auth);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        else{
            toast('Booking Done .');
        }
        setValidated(true);
        
        
    };
    return (
        <div className='container w-75 my-5'>
            <div className='text-center my-4'>
                <ToastContainer />
                <h1 className='fs-1'>Checkout</h1>
                <p>Our most popular packages are on sale!</p>
            </div>
            <div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <h2 className='my-3 fs-4'>Your Information</h2>

                    {/* name  */}
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    {/* email and phone */}
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Email"
                                defaultValue={user.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Phone no"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid phone number.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    {/* city ,state, zip */}
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom06">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom07">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="Zip" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    {/* date and packages  */}
                    <h2 className='mt-5 mb-3 fs-4'>Wedding Details</h2>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="5" controlId="validationCustom08">
                            <Form.Label>Wedding Date</Form.Label>
                            <Form.Control
                                type="date"
                                required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid date.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="7" controlId="validationCustom09" placeholder='Select package'>
                            <Form.Label>Your Packages</Form.Label>
                            <div className='d-flex justify-content-between'>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Silver
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Gold
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Platinum
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Diamond
                                    </label>
                                </div></div>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>

        </div>
    );
};

export default CheckOut;