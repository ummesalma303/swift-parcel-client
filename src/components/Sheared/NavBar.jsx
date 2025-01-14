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
        console.log(user)
    return (
        <div className='fixed w-full px-10 flex justify-between items-center p-3 bg-slate-300' >
            <div className="flex items-center">
                <img className='w-8 md:w-10' src={logo} alt="" />
            <h2 className='text-lg md:text-2xl font-semibold'>SwiftParcel</h2>
            </div>
            {/*  */}
            <div className="flex items-center space-x-4">
            <div className="flex items-center">
            <IoIosNotificationsOutline />
            <ul className='flex space-x-7'>
                <NavLink to='/'>home</NavLink>
            </ul>
            </div>
            {/* user info */}
            <div className="">
                
               {
                user?<div>
                    {/* <img className='w-14 h-14' src={user?.photoURL} alt="" /> */}


<DropdownMenu>
  <DropdownMenuTrigger className='rounded-full'><img className='w-14 h-14 rounded-full' src={user?.photoURL} alt="" /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>{user?.displayName}</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Dashboard</DropdownMenuItem>
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
    );
};

export default NavBar;