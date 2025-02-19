import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/logo.png'
import { IoIosNotificationsOutline } from "react-icons/io";
import { Button } from '../ui/button';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '@/providers/AuthProvider';

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
import Loading from './Loading';
import profile from '../../assets/profile-logo.png'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { IoMdMenu } from "react-icons/io";
import { GoSidebarCollapse } from "react-icons/go";

const NavBar = () => {
  const [theme,setTheme] = useState('light')
  const {user,handleLogout} = useContext(AuthContext);
  const navigate = useNavigate()
  const [users,isLoading,refetch] = useUser();
  // console.log(users)
  // console.log(users?.email)

  if (isLoading) {
    return<h2></h2>
  }
  // const [users,isLoading] = useUser('');
        // console.log(user?.photoURL)
        const handleRoute = async() =>{
        //  console.log('33------',users)
        //  await refetch()
         if(users.role==="User"){
           //  console.log('35------',user.role)
          navigate('/dashboard/bookParcel')
          return
      }
         if(users.role==="Admin"){
          // console.log('35------')
          navigate('/dashboard/statistics')
          return
      }
         if(users.role==="Delivery Man"){
          // console.log('35------')
        // path:'myDeliveryList',
          navigate('/dashboard/myDeliveryList')
          return
      }
       }


       const themeToggle=()=>{
        setTheme(theme === 'dark' ? 'light':"dark")
      }
      useEffect(() => {
        if (theme === 'dark') {
          document.documentElement.classList.add('dark'); 
        } else {
          document.documentElement.classList.remove('dark'); 
        }
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);
  
    return (
       <div className="">
         <div className='fixed w-full px-5 md:px-10 flex justify-between items-center py-2 bg-slate-200 z-10' >
            <div className="flex items-center">
              
           <div className="md:hidden block">
           <Menubar>
  <MenubarMenu>
    <MenubarTrigger><IoMdMenu />
    </MenubarTrigger>
    <MenubarContent>
    <NavLink to='/'>
    <MenubarItem> home </MenubarItem>
    </NavLink>
      <MenubarSeparator />
      <NavLink to='/faqs'><MenubarItem>Faqs</MenubarItem></NavLink>
      <MenubarSeparator />

      {/* <NavLink to='/'> */}
    
     
       {
                  user&&<> <NavLink to='/bookParcel'> <MenubarItem>Book Parcel</MenubarItem></NavLink>
                   <MenubarSeparator />
                  <NavLink to='/dashboard/myProfile'><MenubarItem>Profile</MenubarItem></NavLink>
                  <MenubarItem>
                  <div  onClick={()=>handleRoute()} className='flex items-center'>Dashboard </div>

                  </MenubarItem>
                  </>
                }
      {/* </NavLink> */}
     
      
    </MenubarContent>
  </MenubarMenu>
</Menubar>

           </div>

                <img className='w-8 md:w-10' src={logo} alt="" />
            <h2 className='text-lg md:text-2xl font-semibold dark:text-black'>SwiftParcel</h2>
            </div>
            {/*  */}
            <div className="flex items-center space-x-2 md:space-x-4">
            <div className="flex items-center">
            <IoIosNotificationsOutline />




            <ul className='hidden md:flex space-x-3  dark:text-black'>
                <NavLink to='/'>home</NavLink>
                <NavLink to='/faqs'>Faqs</NavLink>
                {
                  user&&<> <NavLink to='/bookParcel'>Book Parcel</NavLink>
                  <NavLink to='/dashboard/myProfile'>Profile</NavLink>
                  <div  onClick={()=>handleRoute()} className='flex items-center'>Dashboard </div></>
                }
            </ul>
            </div>
            {/* theme controller */}
            <label
  htmlFor="AcceptConditions"
  className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
>
  <input type="checkbox" id="AcceptConditions" className="peer sr-only" onClick={themeToggle} />

  <span
    className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"
  ></span>
</label>
            {/* user info */}
            <div className="">
                
               {
                user?<div>
                    {/* <img className='w-14 h-14' src={user?.photoURL} alt="" /> */}


<DropdownMenu>
  <DropdownMenuTrigger className='rounded-full'><img referrerPolicy='no-referrer' className='w-10 border-2 h-10 md:w-14 md:h-14 rounded-full' src={user?.photoURL ||profile} alt="" /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>{user?.displayName}</DropdownMenuLabel>
    <DropdownMenuSeparator  />
    {/* <><DropdownMenuItem  onClick={()=>handleRoute()}>Dashboard</DropdownMenuItem></> */}
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