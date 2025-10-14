import { InMemoryProducts } from "@/infra/repositories/in-memory-products.js";
import { GetProductsUseCase } from "../get-products-usecase.js";

export function makeGetProductUseCase(){
  const productsrepository = new InMemoryProducts();
  const getProductUseCase = new GetProductsUseCase(productsrepository);

  return getProductUseCase;
}
