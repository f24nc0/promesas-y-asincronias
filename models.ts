import * as jsonfile from "jsonfile"

class Product{
  id:number;
  name:string;
}

class ProductCollection{
  products:Product[] = []

  getAll(){
    return jsonfile.readFile("./products.json").then((productos)=>{
      return productos
    })
  }

  getById(id:number){
    return this.getAll().then((productos)=>{
      const resultado = productos.find((producto)=>{
        return producto.id == id
      })
      return resultado
    })
  }
}

export{Product, ProductCollection}