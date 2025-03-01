import { prisma } from '../utils/db.js';

export const createBooking = async (req, res) => {
     const { rideId, userId, seats, driverId } = req.body;

     try {
          const booking = await prisma.booking.create({
               data: {
                    rideId,
                    userId: parseInt(userId),
                    driverId,
                    seats: parseInt(seats)
               }
          });

          // Subtract 1 from the available seats of the related ride
          await prisma.ride.update({
               where: { id: rideId },
               data: { seats: { decrement: 1 } }
          });

          res.status(201).json(booking);
     } catch (error) {
          res.status(400).json({ error: `Erreur lors de la création de la réservation ${error}` });
     }
};

export const getBookings = async (req, res) => {
     const bookings = await prisma.booking.findMany({
          include: { ride: true, user: { select: { name: true } } }
     });
     res.json(bookings);
};

export const getBookingsByUser = async (req, res) => {
     const userId = parseInt(req.params.userId);
     const bookings = await prisma.booking.findMany({
          where: { driverId: userId },
          include: { ride: true ,user : {
               select : {
                    name : true
               }
          }}
     });
     res.json(bookings);
};

export const deleteBooking = async (req, res) => {
     const bookingId = parseInt(req.params.bookingId);

     try {
          const booking = await prisma.booking.delete({
               where: { id: bookingId },
          });

          // Increment 1 to the available seats of the related ride
          await prisma.ride.update({
               where: { id: booking.rideId },
               data: { seats: { increment: 1 } }
          });

          res.status(200).json({ message: 'Booking deleted successfully' });
     } catch (error) {
          res.status(400).json({ error: `Error deleting booking: ${error}` });
     }
};