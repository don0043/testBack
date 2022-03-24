const { Sequelize } = require('@sequelize/core');


const sequelize = new Sequelize('dfun02src77lu6', 'hyyrjyhumhlcri', 'eafbf6af86970da4121dfc91fb640566de7b87508259f8fc25faf5872b829dba', {
    host: 'ec2-63-32-248-14.eu-west-1.compute.amazonaws.com',
    dialect: 'postgres',
    dialectOptions:{
        ssl: {
            require: true,
            rejectUnauthorized: false
        }}
});
sequelize.sync();


module.exports = sequelize;
