import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import ContactUs from "../Pages/ContactUs/ContactUs";

import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import Payment from "../Pages/Dashboard/Payment/Payment";

import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Home/Share/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import About from "../Pages/About/About";


export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage/>,
        children:[

            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
            {
                path:'/contact',
                element:<ContactUs/>
            },

            {
                path:'/about',
                element:<About />
            }

           
            
        ]

    },
    {
        path:'/dashboard',
        element:<PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        errorElement:<ErrorPage/>,
        
        children:[
            {
                path:'/dashboard',
                element:<MyAppointment></MyAppointment>
            },
            
            {
                path:'/dashboard/AllUsers',
                element:<AdminRoute><AllUsers/></AdminRoute>
            },
            
            {
                path:'dashboard/payment/:id',
                element:<Payment/>,
                loader:({params})=>fetch(`https://doctor-server-bice.vercel.app/booking/${params.id}`)
            }

        ]

    }
])