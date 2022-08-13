import { IProduct } from '../product/products.interface'

export interface IFavoriteState {
  loading: boolean;
  error: null | string;
  favorite: IProduct[];
}

export interface IFavoriteUpdate {
  favorite?: IProduct[];
}

export interface IFavoriteUserDelete extends IFavoriteUpdate {
  productId: string;
}
export interface IFavoriteUserAdd extends IFavoriteUserDelete {
  products: IProduct[];
}
