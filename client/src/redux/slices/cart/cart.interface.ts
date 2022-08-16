import { IProduct } from '../product/products.interface'

export interface ICartProduct extends IProduct {
    counter: number,
}

export interface ICart {
  Cart?: ICartProduct[];
  counter: number;
  productId:number;
}

export interface ICartUserAdd extends ICart {
  products: ICartProduct[];
}
export interface ICartState {
  loading: boolean;
  error: null | string;
  totalPrice:number;
  cart: ICartProduct[];
}
