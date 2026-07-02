import { createBrowserRouter } from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import VerifyUserWithToken from "./pages/VerifyUserWithToken";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";

const router = createBrowserRouter([
    {
        path : "/",
        element : <div>Hello World</div>
    },

    {
        path : "/login",
        element : <Login />
    },

    {
        path :"/signup",
        element : <Signup />
    },

    {
        path : "/verify-email",
        element : <VerifyEmail />
    },

    {
        path : "/verify-email/:token",
        element : <VerifyUserWithToken />
    },

    {
        path : "/forgot-password",
        element : <ForgetPassword />
    },

    {
        path : "/reset-password/:token",
        element : <ResetPassword />
    },

    {
        path : "/dashboard",
        element : <div>
            <h1>Dashboard</h1>  
        </div>
    }
])

export default router