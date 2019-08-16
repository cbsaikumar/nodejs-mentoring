'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    price: DataTypes.INTEGER,
    reviews: DataTypes.JSON
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};