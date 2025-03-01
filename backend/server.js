import express from 'express';
import cors from 'cors';
import authRoutes from "./src/routes/authRoutes.js"
import rideRoutes from './src/routes/rideRoutes.js';
import bookingRoutes from './src/routes/bookingRoutes.js';

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Use the userRouter for /api/user routes
app.use('/api/user', authRoutes);
app.use('/api/ride', rideRoutes);
app.use('/api/booking', bookingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});