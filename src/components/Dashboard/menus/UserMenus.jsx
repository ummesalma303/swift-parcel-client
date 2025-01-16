import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { RiLuggageCartLine } from "react-icons/ri";

const UserMenus = () => {
    return (
        <>
        <NavLink to='bookParcel' className='flex items-center space-x-2'><FaCalendarCheck />Book a Parcel</NavLink>
        <NavLink to='myParcel'className='flex items-center space-x-2'><RiLuggageCartLine />My Parcels</NavLink>
        <NavLink to='/dashboard' className='flex items-center space-x-2'><CgProfile /> My Profile</NavLink>
        </>
    );
};

export default UserMenus;