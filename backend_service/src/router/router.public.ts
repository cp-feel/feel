import { Context } from 'koa';
import RouterController from "../util/controller.router";
import {signin, signup, socialSignup} from "../service/public/user";

class PublicController extends RouterController {
    constructor() {
        super('/api/v1/public');

        this.append('post', '/signin', [ signin ]);
        this.append('post', '/signup', [ signup ]);
        this.append('post', '/signin/social', [socialSignup, signin]);
        this.append('post', '/signout', []);
    }
}

export const publicController = new PublicController();