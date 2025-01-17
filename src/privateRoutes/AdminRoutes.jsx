import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../providers/AuthProvider';
import React, { useContext } from 'react';
import { AuthContext } from '@/providers/AuthProvider';

const AdminRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if (loading) {
        return <h2>Loading...</h2>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default AdminRoutes;