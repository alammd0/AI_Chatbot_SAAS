import instance from "./axioInstance";


// 1. Register a new user
export const registerUser = async (name, username, email, password) => {
    try {
        const response = await instance.post("/user/register", {
            name,
            username,
            email,
            password
        });

        return response;

    }catch(error) {
        console.log(error);
    }
}

// 2. Verify a user's email
export const verifyEmail = async (token) => {
    try {
        const response = await instance.post(`/user/verify-email/${token}`);

        return response;
    }catch(error) {
        console.log(error);
    }
}

// 3. Login a user
export const loginUser = async (email, password) => {
    try {
        const response = await instance.post("/user/login", {
            email,
            password
        });

        return response
    }catch(error) {
        console.log(error);
    }
}

// 4. Logout a user
export const logoutUser = async () => {
    try {
        const response = await instance.post("/user/logout");

        return response;
    }catch(error) {
        console.log(error);
    }
}

// 5. Send a reset password email
export const forgotPassword = async (email) => {
    try {
        const response = await instance.post("/user/forgot-password", {
            email
        });

        return response;
    }catch(error) {
        console.log(error);
    }
}

// 6. Reset a user's password
export const resetPassword = async (token, password, confirmPassword) => {
    try {
        const response = await instance.put(`/user/reset-password/${token}`, {
            password,
            confirmPassword
        });

        return response;
    }catch(error) {
        console.log(error);
    }
}