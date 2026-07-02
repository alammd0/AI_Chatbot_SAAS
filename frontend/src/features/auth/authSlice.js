
import { createSlice } from '@reduxjs/toolkit'


// initial state
const initialState = {
    user : null,
    token : null,
    isLoading : false,
    error : null,
    isAuthenticated : false
}

// reducer 
const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        isLoading : (state) => {
            state.isLoading = true;
        },

        setUser : (state, action) => {
            state.user = action.payload.user;
            state.isAuthenticated = true;
        },

        setToken : (state, action) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },

        setError : (state, action) => {
            state.error = action.payload.error;
            state.isAuthenticated = false;
        },

        logout : (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        }
    }
});

// export 

export const {
    isLoading,
    setUser,
    setToken,
    setError,
    logout
}  = authSlice.actions;

export default authSlice.reducer;

