import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [agree, setAgree] = useState(false);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);

    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    // if (user) {
    //     const from = location.state?.from?.pathname || "/";
    //     navigate(from, { replace: true });
    // }

    const handleFormSubmit = event => {
        event.preventDefault();
        if (password === confirmPassword) {
            setPasswordError('')
            createUserWithEmailAndPassword(email, password);
        }
        else {
            setPasswordError("Two password did not match");
        }
    }
    return (
        <div className='container my-5 w-75'>
            <h1 className='text-center'>REGIS<span className='text-primary'>TER</span></h1>
            <Form onSubmit={handleFormSubmit}>

                {/* name field  */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        onBlur={handleNameBlur}
                        type="text"
                        placeholder="Enter name"
                        required />
                </Form.Group>

                {/* email field  */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        onBlur={handleEmailBlur}
                        type="email"
                        placeholder="Enter email"
                        required />
                    <Form.Text className="text-danger"></Form.Text>
                </Form.Group>

                {/* password field  */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onBlur={handlePasswordBlur}
                        type="password"
                        placeholder="Password"
                        required />
                    <Form.Text className="text-danger">{passwordError}</Form.Text>
                </Form.Group>

                {/* confirm password field  */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        onBlur={handleConfirmPasswordBlur}
                        type="password"
                        placeholder="Password"
                        required />
                    <Form.Text className="text-danger"></Form.Text>
                </Form.Group>

                {/* checkbox  */}
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={() => setAgree(!agree)}
                     type="checkbox" 
                     label="Accept leo studio Terms and Conditions" />
                </Form.Group>

                <Form.Text className="text-danger">{error}</Form.Text>
                <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' >Please Login</Link> </p>
                <Button
                    disabled={!agree}
                    variant="primary"
                    type="submit">Register</Button>
            </Form>
            <SocialLogin />
        </div>
    );
};

export default Register;