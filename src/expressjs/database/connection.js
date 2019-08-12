import Sequelize from 'sequelize';
import * as dbConfig from '../config/db';

const {dialect, username, password, host, port, dbname} = dbConfig;
export const sequelize = new Sequelize(`${dialect}://${username}:${password}@${host}:${port}/${dbname}`);