import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import userDefault from '../../../image/userDefault.png'
const User = () => {
    const [user, loading] = useAuthState(auth,);

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='container text-center my-5'>
            <h1 className='text-center my-5'>User<span className='text-primary'> Details</span></h1>
            <div>
                <img  width={200}
                height={200}
                className='rounded-circle'
                src={user?.photoURL? user.photoURL: userDefault} 
                alt="userPhoto" />
            </div>
            <div>
                <h1>{user?.displayName}</h1>
                <p className='fs-5'>{user?.email}</p>
            </div>
        </div>
    );
};

export default User;