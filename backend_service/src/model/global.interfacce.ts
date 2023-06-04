export interface IResponse<T> {
    code: string;
    msg: string;
    data?:T;
}

export interface IError {
    code: string;
    name: string;
    message: string;
}