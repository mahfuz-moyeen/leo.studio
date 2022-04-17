import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const User = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>{user.displayName}</h1>
            <p>{user.email}</p>
        </div>
    );
};

export default User;