import { Product } from "../entities/Product.entitie"

export interface IProductRepository{
  show(): Promise<Product | null> 
}