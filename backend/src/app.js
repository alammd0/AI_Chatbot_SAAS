import express from 'express';
import connectDB from './config/db.js';
import userRoutes from './routes/user.route.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

connectDB();

app.use("/api/user", userRoutes);

export default app;