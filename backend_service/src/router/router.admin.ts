import RouterController from "../util/controller.router";

class AdminController extends RouterController {
    constructor() {
        super('/api/v1/admin');
    }
}

export const adminController = new AdminController();