'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Run, Booking }) {
      this.belongsTo(Run, { foreignKey: 'fk_run_id' });
      this.hasMany(Booking, {foreignKey: 'fk_car_id'})

    }
  }
  Car.fi
  Car.init(
    {
      car_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      registration_number: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      brand: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      vin: {
        allowNull: false,
        type: DataTypes.STRING(17),
        validate: {
          len: [17, 17],
        },
      },
      model: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      production_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      fuel_level: {
        type: DataTypes.DECIMAL(5,2),
        allowNull: false,
        validate: {
          min: 0,
          max: 1,
        },
      },
      mileage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ['Free', 'Reserved', 'In use', 'Unavailable', 'In Service'],
        defaultValue: 'Free',
      },
      geo_latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: -90,
          max: 90,
        },
      },
      geo_longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: -180,
          max: 180,
        },
      },

    },
    {
      freezeTableName: 'car',
      sequelize,
      modelName: 'Car',
      tableName: 'car',
    },
  );
  return Car;
};