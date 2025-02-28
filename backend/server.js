import express from "express";
import cors from "cors";
import dotenv from "dotenv"

// Customized
import userRouter from "./src/routes/authRoutes.js";
import { authenticate } from "./src/middleware/authMiddleware.js";
import rideRouter from "./src/routes/rideRoutes.js";

//Vars
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000

//Api configuration
app.use(cors());
app.use(express.json())

//Error handling
app.use((err,req,res,next) => {
  console.error(err.stack);
  res.status(500).send('Something Broke !')
})

//Custom routes
app.use("/api/user",userRouter)
app.use("/api/rides",authenticate,rideRouter)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});