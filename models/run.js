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
    static associate({Car, Driver}) {
      this.hasOne(Car, { foreignKey: 'fk_run_id' });
      this.belongsTo(Driver, { foreignKey: 'fk_driver_id' });

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
    
  }, {
    freezeTableName: 'run',
    sequelize,
    modelName: 'Run',
    tableName: 'run'
  });
  return Run;
};