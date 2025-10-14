import { InMemoryProducts } from "@/infra/repositories/in-memory-products.ts"
import { GetProductsUseCase } from "../get-products-usecase.ts"

export function makeGetProductUseCase(){
  const productsrepository = new InMemoryProducts();
  const getProductUseCase = new GetProductsUseCase(productsrepository);

  return getProductUseCase;
}
