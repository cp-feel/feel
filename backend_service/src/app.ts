import Koa from 'koa';
import Router from 'koa-router';
// import bodyParser from 'koa-bodyparser';
// import cors from '@koa/cors';
import koaBody from "koa-body";
// import { KoaApi, withKoaApi } from "nextjs-koa-api";
const cors = require("@koa/cors");

const app = new Koa();
const router = new Router();

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
app.use(router.routes())
app.use(router.allowedMethods());
app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});