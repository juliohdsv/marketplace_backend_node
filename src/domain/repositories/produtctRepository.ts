import { Product } from "../entities/Product.entitie"

export interface IProductRepository{
  findByTitle(): Promise<Product | null> 
  save(): Promise<void>
}