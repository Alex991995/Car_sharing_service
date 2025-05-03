'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('car', {
      car_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      registration_number: {
        allowNull: false,
        type: Sequelize.STRING
      },
      brand: {
        allowNull: false,
        type: Sequelize.STRING
      },
      vin: {
        allowNull: false,
        type: Sequelize.STRING
      },
      model: {
        allowNull: false,
        type: Sequelize.STRING
      },
      production_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      fuel_level: {
        allowNull: false,
        type: Sequelize.STRING
      },
      mileage: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      geo_latitude: Sequelize.DECIMAL(9,6),
      geo_longitude: Sequelize.DECIMAL(9,6),
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },

      current_run_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });

    

   
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('car');
  }
};

