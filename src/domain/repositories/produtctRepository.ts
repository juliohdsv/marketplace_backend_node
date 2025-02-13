import { Product } from "../entities/Product.entitie"

export interface IProductRepository{
  findById(): Promise<Product | null> 
  save(): Promise<void>
}