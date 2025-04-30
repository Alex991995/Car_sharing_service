'use strict';
const {
  Model
} = require('sequelize');
const Car = require('./car');
module.exports = (sequelize, DataTypes) => {
  class Run extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Car}) {
      this.belongsTo(Car, {foreignKey: 'fk_car_id'})
    }
    
  }
  Run.init({
    run_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    start_date: {
      type: DataTypes.DATE
    },
    start_fuel_level:{
      type: DataTypes.STRING
    },
    start_mileage: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    freezeTableName: 'run',
    sequelize,
    modelName: 'Run',
    tableName: 'run'
  });
  return Run;
};