import express from 'express';
import { createRide, getRides } from '../controllers/rideController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const rideRouter = express.Router();
rideRouter.post('/', authenticate, createRide);
rideRouter.get('/', getRides);
export default rideRouter;