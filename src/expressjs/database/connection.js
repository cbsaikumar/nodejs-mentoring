import Sequelize from 'sequelize';
import {development} from '../config/config.json';
import Product from '../models/product';
import User from '../models/user';

console.log('dev', development);
const {dialect, username, password, host, port, dbname} = development;
export const sequelize = new Sequelize(`${dialect}://${username}:${password}@${host}:${port}/${dbname}`);
export const models = {
    Product: Product(sequelize, Sequelize),
    User: User(sequelize, Sequelize)
}