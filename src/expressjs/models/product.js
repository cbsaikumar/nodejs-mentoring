import Sequelize from 'sequelize';
import { sequelize } from '../database/connection';

export const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
       type: Sequelize.STRING,
       allowNull: false
    },
    brand: Sequelize.STRING,
    model: Sequelize.STRING,
    price: Sequelize.NUMBER,
    reviews: Sequelize.JSON,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});