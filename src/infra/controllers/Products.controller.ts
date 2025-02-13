import { Request, Response } from "express";

class productsController{

    async handle(request: Request, response: Response){
        
        return response.status(200).json({message: "Teste"});
    }
}

export default new productsController;