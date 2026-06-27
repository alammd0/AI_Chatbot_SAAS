
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


export const registerUser = (name, username, email, password) => async (dispatch) => {
    try {

        dispatch(isLoading());

        const response = await registerUser(name, username, email, password);

        if(response.status === 201) {
            dispatch(setUser(response.data.user));
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

export const verifyEmail = (token) => async (dispatch) => {
    try {

        dispatch(isLoading());

        const response = await verifyEmail(token);

        if(response.status === 200) {
            dispatch(setToken(response.data.token));
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

export const loginUser = (email, password) => async (dispatch) => {
    try {

        dispatch(isLoading());

        const response = await loginUser(email, password);

        if(response.status === 200) {
            dispatch(setToken(response.data.token));
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

// H/W
export const logoutUser = () => async (dispatch) => {
    try {

    }catch(error) {
        dispatch(setError(error));
    }
}


// H/W
export const forgotPassword = (email) => async (dispatch) => {
    try {

    }catch(error) {
        dispatch(setError(error));
    }
}


// H/W
export const resetPassword = (token, password, confirmPassword) => async (dispatch) => {
    try {

    }catch(error) {
        dispatch(setError(error));
    }
}