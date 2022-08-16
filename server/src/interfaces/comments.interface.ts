export interface ICommentNoImage {
    title:string,
    description:string,
}
export interface IComment extends ICommentNoImage{
    img:string,
    id: number
}