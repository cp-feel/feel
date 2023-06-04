import {IError} from "../model/global.interfacce";

export class CustomError extends Error {
    code = '';
    constructor(error: IError) {
        super(`[${error.code}][${error.name}]${error.message}`);
        this.name = error.name;
        this.code = error.code;
    }
}

export const throwException = (error: IError) => {
    throw new CustomError(error);
}