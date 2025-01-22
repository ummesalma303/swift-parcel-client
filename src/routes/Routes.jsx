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
// import PrivateRoutes from "@/privateRoutes/PrivateRoutes";
import MyParcel from "@/pages/Dashboard/UserMenu/MyParcel";
import MyProfile from "@/pages/Dashboard/UserMenu/MyProfile";
import UpdateBooking from "@/pages/Dashboard/updateBooking/UpdateBooking";
import AllUser from "@/pages/Dashboard/AdminMenus/AllUser";
import Statistics from "@/pages/Dashboard/AdminMenus/Statistics";
import AllParcels from "@/pages/Dashboard/AdminMenus/AllParcels";
import AdminRoutes from "@/routes/AdminRoutes";
import AllDeliveryMen from "@/pages/Dashboard/AdminMenus/AllDeliveryMen";
import MyDeliveryList from "@/pages/Dashboard/DeliveryMenMenus/MyDeliveryList";
import Review from "@/pages/Dashboard/DeliveryMenMenus/MyReviews";
import MyReviews from "@/pages/Dashboard/DeliveryMenMenus/MyReviews";
import PrivateRoutes from "./privateRoutes/PrivateRoutes";
import DeliveryMenRoutes from "./DeliveryMenRoutes";
import Payment from "@/pages/Dashboard/Payment/Payment";
import PaymentSuccess from "@/pages/Dashboard/Payment/PaymentSuccess";
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
     element:<DashboardLayout/>,
     children:[
      
      
      {
        path:'myProfile',
        // index:true,
        element:<MyProfile />
      },
      {
        // path:'/dashboard',
        path:'bookParcel',
        // index:true,
        element:<PrivateRoutes><BookParcel /></PrivateRoutes>
      },
      {
        path:'myParcel',
        element:<PrivateRoutes><MyParcel /></PrivateRoutes>
      },
      {
        path:'updateBooking/:id',
        loader: ({params})=>fetch(`https://assignment-12-server-three-sage.vercel.app/parcels/${params.id}`),
        element:<PrivateRoutes><UpdateBooking /></PrivateRoutes>
      },
      {
        path:'payment',
        element:<PrivateRoutes><Payment /></PrivateRoutes>
      },
      {
        path:'paymentSuccess',
        element:<PrivateRoutes><PaymentSuccess /></PrivateRoutes>
      },
      /* ------------------------------ admin routes ------------------------------ */
      {
        // index:true,
        path:'statistics',
        // path:'/dashboard',
        element:<PrivateRoutes>
          {/* <AdminRoutes> */}
            <Statistics/>
            {/* </AdminRoutes> */}
            </PrivateRoutes>
      },
      {
        path:'allUsers',
        element:<AdminRoutes><AllUser/></AdminRoutes>
      },
      {
        path:'allParcel',
        loader:()=>fetch('https://assignment-12-server-three-sage.vercel.app/delivery'),
        element:<PrivateRoutes><AdminRoutes><AllParcels/></AdminRoutes></PrivateRoutes>
      },
      {
        path:'allDeliveryMen',
        // loader:()=>fetch('https://assignment-12-server-three-sage.vercel.app/delivery'),
        element:<PrivateRoutes>
          <AdminRoutes>
          <AllDeliveryMen/>
          </AdminRoutes>
          </PrivateRoutes>
      },
      /* --------------------------- delivery men routes -------------------------- */
      {
        path:'myDeliveryList',
        // loader:()=>fetch('https://assignment-12-server-three-sage.vercel.app/delivery'),
        element:<PrivateRoutes><DeliveryMenRoutes><MyDeliveryList/></DeliveryMenRoutes></PrivateRoutes>
      },
      {
        path:'reviews',
        // loader:()=>fetch('https://assignment-12-server-three-sage.vercel.app/delivery'),
        element:<PrivateRoutes><DeliveryMenRoutes><MyReviews/></DeliveryMenRoutes></PrivateRoutes>
      },
     
     ]
    }
    // {
    
    // }
  ]);

  export default router



//   let dashboard ; 

// if(admin == 'admin'){
// dashboard = 'admin-home'
// }