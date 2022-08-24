export interface IProductNoImage {
    title:string,
    price:number,
    gramms:number
}
export interface IProduct extends IProductNoImage{
    img:string,
    id: number,
}