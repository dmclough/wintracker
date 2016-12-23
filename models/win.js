'use strict';
module.exports = function(sequelize, DataTypes) {
  var win = sequelize.define('win', {
    teamName: DataTypes.STRING,
    wins: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return win;
};