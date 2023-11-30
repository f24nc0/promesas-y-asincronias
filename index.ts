import { ProductController, ProductControllerOptions } from "./controller"
import * as minimist from "minimist"

function parseaParams(argv):ProductControllerOptions{
  const resultado = minimist(argv)

  return {
    action:resultado.action,
    params:resultado.params
  }
}
function main(){
  const control = new ProductController()
  const args = parseaParams(process.argv.slice(2))

  const impresionRes = control.processOptions(args)
  impresionRes.then((res)=>{
    console.log(res)
  })
  

}


main()