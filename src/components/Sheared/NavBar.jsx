import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import { IoIosNotificationsOutline } from "react-icons/io";
import { Button } from '../ui/button';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '@/providers/AuthProvider';
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
//   } from "../ui/dropdown-menu"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
const NavBar = () => {
    const {user,handleLogout} = useContext(AuthContext);
        // console.log(user?.photoURL)
    return (
       <div className="">
         <div className='fixed w-full px-5 md:px-10 flex justify-between items-center py-2 bg-slate-200' >
            <div className="flex items-center">
                <img className='w-8 md:w-10' src={logo} alt="" />
            <h2 className='text-lg md:text-2xl font-semibold'>SwiftParcel</h2>
            </div>
            {/*  */}
            <div className="flex items-center space-x-2 md:space-x-4">
            <div className="flex items-center">
            <IoIosNotificationsOutline />
            <ul>
                <NavLink to='/'>home</NavLink>
            </ul>
            </div>
            {/* user info */}
            <div className="">
                
               {
                user?<div>
                    {/* <img className='w-14 h-14' src={user?.photoURL} alt="" /> */}


<DropdownMenu>
  <DropdownMenuTrigger className='rounded-full'><img referrerPolicy='no-referrer' className='w-10 h-10 md:w-14 md:h-14 rounded-full' src={user?.photoURL} alt="" /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>{user?.displayName}</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <NavLink to='/dashboard'><DropdownMenuItem>Dashboard</DropdownMenuItem></NavLink>
   <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
    {/* <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem> */}
  </DropdownMenuContent>
</DropdownMenu>


{/* <Button>{user?.email}</Button> */}
                   
                </div>:<NavLink to='/login'><Button>Login</Button></NavLink>
               }
            </div>
            </div>
        </div>
       </div>
    );
};

export default NavBar;