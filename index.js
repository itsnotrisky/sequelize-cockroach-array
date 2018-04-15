const Sequelize = require('sequelize-cockroachdb')

var sequelize = new Sequelize('playground', 'root', '',
  {
    host: '127.0.0.1',
    port: 26257,
    dialect: 'postgresql',
  }
)

var Bar = sequelize.define('bar', {
  array: Sequelize.ARRAY(Sequelize.STRING)
})

Bar
  .create({ array: ['Item 1'] })
  .then(r => console.log(r))
  .catch(e => console.error(e))
