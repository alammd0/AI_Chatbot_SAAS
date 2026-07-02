
import { useNavigate } from "react-router";
import {
    setUser,
    setToken,
    setError,
    isLoading,
    logout
} from "../features/auth/authSlice"

import {
    registerUser,
    verifyEmail,
    loginUser,
    logoutUser,
    forgotPassword,
    resetPassword
} from "../services/auth.api"
import { toast } from "react-toastify";


export const createUser = (name, username, email, password, navigate) => async (dispatch) => {
    try {

        dispatch(isLoading());

        const response = await registerUser(name, username, email, password);

        if(response.status === 201) {
            dispatch(setUser(response.data.user));

            // navigate to login page
            navigate("/verify-email");

            dispatch(isLoading());
        }
        else {
            dispatch(setError(response.data.message));
            dispatch(isLoading());
        }

    }catch(error) {
        console.log(error);
        dispatch(setError(error));
    }
}

export const verifyEmailFrontend = (token, navigate) => async (dispatch) => {
    try {

        dispatch(isLoading());

        const response = await verifyEmail(token);

        if(response.status === 200) {
            dispatch(setToken(response.data.token));

            // navigate to login page
            navigate("/login");

            dispatch(isLoading());
        }
        else {
            dispatch(setError(response.data.message));
            dispatch(isLoading());
        }

    }catch(error) {
        console.log(error);
    }
}

export const loginUserFrontend = (email, password, navigate) => async (dispatch) => {
    try {

        dispatch(isLoading());

        console.log(email, password);

        const response = await loginUser(email, password);

        console.log(response);

        if(response.status === 200) {
            dispatch(setToken(response.data.token));

            // Navigate to Dashboard
            navigate("/dashboard");

            dispatch(isLoading());
        }
        else {
            dispatch(setError(response.data.message));
            dispatch(isLoading());
        }

    }catch(error) {
        dispatch(setError(error));
    }
}

// // Done
// export const logoutUserFrontend = (navigate) => async (dispatch) => {
//     try {
//         dispatch(isLoading());

//         const response = await logoutUser();

//         if(response.status === 200) {
//             dispatch(logout());

//             dispatch(logout())

//             // Navigate to login page again
//             navigate("/login")

//             dispatch(isLoading());
//         }

//         else {
//             dispatch(setError(response.data.message));
//             dispatch(isLoading());
//         }

//     }catch(error) {
//         dispatch(setError(error));
//     }
// }


// // Done
export const forgotPasswordFrontend = (email) => async (dispatch) => {
    try {
        dispatch(isLoading());

        const response = await forgotPassword(email);


        if(response.status === 200) {
            dispatch(isLoading());

            // Add a message to the UI
            toast.success("Password reset email sent successfully");
            dispatch(isLoading());
        }

        else {
            dispatch(setError(response.data.message));
            dispatch(isLoading());
        }



    }catch(error) {
        dispatch(setError(error));
    }
}

// // Done
export const resetPasswordFrontend = (token, password, confirmPassword, navigate) => async (dispatch) => {
    try {
        const response = await resetPassword(token, password, confirmPassword);

        if(response.status === 200) {
            dispatch(isLoading());
            navigate("/login");
            toast.success("Password reset successfully");
            dispatch(isLoading());
        }
        else {
            dispatch(setError(response.data.message));
            dispatch(isLoading());
        }
    }catch(error) {
        dispatch(setError(error));
    }
}