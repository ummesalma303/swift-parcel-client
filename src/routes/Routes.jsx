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
import UpdateBooking from "@/pages/Dashboard/updateBooking/UpdateBooking";
import AllUser from "@/pages/Dashboard/AdminMenus/AllUser";
import Statistics from "@/pages/Dashboard/AdminMenus/Statistics";
import AllParcels from "@/pages/Dashboard/AdminMenus/AllParcels";
import AdminRoutes from "@/privateRoutes/AdminRoutes";
import AllDeliveryMen from "@/pages/Dashboard/AdminMenus/AllDeliveryMen";
import MyDeliveryList from "@/pages/Dashboard/DeliveryMenMenus/MyDeliveryList";
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
        path:'myProfile',
        // index:true,
        element:<PrivateRoutes><MyProfile /></PrivateRoutes>
      },
      {
        path:'bookParcel',
        element:<PrivateRoutes><BookParcel /></PrivateRoutes>
      },
      {
        path:'myParcel',
        element:<PrivateRoutes><MyParcel /></PrivateRoutes>
      },
      {
        path:'updateBooking/:id',
        loader: ({params})=>fetch(`http://localhost:5000/parcels/${params.id}`),
        element:<PrivateRoutes><UpdateBooking /></PrivateRoutes>
      },
      {
        path:'statistics',
        element:<PrivateRoutes><Statistics/></PrivateRoutes>
      },
      {
        path:'allUsers',
        element:<PrivateRoutes><AllUser/></PrivateRoutes>
      },
      {
        path:'allParcel',
        loader:()=>fetch('http://localhost:5000/delivery'),
        element:<PrivateRoutes><AllParcels/></PrivateRoutes>
      },
      {
        path:'allDeliveryMen',
        // loader:()=>fetch('http://localhost:5000/delivery'),
        element:<PrivateRoutes><AllDeliveryMen/></PrivateRoutes>
      },
      {
        path:'myDeliveryList',
        // loader:()=>fetch('http://localhost:5000/delivery'),
        element:<PrivateRoutes><MyDeliveryList/></PrivateRoutes>
      },
     
     ]
    }
    // {
    
    // }
  ]);

  export default router