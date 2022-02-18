import { Router } from 'express';

const apiRouter = Router();

import cartRouter from './cart.router.js';
import productsRouter from './products.router.js';
import userRouter from './user.router.js';
import messagesRouter from './messages.router.js'
import serverRouter from './server.router.js'

apiRouter
    .use('/carts', cartRouter)
    .use('/products', productsRouter)
    .use('/user', userRouter)
    .use('/messages', messagesRouter)
    .use('/server', serverRouter);

export default apiRouter