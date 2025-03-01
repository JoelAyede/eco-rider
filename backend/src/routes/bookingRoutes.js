import { getBookings,createBooking, getBookingsByUser, deleteBooking } from '../controllers/bookingController.js';
import { authenticate } from '../middleware/authMiddleware.js';
import express from 'express';

const bookingRoutes = express.Router();

// Create a new booking
bookingRoutes.post('/', authenticate,createBooking);

// Get all bookings
bookingRoutes.get('/', getBookings);

// Get bookings by user
bookingRoutes.get('/:userId', getBookingsByUser);

// delete
bookingRoutes.delete("/:bookingId",deleteBooking)


export default bookingRoutes;