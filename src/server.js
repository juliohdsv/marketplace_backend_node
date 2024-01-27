import express from "express";
import path from "path";
import cors from "cors";

// import cepRouter from "./routes/cepRouter.routes.js";
import productsRouter from "./routes/productsRouter.routes.js";

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use("/cep", cepRouter);
app.use("/products", productsRouter); 

app.listen(3000,() => {console.log("Server start")});