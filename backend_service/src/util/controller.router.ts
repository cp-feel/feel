import Router from 'koa-router';

export default class RouterController {
    router = new Router();

    constructor(prefix?:string) {
        if(prefix){
            this.router = new Router({prefix});
        }
    }

    getRouter = () => {
        return this.router;
    }

    append = (method:string = 'get', path:string, func:[...any]) => {
        switch (method){
            case 'get':
                this.router.get(path, ...func);
                break;
            case 'post':
                this.router.post(path, ...func);
                break;
            case 'put':
                this.router.put(path, ...func);
                break;
            case 'delete':
                this.router.delete(path, ...func);
                break;
            default:
                this.router.all(path, ...func);
        }
    }
};