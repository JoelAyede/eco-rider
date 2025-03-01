import express from 'express';
import { createRide, getRides ,getRide} from '../controllers/rideController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const rideRoutes = express.Router();
rideRoutes.post('/', authenticate, createRide);
rideRoutes.get('/', getRides);
rideRoutes.get('/:rideId', getRide);

export default rideRoutes;