import { InMemoryProducts } from "@/infra/repositories/in-memory-products.js";
import { FindIdProductUseCase } from "../find-id-product-usecase.js";

export function makeFindIdProductUseCase(){
  const productsrepository = new InMemoryProducts();
  const findIdProductUseCase = new FindIdProductUseCase(productsrepository);

  return findIdProductUseCase;
}
