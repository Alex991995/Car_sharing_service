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
        fuel_level: 20.00,
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
        fuel_level: 50.00,
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
        fuel_level: 20.00,
        mileage: 80000,
        status: 'Free',
        geo_latitude: 53.9,
        geo_longitude: 27.56,
        createdAt: new Date(),
        updatedAt: new Date(),
        fk_run_id: 3,
      },
      {
        registration_number: 'CBC1235',
        brand: 'Toyota',
        vin: 'JT4RN01P1K7020837',
        model: 'Corolla',
        production_date: '2020-05-15',
        fuel_level: 75.00, 
        mileage: 12500,
        status: 'Reserved',
        geo_latitude: 40.7128,
        geo_longitude: -74.0060,
        fk_run_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registration_number: 'XYZ789',
        brand: 'Honda',
        vin: '2HGFC2F50KH702083',
        model: 'Civic',
        production_date: '2019-11-22',
        fuel_level: 10.00,
        mileage: 18700,
        status: 'Reserved',
        geo_latitude: 34.0522,
        geo_longitude: -118.2437,
        fk_run_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registration_number: 'TRTE89',
        brand: 'BMW',
        vin: '3CFRC2F50KH702124',
        model: 'X5',
        production_date: '2018-02-20',
        fuel_level: 10.00,
        mileage: 18700,
        status: 'In use',
        geo_latitude: 34.0522,
        geo_longitude: -118.2437,
        fk_run_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // {
      //   registration_number: 'DEF456',
      //   brand: 'Ford',
      //   vin: '1FA6P8TH6K5103085',
      //   model: 'Focus',
      //   production_date: '2021-03-10',
      //   fuel_level: 90.00, // Changed from 0.90 to 90.00
      //   mileage: 8500,
      //   status: 'In use',
      //   geo_latitude: 41.8781,
      //   geo_longitude: -87.6298,
      //   fk_run_id: 3,
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   registration_number: 'GHI789',
      //   brand: 'Tesla',
      //   vin: '5YJ3E1EB0KF123456',
      //   model: 'Model 3',
      //   production_date: '2022-01-05',
      //   fuel_level: 65.00, // Changed from 0.65 to 65.00
      //   mileage: 3200,
      //   status: 'Free',
      //   geo_latitude: 37.7749,
      //   geo_longitude: -122.4194,
      //   fk_run_id: null,
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   registration_number: 'JKL012',
      //   brand: 'BMW',
      //   vin: 'WBA8E5C58JEU30857',
      //   model: 'X5',
      //   production_date: '2018-07-30',
      //   fuel_level: 25.00, // Changed from 0.25 to 25.00
      //   mileage: 45200,
      //   status: 'In Service',
      //   geo_latitude: 39.9526,
      //   geo_longitude: -75.1652,
      //   fk_run_id: null,
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   registration_number: 'MNO345',
      //   brand: 'Hyundai',
      //   vin: 'KMHTC6AD2PU123456',
      //   model: 'Tucson',
      //   production_date: '2021-09-14',
      //   fuel_level: 80.00, // Changed from 0.80 to 80.00
      //   mileage: 11200,
      //   status: 'Unavailable',
      //   geo_latitude: 29.7604,
      //   geo_longitude: -95.3698,
      //   fk_run_id: null,
      //   created_at: new Date(),
      //   updated_at: new Date()
      // },
      // {
      //   registration_number: 'PQR678',
      //   brand: 'Volkswagen',
      //   vin: '3VW2K7AJ5KM123456',
      //   model: 'Golf',
      //   production_date: '2020-12-03',
      //   fuel_level: 40.00, // Changed from 0.40 to 40.00
      //   mileage: 21500,
      //   status: 'Free',
      //   geo_latitude: 47.6062,
      //   geo_longitude: -122.3321,
      //   fk_run_id: 4,
      //   created_at: new Date(),
      //   updated_at: new Date()
      // }
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

// module.exports = {
//   up: async (queryInterface) => {
//     await queryInterface.bulkInsert('Vehicles', [
//       {
//         registration_number: 'ABC123',
//         brand: 'Toyota',
//         vin: 'JT4RN01P1K7020837',
//         model: 'Corolla',
//         production_date: '2020-05-15',
//         fuel_level: 75.00, // Changed from 0.75 to 75.00
//         mileage: 12500,
//         status: 'Free',
//         geo_latitude: 40.7128,
//         geo_longitude: -74.0060,
//         fk_run_id: 1,
//         created_at: new Date(),
//         updated_at: new Date()
//       },
//       {
//         registration_number: 'XYZ789',
//         brand: 'Honda',
//         vin: '2HGFC2F50KH702083',
//         model: 'Civic',
//         production_date: '2019-11-22',
//         fuel_level: 50.00, // Changed from 0.50 to 50.00
//         mileage: 18700,
//         status: 'Reserved',
//         geo_latitude: 34.0522,
//         geo_longitude: -118.2437,
//         fk_run_id: 2,
//         created_at: new Date(),
//         updated_at: new Date()
//       },
//       {
//         registration_number: 'DEF456',
//         brand: 'Ford',
//         vin: '1FA6P8TH6K5103085',
//         model: 'Focus',
//         production_date: '2021-03-10',
//         fuel_level: 90.00, // Changed from 0.90 to 90.00
//         mileage: 8500,
//         status: 'In use',
//         geo_latitude: 41.8781,
//         geo_longitude: -87.6298,
//         fk_run_id: 3,
//         created_at: new Date(),
//         updated_at: new Date()
//       },
//       {
//         registration_number: 'GHI789',
//         brand: 'Tesla',
//         vin: '5YJ3E1EB0KF123456',
//         model: 'Model 3',
//         production_date: '2022-01-05',
//         fuel_level: 65.00, // Changed from 0.65 to 65.00
//         mileage: 3200,
//         status: 'Free',
//         geo_latitude: 37.7749,
//         geo_longitude: -122.4194,
//         fk_run_id: null,
//         created_at: new Date(),
//         updated_at: new Date()
//       },
//       {
//         registration_number: 'JKL012',
//         brand: 'BMW',
//         vin: 'WBA8E5C58JEU30857',
//         model: 'X5',
//         production_date: '2018-07-30',
//         fuel_level: 25.00, // Changed from 0.25 to 25.00
//         mileage: 45200,
//         status: 'In Service',
//         geo_latitude: 39.9526,
//         geo_longitude: -75.1652,
//         fk_run_id: null,
//         created_at: new Date(),
//         updated_at: new Date()
//       },
//       {
//         registration_number: 'MNO345',
//         brand: 'Hyundai',
//         vin: 'KMHTC6AD2PU123456',
//         model: 'Tucson',
//         production_date: '2021-09-14',
//         fuel_level: 80.00, // Changed from 0.80 to 80.00
//         mileage: 11200,
//         status: 'Unavailable',
//         geo_latitude: 29.7604,
//         geo_longitude: -95.3698,
//         fk_run_id: null,
//         created_at: new Date(),
//         updated_at: new Date()
//       },
//       {
//         registration_number: 'PQR678',
//         brand: 'Volkswagen',
//         vin: '3VW2K7AJ5KM123456',
//         model: 'Golf',
//         production_date: '2020-12-03',
//         fuel_level: 40.00, // Changed from 0.40 to 40.00
//         mileage: 21500,
//         status: 'Free',
//         geo_latitude: 47.6062,
//         geo_longitude: -122.3321,
//         fk_run_id: 4,
//         created_at: new Date(),
//         updated_at: new Date()
//       }
//     ], {});
//   },

//   down: async (queryInterface) => {
//     await queryInterface.bulkDelete('Vehicles', null, {});
//   }
// };