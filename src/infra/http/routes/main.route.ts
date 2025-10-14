import { Router } from "express";
import { getProductController } from "../controllers/get-product-controller.js";
import { findIdProductController } from "../controllers/find-id-product-controller.js";

export const router = Router();

router.get("/products/:id", findIdProductController);
router.get("/products", getProductController);
