const { sequelize, Car, Driver, Run } = require('./models');
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
    attributes:['first_name', 'last_name', 'license_number'],
    include: [
      {
        model: Run,
        attributes:[],
        include: [
          {
            model: Car,
            where: {
              status: 'Reserved',
            },
            attributes:['vin', 'geo_latitude', 'geo_longitude'],
          },
        ],
      },
    ],
    raw: true
  });


  if (drivers.length) {
    res.json(drivers);
  } else {
    res.status(404).json({ data: 'No data' });
  }
});


app.listen(port, main);

async function main() {
  console.log('Runs http://localhost:3000');
  await sequelize.sync();
  console.log('database is sync');
}


// select car.vin, car.geo_latitude, car.geo_longitude,
// driver.first_name, driver.last_name, driver.license_number
// from driver
// Join run on run.fk_driver_id = driver.driver_id
// Join car on car.fk_run_id = run.run_id
// where fk_card_id is null and car.status = 'Reserved'
