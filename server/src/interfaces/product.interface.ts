export interface IProductNoImage {
    title:string,
    price:string,
    weigth:string
}
export interface IProduct extends IProductNoImage{
    img:string,
    id:string
}