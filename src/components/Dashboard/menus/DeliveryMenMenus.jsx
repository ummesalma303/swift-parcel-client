import React from 'react';
import { FaClipboardList } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
// import { CgProfile } from "react-icons/cg";
// import { RiLuggageCartLine } from "react-icons/ri";
import { GiAlliedStar } from "react-icons/gi";

const DeliveryMenMenus = () => {
    return (
        <>
        <NavLink to='/dashboard' className='flex items-center space-x-2'><FaClipboardList />My Delivery List</NavLink>
        <NavLink to='myParcel'className='flex items-center space-x-2'><GiAlliedStar />My Reviews menu</NavLink>  
        </>
    );
};

export default DeliveryMenMenus;