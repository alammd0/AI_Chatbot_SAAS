import express from 'express';
import { connectDB } from './config/db.js';
import authRoutes from './routes/user.route.js';

const app = express();

app.use(express.json());


app.use("/api/auth", authRoutes);


connectDB();
export default app;