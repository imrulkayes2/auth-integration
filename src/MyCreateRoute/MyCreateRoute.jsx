import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import Orders from "../Components/Orders/Orders";
import PrivetRoute from "../Route/PrivetRoute/PrivetRoute";
import Profile from "../Components/Profile/Profile";
import Dashboard from "../Components/Dasboard/Dashboard";


const MyCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/orders',
                element: <PrivetRoute><Orders></Orders></PrivetRoute>
            },
            {
                path: '/profile',
                element: <PrivetRoute><Profile></Profile></PrivetRoute>
            },
            {
                path: '/dashboard',
                element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>
            }

        ]
    }
])

export default MyCreateRoute;