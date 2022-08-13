import { IProduct } from '../product/products.interface'

export interface ICartState {
  loading: boolean;
  error: null | string;
  totalPrice:number ;
  cart: IProduct[];
}
export interface ICartUpdate {
  Cart?: IProduct[];
}

export interface ICartUserDelete extends ICartUpdate {
  productId: string;
}
export interface ICartUserAdd extends ICartUserDelete {
  products: IProduct[];
}
