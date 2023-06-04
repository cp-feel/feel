import {Context} from "koa";
import {CustomError, throwException} from "../../util/error";
import {makeError, makeResponse} from "../../util/response";

export const signin = async (ctx:Context) => {
    try {
        //makeResponse(ctx, result);
        throwException({code: '200', name:'Error', message: 'hi'})
    } catch (e:any) {
        console.log(e);
        makeError(ctx, e);
    }
}

export const signup = async (ctx:Context) => {
    try {
        //makeResponse(ctx, result);
        throwException({code: '200', name:'Error', message: 'hello'})
    } catch (e:any) {
        makeError(ctx, e);
    }
}

export const socialSignup = async (ctx:Context, next?:any)=> {
    try {
        //makeResponse(ctx, result);
        // throwException({code: '200', name:'Error', message: 'social'})
        if(next){
            return next();
        }
    } catch (e:any) {
        makeError(ctx, e);
    }
}