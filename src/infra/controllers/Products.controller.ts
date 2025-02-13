import { Request, Response } from "express";
import productsUsecase from "../../app/use-cases/products.usecase";

class productsController{

    async handle(request: Request, response: Response){
        const products = await productsUsecase.execute();
        return response.status(200).send(products);
    }
};

export default new productsController;