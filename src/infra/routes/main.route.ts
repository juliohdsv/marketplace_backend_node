import { Router, Request, Response } from "express";
import ProductsController from "../controllers/Products.controller";

const router = Router();

router.get("/products", (request: Request, response: Response)=>{
   ProductsController.handle(request, response);
});

router.post("/products", (request: Request, response: Response)=>{
  ProductsController.create(request, response);
});

router.get("/products/:id", (request: Request, response: Response)=>{
  ProductsController.findById(request, response);
});

export default router;