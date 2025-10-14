import express from "express";
import cors from "cors";

import { router } from "@/infra/http/routes/main.route.ts";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/", router);
