import {
    createBrowserRouter,
    // RouterProvider,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/ErrorElement/ErrorPage";
import Login from "@/pages/Authentications/Login";
import Register from "@/pages/Authentications/Register";
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
  ]);

  export default router