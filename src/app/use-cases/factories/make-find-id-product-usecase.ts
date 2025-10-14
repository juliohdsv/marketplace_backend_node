import { InMemoryProducts } from "@/infra/repositories/in-memory-products.ts"
import { FindIdProductUseCase } from "../find-id-product-usecase.ts";

export function makeFindIdProductUseCase(){
  const productsrepository = new InMemoryProducts();
  const findIdProductUseCase = new FindIdProductUseCase(productsrepository);

  return findIdProductUseCase;
}
