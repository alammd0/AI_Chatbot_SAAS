import express from "express";
import {
    registerUser,
    verifyEmail,
    loginUser,
    logoutUser,
    forgotPassword,
    resetPassword
} from "../controllers/user.controller.js";

const userRoutes = express.Router();

/**
 * @route Post /api/user/register
 * @access Public
 * @desc Register a new user
 */

userRoutes.post("/register", registerUser);

/**
 * @route Post /api/user/verify-email 
 * @access Public
 * @desc Verify a user's email
 */

userRoutes.post("/verify-email/:token", verifyEmail);


/**
 * @route Post /api/user/login
 * @access Public
 * @desc Login a user
 */

userRoutes.post("/login", loginUser);


/**
 * @route Post /api/user/logout
 * @access Public
 * @desc Logout a user
 */

userRoutes.post("/logout", logoutUser);


/**
 * @route Post /api/user/forgot-password
 * @access Public
 * @desc Send a reset password email
 */

userRoutes.post("/forgot-password", forgotPassword);

/** 
 * @route Post /api/user/reset-password
 * @access Public
 * @desc Reset a user's password
 */

userRoutes.put("/reset-password/:token", resetPassword);

export default userRoutes;