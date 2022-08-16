import { ICartProduct } from '@redux/slices/cart/cart.interface'

const calcTotalPrice = (items: ICartProduct[]) => {
    return items.reduce((sum, obj) => Number(obj.price) * Number(obj.counter) + Number(sum), 0)
}

export default calcTotalPrice
