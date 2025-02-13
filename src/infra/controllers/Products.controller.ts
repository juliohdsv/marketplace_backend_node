import { Request, Response } from "express";
import ProductsUsecase from "../../app/use-cases/products.usecase";
import GetProductUseCase from "../../app/use-cases/getProduct.usecase";
import CreateProductUsecase from "../../app/use-cases/createProduct.usecases";

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
        const { title, description, price, image } = request.body;
        const product = await CreateProductUsecase({ title, description, price, image });

        return response.status(201).send(product);
    }
};

export default new ProductsController;