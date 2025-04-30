'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('run', {
      run_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      start_date: {
        type: Sequelize.DATE
      },
      start_fuel_level:{
        type: Sequelize.STRING
      },
      start_mileage: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      fk_car_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      }
    }); 
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('run');
  }
};
