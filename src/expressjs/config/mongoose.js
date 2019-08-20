import { mongoose } from 'mongoose';
import { mongo } from '../config/conf';

const {url: mongoUrl} = mongo;

mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on('error', (err) => console.info(`error in connecting to MongoDB: ${err.message}`));
db.on('open', () => console.info('MongoDB connection Successful'));

// export { mongoose };
module.exports = mongoose;