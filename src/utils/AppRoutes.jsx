import React from "react";
import Login from "../components/signup-signIn-frgtPwd/Login";
import Register from "../components/signup-signIn-frgtPwd/Rigister";
import ForgotPassword from "../components/signup-signIn-frgtPwd/ForgetPassword"
import ResetPassword from "../components/signup-signIn-frgtPwd/ResetPassword";
import VerifyPassword from "../components/signup-signIn-frgtPwd/VerifyPassword";
import Home from "../components/socialScreens/Home"
import Messages from "../components/socialScreens/Messages"
import UserProtectedRoute from "./UserProtectedRoute";
import { Navigate } from "react-router-dom";
import ErrorScreen from "../components/ErrorScreen";
import MyTimeline from "../components/socialScreens/MyTimeline";
import MyProfile from "../components/socialScreens/Myprofile";
import ProductDetails from "../components/socialScreens/middlebars/ProductDetails";
import Context from "../components/socialScreens/others/Context";
import Cart from "../components/socialScreens/others/Cart";
const AppRoutes = [
    {
        path:'/',
        element : <Login/>,
        exact:true
    },
    {
        path:'/register',
        element : <Register/>,
        exact:true
    },
    {
        path:'/forgotpassword',
        element : <ForgotPassword/>,
        exact:true
    },
    {
        path:'/forgotpassword/:id/verify/:token',
        element : <VerifyPassword/>,
        exact:true
    },
    {
        path : '/resetPassword',
        element : <ResetPassword/>,
        exact: true
    },
    {
        path:'/home',
        element : <Context><Home/></Context>,
        exact:true
    },
    {
        path:'/home/search',
        element : <Home/>,
        exact:true
    },
    {
        path:'/home/product/:id',
        element :<Context> <ProductDetails/></Context>,
        exact:true
    },
    {
        path:'/home/order',
        element :<Context><Cart/></Context>,
        exact:true
    },
    {
        path:'/mytimeline',
        element : <MyTimeline/>,
        exact:true
    },
    {
        path:'/myprofile',
        element :<Context><MyProfile/></Context> ,
        exact:true
    },
    {
        path:'/messages',
        element : <Messages/>,
        exact:true
    },
    {
        path:'/error',
        element : <ErrorScreen/>,
        exact:true
    },
    {
        path:'*',
        element : <ErrorScreen/>,
        exact:true
    }
    // {
    //     path:'*',
    //     element : <Navigate to={'/'}/>,
    //     exact:true
    // }
]

export default AppRoutes