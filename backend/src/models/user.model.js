
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name is required"]
    },

    username : {
        type : String,
        unique : true,
        required : [true, "Username is also required"]
    },

    email : {
        type : String,
        required : [true, "Email is required"],
        unique : [true, "User already exits with this email"]
    },

    password : {
        type : String,
        required : [true, "Password is required"]
    },

    isVerified : {
        type : Boolean,
        default : false
    }
    
});

const User = mongoose.model("User", userSchema);
export default User