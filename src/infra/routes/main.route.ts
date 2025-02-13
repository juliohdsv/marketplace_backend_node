import { Router, Request, Response } from "express";
import ProductsController from "../controllers/Products.controller";

const router = Router();

router.get("/", (request: Request, response: Response)=>{
   ProductsController.handle(request, response);
});

export default router;