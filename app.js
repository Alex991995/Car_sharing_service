const { sequelize } =  require('./models') ;
const express =  require('express') ;
const sequelizeErd = require('sequelize-erd');

const app = express()
const port = 3000
app.use(express.json())


app.listen(port, main)

// (async () => {
//   const svg = await sequelizeErd({ source: sequelize });
//   writeFileSync('./erd.svg', svg);
// })();



async function main() {
  // await sequelize.sync({ force: true });
  await sequelize.sync()

  console.log('database is sync')
}

