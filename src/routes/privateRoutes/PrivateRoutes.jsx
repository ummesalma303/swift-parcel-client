import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../providers/AuthProvider';
import React, { useContext } from 'react';
import { AuthContext } from '@/providers/AuthProvider';
import Loading from '@/components/Sheared/Loading';
import PropTypes from 'prop-types';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};


PrivateRoutes.propTypes = {
   children: PropTypes.node.isRequired
  };

export default PrivateRoutes;