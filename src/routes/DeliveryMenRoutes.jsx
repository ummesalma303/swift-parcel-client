import React, { useContext } from 'react';
import { AuthContext } from '@/providers/AuthProvider';
import useUser from '@/Hooks/useUser';
import { Navigate } from 'react-router-dom';

const DeliveryMenRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [users,isLoading] = useUser();
  console.log(users?.role);
    if (loading) {
        return <h2>Loading...</h2>
    }
    if (users?.role==="Delivery Man") {
        return children
    }
    return <Navigate to='/dashboard/myDeliveryList' replace='true'></Navigate>
};

export default DeliveryMenRoutes;