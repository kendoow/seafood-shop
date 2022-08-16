export interface IProductNoImage {
    title:string,
    price:string,
    gramms:string
}
export interface IProduct extends IProductNoImage{
    img:string,
    id: number,
}