import { InMemoryProducts } from "@/infra/repositories/in-memory-products.ts"
import { GetProductUseCase } from "../get-product-usecase.ts"

export function makeGetProductUseCase(){
  const productsrepository = new InMemoryProducts();
  const getProductUseCase = new GetProductUseCase(productsrepository);

  return getProductUseCase;
}
