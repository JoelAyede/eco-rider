import { prisma } from '../utils/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const register = async (req, res) => {
  const { email, password, name } = req.body;
  const hashedPassword = await bcrypt.hashSync(password, 13);

  try {
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, name }
    });
    res.status(201).json({ id: user.id, email: user.email });
  } catch (error) {
    res.status(400).json({ error: "Erreur lors de la création du compte" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "Identifiants invalides" });
  }


  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environmental variable is not defined');
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token , name : user.name,id: user.id });
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({ where: { id: parseInt(id, 10) } });

    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    res.json({ id: user.id, email: user.email, name: user.name });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération de l'utilisateur" });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, password, name } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { id: parseInt(id, 10) } });

    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    const hashedPassword = password ? await bcrypt.hashSync(password, 13) : user.password;

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id, 10) },
      data: { email, password: hashedPassword, name }
    });

    res.json({ id: updatedUser.id, email: updatedUser.email, name: updatedUser.name });
  } catch (error) {
    res.status(400).json({ error: "Erreur lors de la mise à jour de l'utilisateur" });
  }
};