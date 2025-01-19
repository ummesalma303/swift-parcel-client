import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import { IoIosNotificationsOutline } from "react-icons/io";
import { Button } from '../ui/button';
import { NavLink, useNavigate } from 'react-router-dom';
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
import useUser from '@/Hooks/useUser';
import DashboardRoutes from '@/routes/DashboardRoutes';
  
const NavBar = () => {
  const navigate = useNavigate()
  const [users,isLoading] = useUser('');
  console.log(users.role)

  if (isLoading) {
    return<h2>loading.....</h2>
  }
  // const [users,isLoading] = useUser('');
    const {user,handleLogout} = useContext(AuthContext);
        // console.log(user?.photoURL)
        const handleRoute = () =>{
         console.log('33------')
         if(users.role==="User"){
          console.log('35------')
          navigate('/dashboard/bookParcel')
          return
      }
         if(users.role==="Admin"){
          console.log('35------')
          navigate('/dashboard/statistics')
          return
      }
         if(users.role==="Delivery Man"){
          console.log('35------')
        // path:'myDeliveryList',
          navigate('/dashboard/myDeliveryList')
          return
      }
       }
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
    <DropdownMenuSeparator  />
    <><DropdownMenuItem  onClick={()=>handleRoute()}>Dashboard</DropdownMenuItem></>
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