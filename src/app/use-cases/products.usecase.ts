import { fakeStoreApi } from "../../infra/services/fakeStore.api";

class ProductUseCase{
  constructor(){}

  async execute(){
    const { data } = await fakeStoreApi.get("/products");

    if(!data){
       throw new Error("Don't have product data");
    }
                                                                                                        
    return data.map( ({ id, title, description, price, image }) => ({
      id,
      title,
      description,
      price,
      image
    }));
  }
}

export default new ProductUseCase;