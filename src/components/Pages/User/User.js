import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const User = () => {
    const [user, loading] = useAuthState(auth,);

     if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>{user?.displayName}</h1>
            <p>{user?.email}</p>
        </div>
    );
};

export default User;