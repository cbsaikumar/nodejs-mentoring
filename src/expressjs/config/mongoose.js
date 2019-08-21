import mongoose from 'mongoose';

import * as config from './conf';

const {url} = config.mongo;

mongoose.connect(url);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', (err) => console.info(`error in connecting to MongoDB: ${err.message}`));
db.on('open', () => console.info('MongoDB connection Successful'));

export default mongoose;