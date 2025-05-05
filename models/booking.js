'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate({ Car, Run }) {
      this.belongsTo(Car, { foreignKey: 'fk_car_id' });
      this.belongsTo(Run, { foreignKey: 'fk_run_id' });
    }
  }
  Booking.init(
    {
      booking_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      finish_mileage: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      finish_fuel_level: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 0,
          max: 100,
        },
      },
    },
    {
      freezeTableName: 'booking',
      sequelize,
      modelName: 'Booking',
      tableName: 'booking',
    },
  );
  return Booking;
};
