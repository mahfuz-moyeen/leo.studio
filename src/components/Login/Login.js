import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleFormSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
    }
    return (
        <div className='container my-5 w-75'>
            <h1 className='text-center'>LOG<span className='text-primary'>IN</span></h1>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        ref={emailRef}
                        type="email"
                        placeholder="Enter email"
                        required />
                    <Form.Text className="text-danger"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                        required />
                    <Form.Text className="text-danger"></Form.Text>
                </Form.Group>
                <Form.Text className="text-danger"></Form.Text>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;