import { Router } from "express";
import { getProductController } from "../controllers/get-product-controller.ts";

export const router = Router();

router.get("/products/:id", getProductController);
