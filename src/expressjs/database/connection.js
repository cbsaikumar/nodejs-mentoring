import Sequelize from 'sequelize';
import {development} from '../config/config.json';

const {dialect, username, password, host, port, dbname} = development;
export const sequelize = new Sequelize(`${dialect}://${username}:${password}@${host}:${port}/${dbname}`);