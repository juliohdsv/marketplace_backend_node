import type { IProductOutput, IProductRepository } from "./interfaces/ProductRepository.ts";
import { fakeStoreApi } from "../services/fakeStore-api.ts";

export class InMemoryProducts implements IProductRepository {

  async findById(id: number): Promise<IProductOutput> {
    const { data } = await fakeStoreApi(`/products/${id}`);

    return data;
  }
}
