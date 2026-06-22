
import express from "express";
import {
    registerUser,
    loginUser,
    forgetPassword,
    resetPassword,
    verifyEmail
} from "../controllers/auth.controller.js"


const authRoutes = express.Router();

authRoutes.post("/register", registerUser);
authRoutes.post("/verify-email", verifyEmail);
authRoutes.post("/login", loginUser);
authRoutes.post("/forget-password", forgetPassword);
authRoutes.put("/reset-password", resetPassword)

export default authRoutes;