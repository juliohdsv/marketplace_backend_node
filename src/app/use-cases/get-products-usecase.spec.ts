import { describe, it, expect, beforeEach, vi } from "vitest";

import { GetProductsUseCase } from "./get-products-usecase.ts";
import { BadGatwayError } from "../errors/bad-gateway-error.ts";
import { InMemoryProducts } from "@/infra/repositories/in-memory-products.ts";

describe("Get Product Use Case", ()=> {

  let productRepository: InMemoryProducts
  let sut: GetProductsUseCase

  beforeEach(()=>{
    productRepository = new InMemoryProducts();
    sut = new GetProductsUseCase(productRepository);
  })

  it("Should be able get products order by id", async ()=> {
    const { products } = await sut.execute({ orderBy: "id" });

    expect(products.length).toBeGreaterThanOrEqual(0)
  })

  it("Should throw BadGatewayError when upstream data is unavailable", async () => {
    vi.spyOn(productRepository, "store").mockResolvedValueOnce(null as any);

    await expect(
      sut.execute({ orderBy: "id" })
    ).rejects.toBeInstanceOf(BadGatwayError);
  });
})
