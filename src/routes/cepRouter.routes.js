import { Router } from "express";
import cepController from "../controllers/cepController.js";

const cepRouter = Router();

cepRouter.get("/:codigo", cepController.show);

export default cepRouter;