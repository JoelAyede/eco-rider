import express from 'express';
import { register, login, getUserById, updateUser } from '../controllers/authController.js';

const authRoutes = express.Router();
authRoutes.post('/register', register);
authRoutes.post('/login', login);
authRoutes.get('/:id',getUserById)
authRoutes.put('/:id', updateUser);


export default authRoutes;