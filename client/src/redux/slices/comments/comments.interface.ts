export interface IComment {
    id:string,
    title: string,
    description:string,
    img:string,
}

export interface ICommentState {
    loading: boolean,
    error: null | string,
    comments: IComment[]
}
