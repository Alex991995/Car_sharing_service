'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Credit_card extends Model {
    
    static associate({Driver}) {
      this.hasOne(Driver, { foreignKey: 'fk_card_id' });
    }
  }
  Credit_card.init(
    {
      card_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      card_number: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
          len: [16, 16] 
        }
      },
      card_holder: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      card_valid: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Credit_card',
      freezeTableName: 'credit_card',
      tableName: 'credit_card'
    },
  );
  return Credit_card;
};
