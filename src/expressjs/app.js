import express from 'express';
import passport from 'passport';
import { cookieParser } from './middlewares/cookieParser';
import { queryParser } from './middlewares/queryParser';
import router from './routes/routes';
import session from 'express-session';

const app = express();

app.use(cookieParser());
app.use(queryParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: '343ji43j4n3jn4jk3n',
    resave: true,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', router);

app.get('*', (req, res)=> res.send('Hello, please use either /api/users or /api/products routes'));

export default app;