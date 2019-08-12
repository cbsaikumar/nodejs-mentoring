import Sequelize from 'sequelize';
import { sequelize } from '../database/connection';

export const Users = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
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