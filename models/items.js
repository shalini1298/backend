'use strict';
module.exports = (sequelize, DataTypes) => {
  const items = sequelize.define('items', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    item : DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  return items;
};