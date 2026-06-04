import express from 'express';
import 'dotenv/config';
import router from './routes/routes.products.js';
const server = express();
server.use(express.json());
server.use(router);
server.listen(process.env.PORT);
