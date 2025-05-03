'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('car', [
      {
        registration_number: 'ABC1234',
        brand: 'Toyota',
        vin: 'JT2BF22K3W0123456',
        model: 'Corolla',
        production_date: '2020-05-15',
        fuel_level: 0.15,
        mileage: 45000,
        status: 'In use',
        geo_latitude: 53.9001,
        geo_longitude: 27.5667,
        createdAt: new Date(),
        updatedAt: new Date(),
        fk_run_id: 1,
      },
      {
        registration_number: 'XYZ9876',
        brand: 'Honda',
        vin: 'JHMCB7650LC012345',
        model: 'Civic',
        production_date: '2019-03-10',
        fuel_level: 0.5,
        mileage: 35000,
        status: 'Reserved',
        geo_latitude: 53.9075,
        geo_longitude: 27.5625,
        createdAt: new Date(),
        updatedAt: new Date(),
        fk_run_id: 2,
      },
      {
        registration_number: 'POPULAR1',
        brand: 'Volkswagen',
        vin: 'WVWZZZ1JZ3W123456',
        model: 'Golf',
        production_date: '2018-07-15',
        fuel_level: 0.7,
        mileage: 80000,
        status: 'Free',
        geo_latitude: 53.9,
        geo_longitude: 27.56,
        createdAt: new Date(),
        updatedAt: new Date(),
        fk_run_id: 3,
      },
    ]);
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
