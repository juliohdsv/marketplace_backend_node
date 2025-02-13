import { Router, Request, Response } from "express";
// import ProductsController from "../controllers/Products.controller";

const router = Router();

router.get("/", (request: Request, response: Response)=>{
   response.status(200).send("TOP");
});

export default router;