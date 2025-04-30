'use strict';
const {
  Model
} = require('sequelize');
const Run = require('./run');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Run}) {
      this.hasMany(Run, {foreignKey: 'fk_car_id'})
    }
  }
  Car.init({
    car_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    registration_number: {
      allowNull: false,
      type: DataTypes.STRING
    },
    brand: {
      allowNull: false,
      type: DataTypes.STRING
    },
    vin: {
      allowNull: false,
      type: DataTypes.STRING
    },
    model: {
      allowNull: false,
      type: DataTypes.STRING
    },
    production_date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    fuel_level: {
      allowNull: false,
      type: DataTypes.STRING
    },
    mileage: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    geo_latitude: DataTypes.DECIMAL(9,6),
    geo_longitude: DataTypes.DECIMAL(9,6),
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE
    },

   
  }, {
    freezeTableName: 'car',
    sequelize,
    modelName: 'Car',
    tableName: 'car'
  });
  return Car;
};