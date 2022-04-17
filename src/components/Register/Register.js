import React from 'react';
import { Form } from 'react-bootstrap';

const Register = () => {
    return (
        <div className='container my-5 w-75'>
             <h1 className='text-center'>REGIS<span className='text-primary'>TER</span></h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter name" 
                    required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    required/>
                    <Form.Text className="text-danger"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <button className='btn btn-primary'>Register</button>
            </Form>
        </div>
    );
};

export default Register;