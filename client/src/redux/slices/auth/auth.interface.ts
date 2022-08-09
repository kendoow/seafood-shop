export interface IUser {
    name:string,
    password: string,
    email: string,
    id: string
}

export interface IUserLogin {
    email: string,
    password: string,
}

export interface IUserRegistration extends IUserLogin{
    name:string
}

export interface IAuthState {
    loading: boolean,
    error: null | string,
    user: IUser,
    isAuth: boolean,
}

export interface IAuthResponse {
    accessToken: string,
    refreshToken: string,
    user: IUser,
}