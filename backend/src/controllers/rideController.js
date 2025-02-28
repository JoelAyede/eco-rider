import { prisma } from '../utils/db.js';

export const createRide = async (req, res) => {
    const { startPoint, endPoint, date, price, seats } = req.body;

    try {
        const ride = await prisma.ride.create({
            data: {
                driverId: req.user.id,
                startPoint,
                endPoint,
                date: new Date(date),
                price: parseFloat(price),
                seats: parseInt(seats)
            }
        });
        res.status(201).json(ride);
    } catch (error) {
        res.status(400).json({ error: "Erreur lors de la création du trajet" });
    }
};

export const getRides = async (req, res) => {
    const rides = await prisma.ride.findMany({
        include: { driver: { select: { name: true } } }
    });
    res.json(rides);
};