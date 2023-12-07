import { Product, ProductCollection } from "./models"

export type ProductControllerOptions = {
  action?: "search" | null;
  params: any;
};

class ProductController{
  products: ProductCollection

  constructor(){
    const coll = new ProductCollection
    this.products = coll
  }
  async processOptions(option:ProductControllerOptions){
    if (option.action == "search"&& typeof option.params == "number"){
  /*     return this.products.getById(option.params).then((res)=>{
        return res
      })*/
      const respuesta = await this.products.getById(option.params)
      return respuesta

    } else {
  /*    return this.products.getAll().then((res)=>{
        return res
      })*/
      const respuesta = await this.products.getAll()
      return respuesta 
    }
  }
}

export {ProductController}