const { sequelize } =  require('./models') ;
const express =  require('express') ;
const sequelizeErd = require('sequelize-erd');

const app = express()
app.use(express.json())


app.listen({port: 5000}, main)

// (async () => {
//   const svg = await sequelizeErd({ source: sequelize });
//   writeFileSync('./erd.svg', svg);
// })();

async function main() {
  console.log('serves is runnig on port'+ 5000)
  await sequelize.sync({ force: true })
  console.log('database is sync')
}
main()
