import { ProductNotExistsError } from "../errors/product-not-exists-error.ts";
import type {
  IProductOutput,
  IProductRepository
} from "@/infra/repositories/interfaces/ProductRepository.ts";

interface IGetProductUseCaseResponse {
  product: IProductOutput
}

export class GetProductUseCase {
  constructor(
    private productsRepository: IProductRepository
  ){}

  async execute(id: number): Promise<IGetProductUseCaseResponse>{
    const product = await this.productsRepository.findById(id);

    if(!product){
      throw new ProductNotExistsError();
    }

    return {
      product,
    }
  }
}
