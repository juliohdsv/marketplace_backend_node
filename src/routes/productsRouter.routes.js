import { Router } from "express";
import productsController from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get('/', productsController.index);
productsRouter.get('/:id', productsController.show);

module.exports = productsRouter;