import { Product } from "../../domain/entities/Product.entitie";
import { IProductRepository } from "../../domain/repositories/produtctRepository";
import { ICreateProductRequestDTO } from "../dtos/ICreateProductRequest.dto";

class CreateProductUseCase{
  constructor(
    private productRepository: IProductRepository
  ){}

  async execute(data: ICreateProductRequestDTO) {
   const productExists =  await this.productRepository.findByTitle(data.title);

   if(productExists){
      throw new Error("Product already exists");
   }

  const product = new Product(data);
  

 
  }
}

export default new CreateProductUseCase;