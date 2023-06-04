import {Context} from "koa";
import {IError} from "../model/global.interfacce";

export const makeResponse = (ctx:Context, result:any) => {
    ctx.status = 200;
    ctx.body = result;
    // console.log(ctx.body);
};

export const makeError = (ctx:Context, e:IError) => {
    ctx.status = Number(e.code) ?? 400;
    ctx.body = { code: e.code, message: e.message, result: {} }
    // console.log(ctx.body);
}