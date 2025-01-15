import {
    createBrowserRouter,
    // RouterProvider,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/ErrorElement/ErrorPage";
import Login from "@/pages/Authentications/Login";
import Register from "@/pages/Authentications/Register";
import DashboardLayout from "@/Layout/DashboardLayout";
import BookParcel from "@/pages/Dashboard/UserMenu/BookParcel";
import PrivateRoutes from "@/privateRoutes/PrivateRoutes";
import MyParcel from "@/pages/Dashboard/UserMenu/MyParcel";
import MyProfile from "@/pages/Dashboard/UserMenu/MyProfile";
// import Register from "@/pages/Authentication/Register";
// import Login from "@/pages/Authentication/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement:<ErrorPage/>,
      children:[
        {
          path: '/',
          element:<Home />
        },
        {
          path: '/login',
          element:<Login />
        },
        {
          path: '/register',
          element:<Register />
        },
      ],
    },
    {
     path:'/dashboard',
     element:<PrivateRoutes><DashboardLayout/></PrivateRoutes>,
     children:[
      {
        index:true,
        element:<PrivateRoutes><BookParcel /></PrivateRoutes>
      },
      {
        path:'myParcel',
        element:<PrivateRoutes><MyParcel /></PrivateRoutes>
      },
      {
        path:'myProfile',
        element:<PrivateRoutes><MyProfile /></PrivateRoutes>
      },
     ]
    }
    // {
    
    // }
  ]);

  export default router