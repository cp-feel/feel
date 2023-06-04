import RouterController from "../util/controller.router";

class PrivateController extends RouterController {
    constructor() {
        super('/api/v1/private');
    }
}

export const privateController = new PrivateController();