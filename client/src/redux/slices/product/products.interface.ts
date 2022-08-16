export interface IProduct {
    id:number,
    title: string,
    price: number,
    gramms: number,
    img:string,
}

export interface IProductsState {
    loading: boolean,
    error: null | string,
    products: IProduct[],
}
