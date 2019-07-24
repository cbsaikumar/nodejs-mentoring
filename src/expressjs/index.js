import express from './app';
const { log } = console;
import {cookieParser} from './middlewares/cookie-parser';
import {queryParser} from './middlewares/queryParser';

const app = express();
const router = express.Router();

app.get('/', (req, res)=> console.log('Hello World'));
const port = process.env.PORT || 8080;
app.use(cookieParser);
app.use(queryParser);


app.listen(port, log(`App listening on port ${port}!`));