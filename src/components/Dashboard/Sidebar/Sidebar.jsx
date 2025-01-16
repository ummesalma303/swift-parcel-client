import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import UserMenus from "../menus/UserMenus";
import DeliveryMenMenus from "../menus/DeliveryMenMenus";
import AdminMenus from "../menus/AdminMenus";
import useUser from "@/Hooks/useUser";

const Sidebar = () => {
  const [users,isLoading] = useUser();
  console.log(users?.role);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
if(isLoading){
  return <h2>Loading...</h2>
}
  return (
    <div>
      {/* small screen */}
      <div className="flex overflow-x-hidden justify-between items-center bg-gray-100 md:hidden px-8 py-3">
        <h2 className="text-2xl font-semibold ">SwiftParcel</h2>
        <button onClick={handleToggle}>
          <IoMdMenu size={30} />{" "}
        </button>
      </div>
      {/* sidebar */}

      {/* overflow-x
transform
left-0*/}

      <div
        className={`z-10 md:fixed overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 ${
          toggle && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        {/* logo */}
        <div>
          <h2 className="text-2xl font-semibold   px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-green-200 mx-auto">
            SwiftParcel
          </h2>
        </div>
        {/* Nav Items */}
        <div className="flex flex-col justify-between flex-1 mt-6 space-y-3 text-lg px-3">
          {/* <div className=""> */}
          {users?.role === "User" && <UserMenus />}
          {users?.role === "Delivery Man" && <DeliveryMenMenus />}
          {users?.role === "Admin" && <AdminMenus />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
