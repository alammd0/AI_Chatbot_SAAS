import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import sendEmail from "../utils/sendEmail.js";
import bcrypt from "bcrypt";

/**
 * @route Post /api/user/register
 * @access Public
 * @desc Register a new user
 */

export const registerUser = async (req, res) => {
    try {

        const { name, username, email, password } = req.body;

        if(!name || !username || !email || !password) {
            return res.status(400).json({
                message : "All fields are required"
            })
        }

        const existingUser = await User.findOne({ email });

        if(existingUser) {
            return res.status(400).json({
                message : "User already exists"
            })
        }

        // add Send email verification link 

        const payload = {
            name, 
            username, 
            email
        }

        const token = await jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });

        const subject = "Verify your email";
        const text = `Hello ${name}, Please click on the link below to verify your email address.`;
        const html = `<a href="http://localhost:3000/api/user/verify-email/${token}">Verify Email</a>`;

        await sendEmail(email, subject, text, html);

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            username,
            email,
            password : hashedPassword,
            isVerified : false
        });

        return res.status(201).json({
            message : "User registered successfully",
            user : {
                id : newUser._id,
                name : newUser.name,
                username : newUser.username,
                email : newUser.email,
                isVerified : newUser.isVerified
            }
        })
    }
    catch (error) {
        return res.status(500).json({
            message : "Something went wrong" + error
        })
    }
}


/**
 * @route Post /api/user/verify-email 
 * @access Public
 * @desc Verify a user's email
 */

export const verifyEmail = async (req, res) => {
    try {

        const { token } = req.params;

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOne({ email : decoded.email });

        if(!user) {
            return res.status(400).json({
                message : "User not found"
            })
        }

        user.isVerified = true;
        await user.save();

        return res.status(200).json({
            message : "Email verified successfully"
        })

    }
    catch (error) {
        return res.status(500).json({
            message : "Something went wrong"
        })
    }
}


/**
 * @route Post /api/user/login
 * @access Public
 * @desc Login a user
 */

export const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body ;

        if(!email || !password){
            return res.status(500).json({
                message : "Email and password are required"
            })
        }

        const user = await User.findOne({ email : email});

        if(!user){
            return res.status(404).json({
                message : "user not found"
            })
        }

        if(!user.isVerified) {
            return res.status(400).json({
                message : "Please verify your email first"
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect) {
            return res.status(400).json({
                message : "Invalid password"
            })
        }

        // create token and set token in cookies 
        const payload = {
            id : user._id,
            name : user.name,
            username : user.username,
            email : user.email
        } ;

        const token = await jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });


        res.cookie("token", token, {
            maxAge : 86400 * 1000,
            httpOnly : true
        });

        return res.status(200).json({
            message : "Login successful",
            user : {
                id : user._id,
                name : user.name,
                username : user.username,
                email : user.email
            }
        })
    }
    catch (error) {
        return res.status(500).json({
            message : "Something went wrong"
        })
    }
}


/**
 * @route Post /api/user/logout
 * @access Public
 * @desc Logout a user
 */

export const logoutUser = async (req, res) => {
    try {

        res.clearCookie("token");

        return res.status(200).json({
            message : "Logout successful"
        })

    }
    catch (error) {
        return res.status(500).json({
            message : "Something went wrong"
        })
    }
}


/**
 * @route Post /api/user/forgot-password
 * @access Public
 * @desc Send a reset password email
 */

export const forgotPassword = async (req, res) => {
    try {

        const { email } = req.body;

        if(!email) {
            return res.status(400).json({
                message : "Email is required"
            })
        }

        const user = await User.findOne({ email });

        if(!user) {
            return res.status(404).json({
                message : "User not found"
            })
        }

        // add Send email verification link

        const payload = {
            name : user.name,
            username : user.username,
            email : user.email
        }

        const token = await jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });

        const subject = "Reset your password";
        const text = `Hello ${user.name}, Please click on the link below to reset your password.`;
        const html = `<a href="http://localhost:3000/api/user/reset-password/${token}">Reset Password</a>`;

        await sendEmail(user.email, subject, text, html);

        return res.status(200).json({
            message : "Password reset email sent successfully"
        })

    }
    catch (error) {
        return res.status(500).json({
            message : "Something went wrong"
        })
    }
}

/** 
 * @route Post /api/user/reset-password
 * @access Public
 * @desc Reset a user's password
 */

export const resetPassword = async (req, res) => {
    try {

        const { token } = req.params;

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOne({ email : decoded.email });

        if(!user) {
            return res.status(404).json({
                message : "User not found"
            })
        }

        // if(!user.isVerified) {
        //     return res.status(400).json({
        //         message : "Please verify your email first"
        //     })
        // }

        const { password, confirmPassword } = req.body;

        if(!password || !confirmPassword) {
            return res.status(400).json({
                message : "Password and confirm password are required"
            })
        }

        if(password !== confirmPassword) {
            return res.status(400).json({
                message : "Passwords do not match"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        user.password = hashedPassword;
        await user.save();

        return res.status(200).json({
            message : "Password reset successfully"
        })
    }
    catch (error) {
        return res.status(500).json({
            message : "Something went wrong"
        })
    }
}