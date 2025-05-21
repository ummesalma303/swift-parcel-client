import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Button } from "../ui/button";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "@/providers/AuthProvider";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useUser from "@/Hooks/useUser";
import DashboardRoutes from "@/routes/DashboardRoutes";
import Loading from "./Loading";
import profile from "../../assets/profile-logo.png";
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
} from "@/components/ui/menubar";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { ModeToggle } from "../mode-toggle";
// import { GoSidebarCollapse } from "react-icons/go";
import { Link, Element } from 'react-scroll';
const NavBar = () => {

  const { user, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [users, isLoading, refetch] = useUser();
  // console.log(users)
  // console.log(users?.email)

  if (isLoading) {
    return <h2></h2>;
  }
  // const [users,isLoading] = useUser('');
  // console.log(user?.photoURL)
  const handleRoute = async () => {
    //  console.log('33------',users)
    //  await refetch()
    if (users.role === "User") {
      //  console.log('35------',user.role)
      navigate("/dashboard/bookParcel");
      return;
    }
    if (users.role === "Admin") {
      // console.log('35------')
      navigate("/dashboard/statistics");
      return;
    }
    if (users.role === "Delivery Man") {
      // console.log('35------')
      // path:'myDeliveryList',
      navigate("/dashboard/myDeliveryList");
      return;
    }
  };

 
  return (
    <div className="">
      <div className=" sticky top-0 w-full px-5 md:px-10 flex justify-between items-center py-2 bg-gradient-to-tr from-indigo-300 to-transparent dark:bg-[#030712] z-10">
        <div className="flex items-center">
          {/* mobile view */}
          <div className="md:hidden block">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>
                  <IoMdMenu />
                </MenubarTrigger>
                <MenubarContent>
                  <NavLink to="/">
                    <MenubarItem> home </MenubarItem>
                  </NavLink>
                  <MenubarSeparator />
                  <NavLink to="/faqs">
                    <MenubarItem>Faqs</MenubarItem>
                  </NavLink>
                  <MenubarSeparator />
                  <Link to="contacts"  smooth={true} duration={500} offset={-90}>
                    <MenubarItem>Contacts</MenubarItem>
                  </Link>
                 
                  {user && (
                    <>
                      {" "}
                      <NavLink to="/bookParcel">
                        {" "}
                        <MenubarItem>Book Parcel</MenubarItem>
                      </NavLink>
                      <MenubarSeparator />
                      <NavLink to="/dashboard/myProfile">
                        <MenubarItem>Profile</MenubarItem>
                      </NavLink>
                      <MenubarItem>
                        <div
                          onClick={() => handleRoute()}
                          className="flex items-center"
                        >
                          Dashboard{" "}
                        </div>
                      </MenubarItem>
                    </>
                  )}
                 
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
          <Link to="/">
            <div className="flex items-center">
              <img className="w-8 md:w-10" src={logo} alt="" />
              <h2 className="text-lg md:text-2xl font-semibold dark:text-white">
                SwiftParcel
              </h2>
            </div>
          </Link>
        </div>

        {/*  */}
        {/* <div className="flex items-center text-center space-x-2 md:space-x-4"> */}
        <div className="flex items-center ">
          <ul className="hidden md:flex space-x-3  *:text-center dark:text-white">
            <NavLink to="/" className="text-center">
              home
            </NavLink>
            <NavLink to="/faqs">Faqs</NavLink>
            {/* <NavLink to="/contacts">Contacts</NavLink> */}
            {user && (
              <>
                <NavLink to="/bookParcel">Book Parcel</NavLink>

                <div
                  onClick={() => handleRoute()}
                  className="flex items-center"
                >
                  Dashboard{" "}
                </div>
              </>
            )}
                  <Link to="contacts"  smooth={true} duration={500} offset={-130}> Contacts </Link>
          </ul>
        </div>

        {/* user info */}
        <div className="flex items-center space-x-3">
          {/* theme controller */}
         <ModeToggle/>
          {/* user info */}
          {user ? (
            <div>
              {/* <img className='w-14 h-14' src={user?.photoURL} alt="" /> */}

              <DropdownMenu>
                <DropdownMenuTrigger className="rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    className="w-10 border-2 h-10 md:w-14 md:h-14 rounded-full"
                    src={user?.photoURL || profile}
                    alt=""
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>{user?.displayName}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <NavLink to="/dashboard/myProfile">Profile</NavLink>
                  </DropdownMenuItem>
                  {/* <><DropdownMenuItem  onClick={()=>handleRoute()}>Dashboard</DropdownMenuItem></> */}
                  <DropdownMenuItem onClick={handleLogout}>
                    Logout
                  </DropdownMenuItem>
                  {/* <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem> */}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* <Button>{user?.email}</Button> */}
            </div>
          ) : (
            <NavLink to="/login">
              <Button>Login</Button>
            </NavLink>
          )}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default NavBar;
