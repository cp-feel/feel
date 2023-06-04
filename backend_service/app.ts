import Koa from 'koa';
// import bodyParser from 'koa-bodyparser';
// import cors from '@koa/cors';
import koaBody from "koa-body";
// import { KoaApi, withKoaApi } from "nextjs-koa-api";
const cors = require("@koa/cors");

import {adminController} from "./src/router/router.admin";
import {publicController} from "./src/router/router.public";
import {privateController} from "./src/router/router.private";

const app = new Koa();

// Add body parser middleware
app.use(cors());
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 4096 * 1024 * 1024, // 10MB in bytes
    },
}));
// app.use(bodyParser());

// Start the server
app.use(adminController.getRouter().routes());
app.use(publicController.getRouter().routes());
app.use(privateController.getRouter().routes());
app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});