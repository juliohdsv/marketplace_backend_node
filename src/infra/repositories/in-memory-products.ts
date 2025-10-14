import { fakeStoreApi } from "../services/fakeStore-api.js";
import type {
  IProductOutput,
  IProductsRepository
} from "./interfaces/ProductsRepository.ts";

export class InMemoryProducts implements IProductsRepository {

  async findById(id: number): Promise<IProductOutput> {
    const { data } = await fakeStoreApi(`/products/${id}`);

    return data;
  }

  async store(): Promise<IProductOutput[]> {
    const { data } = await fakeStoreApi(`/products`);

    return data;
  }
}
