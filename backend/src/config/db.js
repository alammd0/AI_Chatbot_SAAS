
import mongoose from "mongoose";

export const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_URL);

        console.log("MongoDb Connect Success")

    }
    catch(error){

        console.error("MongoDB Connection are failed")

        process.exit(1);

    }
}

// 2.Method 

// export const connectDB = mongoose.connect(
//     process.env.MONGODB_URL
// ).then(() => {

// }).catch(() => {

// })