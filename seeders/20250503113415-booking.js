'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('booking', [
      {
        finish_mileage: 12587.5,
        finish_fuel_level: 65.2,
        fk_car_id: 1,
        fk_run_id:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        finish_mileage: 13345.0,
        finish_fuel_level: 42.8,
        fk_car_id: 2,
        fk_run_id:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        finish_mileage: 14230.3,
        finish_fuel_level: 78.5,
        fk_car_id: 3,
        fk_run_id:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        finish_mileage: 15420.7,
        finish_fuel_level: 15.0,
        fk_car_id: 1,
        fk_run_id:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        finish_mileage: 16315.2,
        finish_fuel_level: 90.5,
        fk_car_id: 2,
        fk_run_id:5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
