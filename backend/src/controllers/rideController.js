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
        where: { seats: { not: 0 } },
        include: { driver: { select: { name: true } } },
        orderBy: { id: 'desc' }
    });
    res.json(rides);
};

export const getRide = async (req, res) => {
    const rideId = parseInt(req.params.rideId);
    const ride = await prisma.ride.findUnique({
        where: { id: rideId },
        include: { driver: { select: { name: true ,id : true} } }
    });

    if (!ride) {
        return res.status(404).json({ error: "Trajet non trouvé" });
    }

    res.json(ride);
};