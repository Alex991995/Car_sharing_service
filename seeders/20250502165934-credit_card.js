'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'credit_card',
      [
        {
          card_number: 4532875112345678,
          card_holder: 'John Smith',
          card_valid: '2025-12-31',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_number: 5512378956781234,
          card_holder: 'Emily Johnson',
          card_valid: '2024-06-30',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_number: 371449635398431,
          card_holder: 'Michael Williams',
          card_valid: '2026-03-31',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_number: 6011112222333444,
          card_holder: 'Sarah Brown',
          card_valid: '2023-09-30',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_number: 5112345678901234,
          card_holder: 'David Miller',
          card_valid: '2027-01-31',
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
