const { sequelize, Car, Driver, Run, Booking } = require('./models');
const express = require('express');
const { Op } = require('sequelize');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/get1', async (req, res) => {
  const cars = await Car.findAll({
    where: {
      status: 'In use',
      fuel_level: {
        [Op.lt]: 25.0,
      },
    },
  });

  if (cars.length) {
    res.json(cars);
  } else {
    res.status(404).json({ data: 'No users' });
  }
});

app.get('/get2', async (req, res) => {
  const drivers = await Driver.findAll({
    where: {
      fk_card_id: null,
    },
    attributes: ['first_name', 'last_name', 'license_number'],
    include: [
      {
        model: Run,
        attributes: [],
        include: [
          {
            model: Car,
            where: {
              status: 'Reserved',
            },
            attributes: ['vin', 'geo_latitude', 'geo_longitude'],
          },
        ],
      },
    ],
    raw: true,
  });

  if (drivers.length) {
    res.json(drivers);
  } else {
    res.status(404).json({ data: 'No data' });
  }
});

app.post('/post1', async (req, res) => {
  try {
    await Car.create({
      registration_number: 'DEF456',
      brand: 'Ford',
      vin: '1FA6P8TH6K5103085',
      model: 'Focus',
      production_date: '2021-03-10',
      fuel_level: 45.0,
      mileage: 8500,
      status: 'In use',
      geo_latitude: 41.8781,
      geo_longitude: -87.6298,
      fk_run_id: 7,
      created_at: new Date(),
      updated_at: new Date(),
    });
    res.status(200).json({ data: 'Car was created' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ data: 'Car was not created' });
  }
});

app.put('/put1', async (req, res) => {
  try {
    await Car.update(
      { status: 'In Service' },
      {
        where: {
          [Op.or]: [
            {
              production_date: {
                [Op.lt]: '01/01/2017',
              },
            },
            {
              mileage: {
                [Op.gte]: 100000,
              },
            },
          ],
        },
      },
    );
    res.status(200).json({ data: 'Car was updated' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ data: 'Car was not updated' });
  }
});

app.put('/put2', async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      attributes: ['fk_car_id'],
      group: 'fk_car_id',
      having: sequelize.where(sequelize.fn('COUNT', 'fk_car_id'), Op.gt, 2),
    });

    const carIds = bookings.map(b => b.fk_car_id);

    await Car.update(
      { geo_latitude: 53.8882836, geo_longitude: 27.5442615 },
      {
        where: {
          [Op.and]: {
            status: {
              [Op.notIn]: ['Reserved', 'In use'],
            },
            car_id: {
              [Op.in]: carIds,
            },
          },
        },
      },
    );
    res.status(200).json({ data: 'Car was updated' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ data: 'Car was not updated' });
  }
});

app.delete('/delete1', async (req, res) => {
  try {
    await Car.destroy({
      where: {
        vin: 'JT2BF22K3W0123456',
      },
    });

    res.status(204).json({ data: 'Car was deleted' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ data: 'Car was deleted' });
  }
});

app.listen(port, main);

async function main() {
  console.log('Runs http://localhost:3000');
  await sequelize.sync();
  console.log('database is sync');
}
