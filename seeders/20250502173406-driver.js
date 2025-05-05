'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('driver', [
      {
        first_name: 'Michael',
        last_name: 'Johnson',
        license_number: 'DL12345678',
        createdAt: new Date(),
        updatedAt: new Date(),
        fk_card_id: 1
      },
      {
        first_name: 'Sarah',
        last_name: 'Williams',
        license_number: 'DL87654321',
        createdAt: new Date(),
        updatedAt: new Date(),
        fk_card_id: 2
      },
      {
        first_name: 'Robert',
        last_name: 'Davis',
        license_number: 'DL13579246',
        createdAt: new Date(),
        updatedAt: new Date(),
        fk_card_id: 3
      },
      {
        first_name: 'Jennifer',
        last_name: 'Martinez',
        license_number: 'DL24681357',
        createdAt: new Date(),
        updatedAt: new Date(),
        fk_card_id: null
      },
      {
        first_name: 'David',
        last_name: 'Anderson',
        license_number: 'DL98765432',
        createdAt: new Date(),
        updatedAt: new Date(),
        fk_card_id: null
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
  }
};
