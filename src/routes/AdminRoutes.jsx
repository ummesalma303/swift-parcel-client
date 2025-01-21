import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../providers/AuthProvider';
import React, { useContext } from 'react';
import { AuthContext } from '@/providers/AuthProvider';
import useUser from '@/Hooks/useUser';

const AdminRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [users,isLoading] = useUser();
  console.log(users?.role);
    if (loading || isLoading) {
        return <h2>Loading...</h2>
    }
    if (users?.role ==="Admin") {
        return children
    }
    return <Navigate to='/dashboard/statistics' replace></Navigate>
};

export default AdminRoutes;