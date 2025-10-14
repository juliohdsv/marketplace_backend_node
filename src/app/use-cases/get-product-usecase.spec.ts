import { describe, it, expect, beforeEach } from "vitest";
import { InMemoryProducts } from "@/infra/repositories/in-memory-products.ts";
import { GetProductUseCase } from "./get-product-usecase.ts";
import { ProductNotExistsError } from "../errors/product-not-exists-error.ts";

describe("Get Product Use Case", ()=> {

  let productRepository: InMemoryProducts
  let sut: GetProductUseCase

  beforeEach(()=>{
    productRepository = new InMemoryProducts();
    sut = new GetProductUseCase(productRepository);
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
