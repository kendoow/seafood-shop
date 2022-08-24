import { IProduct } from '../product/products.interface'

export interface IOrderProduct extends IProduct {
    counter: number,
}

export interface IOrder {
  products: IOrderProduct[];
  date:string;
  totalPrice:number;
  deliverDate:string;
}

export interface ICartUserAdd extends IOrder {
  products: IOrderProduct[];
}
export interface IOrderState {
  loading: boolean;
  error: null | string;
  order: IOrder;
}
