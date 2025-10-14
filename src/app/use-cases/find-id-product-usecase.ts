import { ProductNotExistsError } from "../errors/product-not-exists-error.js";
import type {
  IProductOutput,
  IProductsRepository
} from "@/infra/repositories/interfaces/ProductsRepository.ts";

interface IFindIdProductUseCaseResponse {
  product: IProductOutput
}

export class FindIdProductUseCase {
  constructor(
    private productsRepository: IProductsRepository
  ){}

  async execute(id: number): Promise<IFindIdProductUseCaseResponse>{
    const product = await this.productsRepository.findById(id);

    if(!product){
      throw new ProductNotExistsError();
    }

    return {
      product,
    }
  }
}
