const { sequelize } =  require('./models') ;
// const express =  require('express') ;

// const app = express()
// app.use(express.json())


// app.listen({port: 5000}, main)

async function main() {
  // console.log('serves is runnig on port'+ 5000)
  await sequelize.authenticate();
  // console.log('database is sync')
}
main()
