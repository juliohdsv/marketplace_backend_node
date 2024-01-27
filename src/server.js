import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import productsRouter from "./routes/productsRouter.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.NODE_PORT || 3000; 
const ENV = process.env.NODE_ENV; 

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", productsRouter); 
 
app.listen(
  PORT,
  console.log(`Server running in mode ${ENV} on port ${PORT}`)
);