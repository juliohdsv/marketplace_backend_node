export type IOrderBy = "id" | "title" | "category" | "price";

export interface IProductOutput {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
}

export interface IProductsRepository {
  findById(id: number): Promise<IProductOutput | null>
  store():Promise<IProductOutput[]>
}
