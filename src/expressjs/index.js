const { log } = console;
import app from './app';

// app.get('/api', console.log('Hi'));

const port = process.env.PORT || 8080;

app.listen(port, () => log(`App listening on port ${port}!`));