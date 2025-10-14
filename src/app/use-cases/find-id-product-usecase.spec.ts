import { describe, it, expect, beforeEach } from "vitest";

import { InMemoryProducts } from "@/infra/repositories/in-memory-products.ts";
import { FindIdProductUseCase } from "./find-id-product-usecase.ts";
import { ProductNotExistsError } from "../errors/product-not-exists-error.ts";

describe("Find Id Product Use Case", ()=> {

  let productsRepository: InMemoryProducts
  let sut: FindIdProductUseCase

  beforeEach(()=>{
    productsRepository = new InMemoryProducts();
    sut = new FindIdProductUseCase(productsRepository);
  })

  it("Should be able find product with id ", async ()=> {
    const { product } = await sut.execute(1);

    expect(product).toBeTruthy();
    expect(product).toHaveProperty("title");
    expect(product.id).toBe(1);
  })

  it("Should be able not find product with id ", async ()=> {
    await expect(()=> sut.execute(0)).rejects.toBeInstanceOf(ProductNotExistsError)
  })

})
