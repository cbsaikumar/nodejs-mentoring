import express from 'express';
import bodyParser from 'body-parser';
import { cookieParser } from './middlewares/cookieParser';
import { queryParser } from './middlewares/queryParser';
import userRouter from './routes/users/'
import productRouter from './routes/products/'

const app = express();

app.use(cookieParser());
app.use(queryParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('*', (req, res)=> res.send('Hello, please use either /api/users or /api/products routes'));

export default app;