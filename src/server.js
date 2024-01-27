import express from "express";
import cors from "cors";

// import cepRouter from "./routes/cepRouter.routes.js";
import productsRouter from "./routes/productsRouter.routes.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/products", productsRouter); 
 
app.listen(3000,() => {console.log("Server Running")});