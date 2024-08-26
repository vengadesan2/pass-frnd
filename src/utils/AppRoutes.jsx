import React from "react";
import Login from "../components/signup-signIn-frgtPwd/Login";
import Register from "../components/signup-signIn-frgtPwd/Rigister";
import ForgotPassword from "../components/signup-signIn-frgtPwd/ForgetPassword"
import ResetPassword from "../components/signup-signIn-frgtPwd/ResetPassword";
import VerifyPassword from "../components/signup-signIn-frgtPwd/VerifyPassword";
import Home from "../components/socialScreens/Home"
import ErrorScreen from "../components/ErrorScreen";

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
        element : <Home/>,
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