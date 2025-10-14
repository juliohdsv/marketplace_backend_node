import type {
  IProductOutput,
  IProductsRepository,
  IOrderBy
} from "@/infra/repositories/interfaces/ProductsRepository.ts";

interface IGetProductUseCaseRequest {
  orderBy: IOrderBy
}

interface IGetProducstUseCaseResponse {
  products: IProductOutput[]
}

export class GetProductsUseCase {
  constructor(
    private productsRepository: IProductsRepository
  ){}

  async execute({ orderBy }: IGetProductUseCaseRequest): Promise<IGetProducstUseCaseResponse>{
    const data = await this.productsRepository.store();

    if(!data){
      throw new Error()
    }

    data.sort((a, b)=> {
      const valueA = a[orderBy];
      const valueB = b[orderBy];

      if (typeof valueA === "string" && typeof valueB === "string") {
        return valueA.localeCompare(valueB);
      }

      if (typeof valueA === "number" && typeof valueB === "number") {
        return valueA - valueB;
      }

      return 0;
    })

    return {
      products: data
    }
  }
}
