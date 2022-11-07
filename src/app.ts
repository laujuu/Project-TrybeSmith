import express from 'express';
import httpErrorMiddleware from './middlewares/http.error.middleware';
import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/user.routes';
import ordersRoutes from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/orders', ordersRoutes);

app.use(httpErrorMiddleware);

export default app;
