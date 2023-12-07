import * as jsonfile from "jsonfile"

class Product{
  id:number;
  name:string;
}

class ProductCollection{
  products:Product[] = []

  async getAll(){
    /*return jsonfile.readFile("./products.json").then((productos)=>{
      return productos
    })*/

    const res = await jsonfile.readFile("./products.json")
    this.products = res
    return res
  }

  async getById(id:number){
    const productos = await this.getAll()
    const resultado = productos.find((producto)=>{
      return producto.id == id
    })
    return resultado
  }
}

export{Product, ProductCollection}