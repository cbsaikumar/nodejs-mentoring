const { log } = console;
import app from './app';
// import {sequelize} from './database/connection';

// app.get('/api', console.log('Hi'));

// sequelize.sync()
//     .then(() => {
//         const port = process.env.PORT || 8081;
//         app.listen(port, () => log(`App listening on port ${port}!`));
//     })
//     .catch(error => log(error));

const port = process.env.PORT || 8081;
app.listen(port, () => log(`App listening on port ${port}!`));