import { data } from "./in-memory.js";
import type {
  IProductOutput,
  IProductsRepository
} from "./interfaces/ProductsRepository.ts";

export class InMemoryProducts implements IProductsRepository {
  constructor(private items = data){}

  async findById(id: number):Promise<IProductOutput | null> {
    const product = this.items.find(item => item.id == id)

    return product ?? null;
  }

  async store(): Promise<IProductOutput[]> {
    return this.items
  }
}
