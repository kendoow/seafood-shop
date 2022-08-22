export interface IProductOrder {
    id: number,
    counter: number
}

export interface IOrder{
    counter:number,
    products: IProductOrder[],
    user_id:number
}