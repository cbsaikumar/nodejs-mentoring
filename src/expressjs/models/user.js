import Sequelize from 'sequelize';
import { sequelize } from '../database/connection';

export const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
       type: Sequelize.STRING,
       allowNull: false
    },
    age: Sequelize.INTEGER,
    salary: Sequelize.NUMBER,
    email: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});