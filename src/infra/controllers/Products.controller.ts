import { Request, Response } from "express";
import ProductsUsecase from "../../app/use-cases/products.usecase";
import GetProductUseCase from "../../app/use-cases/getProduct.usecase";

class ProductsController{

    async handle(request: Request, response: Response){
        const products = await ProductsUsecase.execute();
        return response.status(200).send(products);
    }

    async findById(request: Request, response: Response){
        const { id } = request.params;
        const product = await GetProductUseCase.execute(Number(id));

        return response.status(200).send(product);
    }

    async create(request: Request, response: Response){
        const { id, title, description, price, image } = request.body;
        
        return response.status(201);
    }
};

export default new ProductsController;