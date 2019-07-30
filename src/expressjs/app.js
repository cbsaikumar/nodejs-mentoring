import express from 'express';
import cookieParser from './middlewares/cookieParser';
import queryParser from './middlewares/queryParser';
import userRouter from './routes/users/'
import productRouter from './routes/products/'

const app = express();

app.use(cookieParser());
app.use(queryParser());
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

export default app;