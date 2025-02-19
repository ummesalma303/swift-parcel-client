import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { RiLuggageCartLine } from "react-icons/ri";

const UserMenus = () => {
    return (
        <div className='dark:text-black'>
        {/* <NavLink to='/dashboard' className='flex items-center space-x-2'><FaCalendarCheck />Book a Parcel</NavLink> */}
        <NavLink to='bookParcel' className='flex items-center space-x-2'><FaCalendarCheck />Book a Parcel</NavLink>
        <NavLink to='myParcel'className='flex items-center space-x-2'><RiLuggageCartLine />My Parcels</NavLink>
        <NavLink to='/dashboard/myProfile' className='flex items-center space-x-2'><CgProfile /> My Profile</NavLink>
        </div>
    );
};

export default UserMenus;