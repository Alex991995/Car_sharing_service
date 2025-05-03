'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'run',
      [
        {
          start_date: new Date('2023-05-01T08:00:00'),
          start_fuel_level: '3/4',
          start_mileage: 12500,
          fk_driver_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          start_date: new Date('2023-05-02T09:15:00'),
          start_fuel_level: 'Full',
          start_mileage: 13280,
          fk_driver_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          start_date: new Date('2023-05-03T14:30:00'),
          start_fuel_level: '1/2',
          start_mileage: 14120,
          fk_driver_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          start_date: new Date('2023-05-04T07:45:00'),
          start_fuel_level: '1/4',
          start_mileage: 15345,
          fk_driver_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          start_date: new Date('2023-05-05T12:00:00'),
          start_fuel_level: '3/4',
          start_mileage: 16200,
          fk_driver_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
