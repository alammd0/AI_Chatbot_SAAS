import express from 'express';
import connectDB from './config/db.js';
import userRoutes from './routes/user.route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/user", userRoutes);

export default app;