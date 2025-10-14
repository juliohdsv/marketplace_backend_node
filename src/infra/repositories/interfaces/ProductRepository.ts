export interface IProductOutput {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export interface IProductRepository {
  findById(id: number): Promise<IProductOutput>
}
