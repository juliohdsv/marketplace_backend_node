import express from "express";
import cors from "cors";
import "dotenv/config";

import router from "./infra/routes/main.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", router); 

export { app }
