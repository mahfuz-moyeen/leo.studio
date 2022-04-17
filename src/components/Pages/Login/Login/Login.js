import { async } from '@firebase/util';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [emailError, setEmailError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if(email){
            setEmailError('');
        }
        signInWithEmailAndPassword(email, password)
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            setEmailError('');
            await sendPasswordResetEmail(email);
            toast('Send email to reset password');
        }
        else {
            setEmailError("Enter your email");
        }

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
                    <Form.Text className="text-danger">{emailError}</Form.Text>
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
                <Form.Text className="text-danger">{error?.message.slice(22)}</Form.Text>

                <p>New to leo studio ? <Link to="/register" className='text-primary pe-auto text-decoration-none' >Please Register</Link> </p>

                <p>Forget password ?
                    <button
                        onClick={() => handleResetPassword()}
                        className='btn btn-line text-primary pe-auto text-decoration-none'  >Password reset</button>
                </p>


                <Button variant="primary" type="submit">Login</Button>
            </Form>
            <SocialLogin />
        </div>
    );
};

export default Login;