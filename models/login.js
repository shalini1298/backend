'use strict';
module.exports = (sequelize, DataTypes) => {
  const login = sequelize.define('logins', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});



  return login;
};