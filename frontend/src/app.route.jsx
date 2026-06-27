import { createBrowserRouter } from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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
    }
])

export default router