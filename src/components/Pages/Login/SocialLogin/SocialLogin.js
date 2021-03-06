import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Loading from '../../../Loading/Loading';
import google from '../../../../image/social/google.png'
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
            </div>
            <div>
            <p className='text-danger'>{error?.message.slice(22)}</p>
                <div className=''>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-primary text-white w-50 d-block mx-auto my-2'>
                        <img style={{ width: '30px' }} src={google} alt="" />
                        <span className='px-2'>Google Sign In</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;