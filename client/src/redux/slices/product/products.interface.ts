export interface IProduct {
    id:number,
    title: string,
    price: string,
    gramms: string,
    img:string,
}

export interface IProductsState {
    loading: boolean,
    error: null | string,
    products: IProduct[],
}
