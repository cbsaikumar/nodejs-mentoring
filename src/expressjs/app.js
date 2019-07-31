import express from 'express';
import { cookieParser } from './middlewares/cookieParser';
import { queryParser } from './middlewares/queryParser';
import router from './routes/routes';

const app = express();

app.use(cookieParser());
app.use(queryParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.get('*', (req, res)=> res.send('Hello, please use either /api/users or /api/products routes'));

export default app;