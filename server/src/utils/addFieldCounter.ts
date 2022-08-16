import { ICart } from './../interfaces/cart.interface';
import { IProduct } from './../interfaces/product.interface';

const addFieldCounter = (products: IProduct[], cartDB:ICart[] ) => {
    const productsArrayWithCounter = products.map(product => {
        const counterProductId = cartDB.filter(cart => cart.product_id === product.id)[0].counter
        if (cartDB.find(cart => cart.product_id === product.id)) {
            return {
                ...product,
                counter: counterProductId,
            }
        }
    })
    return productsArrayWithCounter
}

export default addFieldCounter