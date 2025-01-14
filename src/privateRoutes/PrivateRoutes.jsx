import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import React, { useContext } from 'react';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if (loading) {
        return <h2>Loading...</h2>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;