import {useLocalStorage} from "usehooks-ts"

type CARTS = {
    productId: number
    quantity: number
}
const useCart = () =>{
   let [cartlog, setCartlog] = useLocalStorage<CARTS[]>("CARTS", [])
   return new cartsInteraction( cartlog, setCartlog)
}

class cartsInteraction {
    constructor(private cartlog:CARTS[], private setCartlog:(a:CARTS[])=> void) {

    }
    getQuantity(productId:number){
        let searchProduct = this.cartlog.find((x)=>x.productId == productId)
        if(searchProduct == undefined){
            return 0
        } return searchProduct.quantity
    }
    removeItems(){

    }
    increaseQuantity(productId:number){
       let searchProduct = this.cartlog.find((x)=>x.productId == productId)
       if(searchProduct == undefined){
        this.cartlog.push({productId,
            quantity:1})
       } else{
        searchProduct.quantity += 1;
       }
        
        this.setCartlog([...this.cartlog])
    }
    decreaseQuantity(){

    }
}


export default useCart