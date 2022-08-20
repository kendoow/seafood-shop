import { IProduct } from '../product/products.interface'

export interface IOrderProduct extends IProduct {
    counter: number,
}

export interface IOrder {
  Order?: IOrderProduct[];
  counter: number;
  productId:number;
}

export interface ICartUserAdd extends IOrder {
  products: IOrderProduct[];
}
export interface IOrderState {
  loading: boolean;
  error: null | string;
  totalPrice:number;
  order: IOrderProduct[];
}
