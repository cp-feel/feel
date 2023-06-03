import { Context } from 'koa';

export default class ExampleController {
    public static async example(ctx: Context): Promise<void> {
        ctx.body = 'This is an example endpoint';
    }
}