const { Sequelize } = require('@sequelize/core');


const sequelize = new Sequelize('messagedb', 'postgres', 'tetradka2', {
    host: 'localhost',
    dialect: 'postgres'
});
sequelize.sync();

module.exports = sequelize;
