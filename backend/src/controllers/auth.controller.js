
import User from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import sendEmail from "../utils/sendEmail";

// 1. Register
export const registerUser = async (req, res) => {
    try {

        const { name, email, password, username } = req.body

        if(!name || !email || !password || !username) {
            return res.status(400).json({
                message : "all input fields are required"
            })
        };

        const existingUser = await User.findOne({ email : email })

        if(existingUser) {
            return res.status(400).json({
                message : "user already exits"
            })
        }

        const passwordHashing = bcrypt.hash(password, 10);

        const payload = {
            name : name,
            email : email,
            username : username
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn : 60 * 60 
        });

        const link = `${process.env.Frontend_URL}/verify-email/${token}`;

        const html = `
                        <h1>Email Verification</h1>
                        <p>Click the link below to verify your account:</p>
                        <a href="${link}">Verify Email</a>
                    `;

        const responseSendEmail = await sendEmail({
            to: email,
            subject: "Verify Email",
            text: "Dear user",
            html
        });

        if(!responseSendEmail){
            return res.status(500).json({
                message : "Server Error"
            })
        };

        const newUser = await User.create({
            name : name,
            email : email,
            password : passwordHashing,
            username : username
        })

        return res.status(201).json({
            message : "User Registered Successfully",
            token : token
        })

    }
    catch(error){
        return res.status(500).json({
            message : "Server Error"
        })
    }
}

// Verify Email Email
export const verifyEmail = async (req, res) => {
    try {
        const { token } = req.params;

        const payload = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOne({ email : payload.email });

        if(!user) {
            return res.status(400).json({
                message : "user not found"
            })
        }

        user.isVerified = true;

        await user.save();

        return res.status(200).json({
            message : "Email Verified Successfully"
        })
    }
    catch(error){
        return res.status(500).json({
            message : "Server Error"
        })
    }
}

// 2. Login
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email : email });

        if(!user) {
            return res.status(400).json({
                message : "user not found"
            })
        };

        const passwordMatch = await bcrypt.compare(password, user.password);

        if(!passwordMatch) {
            return res.status(400).json({
                message : "invalid password"
            })
        }

        const payload = {
            name : user.name,
            email : user.email,
            username : user.username
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn : 60 * 60 
        });

        res.cookie("token", token, {
            maxAge : 60 * 60 * 1000
        });

        return res.status(200).json({
            message : "Login Successful"
        })
    }
    catch(error){
        return res.status(500).json({
            message : "Server Error"
        })
    }
}

// ForgetPassword - H/W 
export const forgetPassword = async (req, res) => {
    try {

        const { email } = req.body;

        const user = await User.findOne({ email : email });

        if(!user) {
            return res.status(400).json({
                message : "user not found"
            })
        }

    }
    catch(error){
        return res.status(500).json({
            message : "Server Error"
        })
    }
}

// Reset Password - H/W
export const resetPassword = async (req, res) => {
    try {

    }
    catch(error){
        return res.status(500).json({
            message : "Server Error"
        })
    }
}