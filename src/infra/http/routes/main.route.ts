import { Router } from "express";
import { getProductController } from "../controllers/get-product-controller.ts";
import { findIdProductController } from "../controllers/find-id-product-controller.ts";

export const router = Router();

router.get("/products/:id", findIdProductController);
router.get("/products", getProductController);
