import { uuid } from "uuidv4";

export class Product{

  public readonly id!: string;
  public title: string | undefined; 
  public descrption: string | undefined;
  public price: number | undefined;
  public image: string | undefined;

  constructor(
    props: Omit<Product, "id">, id?: string  
  ){
    Object.assign(this, props);

    if(!id){
      this.id= uuid();
    }
  }
}
