import React from 'react';
import { FaBoxes, FaUsers } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaUsersViewfinder } from "react-icons/fa6";

const AdminMenus = () => {
    return (
        <>
        <NavLink to='statistics' className='flex items-center space-x-2'>Statistic</NavLink>
        <NavLink to='allUsers'className='flex items-center space-x-2'><FaUsers /> All Users</NavLink>
        <NavLink to='allParcel' className='flex items-center space-x-2'><FaBoxes />All Parcel</NavLink>
        <NavLink to='myProfile' className='flex items-center space-x-2'><FaUsersViewfinder /> All Delivery Men</NavLink>
        </>
    );
};

export default AdminMenus;