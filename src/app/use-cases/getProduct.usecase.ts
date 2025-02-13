import { fakeStoreApi } from "../../infra/services/fakeStore.api";

class GetProductUseCase{
  constructor(){}

  async execute(id: number) {
    if (!id) {
      throw new Error("Product id required");
    }

    const { data } = await fakeStoreApi.get(`/products/${id}`);

    if (!data) {
      throw new Error("Product not found");
    }

    const { title, description, price, image } = data;
    return {
      id,
      title,
      description,
      price,
      image
    };
  }
}

export default new GetProductUseCase;