export interface IProductOrder {
  img: string;
  id: number;
  title: string;
  price: number;
  gramms: number;
  counter: number;
}

export interface IOrder {
  products: IProductOrder[];
  user_id: number;
  date: string;
  total_price: number;
  id: number;
  delivery_date: string;
}
