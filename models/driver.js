'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    
    static associate({Credit_card, Run}) {
      this.belongsTo(Credit_card, { foreignKey: 'fk_card_id' });
      this.hasMany(Run, { foreignKey: 'fk_driver_id' });

    }
  }

 
  Driver.init({
    driver_id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    first_name:{
      type: DataTypes.STRING,
      allowNull: false 
    }, 
    last_name: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    license_number: {
      type: DataTypes.STRING(20),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Driver',
    freezeTableName: 'driver',
    tableName: 'driver'
  });
  return Driver;
};